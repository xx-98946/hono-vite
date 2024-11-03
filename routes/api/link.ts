// authors.ts
import { Hono } from "hono";
import { kv, randomId } from "@/utils/index.ts";

const app = new Hono();

app
    .post("/", async c => {
        const params = await c.req.json();
        console.log("params", params)
        return c.json("添加成功")
    })
    .get("/", async c => {
        const entries = kv.list({ prefix: ["link"] })
        const body = await Array.fromAsync(entries);
        return c.json(body)
    })
    .delete("/", async c => {
        const params = await c.req.json();
        console.log(params)
        return c.json("删除成功")
    })

export default app;
