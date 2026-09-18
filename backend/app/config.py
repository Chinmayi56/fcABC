from functools import lru_cache
from typing import List
from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8",
                                      extra="ignore", case_sensitive=False)
    app_name: str = "Farm-Craft API"
    app_env: str = "development"
    app_debug: bool = True
    api_prefix: str = "/api"
    api_version: str = "1.0.0"

    mongo_url: str = "mongodb://127.0.0.1:27017"
    mongo_db_name: str = "farmcraft_db"

    cors_origins: str = "http://localhost:5173,http://localhost:5174"

    jwt_secret_key: str = "insecure-dev-only-secret-change-me"
    jwt_algorithm: str = "HS256"
    jwt_access_token_expire_minutes: int = 1440

    otp_expire_minutes: int = 5
    otp_demo_code: str = "1234"
    otp_max_attempts: int = 5

    demo_admin_email: str = "admin@farmcraft.com"
    demo_admin_password: str = "admin123"

    @field_validator("app_debug", mode="before")
    @classmethod
    def _parse_bool(cls, v):
        if isinstance(v, str):
            return v.strip().lower() in {"1","true","yes","on"}
        return v

    @property
    def cors_origins_list(self) -> List[str]:
        return [x.strip() for x in self.cors_origins.split(",") if x.strip()]

@lru_cache
def get_settings() -> Settings:
    return Settings()

settings = get_settings()
