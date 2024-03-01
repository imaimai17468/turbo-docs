import { component$, useSignal, $ } from "@builder.io/qwik";
import { LuBookmark, LuBookmarkCheck } from "@qwikest/icons/lucide";
import { Button } from "~/components/ui/Button";
import { css } from "~/styled-system/css";

export const BookmarkButton = component$(() => {
  const isBookmarked = useSignal(false);

  const handleBookmarkButtonClick = $(() => {
    isBookmarked.value = !isBookmarked.value;
  });

  return (
    <Button
      variant="secondary"
      onClick={handleBookmarkButtonClick}
      isIcon
      areaLabel="Bookmark post"
    >
      {isBookmarked.value ? (
        <LuBookmarkCheck class={css({ color: "accent" })} />
      ) : (
        <LuBookmark />
      )}
    </Button>
  );
});
