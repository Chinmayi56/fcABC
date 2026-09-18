from datetime import date, datetime
from pydantic import BaseModel, Field

class OfferCreate(BaseModel):
    title: str = Field(min_length=1, max_length=150)
    description: str = Field(default="", max_length=500)
    product: str = Field(default="All Machinery", max_length=200)
    discount_type: str = Field(default="Percentage", pattern="^(Percentage|Flat)$")
    discount_value: float = Field(gt=0)
    start_date: date
    end_date: date
    active: bool = True

class OfferOut(BaseModel):
    id: str
    title: str
    description: str
    code: str
    product: str
    applies_to: str
    discount_type: str
    discount_value: float
    discount: str
    start_date: str
    end_date: str
    status: str
    redemptions: int = 0
    active: bool
    created_at: datetime
    updated_at: datetime
