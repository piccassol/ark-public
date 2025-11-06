<p align="center">
  <img src="https://raw.githubusercontent.com/piccassol/ark-public/main/assets/ark-logo.png" alt="ARK Technologies Logo" width="400" />
</p>

<h1 align="center">ARK Technologies SDK & Developer Kit</h1>

<p align="center"><em>Official SDKs and Developer Tools for the Ark Platform</em></p>

<p align="center">

<!-- Status & Build Badges -->
<a href="https://github.com/piccassol/ark-public/actions">
  <img src="https://img.shields.io/github/actions/workflow/status/piccassol/ark-public/ci.yml?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions Status">
</a>
<a href="https://www.npmjs.com/package/ark-sdk-js">
  <img src="https://img.shields.io/npm/v/ark-sdk-js?style=for-the-badge&logo=npm&logoColor=white" alt="npm version">
</a>
<a href="https://pypi.org/project/ark-sdk/">
  <img src="https://img.shields.io/pypi/v/ark-sdk?style=for-the-badge&logo=pypi&logoColor=white" alt="PyPI version">
</a>
<a href="LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT">
</a>
<a href="https://github.com/piccassol/ark-public">
  <img src="https://img.shields.io/badge/Maintained-Yes-green.svg?style=for-the-badge" alt="Maintained">
</a>

<!-- Stack Badges -->
<br />
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /></a>
<a href="https://python.org/"><img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" /></a>
<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" /></a>
<a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" /></a>
<a href="https://mswjs.io/"><img src="https://img.shields.io/badge/MSW-ffcc00?style=for-the-badge&logo=msw&logoColor=black" /></a>

</p>

---

> Official open-source developer kit for the Ark Platform — including TypeScript & Python SDKs, a lightweight local Dev API, and browser MSW handlers for building and testing integrations.

---

## 🚀 Quick Start

Clone the repo and install dependencies:

```bash
git clone https://github.com/piccassol/ark-public.git
cd ark-public
Run the Dev API
bash
Copy code
cd api-server
npm install
npm run dev
# Available at http://localhost:8787
Install the TypeScript SDK
bash
Copy code
cd sdk/ark-sdk-js
npm install
npm run build
npm pack
# or publish to npm when ready
Use it in your frontend:

ts
Copy code
import { createArkClient } from "ark-sdk-js";

const ark = createArkClient({ baseUrl: "http://localhost:8787" });
const me = await ark.auth.getMe();
const credits = await ark.credits.getBalance();
Install the Python SDK
bash
Copy code
cd sdk/ark-sdk-py
pip install -e .
Use it in Python:

python
Copy code
from ark_sdk import ArkClient

client = ArkClient(base_url="http://localhost:8787")
print(client.auth.get_me())
print(client.credits.get_balance())
📦 SDK Packages
SDK	Language	Package	Description
ark-sdk-js	TypeScript	npmjs.com/package/ark-sdk-js	Lightweight client for Node.js & browser apps
ark-sdk-py	Python	pypi.org/project/ark-sdk	Simple async/sync client for Python apps

⚙️ Dev API
A lightweight local API for building and testing Ark integrations.

bash
Copy code
cd api-server
npm install
npm run dev
Method	Endpoint	Description
GET	/v1/auth/me	Returns demo user info
GET	/v1/credits/balance	Returns example credit balance
POST	/v1/billing/setup-intents	Returns placeholder client secret

🌐 MSW Handlers
Mock Ark API responses directly in the browser using MSW.

bash
Copy code
cd msw
npm install
npm run build
Example integration:

ts
Copy code
import { enableArkMsw } from "ark-msw";

if (process.env.NEXT_PUBLIC_ENABLE_ARK_MSW === "1") {
  enableArkMsw();
}
🧱 Repository Structure
bash
Copy code
ark-public/
├─ sdk/
│  ├─ ark-sdk-js/      # TypeScript SDK
│  └─ ark-sdk-py/      # Python SDK
├─ api-server/          # Local Dev API (Express)
├─ msw/                 # MSW handlers for browser and Node
├─ docs/                # Architecture & security notes
└─ .github/workflows/   # CI pipelines
🧭 Documentation
Architecture: docs/ARCHITECTURE.md

Security Notes: docs/SECURITY.md

🛠️ Development
Requirements
Node.js ≥ 20

Python ≥ 3.9

npm / pip

Build all packages
bash
Copy code
npm run build --workspaces
Run CI locally
bash
Copy code
act workflow_dispatch
📄 License
This project is licensed under the MIT License.
See the LICENSE file for full terms.

<p align="center"> <strong>Build, Test, and Integrate Ark Features Seamlessly</strong><br><br> <a href="https://arktechnologies.ai">🌐 arktechnologies.ai</a> | <a href="https://docs.arktechnologies.ai">📖 Docs</a> | <a href="https://github.com/piccassol">🐙 GitHub</a> </p> ```
