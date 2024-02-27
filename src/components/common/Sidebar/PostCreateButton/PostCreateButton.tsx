import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { LuPlusCircle } from "@qwikest/icons/lucide";
import { HStack } from "~/styled-system/jsx";

export const PostCreateButton = component$(() => {
  return (
    <button
      class={css({
        width: "100%",
        backgroundColor: "accent",
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
        _hover: { backgroundColor: "accent_hover" },
      })}
      area-label="Create Post"
    >
      <HStack gap="0.5rem" alignItems="center" justifyContent="start">
        <LuPlusCircle />
        <p class={css({ fontWeight: "bold", color: "primary" })}>CREATE</p>
      </HStack>
    </button>
  );
});
