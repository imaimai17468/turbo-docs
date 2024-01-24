import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { LuPlusCircle } from "@qwikest/icons/lucide";

export const PostCreateButton = component$(() => {
  return (
    <button
      class={css({
        backgroundColor: "accent",
        padding: "0.5rem",
        borderRadius: "0.25rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
        _hover: { backgroundColor: "accent_hover" },
      })}
    >
      <div
        class={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "0.5rem",
        })}
      >
        <LuPlusCircle />
        <p class={css({ fontWeight: "bold", color: "primary" })}>CREATE</p>
      </div>
    </button>
  );
});
