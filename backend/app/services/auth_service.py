from datetime import datetime, timedelta, timezone
from pymongo.database import Database
from uuid import uuid4
from app.config import settings
from app.models.user import UserRole
from app.utils.security import hash_secret, verify_secret

class AuthError(Exception): pass

def normalize_mobile(mobile: str) -> str:
    digits = "".join(ch for ch in str(mobile) if ch.isdigit())
    if digits.startswith("91") and len(digits) == 12:
        digits = digits[2:]
    if len(digits) != 10 or digits[0] not in "6789":
        raise AuthError("Enter a valid 10-digit Indian mobile number")
    return digits

def get_user_by_email(db: Database, email: str) -> dict | None:
    return db.users.find_one({"email": email.strip().lower()})

def authenticate_admin(db: Database, email: str, password: str) -> dict:
    user = get_user_by_email(db, email)
    if not user or user.get("role") != UserRole.ADMIN.value or not user.get("password_hash"):
        raise AuthError("Invalid email or password")
    if not verify_secret(password, user["password_hash"]):
        raise AuthError("Invalid email or password")
    if not user.get("is_active", True):
        raise AuthError("This account has been disabled")
    return user

def send_customer_otp(db: Database, mobile: str) -> None:
    from uuid import uuid4
    mobile = normalize_mobile(mobile)
    now = datetime.now(timezone.utc)
    db.otps.insert_one({
        "id": str(uuid4()),
        "mobile": mobile,
        "otp_hash": hash_secret(settings.otp_demo_code),
        "attempts": 0,
        "is_used": False,
        "expires_at": now + timedelta(minutes=settings.otp_expire_minutes),
        "created_at": now,
    })

def verify_customer_otp(db: Database, name: str, mobile: str, otp_code: str) -> dict:
    mobile = normalize_mobile(mobile)
    name = name.strip()
    if not name:
        raise AuthError("Full name is required")
    otp = db.otps.find_one({"mobile": mobile, "is_used": False},
                           sort=[("created_at", -1)])
    if not otp:
        raise AuthError("No OTP request found for this mobile number. Please request a new OTP.")
    if otp.get("attempts", 0) >= settings.otp_max_attempts:
        raise AuthError("Too many incorrect attempts. Please request a new OTP.")
    expires_at = otp["expires_at"]
    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
    if expires_at < datetime.now(timezone.utc):
        raise AuthError("OTP has expired. Please request a new one.")
    if not verify_secret(otp_code, otp["otp_hash"]):
        db.otps.update_one({"_id": otp["_id"]}, {"$inc": {"attempts": 1}})
        raise AuthError("Incorrect OTP")
    db.otps.update_one({"_id": otp["_id"]}, {"$set": {"is_used": True}})
    user = db.users.find_one({"mobile": mobile})
    now = datetime.now(timezone.utc)
    if user is None:
        user = {
            "id": str(uuid4()),
            "name": name,
            "email": None,
            "mobile": mobile,
            "password_hash": None,
            "role": UserRole.CUSTOMER.value,
            "is_active": True,
            "created_at": now,
            "updated_at": now,
        }
        db.users.insert_one(user)
    elif user.get("role") != UserRole.CUSTOMER.value:
        raise AuthError("This mobile number is registered as an Admin account")
    elif not user.get("is_active", True):
        raise AuthError("This account has been disabled")
    return user
