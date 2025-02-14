import { QueryItem } from "@workearly/api";
import styles from "./UniqueComponent.module.scss";
import clsx from "clsx";
import MentorIndex from "@/components/MentorIndex";
import useUniqueComponentResolver from "@/hooks/useUniqueComponentResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

type PropsType = {
  uniqueComponent: QueryItem["UniqueComponent"];
  className?: string;
};

export default function UniqueComponent({
  uniqueComponent,
  className,
}: PropsType) {
  const { getReferences } = useContentful();
  const { variant } = useUniqueComponentResolver(uniqueComponent);
  const pageIds =
    uniqueComponent.contentCollection?.items.map(
      (item) => item?.sys.id as string
    ) || [];
  const pages = getReferences("Page", pageIds);

  return (
    <section className={clsx(styles.root, className)}>
      {variant === "Mentors" && (
        <MentorIndex
          pages={pages}
          title={uniqueComponent.title}
          subtitle={documentToPlainTextString(
            uniqueComponent.description?.json
          )}
        />
      )}
    </section>
  );
}
