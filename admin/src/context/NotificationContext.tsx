import {
  createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode,
} from "react";
import {
  loadNotifications, markAllNotificationsRead, markNotificationRead,
  unreadCount as computeUnreadCount, NOTIFICATIONS_EVENT, type AdminNotification,
} from "../data/notificationStorage";
import { apiRequest } from "../lib/apiClient";

const MUTE_KEY = "farmcraft_admin_notif_muted";

type ServerNotification = {
  id: string; type: "product_booking"; order_id: string; order_number: string;
  customer_id: string; message: string; read: boolean; created_at: string;
};

type ServerResponse = {
  items: ServerNotification[];
  unread_count: number;
  product_booking_unread_count: number;
};

interface NotificationContextValue {
  notifications: AdminNotification[];
  unreadCount: number;
  productBookingUnreadCount: number;
  muted: boolean;
  markRead: (id: string) => void;
  markAllRead: () => void;
  markProductNotificationsRead: () => Promise<void>;
  toggleMute: () => void;
}

const NotificationContext = createContext<NotificationContextValue | null>(null);

function playChime(ctx: AudioContext) {
  const now = ctx.currentTime;
  [[880, now], [1108.7, now + 0.11]].forEach(([freq, start]) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(0.14, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.32);
    osc.connect(gain).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 0.34);
  });
}

function mapServer(n: ServerNotification): AdminNotification {
  return {
    id: n.id, type: "order", title: "New product booking",
    message: n.message, createdAt: n.created_at, read: n.read,
  };
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [localNotifications, setLocalNotifications] = useState<AdminNotification[]>([]);
  const [serverNotifications, setServerNotifications] = useState<ServerNotification[]>([]);
  const [productBookingUnreadCount, setProductBookingUnreadCount] = useState(0);
  const [muted, setMuted] = useState<boolean>(() => localStorage.getItem(MUTE_KEY) === "1");
  const audioCtxRef = useRef<AudioContext | null>(null);
  const seenServerIdsRef = useRef<Set<string>>(new Set());
  const serverLoadedRef = useRef(false);

  const syncLocal = useCallback(() => setLocalNotifications(loadNotifications()), []);

  useEffect(() => {
    const unlock = () => {
      if (!audioCtxRef.current) {
        try {
          const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
          if (Ctor) audioCtxRef.current = new Ctor();
        } catch {}
      } else if (audioCtxRef.current.state === "suspended") audioCtxRef.current.resume().catch(() => {});
    };
    document.addEventListener("pointerdown", unlock);
    document.addEventListener("keydown", unlock);
    return () => { document.removeEventListener("pointerdown", unlock); document.removeEventListener("keydown", unlock); };
  }, []);

  useEffect(() => {
    syncLocal();
    window.addEventListener(NOTIFICATIONS_EVENT, syncLocal);
    window.addEventListener("storage", syncLocal);
    return () => { window.removeEventListener(NOTIFICATIONS_EVENT, syncLocal); window.removeEventListener("storage", syncLocal); };
  }, [syncLocal]);

  const pollServer = useCallback(async () => {
    try {
      const data = await apiRequest<ServerResponse>("/admin/notifications");
      const incomingIds = new Set(data.items.map((n) => n.id));
      if (!serverLoadedRef.current) {
        seenServerIdsRef.current = incomingIds;
        serverLoadedRef.current = true;
      } else {
        const hasNew = data.items.some((n) => !seenServerIdsRef.current.has(n.id));
        if (hasNew && !muted && audioCtxRef.current) {
          if (audioCtxRef.current.state === "suspended") await audioCtxRef.current.resume().catch(() => {});
          playChime(audioCtxRef.current);
        }
        seenServerIdsRef.current = incomingIds;
      }
      setServerNotifications(data.items);
      setProductBookingUnreadCount(data.product_booking_unread_count);
    } catch {
      // Existing local notifications remain available if the API is temporarily unavailable.
    }
  }, [muted]);

  useEffect(() => {
    void pollServer();
    const id = window.setInterval(() => { void pollServer(); }, 5000);
    return () => window.clearInterval(id);
  }, [pollServer]);

  const notifications = [...serverNotifications.map(mapServer), ...localNotifications]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const markRead = useCallback((id: string) => {
    if (serverNotifications.some((n) => n.id === id)) {
      setServerNotifications((list) => list.map((n) => n.id === id ? { ...n, read: true } : n));
      void apiRequest(`/admin/notifications/${encodeURIComponent(id)}/read`, { method: "PATCH" }).then(() => pollServer()).catch(() => {});
    } else {
      setLocalNotifications(markNotificationRead(id));
    }
  }, [serverNotifications, pollServer]);

  const markAllRead = useCallback(() => {
    setLocalNotifications(markAllNotificationsRead());
    setServerNotifications((list) => list.map((n) => ({ ...n, read: true })));
    setProductBookingUnreadCount(0);
    void apiRequest("/admin/notifications/read-all", { method: "POST" }).catch(() => {});
  }, []);

  const markProductNotificationsRead = useCallback(async () => {
    setServerNotifications((list) => list.map((n) => ({ ...n, read: true })));
    setProductBookingUnreadCount(0);
    await apiRequest("/admin/notifications/read-all", { method: "POST" });
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((m) => { const next = !m; localStorage.setItem(MUTE_KEY, next ? "1" : "0"); return next; });
  }, []);

  return (
    <NotificationContext.Provider value={{
      notifications,
      unreadCount: computeUnreadCount(notifications),
      productBookingUnreadCount,
      muted, markRead, markAllRead, markProductNotificationsRead, toggleMute,
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications(): NotificationContextValue {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotifications must be used within NotificationProvider");
  return ctx;
}
