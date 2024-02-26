import { component$, useComputed$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { HStack } from "~/styled-system/jsx";
import DOMPurify from "isomorphic-dompurify";
import style from "./PostEditor.module.scss";
import "highlight.js/styles/github-dark.css";
import { markedConfig } from "./markdownConfig";

export const PostEditor = component$(() => {
  const rawText = useSignal<string>("");
  const markdown = useComputed$(async () => {
    const markedText = await markedConfig.parse(rawText.value);
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
