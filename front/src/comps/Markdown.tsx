import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const marked = new Marked(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
);

interface Props {
  children: string;
}
export function Markdown(props: Props) {
  const content = marked.parse(props.children) as string;
  return (
    <div class="prose max-w-full">
      <div innerHTML={content} class="w-2/3 mx-auto"></div>
    </div>
  );
}
