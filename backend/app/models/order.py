import enum
class OrderStatus(str, enum.Enum):
    PENDING="Pending"; CONFIRMED="Confirmed"; PROCESSING="Processing"; DISPATCHED="Dispatched"; DELIVERED="Delivered"; CANCELLED="Cancelled"
class PaymentMethod(str, enum.Enum):
    CASH_ON_DELIVERY="Cash on Delivery"
class PaymentStatus(str, enum.Enum):
    PENDING="Pending"; PAID="Paid"; REFUNDED="Refunded"
class OrderMethod(str, enum.Enum):
    DELIVERY="delivery"; VISIT_COMPANY="visit_company"
class Cart: pass
class CartItem: pass
class Order: pass
class OrderItem: pass
