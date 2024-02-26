import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import { mangle } from "marked-mangle";

export const markedConfig = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      if (typeof lang === "string" && lang.includes(":")) {
        lang = lang.substring(0, lang.indexOf(":"));
      }
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
);

const renderer = new markedConfig.Renderer();
renderer.blockquote = (quote) => {
  const quotes = quote
    .split("\n")
    .map((q) => "<p>" + q.replace(/<p>|<\/p>/g, "") + "</p>")
    .join("");
  return `<blockquote>${quotes}</blockquote>`;
};
markedConfig.use(mangle()).use({ renderer });
