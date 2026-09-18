"""add customer mobile authentication and nullable product prices

Revision ID: 9c4f7a2b6d11
Revises: f1a6c8e2b933, b7c1e4a9d602
Create Date: 2026-09-17
"""
from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa

revision: str = "9c4f7a2b6d11"
down_revision: Union[str, tuple[str, str], None] = ("f1a6c8e2b933", "b7c1e4a9d602")
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Customer identity moves from email to mobile. Existing customer emails
    # are preserved; NULL mobile is intentionally allowed for legacy rows.
    op.add_column("users", sa.Column("mobile", sa.String(length=15), nullable=True))
    op.create_index("ix_users_mobile", "users", ["mobile"], unique=True)

    op.alter_column("users", "email", existing_type=sa.String(length=255), nullable=True)

    op.add_column("otps", sa.Column("mobile", sa.String(length=15), nullable=True))
    op.create_index("ix_otps_mobile", "otps", ["mobile"], unique=False)
    # Existing email OTP rows cannot be mapped to mobile safely, so remove
    # the obsolete association after the new mobile column exists.
    op.drop_index("ix_otps_email", table_name="otps")
    op.drop_column("otps", "email")

    op.alter_column("products", "price", existing_type=sa.Numeric(precision=12, scale=2), nullable=True)


def downgrade() -> None:
    op.alter_column("products", "price", existing_type=sa.Numeric(precision=12, scale=2), nullable=False)
    op.add_column("otps", sa.Column("email", sa.String(length=255), nullable=False, server_default=""))
    op.create_index("ix_otps_email", "otps", ["email"], unique=False)
    op.drop_index("ix_otps_mobile", table_name="otps")
    op.drop_column("otps", "mobile")
    op.alter_column("users", "email", existing_type=sa.String(length=255), nullable=False)
    op.drop_index("ix_users_mobile", table_name="users")
    op.drop_column("users", "mobile")
