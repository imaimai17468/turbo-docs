import { component$ } from "@builder.io/qwik";
import { Button } from "../../Button";
import { css } from "~/styled-system/css";
import { LuTag, LuBook, LuTrash } from "@qwikest/icons/lucide";

export const SidebarMenu = component$(() => {
  return (
    <div class={css({ display: "flex", flexDirection: "column" })}>
      <Button corner="square" outlined={false} variant="background">
        <div
          class={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "0.5rem",
          })}
        >
          <LuTag />
          <p>Tags</p>
        </div>
      </Button>
      <Button corner="rounded" outlined={false} variant="background">
        <div
          class={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "0.5rem",
          })}
        >
          <LuBook />
          <p>Bookmark</p>
        </div>
      </Button>
      <Button corner="rounded" outlined={false} variant="background">
        <div
          class={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "0.5rem",
          })}
        >
          <LuTrash />
          <p>Trash</p>
        </div>
      </Button>
    </div>
  );
});
