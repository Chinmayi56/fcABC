import enum
class ProductStatus(str, enum.Enum):
    ACTIVE = "active"
    DRAFT = "draft"
    OUT_OF_STOCK = "out of stock"
