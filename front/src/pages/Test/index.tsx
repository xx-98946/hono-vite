import raw from "@/md/test.md?raw";
import { Markdown } from "@/comps/Markdown";
import "highlight.js/styles/atom-one-dark.css";

export default function Test() {
  return (
    <main>
      <Markdown>{raw}</Markdown>
    </main>
  );
}
