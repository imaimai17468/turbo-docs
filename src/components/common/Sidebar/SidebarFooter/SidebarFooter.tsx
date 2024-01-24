import { component$ } from "@builder.io/qwik";
import { Button } from "../../Button";
import { css } from "~/styled-system/css";
import { LuGithub } from "@qwikest/icons/lucide";
import { HStack } from "~/components/layout/HStack";

export const SidebarFooter = component$(() => {
  return (
    <HStack gap="sm" alignItems="center" justifyContent="start">
      <p class={css({ fontSize: "0.75rem", color: "text" })}>
        Turbo Docs v0.0.1
      </p>
      <Button corner="rounded" outlined={false} variant="background">
        <LuGithub />
      </Button>
    </HStack>
  );
});
