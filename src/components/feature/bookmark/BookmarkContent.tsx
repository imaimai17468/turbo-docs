import { component$ } from "@builder.io/qwik";
import { PostCard } from "~/components/common/PostCard";
import { css } from "~/styled-system/css";
import { VStack } from "~/styled-system/jsx";

export const BookmarkContent = component$(() => {
  return (
    <VStack alignItems="start" padding="2rem">
      <h1 class={css({ fontSize: "xl", fontWeight: "bold" })}>Bookmark</h1>
      <div
        class={css({
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
          gap: "2rem",
        })}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <PostCard
            key={i}
            title={`test post ${i}`}
            lastModifiedAt={new Date()}
          />
        ))}
      </div>
    </VStack>
  );
});
