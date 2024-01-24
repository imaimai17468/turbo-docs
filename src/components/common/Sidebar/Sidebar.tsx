import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Input } from "../Input";
import { Button } from "../Button";
import {
  LuSettings,
  LuGithub,
  LuPlusCircle,
} from "@qwikest/icons/lucide";
import { Logo } from "../Logo";
import { SidebarMenu } from "./SidebarMenu/SidebarMenu";

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
        <div
          class={css({
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          })}
        >
          <Logo />
          <Button corner="rounded" outlined variant="accent">
            <div
              class={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              })}
            >
              <LuPlusCircle />
              <p>CREATE</p>
            </div>
          </Button>
          <Input placeholder="search" />
          <SidebarMenu />
          <hr class={css({ borderColor: "border" })} />
          <Button corner="rounded" outlined={false} variant="background">
            <div
              class={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "0.5rem",
              })}
            >
              <LuSettings />
              <p>Settings</p>
            </div>
          </Button>
        </div>
        <div
          class={css({
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          })}
        >
          <p class={css({ fontSize: "0.75rem", color: "text" })}>
            Turbo Docs v0.0.1
          </p>
          <Button corner="rounded" outlined={false} variant="background">
            <LuGithub />
          </Button>
        </div>
      </div>
    </div>
  );
});
