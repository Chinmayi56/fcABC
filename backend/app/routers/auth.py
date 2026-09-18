from fastapi import APIRouter, Depends, HTTPException, status
from pymongo.database import Database
from app.database.connection import get_db
from app.schemas.auth import AdminLoginRequest, MessageResponse, SendOtpRequest, TokenResponse, UserOut, VerifyOtpRequest
from app.services import auth_service
from app.utils.dependencies import get_current_user
from app.utils.jwt import create_access_token

router = APIRouter(prefix="/auth", tags=["Authentication"])

def user_out(user: dict) -> UserOut:
    return UserOut.model_validate(user)

@router.post("/admin/login", response_model=TokenResponse)
def admin_login(payload: AdminLoginRequest, db: Database = Depends(get_db)):
    try:
        user = auth_service.authenticate_admin(db, payload.email, payload.password)
    except auth_service.AuthError as exc:
        raise HTTPException(status_code=401, detail=str(exc))
    token = create_access_token(user_id=user["id"], email=user.get("email") or "", role=user["role"])
    return TokenResponse(access_token=token, user=user_out(user))

@router.post("/customer/send-otp", response_model=MessageResponse)
def customer_send_otp(payload: SendOtpRequest, db: Database = Depends(get_db)):
    try:
        auth_service.send_customer_otp(db, payload.mobile)
    except auth_service.AuthError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    return MessageResponse(message="OTP sent. Please check and enter the 4-digit code.")

@router.post("/customer/verify-otp", response_model=TokenResponse)
def customer_verify_otp(payload: VerifyOtpRequest, db: Database = Depends(get_db)):
    try:
        user = auth_service.verify_customer_otp(db, payload.name, payload.mobile, payload.otp)
    except auth_service.AuthError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    token = create_access_token(user_id=user["id"], email=user.get("email") or "", role=user["role"])
    return TokenResponse(access_token=token, user=user_out(user))

@router.get("/me", response_model=UserOut)
def get_me(current_user: dict = Depends(get_current_user)):
    return user_out(current_user)

@router.post("/logout", response_model=MessageResponse)
def logout():
    return MessageResponse(message="Logged out successfully")
