import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/Button";
import { css } from "~/styled-system/css";
import { LuBook, LuTrash } from "@qwikest/icons/lucide";
import { HStack } from "~/styled-system/jsx";
import { Link } from "@builder.io/qwik-city";
import { CLIENT_PATH } from "~/constants/clientPath";

export const SidebarMenu = component$(() => {
  return (
    <div
      class={css({ display: "flex", flexDirection: "column", width: "100%" })}
    >
      <Link href={CLIENT_PATH.bookmark}>
        <Button areaLabel="Bookmark">
          <HStack gap="0.5rem">
            <LuBook />
            <p>Bookmark</p>
          </HStack>
        </Button>
      </Link>
      <Link href={CLIENT_PATH.trash}>
        <Button areaLabel="Trash">
          <HStack gap="0.5rem">
            <LuTrash />
            <p>Trash</p>
          </HStack>
        </Button>
      </Link>
    </div>
  );
});
