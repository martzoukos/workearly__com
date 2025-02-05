import { QueryItem } from "@workearly/api";
import styles from "./FeaturesShowcase.module.scss";
import clsx from "clsx";
import Text from "../Text/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import { useState } from "react";
import Image from "next/image";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function FeaturesShowcase({ section, className }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const cards = getReferences("Card");
  const [activeCard, setactiveCard] = useState(cards[0]);

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.navigation}>
        <Text size="h4">{section.title}</Text>

        <div>
          {cards.map((card) => {
            return (
              <div
                className={styles.navigationButton}
                data-active={activeCard?.sys.id === card.sys.id}
                onClick={() => setactiveCard(card)}
              >
                {activeCard?.sys.id === card.sys.id && (
                  <Image src="/arrow-right.svg" alt="" width={20} height={20} />
                )}

                <Text>{card.title}</Text>
              </div>
            );
          })}
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
