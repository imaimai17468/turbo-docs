import { component$, Slot } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const Button = component$(() => {
  return (
    <button
      class={css({
        color: "text",
        borderWidth: "1px",
        borderColor: "accent",
        borderRadius: "0.25rem",
        padding: "0.5rem 1rem",
        transition: "all 0.2s ease",
        cursor: "pointer",
        _hover: { backgroundColor: "accent", color: "primary" },
      })}
    >
      <Slot />
    </button>
  );
});
