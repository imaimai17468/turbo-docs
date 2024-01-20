import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { LuSearch } from "@qwikest/icons/lucide";

type Props = {
  placeholder?: string;
};

export const Input = component$<Props>(({placeholder}) => {
  return (
    <div class={css({ position: "relative" })}>
      <input
        type="text"
        placeholder={placeholder}
        class={css({
          padding: "0.5rem 0.5rem 0.5rem 2rem",
          fontSize: "1rem",
          border: "1px solid #5a5a5a",
          borderRadius: "0.25rem",
          backgroundColor: "primary",
          color: "text",
          _focus: {
            outline: "none",
            borderColor: "accent",
          },
        })}
      />
      <LuSearch
        class={css({
          position: "absolute",
          top: "50%",
          left: "0.5rem",
          transform: "translateY(-50%)",
        })}
      />
    </div>
  );
});
