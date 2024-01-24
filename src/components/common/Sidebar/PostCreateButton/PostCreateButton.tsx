import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { LuPlusCircle } from "@qwikest/icons/lucide";
import { HStack } from "~/components/layout/HStack";

export const PostCreateButton = component$(() => {
  return (
    <button
      class={css({
        backgroundColor: "accent",
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
        _hover: { backgroundColor: "accent_hover" },
      })}
    >
      <HStack gap="sm" alignItems="center" justifyContent="start">
        <LuPlusCircle />
        <p class={css({ fontWeight: "bold", color: "primary" })}>CREATE</p>
      </HStack>
    </button>
  );
});
