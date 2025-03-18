import CardRenderer from "@/components/_renderers/CardRenderer";
import PageCardRenderer from "@/components/_renderers/PageCardRenderer";
import Shell from "@/components/Shell";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import styles from "./CardGrid.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function CardGrid({ section, className }: PropsType) {
  const { cardsCount, getReferences, cardTheme, cardVariant } =
    useSectionResolver(section);
  const cards = getReferences("Card");
  const pages = getReferences("Page");
  const style = {
    "--column-count": cardsCount,
  } as React.CSSProperties;

  return (
    <Shell.Section section={section} className={className}>
      <div
        className={styles.grid}
        style={style}
        data-card-variant={cardVariant}
      >
        {cards?.map((card) => (
          <CardRenderer
            key={card.sys.id}
            card={card}
            fallbackVariant={cardVariant}
            fallbackTheme={cardTheme}
          />
        ))}
        {pages?.map((page) => (
          <PageCardRenderer key={page.sys.id} page={page} />
        ))}
      </div>
    </Shell.Section>
  );
}
