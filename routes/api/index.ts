// authors.ts
import { Hono } from "hono";
import link from "./link.ts";
const app = new Hono();

app
    .get("/", (c) => c.json("api 接口"))
    .route("/link", link);

export default app;
