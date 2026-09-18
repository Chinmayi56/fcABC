import { useEffect, useState } from "react";
import { Bell, Building2, Palette, Save, Shield, User } from "lucide-react";
import { Card, CardHeader } from "../components/ui/Card";
import Toast, { type ToastState } from "../components/ui/Toast";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../lib/apiClient";
import type { AdminUser } from "../lib/authApi";

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "company", label: "Company", icon: Building2 },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "security", label: "Security", icon: Shield },
] as const;

type TabId = (typeof TABS)[number]["id"];
type CompanyDetails = {
  name: string | null;
  mobile: string | null;
  mobile_numbers: string[];
  email: string | null;
  address: string | null;
  website: string | null;
  gstin: string | null;
  whatsapp: string | null;
  address_note: string | null;
};


export default function Settings() {
  const { admin, updateAdmin } = useAuth();
  const [tab, setTab] = useState<TabId>("profile");
  const [saved, setSaved] = useState(false);
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");
  const [toast, setToast] = useState<ToastState | null>(null);
  const [profile, setProfile] = useState({ name: admin?.name ?? "", email: admin?.email ?? "", mobile: admin?.mobile ?? "", mobile_numbers: admin?.mobile_numbers ?? [], address: admin?.address ?? "" });
  const [company, setCompany] = useState<CompanyDetails>({ name: "", mobile: "", mobile_numbers: [], email: "", address: "", website: "", gstin: "", whatsapp: "", address_note: "" });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setProfile({ name: admin?.name ?? "", email: admin?.email ?? "", mobile: admin?.mobile ?? "", mobile_numbers: admin?.mobile_numbers ?? [], address: admin?.address ?? "" });
  }, [admin]);

  useEffect(() => {
    let active = true;
    Promise.all([
      apiRequest<AdminUser>("/admin/profile"),
      apiRequest<CompanyDetails>("/admin/company"),
    ]).then(([p, c]) => {
      if (!active) return;
      setProfile({ name: p.name ?? "", email: p.email ?? "", mobile: p.mobile ?? "", mobile_numbers: p.mobile_numbers ?? [], address: p.address ?? "" });
      setCompany(c);
    }).catch(() => {
      if (active) setToast({ message: "Could not load settings", variant: "error" });
    }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  const handleSave = async () => {
    try {
      if (tab === "profile") {
        const next = await apiRequest<AdminUser>("/admin/profile", { method: "PUT", body: profile });
        updateAdmin(next);
      } else if (tab === "company") {
        const next = await apiRequest<CompanyDetails>("/admin/company", { method: "PUT", body: company });
        setCompany(next);
      } else {
        setSaved(true);
        setToast({ message: "Settings saved", variant: "success" });
        setTimeout(() => setSaved(false), 1600);
        return;
      }
      setSaved(true);
      setToast({ message: "Settings saved", variant: "success" });
      setTimeout(() => setSaved(false), 1600);
    } catch (e) {
      setToast({ message: e instanceof Error ? e.message : "Could not save settings", variant: "error" });
    }
  };

  if (loading) {
    return <div className="py-10 text-sm text-farm-charcoal/55">Loading settings...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 animate-fade-in lg:grid-cols-4">
      <Card className="h-fit p-2 lg:col-span-1">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
              tab === id
                ? "bg-farm-green-50 text-farm-green-700"
                : "text-farm-charcoal/65 hover:bg-farm-mist"
            }`}
          >
            <Icon size={16} /> {label}
          </button>
        ))}
      </Card>

      <Card className="lg:col-span-3">
        {tab === "profile" && (
          <>
            <CardHeader title="Profile" subtitle="Your admin account details" />
            <div className="space-y-4 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-farm-green-700 text-xl font-semibold text-white">
                  {admin?.name?.charAt(0) ?? "A"}
                </div>
                <div>
                  <p className="text-sm font-semibold text-farm-charcoal-deep">{admin?.name}</p>
                  <p className="text-xs text-farm-charcoal/50">{admin?.role}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-farm-charcoal-deep">Full Name</label>
                  <input
                    value={profile.name}
                    onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                    className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-farm-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green-100"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-farm-charcoal-deep">Email</label>
                  <input
                    value={profile.email}
                    onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                    className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-farm-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green-100"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-farm-charcoal-deep">Mobile Number</label>
                  <input value={profile.mobile ?? ""} onChange={(e) => setProfile((p) => ({ ...p, mobile: e.target.value }))} className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-farm-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green-100" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-farm-charcoal-deep">Address</label>
                  <input value={profile.address ?? ""} onChange={(e) => setProfile((p) => ({ ...p, address: e.target.value }))} className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-farm-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green-100" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-farm-charcoal-deep">Additional Admin Mobile Numbers</label>
                  <button type="button" onClick={() => setProfile(p => ({ ...p, mobile_numbers: [...(p.mobile_numbers || []), ""] }))} className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold hover:bg-farm-mist">
                    + Add New Number
                  </button>
                </div>
                <div className="space-y-2">
                  {(profile.mobile_numbers || []).map((number, index) => (
                    <div key={index} className="flex gap-2">
                      <input value={number} onChange={(e) => setProfile(p => ({ ...p, mobile_numbers: (p.mobile_numbers || []).map((n,i) => i === index ? e.target.value : n) }))} placeholder="+91 XXXXX XXXXX" className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-farm-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green-100" />
                      <button type="button" onClick={() => setProfile(p => ({ ...p, mobile_numbers: (p.mobile_numbers || []).filter((_,i) => i !== index) }))} className="rounded-xl border border-red-100 px-3 text-sm text-red-600 hover:bg-red-50">Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {tab === "company" && (
          <>
            <CardHeader title="Company" subtitle="Farm Craft business details" />
            <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
              {([
                ["name", "Company Name"], ["mobile", "Company Mobile"], ["email", "Company Email"],
                ["address", "Company Address"], ["website", "Website"], ["gstin", "GSTIN"], ["whatsapp", "WhatsApp"], ["address_note", "Address Note"],
              ] as const).map(([key, label]) => (
                <div key={key}>
                  <label className="mb-1.5 block text-sm font-medium text-farm-charcoal-deep">{label}</label>
                  <input
                    value={company[key] ?? ""}
                    onChange={(e) => setCompany((c) => ({ ...c, [key]: e.target.value }))}
                    className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-farm-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green-100"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-farm-charcoal-deep">Additional Mobile Numbers</label>
                  <button type="button" onClick={() => setCompany(c => ({ ...c, mobile_numbers: [...(c.mobile_numbers || []), ""] }))} className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold hover:bg-farm-mist">
                    + Add New Number
                  </button>
                </div>
                <div className="space-y-2">
                  {(company.mobile_numbers || []).map((number, index) => (
                    <div key={index} className="flex gap-2">
                      <input value={number} onChange={(e) => setCompany(c => ({ ...c, mobile_numbers: (c.mobile_numbers || []).map((n,i) => i === index ? e.target.value : n) }))} placeholder="+91 XXXXX XXXXX" className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-farm-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green-100" />
                      <button type="button" onClick={() => setCompany(c => ({ ...c, mobile_numbers: (c.mobile_numbers || []).filter((_,i) => i !== index) }))} className="rounded-xl border border-red-100 px-3 text-sm text-red-600 hover:bg-red-50">Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {tab === "notifications" && (
          <>
            <CardHeader title="Notifications" subtitle="Choose what you'd like to be alerted about" />
            <div className="space-y-1 p-5">
              {["Purchase notifications", "Stock alerts", "Offer notifications"].map(
                (item) => (
                  <label
                    key={item}
                    className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-farm-mist/40"
                  >
                    <span className="text-sm text-farm-charcoal-deep">{item}</span>
                    <input type="checkbox" defaultChecked className="h-4 w-4 accent-farm-green-700" />
                  </label>
                )
              )}
            </div>
          </>
        )}

        {tab === "appearance" && (
          <>
            <CardHeader title="Appearance" subtitle="Personalize how the admin portal looks" />
            <div className="space-y-4 p-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-farm-charcoal-deep">Theme</label>
                <div className="flex gap-2">
                  {(["Light", "Dark"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTheme(t)}
                      className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                        theme === t
                          ? "border-farm-green-600 bg-farm-green-50 text-farm-green-700"
                          : "border-black/10 text-farm-charcoal/60 hover:bg-farm-mist"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-farm-charcoal/45">
                  Dark mode is a demo preference and does not change the interface in this build.
                </p>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-farm-charcoal-deep">Accent Color</label>
                <div className="flex gap-2">
                  {["#1c6b3d", "#4bad74", "#2563eb", "#b45309"].map((color) => (
                    <span
                      key={color}
                      className="h-8 w-8 rounded-full ring-2 ring-white ring-offset-2 ring-offset-white"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {tab === "security" && (
          <>
            <CardHeader title="Security" subtitle="Manage password and access" />
            <div className="space-y-4 p-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-farm-charcoal-deep">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-farm-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green-100"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-farm-charcoal-deep">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-farm-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green-100"
                />
              </div>
              <p className="text-xs text-farm-charcoal/45">
                This is a demo portal — password changes are not persisted.
              </p>
            </div>
          </>
        )}

        <div className="flex justify-end border-t border-black/5 p-5">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-farm-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-farm-green-800"
          >
            <Save size={16} /> {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>
      </Card>

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  );
}
