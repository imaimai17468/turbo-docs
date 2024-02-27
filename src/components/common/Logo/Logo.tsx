import { component$ } from "@builder.io/qwik";
import { HStack } from "~/styled-system/jsx";
import Image from "~/media/icon.png?jsx";
import { css } from "~/styled-system/css";
import { Link } from "@builder.io/qwik-city";
import { CLIENT_PATH } from "~/constants/clientPath";

export const Logo = component$(() => {
  return (
    <Link href={CLIENT_PATH.index}>
      <HStack gap="sm" alignItems="center" justifyContent="center">
        <Image style={{ width: "48px" }} alt="turbo docs logo image" />
        <h1 class={css({ fontSize: "1.5rem", fontWeight: "bold" })}>
          Turbo Docs
        </h1>
      </HStack>
    </Link>
  );
});
