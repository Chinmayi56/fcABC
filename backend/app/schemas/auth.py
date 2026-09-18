"""Pydantic request/response schemas for authentication endpoints."""
import uuid
from datetime import datetime

from pydantic import BaseModel, EmailStr, Field, field_validator

from app.models.user import UserRole


class AdminLoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1)


class MobileRequestMixin(BaseModel):
    mobile: str = Field(min_length=10, max_length=15)

    @field_validator("mobile")
    @classmethod
    def validate_mobile(cls, value: str) -> str:
        digits = "".join(ch for ch in value if ch.isdigit())
        if digits.startswith("91") and len(digits) == 12:
            digits = digits[2:]
        if len(digits) != 10 or digits[0] not in "6789":
            raise ValueError("Enter a valid 10-digit Indian mobile number")
        return digits


class SendOtpRequest(MobileRequestMixin):
    pass


class VerifyOtpRequest(MobileRequestMixin):
    name: str = Field(min_length=1, max_length=150)
    otp: str = Field(min_length=4, max_length=4)


class UserOut(BaseModel):
    id: uuid.UUID
    name: str | None = None
    email: EmailStr | None = None
    mobile: str | None = None
    mobile_numbers: list[str] = Field(default_factory=list, max_length=10)
    address: str | None = None
    role: UserRole
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut


class MessageResponse(BaseModel):
    message: str
