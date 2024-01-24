import { component$ } from "@builder.io/qwik";
import { PostCard } from "~/components/common/PostCard";

export const TopPageContent = component$(() => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, i) => (
        <PostCard key={i} title={`test post ${i}`} />
      ))}
    </div>
  );
});
