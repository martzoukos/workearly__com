import Card from "@/components/Card";
import useCardResolver from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import { Twinkle } from "@workearly/svg";
import { ThemeType } from "@workearly/theme";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
  theme: ThemeType;
};

export default function CategoryCard({ card, className, theme }: PropsType) {
  const { getReferences } = useCardResolver(card);
  const actions = getReferences("Action");
  const action = actions.at(0);

  const cardElement = (
    <Card.Root
      as="figure"
      className={clsx(styles.root, className)}
      theme={theme}
    >
      {card.asset && (
        <div className={styles.imageContainer}>
          <Image
            src={card.asset.url || ""}
            fill={true}
            alt={card.title || ""}
            sizes="600px"
          />
        </div>
      )}
      <figcaption className={styles.title}>{card.title}</figcaption>
      <Twinkle className={styles.twinkle} />
    </Card.Root>
  );

  if (action?.internal?.slug) {
    return <Link href={action.internal.slug}>{cardElement}</Link>;
  }

  return cardElement;
}
