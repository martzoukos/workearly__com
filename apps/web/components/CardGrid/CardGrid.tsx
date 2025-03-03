import Card from "@/components/Card";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./CardGrid.module.scss";

type PropsType = {
  cards: QueryItem["Card"][];
  fallbackVariant: CardVariantType;
  columnCount: number;
  className?: string;
};

export default function CardGrid({
  cards,
  fallbackVariant,
  className,
  columnCount,
}: PropsType) {
  const style = {
    "--column-count": columnCount,
  } as React.CSSProperties;

  return (
    <div className={clsx(styles.root, className)} style={style}>
      {cards.map((card) => (
        <Card key={card.sys.id} card={card} fallbackVariant={fallbackVariant} />
      ))}
    </div>
  );
}
