import { component$ } from "@builder.io/qwik";
import Image from "~/media/icon.png?jsx";
import { css } from "~/styled-system/css";

export const Header = component$(() => {
  return (
    <div class={css({ width: "15rem" })}>
      <div
        class={css({
          position: "fixed",
          top: 0,
          left: 0,
          width: "15rem",
          height: "100vh",
          padding: "0.5rem",
          backgroundColor: "#252525",
        })}
      >
        <div class={css({ display: "flex", alignItems: "center", gap: 2 })}>
          <Image style={{ width: "48px" }} />
          <h1 class={css({ fontSize: "1.5rem", fontWeight: "bold" })}>
            Turbo Docs
          </h1>
        </div>
      </div>
    </div>
  );
});
