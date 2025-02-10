import styles from "./StepsShowcase.module.scss";
import clsx from "clsx";
import Text from "../Text/Text";
import { QueryItem } from "@workearly/api";

type PropsType = {
  cards: QueryItem["Card"][];
  title?: string;
  supertitle?: string;
  description?: string;
  className?: string;
};

export default function StepsShowcase({
  title,
  supertitle,
  description,
  cards,
  className,
}: PropsType) {
  const hasHeader = title || supertitle || description;
  return (
    <div className={clsx(styles.root, className)}>
      {hasHeader && (
        <header className={styles.header}>
          {supertitle && <Text size="d1">{supertitle}</Text>}
          {title && (
            <Text size="d1" className={styles.title}>
              {title}
            </Text>
          )}
          {description && (
            <Text size="h6" className={styles.description}>
              {description}
            </Text>
          )}
        </header>
      )}

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => {
          return (
            <div key={card.sys.id} className={styles.cardContainer}>
              <div className={styles.progress}>
                <div className={styles.number}>{index + 1}</div>
                <div className={styles.border}></div>
              </div>
              <div className={styles.card}>
                <Text size="h6" className={styles.cardTitle}>
                  {card.title}
                </Text>
                <Text>{card.text}</Text>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
