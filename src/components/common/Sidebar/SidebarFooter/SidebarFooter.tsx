import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/Button";
import { css } from "~/styled-system/css";
import { LuGithub } from "@qwikest/icons/lucide";
import { HStack } from "~/styled-system/jsx";

export const SidebarFooter = component$(() => {
  return (
    <HStack gap="0.5rem" alignItems="center" justifyContent="start">
      <p
        class={css({
          fontSize: "0.75rem",
          color: "text",
          whiteSpace: "nowrap",
        })}
      >
        Turbo Docs v0.0.1
      </p>
      <div class={css({ width: "fit-content" })}>
        <Button
          corner="rounded"
          outlined={false}
          variant="background"
          areaLabel="GitHub Repository"
        >
          <LuGithub />
        </Button>
      </div>
    </HStack>
  );
});
