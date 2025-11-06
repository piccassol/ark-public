# Ark Public Developer Kit


A safe, public kit to help developers try Ark frontends using a local **Dev API**, typed SDKs (TS + Python), and MSW handlers. Production backend, billing, auth, and infra remain private.


## Contents
- `sdk/ark-sdk-js`: TypeScript SDK for Ark endpoints.
- `sdk/ark-sdk-py`: Python SDK for Ark endpoints.
- `api-server`: Lightweight Dev API for local/dev.
- `msw`: Service Worker/Node handlers to stub requests in the browser or tests.
- `openapi/openapi.yaml`: API schema (source of truth for endpoints/types).
- `docs/ARCHITECTURE.md`: High-level system overview.
- `docs/SECURITY.md`: What is intentionally excluded.


## Quick Start


### 1) Run the Dev API
```bash
cd api-server
npm i
npm run dev
# API on http://localhost:8787
