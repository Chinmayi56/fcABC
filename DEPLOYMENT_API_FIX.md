# FarmCraft production API fix

The backend uses `API_PREFIX=/api` and authentication routes are:
- POST `/api/auth/admin/login`
- POST `/api/auth/customer/send-otp`
- POST `/api/auth/customer/verify-otp`

Both Vite apps now include `.env.production`:
`VITE_API_BASE_URL=https://framcraftt.onrender.com/api`

After extracting this project, rebuild and redeploy each Vercel app. Do not deploy the old `dist` output without rebuilding.
For Render, set `CORS_ORIGINS` to include:
`http://localhost:5173,http://localhost:5174,https://framcraft-aadmin-ten.vercel.app,https://framcraft-abc.vercel.app`
Do not commit the real backend `.env`.
