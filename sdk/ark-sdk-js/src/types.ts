export interface ArkClientOptions {
baseUrl: string; // e.g. https://api.arktechnologies.ai or http://localhost:8787
apiKey?: string; // optional public API key if you expose one for client requests
}


export interface ArkUser {
id: string;
email: string;
name?: string;
}


export interface CreditBalance {
userId: string;
balance: number; // current available credits
currency?: string; // optional if you expose monetary values
}


export interface SetupIntentPlaceholder {
clientSecret: string; // for demo purposes only in mock API
}


export interface ArkError {
status: number;
message: string;
code?: string;
}
