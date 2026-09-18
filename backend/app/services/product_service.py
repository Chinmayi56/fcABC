from datetime import datetime, timezone
from pymongo.database import Database
from pymongo import ASCENDING, DESCENDING
from app.schemas.product import ProductCreate, ProductUpdate
from app.models.product import ProductStatus

class ProductError(Exception): pass
class ProductNotFoundError(ProductError): pass

_FIELDS = ("name","category","sku","price","discount_price","stock","description","status",
           "image","images","motor","capacity","length","height","pipe_material",
           "screw_material","usage","features","applications")

def _clean(doc: dict | None) -> dict | None:
    if doc is None: return None
    return {k:v for k,v in doc.items() if k not in {"_id"}}

def get_product(db: Database, product_id: str) -> dict:
    p = db.products.find_one({"id": str(product_id)})
    if not p: raise ProductNotFoundError("Product not found")
    return _clean(p)

def list_products(db: Database, *, skip=0, limit=50, category=None, status=None, search=None):
    q={}
    if category: q["category"]=category
    if status: q["status"]=getattr(status,"value",status)
    if search:
        s=search.strip()
        if s: q["$or"]=[{"name":{"$regex":s,"$options":"i"}},{"sku":{"$regex":s,"$options":"i"}}]
    total=db.products.count_documents(q)
    items=[_clean(x) for x in db.products.find(q).sort("created_at",DESCENDING).skip(skip).limit(limit)]
    return items,total

def _sku_taken(db, sku, exclude_id=None):
    q={"sku":sku}
    if exclude_id: q["id"]={"$ne":str(exclude_id)}
    return db.products.find_one(q,{"_id":1}) is not None

def _payload_dict(payload):
    data=payload.model_dump()
    if data.get("status") is not None:
        data["status"]=getattr(data["status"],"value",data["status"])
    return data

def create_product(db: Database, payload: ProductCreate):
    data=_payload_dict(payload)
    if _sku_taken(db,data["sku"]): raise ProductError(f"A product with SKU '{data['sku']}' already exists")
    now=datetime.now(timezone.utc)
    data.update({"id":str(__import__("uuid").uuid4()),"created_at":now,"updated_at":now})
    db.products.insert_one(data)
    return _clean(data)

def update_product(db: Database, product_id, payload: ProductUpdate):
    product=get_product(db,product_id)
    updates=_payload_dict(payload)
    if "sku" in updates and updates["sku"] != product["sku"] and _sku_taken(db,updates["sku"],exclude_id=product_id):
        raise ProductError(f"A product with SKU '{updates['sku']}' already exists")
    if "price" in updates and updates["price"] is None:
        if updates.get("discount_price") is not None:
            raise ProductError("Please enter the regular price before adding a discount price.")
        updates["discount_price"]=None
    elif updates.get("discount_price") is not None:
        effective=updates.get("price",product.get("price"))
        if effective is None: raise ProductError("Please enter the regular price before adding a discount price.")
        if updates["discount_price"] > effective: raise ProductError("discount_price cannot be greater than price")
    updates["updated_at"]=datetime.now(timezone.utc)
    db.products.update_one({"id":str(product_id)},{"$set":updates})
    return get_product(db,product_id)

def delete_product(db: Database, product_id):
    get_product(db,product_id)
    db.products.delete_one({"id":str(product_id)})
