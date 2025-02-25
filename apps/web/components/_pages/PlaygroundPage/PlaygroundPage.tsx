import PageItem from "@/components/PageItem/PageItem";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { isDefined } from "@workearly/api";
import clsx from "clsx";
import styles from "./PlaygroundPage.module.scss";
import PlaygroundPanel from "./PlaygroundPanel";

type PropsType = {
  className?: string;
};

export default function PlaygroundPage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems, postDividerItems } = usePageResolver(page);

  return (
    <PlaygroundPanel
      sys={page.sys}
      info={["Page", page.variant].filter(isDefined)}
    >
      <main className={clsx(styles.root, className)}>
        {[...preDividerItems, ...postDividerItems].map((item) => (
          <PlaygroundPanel
            key={item?.sys.id}
            sys={item.sys}
            info={getItemInfo(item)}
          >
            <PageItem item={item} />
          </PlaygroundPanel>
        ))}
      </main>
    </PlaygroundPanel>
  );
}

function getItemInfo(
  item: ReturnType<typeof usePageResolver>["items"][number]
) {
  if (item.__typename === "Section") {
    return [item.__typename, item.variant, item.cardVariant].filter(isDefined);
  } else if (item.__typename === "ContentTypeRichText") {
    return [item.__typename, item.variant].filter(isDefined);
  } else if (item.__typename === "UniqueComponent") {
    return [item.__typename, item.variant].filter(isDefined);
  }

  return [];
}
