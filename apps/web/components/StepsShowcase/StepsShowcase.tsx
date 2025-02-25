import styles from "./StepsShowcase.module.scss";
import clsx from "clsx";
import Text from "../Text/Text";
import { isDefined, QueryItem } from "@workearly/api";
import ActionButton from "@/components/ActionButton";
import useCardResolver from "@/hooks/useCardResolver";

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

  // THIS WHOLE COMPONENT WILL BE REFACTORED

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
          const { getReferences } = useCardResolver(card);
          const actions = getReferences("Action").filter(isDefined);
          const action = actions.at(0);

          return (
            <div key={card.sys.id} className={styles.cardContainer}>
              <div className={styles.progress}>
                <div className={styles.number}>{index + 1}</div>
                <div className={styles.border}></div>
              </div>
              <div className={styles.card}>
                <div>
                  <Text size="h6" className={styles.cardTitle}>
                    {card.title}
                  </Text>
                  <Text>{card.text}</Text>
                </div>

                {action && <ActionButton action={action} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
