import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import styles from "./CardSlider.module.scss";

type PropsType = {
  cards: QueryItem["Card"][];
  fallbackVariant: CardVariantType;
  columnCount: number;
  className?: string;
};

export default function CardSlider({}: PropsType) {
  return <section className={styles.root}></section>;
}
