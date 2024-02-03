import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PostContent } from "~/components/feature/post/PostContent";

export default component$(() => {
  return <PostContent />;
});

export const head: DocumentHead = {
  title: "Turbo Docs",
  meta: [
    {
      name: "description",
      content: "Ultra-fast documentation tools.",
    },
  ],
};
