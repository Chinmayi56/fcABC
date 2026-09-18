from fastapi import APIRouter,Depends,HTTPException
from pymongo.database import Database
from app.database.connection import get_db
from app.models.user import UserRole
from app.models.order import OrderStatus
from app.utils.dependencies import require_admin

router=APIRouter(prefix="/admin/customers",tags=["Admin Customers"])

def _serialize_customer(db,u):
    orders=list(db.orders.find({"customer_id":u["id"]}))
    valid=[o for o in orders if o.get("status")!=OrderStatus.CANCELLED.value]
    spent=sum(float(o.get("total_amount",0)) for o in valid)
    return {"id":u["id"],"name":u.get("name") or "Customer","email":u.get("email"),
            "mobile":u.get("mobile"),"location":"","totalOrders":len(valid),"totalSpent":spent,
            "joinedAt":u["created_at"].isoformat(),"status":"Active" if u.get("is_active",True) else "Inactive"}

@router.get("")
def customers(db:Database=Depends(get_db),_:dict=Depends(require_admin)):
    return [_serialize_customer(db,u) for u in db.users.find({"role":UserRole.CUSTOMER.value}).sort("created_at",-1)]

@router.get("/{customer_id}")
def customer_detail(customer_id:str,db:Database=Depends(get_db),_:dict=Depends(require_admin)):
    u=db.users.find_one({"id":str(customer_id),"role":UserRole.CUSTOMER.value})
    if not u: raise HTTPException(404,"Customer not found")
    return _serialize_customer(db,u)
