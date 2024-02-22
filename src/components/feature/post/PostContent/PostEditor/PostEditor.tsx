import { component$, useComputed$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { HStack } from "~/styled-system/jsx";

export const PostEditor = component$(() => {
  const elementString = useSignal<string>();
  const html = useComputed$(() => {
    if (!elementString.value) return;
    const divider = elementString.value
      .split("<div>")
      .map((item) => "<div>" + item.replace(/<br>|<\/div>/g, "") + "</div>");
    const mdParser = divider
      .map((item) => {
        return item
          .replace(/### (.+)/g, "<h3 style='font-size:1.5rem'>$1</h3>")
          .replace(/## (.+)/g, "<h2 style='font-size:2rem'>$1</h2>")
          .replace(/# (.+)/g, "<h1 style='font-size:3rem'>$1</h1>")
          .replace(/\*\*(.+)\*\*/g, "<b>$1</b>")
          .replace(/~~(.+)~~/g, "<s>$1</s>");
      })
      .join("");

    console.log(mdParser);
    return mdParser;
  });

  return (
    <HStack width="100%" height="83vh" alignItems="start">
      <div
        contentEditable="true"
        class={css({
          width: "50%",
          height: "100%",
          _focus: {
            outline: "none",
          },
          overflow: "scroll",
        })}
        onInput$={(_, el) => (elementString.value = el.innerHTML)}
      />
      <div
        class={css({
          height: "83vh",
          borderLeft: "1px solid",
          borderColor: "border",
        })}
      />
      <div class={css({ width: "50%" })} dangerouslySetInnerHTML={html.value} />
    </HStack>
  );
});
