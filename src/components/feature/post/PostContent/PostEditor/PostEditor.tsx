import { component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import type { PostTexts } from "../../../../../types/PostText";

export const PostEditor = component$(() => {
  const texts = useSignal<PostTexts>([{ text: "" }]);

  return (
    <>
      {texts.value.map((text, index) => (
        <input
          key={index}
          class={css({
            background: "transparent",
            color: "text",
            fontSize: "1rem",
            _focus: {
              outline: "none",
            },
          })}
          value={text.text}
          onInput$={(_, el) => {
            texts.value[index].text = el.value;
          }}
        />
      ))}
    </>
  );
});
