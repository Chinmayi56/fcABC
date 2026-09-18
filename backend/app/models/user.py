import enum
class UserRole(str, enum.Enum):
    ADMIN = "ADMIN"
    CUSTOMER = "CUSTOMER"
