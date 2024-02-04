import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Divider, VStack } from "~/styled-system/jsx";
import { PostTitleInput } from "./PostTitleInput";
import { PostTagListInput } from "./PostTagListInput";
import { PostEditor } from "./PostEditor";

export const PostContent = component$(() => {
  return (
    <VStack class={css({ padding: "1rem" })} gap="1rem" alignItems="start">
      <PostTitleInput />
      <PostTagListInput />
      <Divider borderColor="border" />
      <PostEditor />
    </VStack>
  );
});
