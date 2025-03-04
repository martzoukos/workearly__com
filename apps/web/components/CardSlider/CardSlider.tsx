import Card from "@/components/Card";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardSlider.module.scss";

type PropsType = {
  cards: QueryItem["Card"][];
  fallbackVariant: CardVariantType;
  columnCount: number;
  className?: string;
};

export default function CardSlider({
  cards,
  fallbackVariant,
  columnCount,
}: PropsType) {
  const style = {
    "--column-count": columnCount,
    "--gap": "0.5rem",
  } as React.CSSProperties;

  return (
    <Swiper
      slidesPerView="auto"
      wrapperClass={styles.root}
      spaceBetween={8}
      style={style}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.sys.id} className={styles.card}>
          <Card card={card} fallbackVariant={fallbackVariant} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
