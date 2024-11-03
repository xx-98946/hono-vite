import { Hono } from "hono";
import { serveStatic } from "hono/deno";
const app = new Hono();

app.use(
  "/*",
  serveStatic({
    root: "./front/dist/",
  }),
);

export default app;
