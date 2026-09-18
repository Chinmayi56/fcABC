# FarmCraft Feature Modification Summary

Implemented from the supplied FarmCraft modification requirements.

## Files changed
### Backend
- `backend/app/models/user.py` — nullable email + normalized customer mobile.
- `backend/app/models/otp.py` — OTP keyed by mobile.
- `backend/app/schemas/auth.py` — customer Name + Mobile OTP requests; mobile in user response.
- `backend/app/services/auth_service.py` — mobile OTP, customer create/find by mobile, Indian mobile validation.
- `backend/app/routers/auth.py` — mobile OTP endpoints; JWT response remains unchanged in structure.
- `backend/app/utils/jwt.py` — supports nullable customer email.
- `backend/app/models/product.py` — nullable product price.
- `backend/app/schemas/product.py` — nullable price and discount validation.
- `backend/app/services/product_service.py` — safe NULL price/discount update behavior.
- `backend/app/services/order_service.py` — no cart/order purchase for products without a price.
- `backend/app/routers/customers.py` — Admin customer responses expose mobile and don't fabricate email.
- `backend/alembic/versions/9c4f7a2b6d11_customer_mobile_nullable_price.py` — migration for mobile OTP identity, nullable customer email, nullable product price, and migration-head merge.
- `backend/tests/test_auth.py` and `backend/tests/test_products.py` — customer OTP tests updated for mobile flow.

### Admin
- `admin/src/types/index.ts` — nullable product price and customer mobile.
- `admin/src/data/productApi.ts` — maps NULL price correctly.
- `admin/src/components/products/ProductForm.tsx` — free-text category, optional price, discount validation.
- `admin/src/pages/AddProduct.tsx` — empty price sent as NULL.
- `admin/src/pages/EditProduct.tsx` — price/discount can be cleared.
- `admin/src/pages/Products.tsx` — NULL price displays Price on Request.
- `admin/src/pages/ProductDetail.tsx` — NULL-safe price display.
- `admin/src/pages/Customers.tsx` and `CustomerDetail.tsx` — mobile display and `Not provided` for empty email/mobile.

### Customer
- `customer/src/pages.js` — Name + Mobile + OTP login; dynamic category filtering; NULL-price cart display.
- `customer/src/services.js` — mobile authentication and NULL-safe product normalization.
- `customer/src/components.js` — reusable `Price on Request` display.
- `customer/src/main.js` — blocks cart add for products without a price with an enquiry message.

## Database migration
Alembic revision: `9c4f7a2b6d11`
- Adds unique nullable `users.mobile`.
- Makes `users.email` nullable for customer accounts.
- Changes OTP storage from email association to mobile association.
- Makes `products.price` nullable.
- Existing product price values are preserved.

## Customer authentication
Full Name + Mobile Number -> demo OTP `1234` -> create/find customer by mobile -> JWT.
Existing customer names are not overwritten during login.

## Product behavior
- Price is optional and stored as NULL when empty.
- Discount price requires a regular price and cannot exceed it.
- Customer catalog keeps products with NULL price visible.
- NULL price displays `Price on Request`.
- Products without a price cannot be added to the cart/order; priced products retain the existing purchase flow.

## Dynamic categories
Admin category is now free text. Customer filters are derived from actual backend products instead of a hardcoded category list.

## Validation performed
- Python compilation: passed for backend app and tests.
- JavaScript syntax checks: passed for modified customer JS files.
- `alembic heads`: passed; new migration is the single Alembic head.
- Full backend pytest could not run in this build environment because the installed environment lacks the PostgreSQL `psycopg` package.
- Frontend production builds could not be completed in this environment because the provided customer dependencies have a missing platform-native Rolldown optional binding and Admin dependencies were not installed. Source changes and JS syntax were checked; run `npm install`/`npm ci` in each frontend before deployment.

## Remaining deployment step
Run the backend migration before using the new schema:
`alembic upgrade head`

Then install/build:
- `backend`: install requirements and start FastAPI as currently configured.
- `admin`: `npm install` then `npm run build`
- `customer`: `npm install` then `npm run build`
