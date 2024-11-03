import { nanoid } from "nanoid"

/**
 * 区分开发环境和部署环境
 * 部署环境不允许设置
 * @returns
 */
function getKV() {
    if (Deno.env.get("MODE")) {
        return Deno.openKv("https://api.deno.com/databases/a9fb438c-bc3f-455f-8b13-ec32ef84b2f0/connect");
    } else {
        return Deno.openKv();
    }
}

export const kv = await getKV();

export const randomId = nanoid;