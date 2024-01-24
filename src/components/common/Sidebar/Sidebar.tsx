import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Input } from "~/components/ui/Input";
import { Logo } from "../Logo";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarFooter } from "./SidebarFooter";
import { PostCreateButton } from "./PostCreateButton";
import { SettingButton } from "./SettingButton";
import { VStack } from "~/components/layout/VStack";

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
          justifyContent: "space-between",
        })}
      >
        <VStack gap="md" justifyContent="normal" alignItems="normal">
          <Logo />
          <PostCreateButton />
          <Input placeholder="search" />
          <SidebarMenu />
          <hr class={css({ borderColor: "border" })} />
          <SettingButton />
        </VStack>
        <SidebarFooter />
      </div>
    </div>
  );
});
