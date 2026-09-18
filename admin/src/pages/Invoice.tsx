import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { loadRawOrders, type ApiOrder } from "../data/orderStorage";
import logo from "../assets/farmcraft-logo-full.png";
import { apiRequest } from "../lib/apiClient";

type CompanyDetails = { name:string|null; mobile:string|null; mobile_numbers:string[]; email:string|null; address:string|null; website:string|null; gstin:string|null; whatsapp:string|null; address_note:string|null };

const money=(v:number|null|undefined)=>v==null?"—":`₹${Number(v).toLocaleString("en-IN",{maximumFractionDigits:2})}`;

export default function Invoice() {
  const { id } = useParams();
  const [orders,setOrders]=useState<ApiOrder[]>([]);
  const [company,setCompany]=useState<CompanyDetails|null>(null);

  useEffect(()=>{ Promise.all([loadRawOrders(),apiRequest<CompanyDetails>("/company",{auth:false})]).then(([o,c])=>{setOrders(o);setCompany(c);}).catch(()=>setOrders([])); },[]);
  const order=orders.find(o=>o.order_number===id||o.id===id);
  if(!order) return <div className="py-16 text-center"><p className="text-sm text-farm-charcoal/60">Order not found.</p><Link to="/admin/purchased-products" className="mt-3 inline-block text-sm font-medium text-farm-green-700">Back to Purchased Products</Link></div>;

  const c=order.customer_snapshot||{}; const a=order.shipping_address||{};
  const subtotal=order.items.reduce((n,i)=>n+(Number(i.subtotal??0)),0);
  const itemRows=order.items.map(i=>`<tr><td>${i.product_name}</td><td>${i.sku||"—"}</td><td>${i.quantity}</td><td>${money(Number(i.unit_price))}</td><td>${money(Number(i.subtotal))}</td></tr>`).join("");
  const invoiceNo=`INV-${order.order_number||order.id}`;
  const companyName=company?.name||"Farm Craft";
  const companyMobile=[company?.mobile,...(company?.mobile_numbers||[])].filter(Boolean).join(" / ");
  const addressText=a.line1||a.address||"—";
  const location=[a.city,a.state,a.pincode].filter(Boolean).join(", ");
  const handlePrint=()=>window.print();
  const handleDownload=async()=>{
    let logoSrc=logo;
    try { const r=await fetch(logo); const blob=await r.blob(); logoSrc=await new Promise<string>((resolve,reject)=>{const fr=new FileReader();fr.onload=()=>resolve(String(fr.result));fr.onerror=reject;fr.readAsDataURL(blob);}); } catch {}
    const node=document.getElementById("invoice-printable"); if(!node)return;
    const html=node.outerHTML.replace(logo,logoSrc);
    const doc=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${invoiceNo} — ${companyName}</title><style>
      body{font-family:Arial,Helvetica,sans-serif;color:#1f2a24;padding:24px;background:#fff} table{width:100%;border-collapse:collapse} th,td{padding:9px 10px;text-align:left;border-bottom:1px solid #e7ebe6;font-size:13px} .muted{color:#6b756f;font-size:12px}.brand{color:#1c6b3d}
    </style></head><body>${html}</body></html>`;
    const blob=new Blob([doc],{type:"text/html"}); const url=URL.createObjectURL(blob); const link=document.createElement("a"); link.href=url; link.download=`FarmCraft-Invoice-${order.order_number||order.id}.html`; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  };
  return <div className="space-y-5 animate-fade-in">
    <div className="flex flex-col gap-3 print:hidden sm:flex-row sm:items-center sm:justify-between">
      <Link to={`/admin/purchased-products/${order.order_number||order.id}`} className="flex items-center gap-1.5 text-sm font-medium text-farm-charcoal/60 hover:text-farm-charcoal-deep"><ArrowLeft size={15}/> Back to Order</Link>
      <div className="flex gap-2"><button onClick={handleDownload} className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold"><Download size={16}/> Download Invoice</button><button onClick={handlePrint} className="flex items-center gap-2 rounded-xl bg-farm-green-700 px-4 py-2.5 text-sm font-semibold text-white"><Printer size={16}/> Print Invoice</button></div>
    </div>
    <div id="invoice-printable" className="mx-auto max-w-3xl rounded-xl2 border border-black/5 bg-white p-8 shadow-card print:rounded-none print:border-0 print:shadow-none">
      <div className="flex items-start justify-between border-b-2 border-farm-green-700 pb-5">
        <div className="flex items-center gap-3"><img src={logo} alt="Farm Craft" className="h-14 w-24 shrink-0 rounded-lg object-contain"/><div><h1 className="font-display text-2xl font-extrabold text-farm-green-700">{companyName}</h1><p className="text-xs text-farm-charcoal/55">{company?.address||""}</p><p className="text-xs text-farm-charcoal/55">{companyMobile}</p><p className="text-xs text-farm-charcoal/55">GSTIN: {company?.gstin||"—"}</p></div></div>
        <div className="text-right"><h2 className="font-display text-lg font-bold">TAX INVOICE</h2><p className="mt-1 text-xs text-farm-charcoal/55">Invoice No: {invoiceNo}</p><p className="text-xs text-farm-charcoal/55">Order ID: {order.order_number||order.id}</p><p className="text-xs text-farm-charcoal/55">Purchase Code: {order.purchase_code}</p><p className="text-xs text-farm-charcoal/55">Date: {new Date(order.created_at).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</p></div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6"><div><p className="text-xs font-semibold uppercase tracking-wide text-farm-charcoal/45">Billed To</p><p className="mt-2 text-sm font-semibold">{c.name||"Customer"}</p>{c.email&&<p className="text-xs text-farm-charcoal/60">{c.email}</p>}<p className="text-xs text-farm-charcoal/60">{c.mobile||"—"}</p><p className="mt-1 text-xs text-farm-charcoal/60">{addressText}{location?`, ${location}`:""}</p></div><div><p className="text-xs font-semibold uppercase tracking-wide text-farm-charcoal/45">Order / Payment</p><p className="mt-2 text-sm">Method: {order.payment_method}</p><p className="text-sm">Payment Status: {order.payment_status}</p><p className="text-sm">Order Status: {order.status}</p></div></div>
      <table className="mt-7 w-full text-left text-sm"><thead><tr className="border-b border-black/10 text-xs uppercase tracking-wide text-farm-charcoal/45"><th className="py-2.5">Product</th><th>SKU</th><th className="text-right">Qty</th><th className="text-right">Unit Price</th><th className="text-right">Total</th></tr></thead><tbody>{order.items.map(i=><tr key={i.id} className="border-b border-black/5"><td className="py-3 font-medium">{i.product_name}</td><td>{i.sku||"—"}</td><td className="text-right">{i.quantity}</td><td className="text-right">{money(Number(i.unit_price))}</td><td className="text-right font-medium">{money(Number(i.subtotal))}</td></tr>)}</tbody></table>
      <div className="mt-4 flex justify-end"><div className="w-64 space-y-1.5 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></div>{order.items.some(i=>i.offer) && <div className="flex justify-between"><span>Offer / Discount</span><span>Applied</span></div>}<div className="flex justify-between border-t pt-2 font-display text-base font-bold"><span>Final Total</span><span>{money(Number(order.total_amount))}</span></div></div></div>
      <div className="mt-10 border-t pt-4 text-center text-xs text-farm-charcoal/45">Thank you for choosing {companyName}. This invoice records the order and transaction details stored by Farm Craft.</div>
    </div>
  </div>;
}
