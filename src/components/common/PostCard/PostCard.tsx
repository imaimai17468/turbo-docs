import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import dayjs from "dayjs";
import { LuBookmark, LuMenu, LuTimer } from "@qwikest/icons/lucide";
import { HStack, VStack } from "~/styled-system/jsx";
import { CLIENT_PATH } from "~/constants/clientPath";
import { Link } from "@builder.io/qwik-city";

type Props = {
  title: string;
  lastModifiedAt: Date;
};

export const PostCard = component$<Props>(({ title, lastModifiedAt }) => (
  <Link href={CLIENT_PATH.post.replace("[id]", "test")}>
    <div
      class={css({
        color: "text_black",
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
      <VStack gap="0.25rem" alignItems="start" flexGrow="1">
        <h2>{title}</h2>
        <HStack gap="0.25rem" class={css({ fontSize: "0.75rem" })}>
          <LuTimer />
          <p class={css({ color: "text_gray" })}>
            {dayjs(lastModifiedAt).format("YYYY MM DD")}
          </p>
        </HStack>
      </VStack>
      <HStack justifyContent="end">
        <LuBookmark />
        <LuMenu />
      </HStack>
    </div>
  </Link>
));
