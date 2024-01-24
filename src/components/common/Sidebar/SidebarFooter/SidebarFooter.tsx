import { component$ } from "@builder.io/qwik";
import { Button } from "../../Button";
import { css } from "~/styled-system/css";
import { LuGithub } from "@qwikest/icons/lucide";

export const SidebarFooter = component$(() => {
  return (
    <div
      class={css({
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      })}
    >
      <p class={css({ fontSize: "0.75rem", color: "text" })}>
        Turbo Docs v0.0.1
      </p>
      <Button corner="rounded" outlined={false} variant="background">
        <LuGithub />
      </Button>
    </div>
  );
});
