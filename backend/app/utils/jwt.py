from datetime import datetime, timedelta, timezone
from typing import Any
import jwt
from jwt import PyJWTError
from app.config import settings

class TokenError(Exception): pass

def create_access_token(*, user_id: str, email: str | None, role: str) -> str:
    now = datetime.now(timezone.utc)
    payload: dict[str, Any] = {
        "sub": str(user_id), "email": email, "role": role,
        "iat": now, "exp": now + timedelta(minutes=settings.jwt_access_token_expire_minutes)
    }
    return jwt.encode(payload, settings.jwt_secret_key, algorithm=settings.jwt_algorithm)

def decode_access_token(token: str) -> dict:
    try:
        payload = jwt.decode(token, settings.jwt_secret_key, algorithms=[settings.jwt_algorithm])
    except PyJWTError as exc:
        raise TokenError(str(exc)) from exc
    if "sub" not in payload or "role" not in payload:
        raise TokenError("Token payload is missing required claims")
    return payload
