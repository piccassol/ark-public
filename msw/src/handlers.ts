import { http, HttpResponse } from "msw";


export const arkHandlers = [
http.get("/v1/auth/me", () => {
return HttpResponse.json({ id: "user_123", email: "demo@ark.dev", name: "Ark Demo" });
}),
http.get("/v1/credits/balance", () => {
return HttpResponse.json({ userId: "user_123", balance: 4200 });
}),
http.post("/v1/billing/setup-intents", () => {
return HttpResponse.json({ clientSecret: "seti_dev_123" });
}),
];
