import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Button } from "../../Button";
import { LuSettings } from "@qwikest/icons/lucide";

export const PostCreateButton = component$(() => {
  return (
    <Button corner="rounded" outlined={false} variant="background">
      <div
        class={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "0.5rem",
        })}
      >
        <LuSettings />
        <p>Settings</p>
      </div>
    </Button>
  );
});
