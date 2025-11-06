import { ArkError } from "./types";


export async function http<T>(
method: "GET" | "POST",
url: string,
body?: unknown,
headers: Record<string, string> = {}
): Promise<T> {
const res = await fetch(url, {
method,
headers: {
"content-type": "application/json",
...headers,
},
body: body ? JSON.stringify(body) : undefined,
});


if (!res.ok) {
const msg = await safeText(res);
const err: ArkError = {
status: res.status,
message: msg || `Request failed: ${res.status}`,
};
throw err;
}


const text = await res.text();
return text ? (JSON.parse(text) as T) : (undefined as unknown as T);
}


async function safeText(res: Response): Promise<string | undefined> {
try {
return await res.text();
} catch {
return undefined;
}
}
