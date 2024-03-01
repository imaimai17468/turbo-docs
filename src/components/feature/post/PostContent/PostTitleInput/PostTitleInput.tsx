import { component$ } from "@builder.io/qwik";
import { LuPencil } from "@qwikest/icons/lucide";
import { css } from "~/styled-system/css";
import { HStack } from "~/styled-system/jsx";

export const PostTitleInput = component$(() => {
  return (
    <HStack gap="1rem" width="100%">
      <LuPencil class={css({ height: "1rem" })} />
      <input
        class={css({
          background: "transparent",
          color: "text",
          fontSize: "1.5rem",
          width: "100%",
          _focus: {
            outline: "none",
          },
        })}
        placeholder="Title"
      />
    </HStack>
  );
});
