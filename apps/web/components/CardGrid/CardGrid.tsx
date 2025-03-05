import CardRenderer from "@/components/_renderers/CardRenderer";
import PageCardRenderer from "@/components/_renderers/PageCardRenderer";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import { Themed, ThemeType } from "@workearly/theme";
import clsx from "clsx";
import styles from "./CardGrid.module.scss";

type PropsType = {
  cards: QueryItem["Card"][] | undefined | null;
  pages: QueryItem["Page"][] | undefined | null;
  fallbackVariant: CardVariantType;
  cardTheme: ThemeType;
  columnCount: number;
  className?: string;
};

export default function CardGrid({
  cards,
  pages,
  fallbackVariant,
  className,
  columnCount,
  cardTheme,
}: PropsType) {
  const style = {
    "--column-count": columnCount,
  } as React.CSSProperties;

  return (
    <Themed
      theme={cardTheme}
      className={clsx(styles.root, className)}
      style={style}
    >
      {cards?.map((card) => (
        <CardRenderer
          key={card.sys.id}
          card={card}
          fallbackVariant={fallbackVariant}
        />
      ))}
      {pages?.map((page) => <PageCardRenderer key={page.sys.id} page={page} />)}
    </Themed>
  );
}
