import { CardVariantType, SectionQueryItem } from "@workearly/api";
import styles from "./Section.module.scss";
import clsx from "clsx";
import Text from "../Text/Text";
import { useContentful } from "../../stores/ContentfulStore";
import Card from "../Card/Card";
import Button from "../Button/Button";

type PropsType = {
  section: SectionQueryItem;
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  const { relationshipMap, resolveMetadataMap } = useContentful();

  const style = {
    "--cards-count": resolveMetadataMap.sectionCardsCount(section.cardsCount),
    "--flex-alignment": resolveMetadataMap.sectionAlignment(section.alignment),
  } as React.CSSProperties;

  const contentItems: NonNullable<
    SectionQueryItem["contentCollection"]
  >["items"] = [];

  if (section.cardVariant === "Icon and Text") {
    const cards = relationshipMap.cardCollection.filter((item) =>
      section.contentCollection?.items
        .filter((item) => item?.__typename === "Card")
        .map((item) => item?.sys.id)
        .includes(item.sys.id)
    );

    contentItems.push(...cards);
  }

  const actions = relationshipMap.actionCollection.filter((item) =>
    section.actionsCollection?.items
      .map((item) => item?.sys.id)
      .includes(item.sys.id)
  );

  return (
    <section
      className={clsx(styles.root, className)}
      data-card-variant={section.cardVariant}
      style={style}
    >
      <header className={styles.header}>
        <Text as="h4">{section.title}</Text>
        {section.text && <Text>{section.text}</Text>}
      </header>

      {contentItems.length > 0 && (
        <div className={styles.content}>
          {contentItems.map((item) => {
            if (item?.__typename === "Card") {
              return (
                <Card
                  key={item.sys.id}
                  card={item}
                  fallbackVariant={section.cardVariant as CardVariantType}
                />
              );
            }
          })}
        </div>
      )}

      {actions.length > 0 && (
        <footer className={styles.footer}>
          {actions.map((action) => (
            <Button key={action.sys.id} variant="Chip" colorScheme="White">
              {action.name}
            </Button>
          ))}
        </footer>
      )}
    </section>
  );
}
