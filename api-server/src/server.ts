import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());


// Health
app.get("/health", (_req, res) => res.json({ ok: true }));


// Auth
app.get("/v1/auth/me", (_req, res) => {
res.json({ id: "user_123", email: "demo@ark.dev", name: "Ark Demo" });
});


// Credits
app.get("/v1/credits/balance", (_req, res) => {
res.json({ userId: "user_123", balance: 4200 });
});


// Billing placeholder
app.post("/v1/billing/setup-intents", (_req, res) => {
res.json({ clientSecret: "seti_dev_123" });
});


const PORT = parseInt(process.env.PORT || "8787", 10);
app.listen(PORT, () => console.log(`Dev API listening on http://localhost:${PORT}`));
