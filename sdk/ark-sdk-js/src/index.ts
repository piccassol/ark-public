export * from "./types";
export { ArkClient } from "./client";


import type { ArkClientOptions } from "./types";
import { ArkClient } from "./client";


export function createArkClient(opts: ArkClientOptions) {
return new ArkClient(opts);
}
