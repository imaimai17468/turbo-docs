import { component$, Slot } from "@builder.io/qwik";
import { cva } from "~/styled-system/css";

type Props = {
  gap: "none" | "sm" | "md" | "lg";
  justifyContent: "start" | "center" | "end" | "between" | "around" | "normal";
  alignItems: "start" | "center" | "end" | "stretch" | "normal";
};

const VStackStyle = cva({
  base: {
    display: "flex",
    flexDirection: "column",
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
      normal: { justifyContent: "normal" },
    },
    alignItems: {
      start: { alignItems: "start" },
      center: { alignItems: "center" },
      end: { alignItems: "end" },
      stretch: { alignItems: "stretch" },
      normal: { alignItems: "normal" },
    },
  },
});

export const VStack = component$<Props>(({ gap, justifyContent, alignItems }) => {
  return (
    <div class={VStackStyle({ gap, justifyContent, alignItems })}>
      <Slot />
    </div>
  );
});
