from typing import Optional, Dict, Any
from .http import http
from .types import ArkUser, CreditBalance, SetupIntentPlaceholder


class ArkClient:
def __init__(self, base_url: str, api_key: Optional[str] = None):
self.base_url = base_url.rstrip("/")
self.api_key = api_key


def _url(self, path: str) -> str:
return f"{self.base_url}{path}"


def _headers(self) -> Dict[str, str]:
return {"Authorization": f"Bearer {self.api_key}"} if self.api_key else {}


class _Auth:
def __init__(self, outer: "ArkClient"): self._o = outer
def get_me(self) -> ArkUser:
data = http("GET", self._o._url("/v1/auth/me"), headers=self._o._headers())
return ArkUser(**data)


class _Credits:
def __init__(self, outer: "ArkClient"): self._o = outer
def get_balance(self) -> CreditBalance:
data = http("GET", self._o._url("/v1/credits/balance"), headers=self._o._headers())
return CreditBalance(**data)


class _Billing:
def __init__(self, outer: "ArkClient"): self._o = outer
def create_setup_intent(self) -> SetupIntentPlaceholder:
data = http("POST", self._o._url("/v1/billing/setup-intents"), json={}, headers=self._o._headers())
return SetupIntentPlaceholder(**data)


@property
def auth(self) -> "ArkClient._Auth":
return ArkClient._Auth(self)


@property
def credits(self) -> "ArkClient._Credits":
return ArkClient._Credits(self)


@property
def billing(self) -> "ArkClient._Billing":
return ArkClient._Billing(self)
