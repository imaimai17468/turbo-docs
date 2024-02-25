import { component$, useComputed$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { HStack } from "~/styled-system/jsx";
import { Marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import style from "./PostEditor.module.scss";
import { mangle } from "marked-mangle";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { markedHighlight } from "marked-highlight";

export const PostEditor = component$(() => {
  const rawText = useSignal<string>("");
  const markdown = useComputed$(async () => {
    const marked = new Marked(
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

    const renderer = new marked.Renderer();
    renderer.blockquote = (quote) => {
      const quotes = quote
        .split("\n")
        .map((q) => "<p>" + q.replace(/<p>|<\/p>/g, "") + "</p>")
        .join("");
      return `<blockquote>${quotes}</blockquote>`;
    };
    marked.use(mangle()).use({ renderer });

    const markedText = await marked.parse(rawText.value);
    return DOMPurify.sanitize(markedText);
  });

  return (
    <HStack width="100%" height="83vh" alignItems="start">
      <textarea
        class={css({
          width: "50%",
          height: "100%",
          backgroundColor: "background",
          color: "text",
          _focus: {
            outline: "none",
          },
        })}
        bind:value={rawText}
      />
      <div
        class={css({
          height: "83vh",
          borderLeft: "1px solid",
          borderColor: "border",
        })}
      />
      <div dangerouslySetInnerHTML={markdown.value} class={style.editor} />
    </HStack>
  );
});
