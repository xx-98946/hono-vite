import { toContentType } from "@/utils/index.ts";
import type { Context } from "hono";

export function send404(c: Context) {
  return function (message: string) {
    return c.body(`<h1>错误 : 404 </h1><p>消息：${message}</p>`, 404, {
      ...toContentType("html"),
    });
  };
}
