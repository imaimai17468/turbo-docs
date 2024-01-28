import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <p>post page</p>;
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
