from datetime import datetime,timezone
from fastapi import APIRouter,Depends,HTTPException
from pymongo.database import Database
from app.database.connection import get_db
from app.schemas.order import StockAdjust,StockOut
from app.utils.dependencies import require_admin

router=APIRouter(prefix="/admin/stock",tags=["Stock"])

@router.patch("/{product_id}",response_model=StockOut)
def adjust_stock(product_id:str,p:StockAdjust,db:Database=Depends(get_db),_:dict=Depends(require_admin)):
    product=db.products.find_one({"id":str(product_id)})
    if not product: raise HTTPException(404,"Product not found")
    current=int(product.get("stock",0)); new=current+p.quantity_change
    if new<0: raise HTTPException(400,"Stock cannot be negative")
    now=datetime.now(timezone.utc)
    db.products.update_one({"id":str(product_id)},{"$set":{"stock":new,"updated_at":now}})
    db.stock_movements.insert_one({"id":__import__("uuid").str(uuid4()),"product_id":str(product_id),
        "quantity_change":p.quantity_change,"reason":p.reason,"reference_id":None,"created_at":now})
    return {"product_id":str(product_id),"stock":new}

@router.get("",response_model=list[dict])
def stock_list(db:Database=Depends(get_db),_:dict=Depends(require_admin)):
    return [{"id":p["id"],"name":p["name"],"sku":p["sku"],"stock":p.get("stock",0),"status":p.get("status","active")}
            for p in db.products.find().sort("name",1)]
