import Card from "@/components/Card";
import { QueryItem } from "@workearly/api";
import { SvgRenderer, Twinkle } from "@workearly/svg";
import { ThemeType } from "@workearly/theme";
import clsx from "clsx";
import styles from "./CategoryCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
  theme: ThemeType;
};

export default function CategoryCard({ card, className, theme }: PropsType) {
  return (
    <Card.Root
      as="figure"
      className={clsx(styles.root, className)}
      theme={theme}
    >
      {card.asset && (
        <SvgRenderer
          src={card.asset.url || ""}
          className={styles.svgContainer}
        />
      )}
      <figcaption className={styles.title}>{card.title}</figcaption>
      <Twinkle className={styles.twinkle} />
    </Card.Root>
  );
}
