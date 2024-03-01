import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { LuTag, LuX } from "@qwikest/icons/lucide";
import { css } from "~/styled-system/css";
import { HStack, VStack } from "~/styled-system/jsx";

export const PostTagListInput = component$(() => {
  const tagText = useSignal<string>();
  const tagList = useSignal<string[]>([]);

  useTask$(({ track }) => {
    const text = track(() => tagText.value);
    if (!text) return;

    const splitTagText = text.split(" ");

    if (splitTagText.length < 1) return;

    const visibleTagList = splitTagText
      .slice(0, -1)
      .filter((tag) => tag !== "");
    const uniqueTags = Array.from(new Set(visibleTagList));
    tagList.value = uniqueTags;
  });

  return (
    <VStack alignItems="start">
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
          bind:value={tagText}
        />
      </HStack>
      {tagList.value.length !== 0 && (
        <HStack>
          {tagList.value.map((tag, index) => (
            <HStack
              key={index}
              class={css({
                background: "accent",
                color: "text_black",
                rounded: "0.5rem",
                padding: "0 0.5rem",
                minWidth: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              {tag}
              <button
                onClick$={() => {
                  tagList.value = tagList.value.filter((_, i) => i !== index);
                  tagText.value = tagList.value.join(" ") + " ";
                }}
              >
                <LuX />
              </button>
            </HStack>
          ))}
        </HStack>
      )}
    </VStack>
  );
});
