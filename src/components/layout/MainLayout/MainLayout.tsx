import { Slot, component$ } from "@builder.io/qwik";
import { Header } from "~/components/common/Header";
import { css } from "~/styled-system/css";

export const MainLayout = component$(() => {
  return (
    <div class={css({ display: "flex" })}>
      <Header />
      <div class={css({ padding: "2rem"})}>
        <Slot />
      </div>
    </div>
  );
});
