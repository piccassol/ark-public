from dataclasses import dataclass
from typing import Optional


@dataclass
class ArkUser:
id: str
email: str
name: Optional[str] = None


@dataclass
class CreditBalance:
userId: str
balance: int
currency: Optional[str] = None


@dataclass
class SetupIntentPlaceholder:
clientSecret: str


class ArkError(Exception):
def __init__(self, status: int, message: str, code: Optional[str] = None):
super().__init__(message)
self.status = status
self.code = code
