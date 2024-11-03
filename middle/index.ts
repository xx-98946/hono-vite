import type { Context } from "hono";
import type { MiddlewareHandler } from "hono";
export interface XxContext extends Context {
  sendCSS?: (path: string) => Promise<Response>;
  sendMD?: (path: string) => Promise<Response>;
  sendHTML?: (path: string) => Promise<Response>;
  send404?: (path: string) => Response;
}

import { sendCSS } from "./sendCSS.ts";
import { sendMD } from "./sendMD.ts";
import { sendHTML } from "./sendHTML.ts";
import { send404 } from "./send404.ts";

export const xx: MiddlewareHandler = async function (c: XxContext, next) {
  // 注意优先级，否则不能被调用
  c.send404 = send404(c);
  c.sendCSS = sendCSS(c);
  c.sendMD = sendMD(c);
  c.sendHTML = sendHTML(c);
  await next();
};
