import { component$ } from "@builder.io/qwik";
import { Button } from "../../Button";
import { LuSettings } from "@qwikest/icons/lucide";
import { HStack } from "~/components/layout/HStack";

export const SettingButton = component$(() => {
  return (
    <Button corner="rounded" outlined={false} variant="background">
      <HStack gap="sm" alignItems="center" justifyContent="start">
        <LuSettings />
        <p>Settings</p>
      </HStack>
    </Button>
  );
});
