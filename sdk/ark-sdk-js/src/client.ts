import { http } from "./http";
import type {
ArkClientOptions,
ArkUser,
CreditBalance,
SetupIntentPlaceholder,
} from "./types";


export class ArkClient {
constructor(private readonly opts: ArkClientOptions) {}


private url(path: string) {
return `${this.opts.baseUrl.replace(/\/$/, "")}${path}`;
}


private headers() {
return this.opts.apiKey ? { Authorization: `Bearer ${this.opts.apiKey}` } : {};
}


auth = {
getMe: async (): Promise<ArkUser> => {
return http<ArkUser>("GET", this.url("/v1/auth/me"), undefined, this.headers());
},
};


credits = {
getBalance: async (): Promise<CreditBalance> => {
return http<CreditBalance>("GET", this.url("/v1/credits/balance"), undefined, this.headers());
},
};


billing = {
// placeholder for pre-trial payment method collection
createSetupIntent: async (): Promise<SetupIntentPlaceholder> => {
return http<SetupIntentPlaceholder>(
"POST",
this.url("/v1/billing/setup-intents"),
{},
this.headers()
);
},
};
}
