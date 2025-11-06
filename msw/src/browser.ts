import { setupWorker } from "msw";
import { arkHandlers } from "./handlers";


export function enableArkMsw() {
if (typeof window === "undefined") return;
const worker = setupWorker(...arkHandlers);
worker.start({ onUnhandledRequest: "bypass" });
}
