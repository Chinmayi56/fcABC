import secrets, string, uuid
from datetime import datetime, timezone, date
from fastapi import APIRouter, Depends, HTTPException
from pymongo.database import Database
from app.database.connection import get_db
from app.schemas.offers import OfferCreate, OfferOut
from app.utils.dependencies import require_admin

router = APIRouter(tags=["Offers"])

def _status(d):
    if not d.get("active", True): return "Inactive"
    today = date.today().isoformat()
    if today < d["start_date"]: return "Scheduled"
    if today > d["end_date"]: return "Expired"
    return "Active"

def _out(d):
    d=dict(d); d.pop("_id", None)
    d["status"]=_status(d)
    d["active"]=bool(d.get("active", True))
    return d

def _code(db, title):
    base=''.join(c for c in title.upper() if c.isalpha())[:4] or "OFFR"
    while True:
        code=f"{base}{secrets.randbelow(9000)+1000}"
        if not db.offers.find_one({"code":code}): return code

@router.get("/offers", response_model=list[OfferOut])
def public_offers(db: Database = Depends(get_db)):
    docs=list(db.offers.find({"active": True}).sort("created_at",-1))
    return [_out(x) for x in docs if _status(x)=="Active"]

@router.get("/admin/offers", response_model=list[OfferOut])
def admin_offers(db: Database = Depends(get_db), _:dict=Depends(require_admin)):
    return [_out(x) for x in db.offers.find({}).sort("created_at",-1)]

@router.post("/admin/offers", response_model=OfferOut, status_code=201)
def create_offer(payload:OfferCreate, db:Database=Depends(get_db), _:dict=Depends(require_admin)):
    if payload.end_date < payload.start_date: raise HTTPException(400,"End date cannot be before start date")
    now=datetime.now(timezone.utc)
    d={"id":str(uuid.uuid4()),"title":payload.title.strip(),"description":payload.description.strip(),
       "code":_code(db,payload.title),"product":payload.product.strip(),"applies_to":payload.product.strip(),
       "discount_type":payload.discount_type,"discount_value":payload.discount_value,
       "discount":f"{payload.discount_value:g}% OFF" if payload.discount_type=="Percentage" else f"₹{payload.discount_value:g} OFF",
       "start_date":payload.start_date.isoformat(),"end_date":payload.end_date.isoformat(),
       "active":payload.active,"redemptions":0,"created_at":now,"updated_at":now}
    db.offers.insert_one(d); return _out(d)

@router.put("/admin/offers/{offer_id}", response_model=OfferOut)
def update_offer(offer_id:str,payload:OfferCreate,db:Database=Depends(get_db),_:dict=Depends(require_admin)):
    if payload.end_date < payload.start_date: raise HTTPException(400,"End date cannot be before start date")
    now=datetime.now(timezone.utc)
    existing=db.offers.find_one({"id":offer_id})
    if not existing: raise HTTPException(404,"Offer not found")
    d={"title":payload.title.strip(),"description":payload.description.strip(),"product":payload.product.strip(),
       "applies_to":payload.product.strip(),"discount_type":payload.discount_type,"discount_value":payload.discount_value,
       "discount":f"{payload.discount_value:g}% OFF" if payload.discount_type=="Percentage" else f"₹{payload.discount_value:g} OFF",
       "start_date":payload.start_date.isoformat(),"end_date":payload.end_date.isoformat(),
       "active":payload.active,"updated_at":now}
    db.offers.update_one({"id":offer_id},{"$set":d}); return _out(db.offers.find_one({"id":offer_id}))

@router.patch("/admin/offers/{offer_id}/status", response_model=OfferOut)
def toggle_offer(offer_id:str, active:bool, db:Database=Depends(get_db), _:dict=Depends(require_admin)):
    r=db.offers.update_one({"id":offer_id},{"$set":{"active":active,"updated_at":datetime.now(timezone.utc)}})
    if not r.matched_count: raise HTTPException(404,"Offer not found")
    return _out(db.offers.find_one({"id":offer_id}))

@router.delete("/admin/offers/{offer_id}", status_code=204)
def delete_offer(offer_id:str,db:Database=Depends(get_db),_:dict=Depends(require_admin)):
    r=db.offers.delete_one({"id":offer_id})
    if not r.deleted_count: raise HTTPException(404,"Offer not found")
