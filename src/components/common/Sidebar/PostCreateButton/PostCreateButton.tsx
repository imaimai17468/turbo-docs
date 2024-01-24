import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Button } from "../../Button";
import { LuPlusCircle } from "@qwikest/icons/lucide";

export const PostCreateButton = component$(() => {
  return (
    <Button corner="rounded" outlined variant="accent">
      <div
        class={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "0.5rem",
        })}
      >
        <LuPlusCircle />
        <p>CREATE</p>
      </div>
    </Button>
  );
});
