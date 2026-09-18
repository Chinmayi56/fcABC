import type { Offer } from "../types";
import { offers as seedOffers } from "./mockData";

const STORAGE_KEY = "farmcraft_offers";

export function loadOffers(): Offer[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Offer[];
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // fall through to reseed on any parse error
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedOffers));
  return seedOffers;
}

export function persistOffers(list: Offer[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function generateOfferId(list: Offer[]): string {
  let max = 0;
  list.forEach((o) => {
    const match = o.id.match(/(\d+)$/);
    if (match) max = Math.max(max, parseInt(match[1], 10));
  });
  return `FC-OFF-${String(max + 1).padStart(2, "0")}`;
}

export function formatDiscount(type: Offer["discountType"], value: number): string {
  return type === "Percentage" ? `${value}% OFF` : `₹${value.toLocaleString("en-IN")} OFF`;
}

export function computeOfferStatus(startDate: string, endDate: string, manual?: "Inactive"): Offer["status"] {
  if (manual === "Inactive") return "Inactive";
  const today = new Date().toISOString().slice(0, 10);
  if (today < startDate) return "Scheduled";
  if (today > endDate) return "Expired";
  return "Active";
}


import { apiRequest } from "../lib/apiClient";

export interface ApiOffer {
  id:string; title:string; description:string; code:string; product:string; applies_to:string;
  discount_type:"Percentage"|"Flat"; discount_value:number; discount:string;
  start_date:string; end_date:string; status:"Active"|"Scheduled"|"Expired"|"Inactive";
  redemptions:number; active:boolean; created_at:string; updated_at:string;
}
export function fromApiOffer(o:ApiOffer): Offer {
  return {id:o.id,title:o.title,description:o.description,code:o.code,product:o.product,
    appliesTo:o.applies_to,discountType:o.discount_type,discountValue:o.discount_value,
    discount:o.discount,startDate:o.start_date,endDate:o.end_date,status:o.status,
    redemptions:o.redemptions};
}
export function toApiOffer(form:{title:string;description:string;product:string;discountType:"Percentage"|"Flat";discountValue:number;startDate:string;endDate:string;active?:boolean}) {
  return {title:form.title,description:form.description,product:form.product,discount_type:form.discountType,
    discount_value:form.discountValue,start_date:form.startDate,end_date:form.endDate,active:form.active ?? true};
}
export async function loadOffersFromApi():Promise<Offer[]> {
  const data=await apiRequest<ApiOffer[]>("/admin/offers");
  return data.map(fromApiOffer);
}
export async function createOfferApi(form:Parameters<typeof toApiOffer>[0]):Promise<Offer> {
  return fromApiOffer(await apiRequest<ApiOffer>("/admin/offers",{method:"POST",body:toApiOffer(form)}));
}
export async function updateOfferApi(id:string,form:Parameters<typeof toApiOffer>[0]):Promise<Offer> {
  const current=await apiRequest<ApiOffer[]>(`/admin/offers`);
  const existing=current.find(o=>o.id===id);
  return fromApiOffer(await apiRequest<ApiOffer>(`/admin/offers/${encodeURIComponent(id)}`,{method:"PUT",body:toApiOffer({...form,active:existing?.active ?? true})}));
}
export async function toggleOfferApi(id:string,active:boolean):Promise<Offer> {
  return fromApiOffer(await apiRequest<ApiOffer>(`/admin/offers/${encodeURIComponent(id)}/status?active=${active}`,{method:"PATCH"}));
}
export async function deleteOfferApi(id:string):Promise<void> {
  await apiRequest<void>(`/admin/offers/${encodeURIComponent(id)}`,{method:"DELETE"});
}
