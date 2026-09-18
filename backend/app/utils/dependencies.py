from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pymongo.database import Database
from app.database.connection import get_db
from app.models.user import UserRole
from app.utils.jwt import TokenError, decode_access_token

_bearer_scheme = HTTPBearer(auto_error=False)
_CREDENTIALS_EXCEPTION = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)

def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer_scheme),
    db: Database = Depends(get_db),
) -> dict:
    if credentials is None or not credentials.credentials:
        raise _CREDENTIALS_EXCEPTION
    try:
        payload = decode_access_token(credentials.credentials)
        user_id = str(payload["sub"])
    except (TokenError, KeyError, TypeError):
        raise _CREDENTIALS_EXCEPTION
    user = db.users.find_one({"id": user_id})
    if user is None or not user.get("is_active", True):
        raise _CREDENTIALS_EXCEPTION
    return user

def require_admin(current_user: dict = Depends(get_current_user)) -> dict:
    if current_user.get("role") != UserRole.ADMIN.value:
        raise HTTPException(status_code=403, detail="Admin access required")
    return current_user

def require_customer(current_user: dict = Depends(get_current_user)) -> dict:
    if current_user.get("role") != UserRole.CUSTOMER.value:
        raise HTTPException(status_code=403, detail="Customer access required")
    return current_user
