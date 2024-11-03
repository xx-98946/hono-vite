import { Hono } from "hono";
import route from "./routes/main.ts";
import { logger } from "hono/logger";
import { xx } from "./middle/index.ts";
const app = new Hono();

app.use(logger()).use(xx).route("/", route);

Deno.serve(app.fetch);
