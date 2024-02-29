import { component$, useSignal } from "@builder.io/qwik";
import { LuBookmark, LuBookmarkCheck } from "@qwikest/icons/lucide";
import { css } from "~/styled-system/css";

export const BookmarkButton = component$(() => {
  const isBookmarked = useSignal(false);

  return (
    <button
      onClick$={() => {
        isBookmarked.value = !isBookmarked.value;
      }}
      class={css({
        borderRadius: "50%",
        padding: "0.5rem",
        transition: "all 0.2s ease",
        _hover: {
          background: "#a5a5a5",
          color: "text",
        },
      })}
      aria-label="Bookmark post"
    >
      {isBookmarked.value ? (
        <LuBookmarkCheck class={css({ color: "accent" })} />
      ) : (
        <LuBookmark />
      )}
    </button>
  );
});
