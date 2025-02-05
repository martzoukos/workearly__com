import { QueryItem } from "@workearly/api";
import styles from "./StepsShowcase.module.scss";
import clsx from "clsx";
import Text from "../Text/Text";
import useSectionResolver from "@/hooks/useSectionResolver";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function StepsShowcase({ section, className }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const cards = getReferences("Card");

  return (
    <section className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <Text size="d1">{section.supertitle}</Text>
        <Text size="d1" className={styles.title}>
          {section.title}
        </Text>
        <Text size="h6" className={styles.description}>
          {section.text}
        </Text>
      </div>

      <div className={styles.cardsContainer}>
        {cards.map((card, i) => {
          return (
            <div className={styles.cardContainer}>
              <div className={styles.progress}>
                <div className={styles.number}>{i + 1}</div>
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
    </section>
  );
}
