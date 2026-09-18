"""repair auth mobile schema drift

Adds the customer mobile columns/indexes when the database schema is older or
partially out of sync with the ORM model. This is intentionally idempotent so
it is safe against an existing database where the columns already exist.
"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = "d1e2f3a4b5c6"
down_revision: Union[str, None] = "9c4f7a2b6d11"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def _has_column(table: str, column: str) -> bool:
    bind = op.get_bind()
    inspector = sa.inspect(bind)
    return column in {c["name"] for c in inspector.get_columns(table)}


def _has_index(table: str, index_name: str) -> bool:
    bind = op.get_bind()
    inspector = sa.inspect(bind)
    return any(i["name"] == index_name for i in inspector.get_indexes(table))


def upgrade() -> None:
    # Repair only the schema elements required by the current User/OTP models.
    # PostgreSQL DDL is transactional, and the checks make this migration safe
    # when the original migration already created some or all of these items.
    if not _has_column("users", "mobile"):
        op.add_column("users", sa.Column("mobile", sa.String(length=15), nullable=True))

    if not _has_index("users", "ix_users_mobile"):
        op.create_index("ix_users_mobile", "users", ["mobile"], unique=True)

    if not _has_column("otps", "mobile"):
        op.add_column("otps", sa.Column("mobile", sa.String(length=15), nullable=True))

    if not _has_index("otps", "ix_otps_mobile"):
        op.create_index("ix_otps_mobile", "otps", ["mobile"], unique=False)


def downgrade() -> None:
    # Do not remove columns during downgrade because this migration is a
    # repair for schema drift and the preceding migration owns the schema.
    pass
