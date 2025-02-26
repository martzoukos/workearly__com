import { ArrowRight } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import { useState } from "react";
import Text from "../Text/Text";
import styles from "./FeaturesShowcase.module.scss";

type PropsType = {
  cards: QueryItem["Card"][];
  title?: string;
  className?: string;
};

export default function FeaturesShowcase({
  title,
  cards,
  className,
}: PropsType) {
  const [activeCard, setactiveCard] = useState(cards[0]);

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.navigation}>
        {title && <Text size="h4">{title}</Text>}

        <div>
          {cards.map((card) => (
            <div
              key={card.sys.id}
              className={styles.navigationButton}
              data-active={activeCard?.sys.id === card.sys.id}
              onClick={() => setactiveCard(card)}
            >
              {activeCard?.sys.id === card.sys.id && <ArrowRight />}

              <Text>{card.title}</Text>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div>
          <Text size="h2" className={styles.title}>
            {activeCard?.title}
          </Text>
          <Text size="h5">{activeCard?.text}</Text>
        </div>
        <div className={styles.border}></div>
      </div>
    </div>
  );
}
