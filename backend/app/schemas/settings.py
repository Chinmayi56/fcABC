from pydantic import BaseModel, EmailStr, Field

class AdminProfileUpdate(BaseModel):
    name: str = Field(min_length=1, max_length=150)
    email: EmailStr
    mobile: str | None = Field(default=None, max_length=20)
    mobile_numbers: list[str] = Field(default_factory=list, max_length=10)
    address: str | None = Field(default=None, max_length=500)

class CompanyDetails(BaseModel):
    name: str | None = Field(default=None, max_length=200)
    mobile: str | None = Field(default=None, max_length=20)
    mobile_numbers: list[str] = Field(default_factory=list, max_length=10)
    email: EmailStr | None = None
    address: str | None = Field(default=None, max_length=500)
    website: str | None = Field(default=None, max_length=300)
    gstin: str | None = Field(default=None, max_length=30)
    whatsapp: str | None = Field(default=None, max_length=30)
    address_note: str | None = Field(default=None, max_length=500)
    # Read-only administrator details exposed to the public company site.
    admin_name: str | None = None
    admin_email: EmailStr | None = None
    admin_mobile: str | None = None
    admin_mobile_numbers: list[str] = Field(default_factory=list, max_length=10)

class CompanyDetailsUpdate(CompanyDetails):
    admin_name: str | None = None
    admin_email: EmailStr | None = None
    admin_mobile: str | None = None
    admin_mobile_numbers: list[str] = Field(default_factory=list, max_length=10)

class NotificationOut(BaseModel):
    id: str
    type: str
    order_id: str | None = None
    order_number: str | None = None
    customer_id: str | None = None
    message: str
    read: bool
    created_at: str

class NotificationsResponse(BaseModel):
    items: list[NotificationOut]
    unread_count: int
    product_booking_unread_count: int
