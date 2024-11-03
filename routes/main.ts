// authors.ts
import { Hono } from "hono";
import apiRoute from "./api/index.ts";
import frontRoute from "./front.ts";

const app = new Hono();

// 后端接口
app.route("/api", apiRoute);

// 页面接口
app.route("/", frontRoute);

export default app;
