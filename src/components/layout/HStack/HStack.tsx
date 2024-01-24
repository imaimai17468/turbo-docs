import { component$, Slot } from "@builder.io/qwik";
import { cva } from "~/styled-system/css";

type Props = {
  gap: "none" | "sm" | "md" | "lg";
  justifyContent: "start" | "center" | "end" | "between" | "around";
  alignItems: "start" | "center" | "end" | "stretch";
};

const HStackStyle = cva({
  base: {
    display: "flex",
    flexDirection: "row",
  },
  variants: {
    gap: {
      none: { gap: "0" },
      sm: { gap: "0.5rem" },
      md: { gap: "1rem" },
      lg: { gap: "2rem" },
    },
    justifyContent: {
      start: { justifyContent: "start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "end" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
    },
    alignItems: {
      start: { alignItems: "start" },
      center: { alignItems: "center" },
      end: { alignItems: "end" },
      stretch: { alignItems: "stretch" },
    },
  },
});

export const HStack = component$<Props>(({ gap, justifyContent, alignItems }) => {
  return (
    <div class={HStackStyle({ gap, justifyContent, alignItems })}>
      <Slot />
    </div>
  );
});
