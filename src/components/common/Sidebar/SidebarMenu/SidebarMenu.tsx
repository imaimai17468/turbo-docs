import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/Button";
import { css } from "~/styled-system/css";
import { LuBook, LuTrash } from "@qwikest/icons/lucide";
import { HStack } from "~/styled-system/jsx";

export const SidebarMenu = component$(() => {
  return (
    <div
      class={css({ display: "flex", flexDirection: "column", width: "100%" })}
    >
      <Button areaLabel="Bookmark">
        <HStack gap="0.5rem">
          <LuBook />
          <p>Bookmark</p>
        </HStack>
      </Button>
      <Button areaLabel="Trash">
        <HStack gap="0.5rem">
          <LuTrash />
          <p>Trash</p>
        </HStack>
      </Button>
    </div>
  );
});
