<div align="center">
  <img src="./assets/ark-logo.png" alt="ARK Technologies Logo" width="400"/>

# ARK Technologies SDK & Developer Kit

<p><em>Official SDKs and Developer Tools for the Ark Platform</em></p>

<!-- Main Status Badges -->
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/piccassol/ark-public/ci.yml?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/piccassol/ark-public/actions)
[![npm (scoped)](https://img.shields.io/npm/v/ark-sdk-js?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/ark-sdk-js)
[![PyPI](https://img.shields.io/pypi/v/ark-sdk?style=for-the-badge&logo=pypi&logoColor=white)](https://pypi.org/project/ark-sdk/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Maintained](https://img.shields.io/badge/Maintained-Yes-green.svg?style=for-the-badge)](https://github.com/piccassol/ark-public)

<!-- Technology Stack -->
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MSW](https://img.shields.io/badge/MSW-ffcc00?style=for-the-badge&logo=msw&logoColor=black)](https://mswjs.io/)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-85EA2D?style=for-the-badge&logo=openapi-initiative&logoColor=black)](https://swagger.io/specification/)

---

**Official open-source developer kit for the Ark Platform — including TypeScript & Python SDKs, a lightweight local API, and browser MSW handlers for building and testing integrations.**

[🚀 Quick Start](#quick-start) • [📦 SDK Packages](#sdk-packages) • [🧩 Dev API](#dev-api) • [🌐 MSW Handlers](#msw-handlers) • [📘 Docs](#documentation)

</div>

---

## 💡 Overview

The **Ark Developer Kit** allows you to build, test, and integrate Ark features locally or in your own environment.  
It provides:

- 🧠 **Typed SDKs** for TypeScript & Python  
- 🧩 **Lightweight Dev API** to simulate production endpoints  
- 🧰 **MSW Handlers** to stub API responses directly in the browser  
- 📜 **OpenAPI Schema** to generate client code or documentation  

---

## 📦 SDK Packages

### TypeScript SDK
```bash
npm install ark-sdk-js
ts
Copy code
import { createArkClient } from "ark-sdk-js";

const ark = createArkClient({ baseUrl: "http://localhost:8787" });
const me = await ark.auth.getMe();
const credits = await ark.credits.getBalance();
Python SDK
bash
Copy code
pip install ark-sdk
python
Copy code
from ark_sdk import ArkClient

client = ArkClient(base_url="http://localhost:8787")
print(client.auth.get_me())
print(client.credits.get_balance())
⚙️ Dev API
The Dev API (powered by Express) runs locally and mimics core Ark endpoints.

bash
Copy code
cd api-server
npm install
npm run dev
# http://localhost:8787
Endpoints:

Method	Path	Description
GET	/v1/auth/me	Returns demo user
GET	/v1/credits/balance	Returns example credits balance
POST	/v1/billing/setup-intents	Returns placeholder client secret

🌐 MSW Handlers
Run Ark in mock mode without a server — ideal for frontend demos, Storybook, or Next.js dev mode.

bash
Copy code
cd msw
npm install
npm run build
ts
Copy code
import { enableArkMsw } from "ark-msw";
enableArkMsw();
🧾 OpenAPI Specification
You can use openapi/openapi.yaml to generate or validate SDKs.
Supports all standard endpoints and response schemas for Ark integration.

🛠️ Development
Requirements
Node.js ≥ 20

Python ≥ 3.9

npm / pip

Build All Packages
bash
Copy code
npm run build --workspaces
Run CI locally
bash
Copy code
act workflow_dispatch
🧱 Repository Structure
bash
Copy code
ark-public/
├─ sdk/
│  ├─ ark-sdk-js/       # TypeScript SDK
│  └─ ark-sdk-py/       # Python SDK
├─ api-server/           # Local Dev API
├─ msw/                  # Browser/Node handlers
├─ docs/                 # Architecture & security notes
└─ .github/workflows/    # CI pipelines
🧭 Documentation
Architecture: docs/ARCHITECTURE.md

Security Notes: docs/SECURITY.md

API Reference: openapi/openapi.yaml

📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

<div align="center">
Build, Test, and Integrate Ark Features Seamlessly

🌐 arktechnologies.ai • 📖 Docs • 🐙 GitHub

</div> ```
