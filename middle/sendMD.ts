import { marked } from "marked";
import { toRelative } from "@/utils/path.ts";
import { readFile } from "@/utils/readFile.ts";
import type { XxContext } from "./index.ts";

/**
 * 获取markdown原本格式中的标题
 * @param content
 * @returns
 */
function getTitle(content: string) {
  const title = content.split("\n")[0];
  return title.replace("#", "");
}

/**
 * 发送本地文件为md格式
 * @param path
 * @returns
 */
export function sendMD(c: XxContext) {
  return async function sendMD(path: string) {
    const realPath = toRelative(path);
    try {
      const data = await readFile(realPath);
      const title = getTitle(data);
      const content = marked.parse(data);
      const raw = `
      <!DOCTYPE html>
      <html lang="zh-cn">
          <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="shortcut icon" href="/static/kbd.svg" type="image/x-icon">
              <title>${title}</title>
              <link rel="stylesheet" href="/css/md-base.css">
              <link rel="stylesheet" href="/css/md-light.css">
          </head>
          <body>
              <main style="width:50%;margin:auto;" class="markdown-body">
                  ${content}
              </main>
          </body>
      </html>
    `;
      return c.html(raw);
    } catch (_err) {
      return c.send404!(` "${realPath}" 文件不存在`);
    }
  };
}
