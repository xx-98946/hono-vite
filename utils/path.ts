import { join } from "@std/path";

/**
 * 将绝对路径视为绝对路径
 * @param path
 * @returns
 */
export function toAbsolute(path: string) {
  return join(Deno.cwd(), path);
}

/**
 * 将绝对路径视为相对路径
 * @param path
 * @returns
 */
export function toRelative(path: string) {
  const relativePath = path.startsWith("/") ? `.${path}` : path;
  return toAbsolute(relativePath);
}
