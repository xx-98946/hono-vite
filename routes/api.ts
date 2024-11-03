// authors.ts
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json("api 接口"));

export default app;
