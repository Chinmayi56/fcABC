"""Legacy compatibility placeholder.

The running application uses MongoDB directly through app.database.connection.
This module is retained only so old imports do not fail if referenced by tooling.
"""
class Base:
    pass
