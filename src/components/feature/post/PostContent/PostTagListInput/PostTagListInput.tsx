import { component$ } from "@builder.io/qwik";
import { LuTag } from "@qwikest/icons/lucide";
import { css } from "~/styled-system/css";
import { HStack } from "~/styled-system/jsx";

export const PostTagListInput = component$(() => {
  return (
    <HStack gap="1rem">
      <LuTag class={css({ height: "1rem" })} />
      <input
        class={css({
          background: "transparent",
          color: "text",
          fontSize: "1rem",
          _focus: {
            outline: "none",
          },
        })}
        placeholder="Tags"
      />
    </HStack>
  );
});
