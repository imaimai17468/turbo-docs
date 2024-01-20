import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const Input = component$(() => {
  return (
    <input
      class={css({
        padding: "0.5rem",
        fontSize: "1rem",
        border: "1px solid #5a5a5a",
        borderRadius: "0.25rem",
        backgroundColor: "primary",
        color: "text",
        _focus: {
          outline: "none",
          borderColor: "accent",
        }
      })}
    />
  );
});
