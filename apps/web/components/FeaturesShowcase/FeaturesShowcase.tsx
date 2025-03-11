import FeaturesAccordion from "@/components/FeaturesShowcase/FeaturesAccordion";
import Media from "@/components/Media";
import Viewport from "@/components/Viewport";
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
  const [activeCard, setActiveCard] = useState(cards[0]);

  return (
    <>
      <Viewport showAfter="md">
        <div className={clsx(styles.root, className)}>
          <div className={styles.navigation}>
            {title && <Text size="h4">{title}</Text>}

            <div>
              {cards.map((card) => (
                <div
                  key={card.sys.id}
                  className={styles.navigationButton}
                  data-active={activeCard?.sys.id === card.sys.id}
                  onClick={() => setActiveCard(card)}
                >
                  {activeCard?.sys.id === card.sys.id && <ArrowRight />}

                  <Text>{card.title}</Text>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.contentText}>
              <Text size="h2" className={styles.title}>
                {activeCard?.title}
              </Text>
              <Text size="h5">{activeCard?.text}</Text>
            </div>
            {activeCard?.asset && (
              <Media
                asset={activeCard.asset}
                height="24rem"
                className={styles.contentMedia}
              />
            )}
          </div>
        </div>
      </Viewport>
      <Viewport showUntil="md">
        <FeaturesAccordion cards={cards} title={title} className={className} />
      </Viewport>
    </>
  );
}
