from fastapi import APIRouter, Depends, HTTPException, Query, status
from pymongo.database import Database
from app.database.connection import get_db
from app.models.product import ProductStatus
from app.schemas.product import ProductCreate, ProductListResponse, ProductOut, ProductUpdate
from app.services import product_service
from app.utils.dependencies import require_admin

router=APIRouter(prefix="/products",tags=["Products"])

def out(p): return ProductOut.model_validate(p)

@router.post("",response_model=ProductOut,status_code=201)
def create_product(payload:ProductCreate,db:Database=Depends(get_db),_admin:dict=Depends(require_admin)):
    try:return out(product_service.create_product(db,payload))
    except product_service.ProductError as exc: raise HTTPException(409,str(exc))

@router.get("",response_model=ProductListResponse)
def list_products(skip:int=Query(0,ge=0),limit:int=Query(50,ge=1,le=200),
                  category:str|None=None,status_filter:ProductStatus|None=Query(None,alias="status"),
                  search:str|None=None,db:Database=Depends(get_db)):
    items,total=product_service.list_products(db,skip=skip,limit=limit,category=category,status=status_filter,search=search)
    return ProductListResponse(total=total,items=[out(x) for x in items])

@router.get("/{product_id}",response_model=ProductOut)
def get_product(product_id:str,db:Database=Depends(get_db)):
    try:return out(product_service.get_product(db,product_id))
    except product_service.ProductNotFoundError as exc: raise HTTPException(404,str(exc))

@router.put("/{product_id}",response_model=ProductOut)
def update_product(product_id:str,payload:ProductUpdate,db:Database=Depends(get_db),_admin:dict=Depends(require_admin)):
    try:return out(product_service.update_product(db,product_id,payload))
    except product_service.ProductNotFoundError as exc: raise HTTPException(404,str(exc))
    except product_service.ProductError as exc: raise HTTPException(409,str(exc))

@router.delete("/{product_id}",status_code=204)
def delete_product(product_id:str,db:Database=Depends(get_db),_admin:dict=Depends(require_admin)):
    try: product_service.delete_product(db,product_id)
    except product_service.ProductNotFoundError as exc: raise HTTPException(404,str(exc))
