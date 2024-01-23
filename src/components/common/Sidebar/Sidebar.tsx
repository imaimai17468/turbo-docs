import { component$ } from "@builder.io/qwik";
import Image from "~/media/icon.png?jsx";
import { css } from "~/styled-system/css";
import { Input } from "../Input";
import { Button } from "../Button";
import {
  LuTag,
  LuBook,
  LuSettings,
  LuGithub,
  LuTrash,
  LuPlusCircle,
} from "@qwikest/icons/lucide";

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
              <p>Create</p>
            </div>
          </Button>
          <Input placeholder="search" />
          <div class={css({ display: "flex", flexDirection: "column" })}>
            <Button corner="square" outlined={false} variant="background">
              <div
                class={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "0.5rem",
                })}
              >
                <LuTag />
                <p>Tags</p>
              </div>
            </Button>
            <Button corner="rounded" outlined={false} variant="background">
              <div
                class={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "0.5rem",
                })}
              >
                <LuBook />
                <p>Bookmark</p>
              </div>
            </Button>
            <Button corner="rounded" outlined={false} variant="background">
              <div
                class={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "0.5rem",
                })}
              >
                <LuTrash />
                <p>Trash</p>
              </div>
            </Button>
          </div>
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
            Turbo Docs v0.1.0
          </p>
          <Button corner="rounded" outlined={false} variant="background">
            <LuGithub />
          </Button>
        </div>
      </div>
    </div>
  );
});
