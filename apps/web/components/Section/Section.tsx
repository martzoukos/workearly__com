import { SectionQueryItem } from "@workearly/api";
import styles from "./Section.module.scss";
import clsx from "clsx";
import Text from "../Text/Text";
import { useContentful } from "../../stores/ContentfulStore";
import IconTextCard from "../Cards/IconTextCard/IconTextCard";

type PropsType = {
  section: SectionQueryItem;
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  const { relationshipMap } = useContentful();

  let children = null;

  if (section.cardVariant === "Icon and Text") {
    const cards = relationshipMap.cardCollection.filter((item) =>
      section.contentCollection?.items
        .filter((item) => item?.__typename === "Card")
        .map((item) => item?.sys.id)
        .includes(item.sys.id)
    );

    children = cards.map((card) => (
      <IconTextCard key={card.sys.id} card={card} />
    ));
  }

  const style: React.CSSProperties = section.cardsCount
    ? ({ "--cards-count": section.cardsCount } as React.CSSProperties)
    : {};

  return (
    <section
      className={clsx(styles.root, className)}
      data-variant={section.cardVariant}
      style={style}
    >
      <Text as="h4">{section.title}</Text>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
