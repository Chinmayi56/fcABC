import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database.connection import check_database_connection,ensure_indexes_and_seed,connection_target_description
from app.routers import auth,health,products,orders,stock,reports,customers,admin_settings,offers,offers

logger=logging.getLogger("app.startup")

@asynccontextmanager
async def lifespan(app:FastAPI):
    try:
        ensure_indexes_and_seed()
        if check_database_connection():
            logger.info("MongoDB connection OK (%s)",connection_target_description())
        else:
            logger.error("MongoDB connection FAILED (%s)",connection_target_description())
    except Exception as exc:
        logger.error("MongoDB startup initialization failed (%s)",type(exc).__name__)
    yield

app=FastAPI(title=settings.app_name,version=settings.api_version,
            description="Farm-Craft backend API",lifespan=lifespan)
app.add_middleware(CORSMiddleware,allow_origins=settings.cors_origins_list,
                   allow_credentials=True,allow_methods=["*"],allow_headers=["*"])
app.include_router(health.router,prefix=settings.api_prefix)
app.include_router(auth.router,prefix=settings.api_prefix)
app.include_router(products.router,prefix=settings.api_prefix)
app.include_router(orders.router,prefix=settings.api_prefix)
app.include_router(stock.router,prefix=settings.api_prefix)
app.include_router(reports.router,prefix=settings.api_prefix)
app.include_router(customers.router,prefix=settings.api_prefix)
app.include_router(admin_settings.router,prefix=settings.api_prefix)
app.include_router(offers.router,prefix=settings.api_prefix)

@app.get("/")
def root():
    return {"message":f"{settings.app_name} is running","docs":"/docs","health":f"{settings.api_prefix}/health"}
