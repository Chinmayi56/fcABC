"""MongoDB connection and request dependency for Farm-Craft."""
import logging
from contextlib import contextmanager
from typing import Generator
from pymongo import MongoClient, ASCENDING, DESCENDING
from pymongo.database import Database

from app.config import settings
from app.utils.security import hash_secret

logger = logging.getLogger("app.database")
_client: MongoClient | None = None

COLLECTIONS = (
    "users", "products", "carts", "cart_items", "orders",
    "order_items", "otps", "stock_movements", "contact_messages", "notifications", "company_settings",
)

def get_client() -> MongoClient:
    global _client
    if _client is None:
        _client = MongoClient(settings.mongo_url, serverSelectionTimeoutMS=3000)
    return _client

def get_database() -> Database:
    return get_client()[settings.mongo_db_name]

def get_db() -> Generator[Database, None, None]:
    yield get_database()

@contextmanager
def get_db_context() -> Generator[Database, None, None]:
    yield get_database()

def connection_target_description() -> str:
    return f"mongodb host={settings.mongo_url} database={settings.mongo_db_name}"

def check_database_connection() -> bool:
    try:
        get_client().admin.command("ping")
        return True
    except Exception as exc:
        logger.error("MongoDB connection failed (%s). Target: %s",
                     type(exc).__name__, connection_target_description())
        return False

def ensure_indexes_and_seed() -> None:
    """Create useful indexes and idempotently seed the demo admin."""
    from datetime import datetime, timezone
    db = get_database()
    db.users.create_index([("email", ASCENDING)], unique=True,
                          partialFilterExpression={"email": {"$type": "string"}})
    db.users.create_index([("mobile", ASCENDING)], unique=True,
                          partialFilterExpression={"mobile": {"$type": "string"}})
    db.products.create_index([("sku", ASCENDING)], unique=True)
    db.products.create_index([("created_at", DESCENDING)])
    db.products.create_index([("category", ASCENDING)])
    db.products.create_index([("status", ASCENDING)])
    db.carts.create_index([("customer_id", ASCENDING)], unique=True)
    db.cart_items.create_index([("cart_id", ASCENDING)])
    db.cart_items.create_index([("product_id", ASCENDING)])
    db.orders.create_index([("customer_id", ASCENDING), ("created_at", DESCENDING)])
    db.orders.create_index([("order_number", ASCENDING)], unique=True)
    db.orders.create_index([("purchase_code", ASCENDING)], unique=True)
    db.order_items.create_index([("order_id", ASCENDING)])
    db.stock_movements.create_index([("product_id", ASCENDING), ("created_at", DESCENDING)])
    db.otps.create_index([("mobile", ASCENDING), ("created_at", DESCENDING)])
    db.contact_messages.create_index([("created_at", DESCENDING)])
    db.notifications.create_index([("type", ASCENDING), ("order_id", ASCENDING)], unique=True, partialFilterExpression={"order_id": {"$exists": True}})
    db.notifications.create_index([("read", ASCENDING), ("created_at", DESCENDING)])
    db.company_settings.create_index([("key", ASCENDING)], unique=True)
    db.offers.create_index([("active", ASCENDING), ("start_date", ASCENDING), ("end_date", ASCENDING)])

    email = settings.demo_admin_email.strip().lower()
    existing = db.users.find_one({"email": email})

    # Migrate the earlier typo in the demo email if it exists. This keeps
    # existing local/demo databases usable without creating a duplicate Admin.
    if existing is None and email == "admin@farmcraft.com":
        legacy = db.users.find_one({"email": "framcraft68@gmail.com", "role": "ADMIN"})
        if legacy is not None:
            now = datetime.now(timezone.utc)
            db.users.update_one({"_id": legacy["_id"]}, {"$set": {
                "email": email,
                "name": legacy.get("name") or "VARADA VIJAYAKRISHNA",
                "mobile": legacy.get("mobile") or "+919440436868",
                "mobile_numbers": legacy.get("mobile_numbers") or ["+919490436868"],
                "password_hash": legacy.get("password_hash") or hash_secret(settings.demo_admin_password),
                "is_active": True,
                "updated_at": now,
            }})
            existing = db.users.find_one({"email": email})

    if existing is None:
        now = datetime.now(timezone.utc)
        db.users.insert_one({
            "id": str(__import__("uuid").uuid4()),
            "name": "VARADA VIJAYAKRISHNA",
            "email": email,
            "mobile": "+919440436868",
            "mobile_numbers": ["+919490436868"],
            "password_hash": hash_secret(settings.demo_admin_password),
            "role": "ADMIN",
            "is_active": True,
            "created_at": now,
            "updated_at": now,
        })
    elif existing.get("role") == "ADMIN":
        # Bring the original placeholder/demo admin to the requested initial
        # Farm Craft details once. Future edits made in Settings are preserved.
        placeholder_values = {"Admin", "Farm Craft Admin"}
        if existing.get("name") in placeholder_values or existing.get("mobile") in (None, "+91 90000 00000"):
            db.users.update_one({"_id": existing["_id"]}, {"$set": {
                "name": "VARADA VIJAYAKRISHNA",
                "mobile": "+919440436868",
                "mobile_numbers": ["+919490436868"],
                "updated_at": datetime.now(timezone.utc),
            }})
    else:
        logger.warning("Demo admin email exists but is not an ADMIN; no duplicate was created.")

    # Seed the requested official company contact details only when the
    # current record still contains the old placeholders.
    company = db.company_settings.find_one({"key": "current"})
    if company is None:
        now = datetime.now(timezone.utc)
        db.company_settings.insert_one({
            "key": "current",
            "name": "Farm Craft",
            "mobile": "+91 94404 36868",
            "mobile_numbers": ["+91 94904 36868"],
            "email": "farmcraft68@gmail.com",
            "address": "1-23A, Swaraj Tractor Showroom, Palakonda, Manyam District, Andhra Pradesh - 532440",
            "website": None,
            "gstin": "37AQXPV3001H1ZG",
            "whatsapp": "919440436868",
            "address_note": "Official Farm Craft contact details.",
            "created_at": now,
            "updated_at": now,
        })
    elif company.get("mobile") in (None, "+91 90000 00000") or company.get("email") == "framcraft68@gmail.com":
        db.company_settings.update_one({"_id": company["_id"]}, {"$set": {
            "name": "Farm Craft",
            "mobile": "+91 94404 36868",
            "mobile_numbers": ["+91 94904 36868"],
            "email": "farmcraft68@gmail.com",
            "address": "1-23A, Swaraj Tractor Showroom, Palakonda, Manyam District, Andhra Pradesh - 532440",
            "gstin": "37AQXPV3001H1ZG",
            "whatsapp": "919440436868",
            "address_note": "Official Farm Craft contact details.",
            "updated_at": datetime.now(timezone.utc),
        }})

def close_client() -> None:
    global _client
    if _client is not None:
        _client.close()
        _client = None
