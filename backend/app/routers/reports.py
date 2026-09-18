from fastapi import APIRouter,Depends
from pymongo.database import Database
from app.database.connection import get_db
from app.models.user import UserRole
from app.models.order import OrderStatus
from app.schemas.order import ReportSummary
from app.utils.dependencies import require_admin

router=APIRouter(prefix="/admin/reports",tags=["Reports"])

@router.get("/summary",response_model=ReportSummary)
def summary(db:Database=Depends(get_db),_:dict=Depends(require_admin)):
    orders=list(db.orders.find())
    active=[o for o in orders if o.get("status")!=OrderStatus.CANCELLED.value]
    sales=sum(float(o.get("total_amount",0)) for o in active)
    return {"total_orders":len(orders),"total_sales":sales,
            "pending_orders":sum(o.get("status")==OrderStatus.PENDING.value for o in orders),
            "customers":db.users.count_documents({"role":UserRole.CUSTOMER.value}),
            "products":db.products.count_documents({}),
            "low_stock_products":db.products.count_documents({"stock":{"$lte":5}})}

@router.get("/sales-by-status")
def sales_by_status(db:Database=Depends(get_db),_:dict=Depends(require_admin)):
    out=[]
    for s in OrderStatus:
        rows=list(db.orders.find({"status":s.value}))
        out.append({"status":s.value,"count":len(rows),"sales":sum(float(x.get("total_amount",0)) for x in rows)})
    return out
