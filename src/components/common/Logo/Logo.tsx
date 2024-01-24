import { component$ } from "@builder.io/qwik";
import Image from "~/media/icon.png?jsx";
import { css } from "~/styled-system/css";

export const Logo = component$(() => {
  return (
    <div
      class={css({
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      })}
    >
      <Image style={{ width: "48px" }} />
      <h1 class={css({ fontSize: "1.5rem", fontWeight: "bold" })}>
        Turbo Docs
      </h1>
    </div>
  );
});
