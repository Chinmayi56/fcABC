# Farm Craft Demo Login & Company Settings Update

## Admin demo login
- Email: `admin@farmcraft.com`
- Password: `admin123`

The Admin login screen now uses the requested demo email. The FastAPI configuration and seed logic use the same email. Existing databases that still contain the previous typo (`framcraft68@gmail.com`) are migrated to the new demo email without creating a duplicate Admin, while preserving the existing password hash.

## Company settings
The existing Admin Settings implementation persists company details in MongoDB and exposes the public company data through `GET /api/company`. Admin updates use the protected `PUT /api/admin/company` endpoint. The customer portal loads company/admin contact details from that API and uses them for displayed contact information and generated contact links.

## Validation performed
- Python backend source files parsed successfully with Python AST validation.
- Confirmed the requested demo email/password configuration is present in the Admin frontend and backend.
- Removed development-only `node_modules`, `venv`, caches, `.git`, and build folders from the deliverable ZIP.
- A frontend dependency installation/build could not be completed in this environment because `npm install` timed out; no dependency files were changed by that attempt.
