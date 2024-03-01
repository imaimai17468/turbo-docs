import type { QRL } from "@builder.io/qwik";
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
      full: { borderRadius: "9999px" },
    },
    outlined: {
      true: { borderWidth: "1px" },
      false: { borderWidth: "0" },
    },
    variant: {
      primary: {
        borderColor: "primary",
        _hover: { backgroundColor: "background", color: "text" },
      },
      secondary: {
        borderColor: "primary",
        backgroundColor: "background_white",
        color: "text_black",
        _hover: { backgroundColor: "object_gray", color: "text" },
      },
      accent: {
        borderColor: "accent",
        _hover: { backgroundColor: "accent", color: "primary" },
      },
      error: {
        borderColor: "error",
        color: "error",
        _hover: { backgroundColor: "error", color: "text" },
      },
    },
    isIcon: {
      true: { padding: "0.5rem" },
      false: { padding: "0.5rem 1rem" },
    },
  },
});

type Props = {
  corner?: "square" | "rounded" | "full";
  outlined?: boolean;
  variant?: "primary" | "secondary" | "accent" | "error";
  onClick?: QRL;
  isIcon?: boolean;
  areaLabel: string;
};

export const Button = component$<Props>(
  ({
    corner = "rounded",
    outlined = false,
    variant = "primary",
    onClick,
    isIcon = false,
    areaLabel,
  }) => {
    return (
      <button
        class={buttonStyle({ corner, outlined, variant, isIcon })}
        area-label={areaLabel}
        onClick$={() => {
          if (onClick) onClick();
        }}
      >
        <Slot />
      </button>
    );
  },
);
