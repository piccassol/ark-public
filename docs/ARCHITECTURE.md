# Ark (Public) Architecture Overview


This document intentionally omits operational details (hosts, ports, compose files, CI/CD, and vendor secrets). It’s designed for readers to understand concepts without enabling unauthorized self-hosting of Ark production services.


## Components
- **Frontends** (Playground, Agents, Mail): Next.js apps that call Ark APIs via the SDK.
- **Public SDK**: Thin typed client for browser/server usage.
- **Hosted API** (private): Handles auth, trials, billing, credits, and workload routing.
- **Data** (private): Postgres/Supabase + object storage; RLS and app-level ACLs.
- **Workers** (private): Queues for async tasks (email, AI jobs, webhooks).


## Typical Flow
1. User signs in → Frontend fetches `GET /v1/auth/me` via SDK.
2. On first run, frontend requests `POST /v1/billing/setup-intents` to collect a payment method (hosted flow).
3. Trial starts only after a valid payment method is attached (enforced in Hosted API).
4. Usage deducts credits; SDK reads `GET /v1/credits/balance` for UI.


> The mock API in this repo supports local UI development only. Production logic is private.
