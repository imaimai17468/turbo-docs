import { component$ } from "@builder.io/qwik";
import { Button } from "../../Button";
import { css } from "~/styled-system/css";
import { LuTag, LuBook, LuTrash } from "@qwikest/icons/lucide";
import { HStack } from "~/components/layout/HStack";

export const SidebarMenu = component$(() => {
  return (
    <div class={css({ display: "flex", flexDirection: "column" })}>
      <Button corner="square" outlined={false} variant="background">
        <HStack gap="sm" alignItems="center" justifyContent="start">
          <LuTag />
          <p>Tags</p>
        </HStack>
      </Button>
      <Button corner="rounded" outlined={false} variant="background">
        <HStack gap="sm" alignItems="center" justifyContent="start">
          <LuBook />
          <p>Bookmark</p>
        </HStack>
      </Button>
      <Button corner="rounded" outlined={false} variant="background">
        <HStack gap="sm" alignItems="center" justifyContent="start">
          <LuTrash />
          <p>Trash</p>
        </HStack>
      </Button>
    </div>
  );
});
