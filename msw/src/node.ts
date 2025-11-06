import { setupServer } from "msw/node";
import { arkHandlers } from "./handlers";


export function createArkMswServer() {
return setupServer(...arkHandlers);
}
