from app.main import app
from app.schemas.auth import AdminLoginRequest, VerifyOtpRequest
from app.schemas.product import ProductCreate
from app.schemas.order import CartProductOut, OrderItemOut

def test_expected_routes_exist():
    paths={r.path for r in app.routes}
    for path in ["/api/health","/api/auth/admin/login","/api/auth/customer/send-otp",
                 "/api/auth/customer/verify-otp","/api/products","/api/cart","/api/orders",
                 "/api/admin/orders","/api/admin/profile","/api/admin/company",
                 "/api/company","/api/admin/notifications"]:
        assert path in paths

def test_customer_identity_contract():
    payload=VerifyOtpRequest(name="Test Customer",mobile="9876543210",otp="1234")
    assert payload.name=="Test Customer"
    assert payload.mobile=="9876543210"

def test_product_price_is_optional():
    p=ProductCreate(name="Test",category="Equipment",sku="TEST-001",price=None,stock=0)
    assert p.price is None


def test_order_price_contract_allows_null():
    assert CartProductOut(id="00000000-0000-0000-0000-000000000001", name="Test", sku="T-1", price=None, stock=1).price is None
    item = OrderItemOut(id="00000000-0000-0000-0000-000000000002", product_id="00000000-0000-0000-0000-000000000001", product_name="Test", sku="T-1", quantity=1, unit_price=None, subtotal=None)
    assert item.unit_price is None
    assert item.subtotal is None
