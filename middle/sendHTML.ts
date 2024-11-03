import type { Context } from "hono";
import { readFile, toContentType, toRelative } from "@/utils/index.ts";

export function sendHTML(c: Context) {
  return async function (path: string) {
    const realPath = toRelative(path);
    const content = await readFile(realPath);
    return c.body(content, 200, {
      ...toContentType("html"),
    });
  };
}
