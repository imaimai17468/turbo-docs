import { Slot, component$ } from "@builder.io/qwik";
import { Sidebar } from "~/components/common/Sidebar";
import { css } from "~/styled-system/css";

export const MainLayout = component$(() => {
  return (
    <div class={css({ display: "flex" })}>
      <Sidebar />
      <div class={css({ padding: "2rem" })}>
        <Slot />
      </div>
    </div>
  );
});
