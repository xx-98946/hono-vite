const mimes = new Map(
  [
    ["html", "text/html;charset=utf-8"],
    ["css", "text/css;charset=utf-8"],
    ["json", "application/json;charset=utf-8"],
    ["js", "text/javascript;charset=utf-8"],
    ["text", "text/plain;charset=utf-8"],
  ],
);

export function toMime(suffix: string) {
  return mimes.get(suffix) || "text/plain";
}

export function toContentType(suffix: string) {
  return { "Content-Type": toMime(suffix) };
}
