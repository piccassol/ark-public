mport httpx
from .types import ArkError


async def http_async(method: str, url: str, json=None, headers=None):
async with httpx.AsyncClient() as client:
res = await client.request(method, url, json=json, headers=headers)
if res.status_code >= 400:
raise ArkError(res.status_code, res.text)
return res.json() if res.text else None


def http(method: str, url: str, json=None, headers=None):
res = httpx.request(method, url, json=json, headers=headers)
if res.status_code >= 400:
raise ArkError(res.status_code, res.text)
return res.json() if res.text else None
