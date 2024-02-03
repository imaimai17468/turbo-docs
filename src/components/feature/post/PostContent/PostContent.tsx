import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { VStack } from "~/styled-system/jsx";
import { PostTitleInput } from "./PostTitleInput";
import { PostTagListInput } from "./PostTagListInput";

export const PostContent = component$(() => {
  return (
    <VStack class={css({ padding: "1rem" })} gap="1rem" alignItems="start">
      <PostTitleInput />
      <PostTagListInput />
      <hr
        class={css({
          width: "100%",
          border: "none",
          borderBottom: "1px solid",
          borderColor: "border",
        })}
      />
    </VStack>
  );
});
