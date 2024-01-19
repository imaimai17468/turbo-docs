import { Slot, component$ } from "@builder.io/qwik";
import { Header } from "~/components/common/Header";

export const MainLayout = component$(() => {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
});
