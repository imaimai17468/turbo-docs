import { component$, useSignal, $ } from "@builder.io/qwik";
import { LuMenu, LuTrash } from "@qwikest/icons/lucide";
import { Button } from "~/components/ui/Button";
import { css } from "~/styled-system/css";
import { HStack } from "~/styled-system/jsx";

export const MenuButton = component$(() => {
  const isMenuOpen = useSignal(false);

  const handleMenuButtonClick = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  return (
    <div>
      <Button
        variant="secondary"
        isIcon
        areaLabel="Delete post"
        onClick={handleMenuButtonClick}
      >
        <LuMenu />
      </Button>
      {isMenuOpen.value && (
        <div
          class={css({
            position: "absolute",
            top: "2.25rem",
            right: "0.25rem",
            background: "background_white",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
          })}
        >
          <Button variant="error" areaLabel="Delete post">
            <HStack>
              <LuTrash />
              <p class={css({ fontSize: "sm" })}> DELETE</p>
            </HStack>
          </Button>
        </div>
      )}
    </div>
  );
});
