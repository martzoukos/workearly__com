import FeaturesAccordion from "@/components/FeaturesShowcase/FeaturesAccordion";
import Shell from "@/components/Shell";
import Viewport from "@/components/Viewport";
import useShellResolver from "@/hooks/useShellResolver";
import { ArrowRight } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Text from "../Text/Text";
import styles from "./FeaturesShowcase.module.scss";

type PropsType = {
  cards: QueryItem["Card"][];
  section: QueryItem["Section"];
  title?: string;
  className?: string;
};

export default function FeaturesShowcase({
  title,
  cards,
  section,
  className,
}: PropsType) {
  const [activeCard, setActiveCard] = useState(cards[0]);
  const shell = useShellResolver(section);

  return (
    <>
      <Viewport showAfter="md">
        <Shell.Root className={clsx(styles.root, className)} {...shell}>
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
            {activeCard?.asset?.url && (
              <Image
                src={activeCard.asset.url}
                alt={activeCard.title || ""}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={activeCard.asset.width || 400}
                height={activeCard.asset.height || 400}
              />
            )}
          </div>
        </Shell.Root>
      </Viewport>
      <Viewport showUntil="md">
        <FeaturesAccordion
          cards={cards}
          title={title}
          className={className}
          section={section}
        />
      </Viewport>
    </>
  );
}
