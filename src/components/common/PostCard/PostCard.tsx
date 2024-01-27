import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import dayjs from "dayjs";
import { LuFilePlus } from "@qwikest/icons/lucide";
import { HStack } from "~/styled-system/jsx";

type Props = {
  title: string;
  lastModifiedAt: Date;
};

export const PostCard = component$<Props>(({ title, lastModifiedAt }) => (
  <button
    class={css({
      width: "100%",
      height: "8rem",
      backgroundColor: "background_white",
      borderRadius: "0.5rem",
      cursor: "pointer",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
    })}
  >
    <h2>{title}</h2>
    <HStack>
      <LuFilePlus />
      <p>{dayjs(lastModifiedAt).format("YYYY MM DD")}</p>
    </HStack>
  </button>
));
