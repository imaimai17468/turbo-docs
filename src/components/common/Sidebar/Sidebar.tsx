import { component$ } from "@builder.io/qwik";
import Image from "~/media/icon.png?jsx";
import { css } from "~/styled-system/css";
import { Input } from "../Input";

export const Sidebar = component$(() => {
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
          backgroundColor: "primary",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        })}
      >
        <div class={css({ display: "flex", alignItems: "center", gap: 2 })}>
          <Image style={{ width: "48px" }} />
          <h1 class={css({ fontSize: "1.5rem", fontWeight: "bold" })}>
            Turbo Docs
          </h1>
        </div>
        <Input placeholder="search" />
      </div>
    </div>
  );
});
