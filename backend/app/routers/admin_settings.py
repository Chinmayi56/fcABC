from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException
from pymongo.database import Database

from app.database.connection import get_db
from app.schemas.auth import UserOut
from app.schemas.settings import AdminProfileUpdate, CompanyDetails, CompanyDetailsUpdate, NotificationOut, NotificationsResponse
from app.utils.dependencies import require_admin

router = APIRouter(tags=["Admin Settings & Notifications"])

def _clean(doc):
    doc = dict(doc)
    doc.pop("_id", None)
    return doc

@router.get("/admin/profile", response_model=UserOut)
def get_admin_profile(db: Database = Depends(get_db), admin: dict = Depends(require_admin)):
    current = db.users.find_one({"id": admin["id"]})
    if not current:
        raise HTTPException(404, "Admin profile not found")
    return UserOut.model_validate(current)

@router.put("/admin/profile", response_model=UserOut)
def update_admin_profile(payload: AdminProfileUpdate, db: Database = Depends(get_db), admin: dict = Depends(require_admin)):
    email = payload.email.strip().lower()
    conflict = db.users.find_one({"email": email, "id": {"$ne": admin["id"]}})
    if conflict:
        raise HTTPException(409, "That email is already in use")
    now = datetime.now(timezone.utc)
    db.users.update_one({"id": admin["id"]}, {"$set": {
        "name": payload.name.strip(), "email": email,
        "mobile": payload.mobile.strip() if payload.mobile else None,
        "mobile_numbers": [x.strip() for x in (payload.mobile_numbers or []) if x and x.strip()],
        "address": payload.address.strip() if payload.address else None,
        "updated_at": now,
    }})
    return UserOut.model_validate(db.users.find_one({"id": admin["id"]}))

def _company_doc(db):
    doc = db.company_settings.find_one({"key": "current"})
    if doc:
        return _clean(doc)
    doc = {
        "key": "current", "name": "Farm Craft", "mobile": "+91 94404 36868",
        "mobile_numbers": ["+91 94904 36868"],
        "email": "farmcraft68@gmail.com",
        "address": "1-23A, Swaraj Tractor Showroom, Palakonda, Manyam District, Andhra Pradesh - 532440",
        "website": None, "gstin": "37AQXPV3001H1ZG",
        "whatsapp": "919440436868",
        "address_note": "Official Farm Craft contact details.",
        "created_at": datetime.now(timezone.utc), "updated_at": datetime.now(timezone.utc),
    }
    db.company_settings.insert_one(doc)
    return _clean(doc)

@router.get("/company", response_model=CompanyDetails)
def get_public_company(db: Database = Depends(get_db)):
    company = _company_doc(db)
    admin = db.users.find_one({"role": "ADMIN"}, sort=[("updated_at", -1)])
    if admin:
        company.update({
            "admin_name": admin.get("name"),
            "admin_email": admin.get("email"),
            "admin_mobile": admin.get("mobile"),
            "admin_mobile_numbers": admin.get("mobile_numbers") or [],
        })
    return CompanyDetails.model_validate(company)

@router.get("/admin/company", response_model=CompanyDetails)
def get_admin_company(db: Database = Depends(get_db), _: dict = Depends(require_admin)):
    return CompanyDetails.model_validate(_company_doc(db))

@router.put("/admin/company", response_model=CompanyDetails)
def update_admin_company(payload: CompanyDetailsUpdate, db: Database = Depends(get_db), _: dict = Depends(require_admin)):
    now = datetime.now(timezone.utc)
    data = payload.model_dump(exclude={"admin_name", "admin_email", "admin_mobile", "admin_mobile_numbers"})
    data["mobile_numbers"] = [x.strip() for x in (data.get("mobile_numbers") or []) if x and x.strip()]
    data["updated_at"] = now
    db.company_settings.update_one({"key": "current"}, {"$set": data, "$setOnInsert": {"key": "current", "created_at": now}}, upsert=True)
    return CompanyDetails.model_validate(_company_doc(db))

@router.get("/admin/notifications", response_model=NotificationsResponse)
def get_admin_notifications(db: Database = Depends(get_db), _: dict = Depends(require_admin)):
    docs = list(db.notifications.find({"type": "product_booking"}).sort("created_at", -1).limit(50))
    items = []
    for d in docs:
        d = _clean(d)
        d["created_at"] = d["created_at"].isoformat() if hasattr(d["created_at"], "isoformat") else str(d["created_at"])
        items.append(NotificationOut.model_validate(d))
    unread = db.notifications.count_documents({"type": "product_booking", "read": False})
    return NotificationsResponse(items=items, unread_count=unread, product_booking_unread_count=unread)

@router.patch("/admin/notifications/{notification_id}/read", response_model=dict)
def mark_notification_read(notification_id: str, db: Database = Depends(get_db), _: dict = Depends(require_admin)):
    db.notifications.update_one({"id": notification_id, "type": "product_booking"}, {"$set": {"read": True, "read_at": datetime.now(timezone.utc)}})
    return {"message": "Notification marked as read"}

@router.post("/admin/notifications/read-all", response_model=dict)
def mark_all_notifications_read(db: Database = Depends(get_db), _: dict = Depends(require_admin)):
    db.notifications.update_many({"type": "product_booking", "read": False}, {"$set": {"read": True, "read_at": datetime.now(timezone.utc)}})
    return {"message": "Notifications marked as read"}
