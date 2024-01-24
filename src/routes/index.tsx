import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { TopPageContent } from "~/components/feature/top/TopPageContent";

export default component$(() => {
  return <TopPageContent />;
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
