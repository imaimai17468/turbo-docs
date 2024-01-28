import { component$, Slot } from "@builder.io/qwik";
import { cva } from "~/styled-system/css";

const buttonStyle = cva({
  base: {
    color: "text",
    padding: "0.5rem 1rem",
    transition: "all 0.2s ease",
    cursor: "pointer",
    width: "100%",
    _hover: { backgroundColor: "accent", color: "primary" },
  },
  variants: {
    corner: {
      square: { borderRadius: "0" },
      rounded: { borderRadius: "0.25rem" },
    },
    outlined: {
      true: { borderWidth: "1px" },
      false: { borderWidth: "0" },
    },
    variant: {
      primary: {
        borderColor: "primary",
        _hover: { backgroundColor: "primary", color: "text" },
      },
      background: {
        borderColor: "background",
        _hover: { backgroundColor: "background", color: "text" },
      },
      accent: {
        borderColor: "accent",
        _hover: { backgroundColor: "accent", color: "primary" },
      },
    },
  },
});

type Props = {
  corner: "square" | "rounded";
  outlined: boolean;
  variant: "primary" | "background" | "accent";
};

export const Button = component$<Props>(({ corner, outlined, variant }) => {
  return (
    <button class={buttonStyle({ corner, outlined, variant })}>
      <Slot />
    </button>
  );
});
