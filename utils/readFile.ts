export async function readFile(path: string) {
  const file = await Deno.readTextFile(path);
  return file;
}
