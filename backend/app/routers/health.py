from fastapi import APIRouter
from pymongo.database import Database
from app.config import settings
from app.database.connection import get_database,check_database_connection

router=APIRouter(tags=["Health"])

@router.get("/health")
def health_check():
    ok=check_database_connection()
    return {"status":"ok","app":settings.app_name,"version":settings.api_version,
            "environment":settings.app_env,"database":"connected" if ok else "unavailable"}

@router.get("/health/db")
def health_check_db():
    ok=check_database_connection()
    return {"database":"connected" if ok else "unavailable","result":1 if ok else 0}
