import secrets,string,uuid
from datetime import datetime, timezone, date
from decimal import Decimal
from pymongo.database import Database
from app.models.order import OrderMethod,OrderStatus,PaymentMethod,PaymentStatus
from app.models.product import ProductStatus

def _code(prefix,n=8): return prefix+''.join(secrets.choice(string.ascii_uppercase+string.digits) for _ in range(n))
_ORDER_METHOD_VALUES={x.value for x in OrderMethod}

def _resolve_order_method(value):
    if value is None or value=="": return OrderMethod.DELIVERY.value
    v=str(value).strip().lower()
    if v not in _ORDER_METHOD_VALUES: raise ValueError("Invalid order method")
    return v

def _product(db,pid):
    return db.products.find_one({"id":str(pid)})

def get_or_create_cart(db,user_id):
    user_id=str(user_id)
    cart=db.carts.find_one({"customer_id":user_id})
    if not cart:
        now=datetime.now(timezone.utc); cart={"id":str(uuid.uuid4()),"customer_id":user_id,"created_at":now,"updated_at":now}
        db.carts.insert_one(cart)
    return cart

def cart_out(db,cart):
    items=[]; total=Decimal("0")
    rows=list(db.cart_items.find({"cart_id":cart["id"]}))
    for i in rows:
        p=_product(db,i["product_id"])
        if not p: continue
        price=p.get("price")
        discount=p.get("discount_price")
        effective=discount if discount is not None else price
        if effective is not None: total += Decimal(str(effective))*i["quantity"]
        items.append({"id":i["id"],"quantity":i["quantity"],"product":{
            "id":p["id"],"name":p["name"],"sku":p["sku"],"price":price,
            "discount_price":discount,"stock":p.get("stock",0),"image":p.get("image")
        }})
    return {"id":cart["id"],"items":items,"total":total}

def add_item(db,user_id,product_id,quantity):
    if quantity<=0: raise ValueError("Quantity must be greater than zero")
    cart=get_or_create_cart(db,user_id); p=_product(db,product_id)
    if not p: raise ValueError("Product not found")
    if p.get("status")!=ProductStatus.ACTIVE.value: raise ValueError("Product is not available for purchase")
    item=db.cart_items.find_one({"cart_id":cart["id"],"product_id":str(product_id)})
    newq=(item["quantity"] if item else 0)+quantity
    if newq>p.get("stock",0): raise ValueError("Requested quantity exceeds available stock")
    now=datetime.now(timezone.utc)
    if item: db.cart_items.update_one({"id":item["id"]},{"$set":{"quantity":newq}})
    else: db.cart_items.insert_one({"id":str(uuid.uuid4()),"cart_id":cart["id"],"product_id":str(product_id),"quantity":quantity,"created_at":now})
    db.carts.update_one({"id":cart["id"]},{"$set":{"updated_at":now}})
    return get_or_create_cart(db,user_id)

def update_item(db,user_id,item_id,quantity):
    if quantity<=0: raise ValueError("Quantity must be greater than zero")
    cart=get_or_create_cart(db,user_id); item=db.cart_items.find_one({"id":str(item_id),"cart_id":cart["id"]})
    if not item: raise ValueError("Cart item not found")
    p=_product(db,item["product_id"])
    if not p: raise ValueError("Product not found")
    if p.get("status")!=ProductStatus.ACTIVE.value: raise ValueError("Product is not available for purchase")
    if quantity>p.get("stock",0): raise ValueError("Requested quantity exceeds available stock")
    db.cart_items.update_one({"id":item["id"]},{"$set":{"quantity":quantity}})
    db.carts.update_one({"id":cart["id"]},{"$set":{"updated_at":datetime.now(timezone.utc)}})
    return get_or_create_cart(db,user_id)

def remove_item(db,user_id,item_id):
    cart=get_or_create_cart(db,user_id)
    if db.cart_items.delete_one({"id":str(item_id),"cart_id":cart["id"]}).deleted_count==0: raise ValueError("Cart item not found")
    db.carts.update_one({"id":cart["id"]},{"$set":{"updated_at":datetime.now(timezone.utc)}})
    return get_or_create_cart(db,user_id)

def clear_cart(db,user_id):
    cart=get_or_create_cart(db,user_id); db.cart_items.delete_many({"cart_id":cart["id"]})
    db.carts.update_one({"id":cart["id"]},{"$set":{"updated_at":datetime.now(timezone.utc)}})
    return get_or_create_cart(db,user_id)

def create_order(db,user,payload):
    order_method=_resolve_order_method(getattr(payload,"order_method",None))
    cart=get_or_create_cart(db,user["id"]); items=list(db.cart_items.find({"cart_id":cart["id"]}))
    if not items: raise ValueError("Cart is empty")
    rows=[]; total=Decimal("0")
    for item in items:
        p=_product(db,item["product_id"])
        if not p: raise ValueError("A product in your cart no longer exists")
        if p.get("status")!=ProductStatus.ACTIVE.value: raise ValueError(f'{p["name"]} is no longer available for purchase')
        qty=item["quantity"]
        if qty<=0: raise ValueError(f'Invalid quantity for {p["name"]}')
        if p.get("stock",0)<qty: raise ValueError(f'Insufficient stock for {p["name"]}')
        raw_price = p.get("discount_price") if p.get("discount_price") is not None else p.get("price")
        price = Decimal(str(raw_price)) if raw_price is not None else None
        offer_snapshot = None
        if price is not None:
            today = date.today().isoformat()
            offers = list(db.offers.find({"active": True, "start_date": {"$lte": today}, "end_date": {"$gte": today}}).sort("created_at", -1))
            applicable = next((o for o in offers if o.get("product") in ("All Machinery", p.get("name"))), None)
            if applicable:
                value = Decimal(str(applicable.get("discount_value", 0)))
                discount_amount = (price * value / Decimal("100")) if applicable.get("discount_type") == "Percentage" else value
                discount_amount = max(Decimal("0"), min(price, discount_amount))
                price = price - discount_amount
                offer_snapshot = {"id": applicable["id"], "title": applicable["title"], "code": applicable["code"], "discount_type": applicable["discount_type"], "discount_value": float(value), "discount_amount": float(discount_amount)}
        subtotal = price * qty if price is not None else None
        if subtotal is not None:
            total += subtotal
        rows.append((item,p,price,subtotal,offer_snapshot))
    now=datetime.now(timezone.utc)
    oid=str(uuid.uuid4())
    order={"id":oid,"order_number":"FC-"+str(uuid.uuid4())[:10].upper(),
           "purchase_code":_code("FC-"),"customer_id":str(user["id"]),
           "status":OrderStatus.PENDING.value,"order_method":order_method,
           "payment_method":PaymentMethod.CASH_ON_DELIVERY.value,
           "payment_status":PaymentStatus.PENDING.value,"total_amount":float(total),
           "shipping_address":payload.address,
           "customer_snapshot":{"id":str(user["id"]),"name":user.get("name"),"email":user.get("email"),"mobile":user.get("mobile") or payload.mobile},
           "created_at":now,"updated_at":now}
    db.orders.insert_one(order)
    for item,p,price,subtotal,offer_snapshot in rows:
        db.order_items.insert_one({"id":str(uuid.uuid4()),"order_id":oid,"product_id":p["id"],
          "product_name":p["name"],"sku":p["sku"],"quantity":item["quantity"],
          "unit_price":float(price) if price is not None else None,
          "subtotal":float(subtotal) if subtotal is not None else None,
          "offer":offer_snapshot,
          "configuration":payload.configuration})
        db.products.update_one({"id":p["id"],"stock":{"$gte":item["quantity"]}},
                               {"$inc":{"stock":-item["quantity"]},"$set":{"updated_at":now}})
        db.stock_movements.insert_one({"id":str(uuid.uuid4()),"product_id":p["id"],
          "quantity_change":-item["quantity"],"reason":"Order","reference_id":order["order_number"],"created_at":now})
    db.cart_items.delete_many({"cart_id":cart["id"]})
    db.carts.update_one({"id":cart["id"]},{"$set":{"updated_at":now}})
    # One durable notification per successful order. The unique index on
    # (type, order_id) prevents duplicates across retries/polling.
    db.notifications.update_one(
        {"type":"product_booking","order_id":oid},
        {"$setOnInsert":{
            "id":str(uuid.uuid4()), "type":"product_booking",
            "order_id":oid, "order_number":order["order_number"],
            "customer_id":str(user["id"]),
            "message":f'New product booking {order["order_number"]} from {user.get("name") or "Customer"}',
            "read":False, "created_at":now
        }},
        upsert=True
    )
    return get_order(db,oid)

def _order_out(db,o):
    if not o:return None
    o=dict(o); o.pop("_id",None)
    its=[]
    for x in db.order_items.find({"order_id":o["id"]}):
        x.pop("_id",None); its.append(x)
    o["items"]=its
    return o

def list_orders(db,user=None):
    q={"customer_id":str(user["id"])} if user else {}
    return [_order_out(db,x) for x in db.orders.find(q).sort("created_at",-1)]

def get_order(db,oid,user=None):
    q={"id":str(oid)}
    if user:q["customer_id"]=str(user["id"])
    return _order_out(db,db.orders.find_one(q))

def update_order_status(db,order_ref,status_value):
    o=db.orders.find_one({"id":str(order_ref)}) or db.orders.find_one({"order_number":str(order_ref)})
    if not o:return None
    db.orders.update_one({"id":o["id"]},{"$set":{"status":getattr(status_value,"value",status_value),"updated_at":datetime.now(timezone.utc)}})
    return get_order(db,o["id"])
