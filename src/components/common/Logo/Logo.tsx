import { component$ } from "@builder.io/qwik";
import { HStack } from "~/styled-system/jsx";
import Image from "~/media/icon.png?jsx";
import { css } from "~/styled-system/css";

export const Logo = component$(() => {
  return (
    <HStack gap="sm" alignItems="center" justifyContent="center">
      <Image style={{ width: "48px" }} />
      <h1 class={css({ fontSize: "1.5rem", fontWeight: "bold" })}>
        Turbo Docs
      </h1>
    </HStack>
  );
});
