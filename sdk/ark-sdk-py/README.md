# ark-sdk (Python)


```python
from ark_sdk import ArkClient


client = ArkClient(base_url="http://localhost:8787")
me = client.auth.get_me()
print(me)
credits = client.credits.get_balance()
print(credits)

## `sdk/ark-sdk-py/ark_sdk/__init__.py`


```python
from .client import ArkClient
__all__ = ["ArkClient"]
