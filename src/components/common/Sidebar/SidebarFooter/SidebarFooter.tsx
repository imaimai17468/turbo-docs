import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { LuGithub } from "@qwikest/icons/lucide";
import { HStack } from "~/styled-system/jsx";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/Button";

export const SidebarFooter = component$(() => {
  return (
    <HStack gap="1rem" alignItems="center" justifyContent="start">
      <p
        class={css({
          fontSize: "0.75rem",
          color: "text",
          whiteSpace: "nowrap",
        })}
      >
        Turbo Docs v0.0.1
      </p>
      <Link
        href="https://github.com/imaimai17468/turbo-docs-web"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub Repository"
      >
        <Button isIcon areaLabel="GitHub">
          <LuGithub />
        </Button>
      </Link>
    </HStack>
  );
});
