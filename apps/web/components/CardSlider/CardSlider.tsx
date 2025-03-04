import CardRenderer from "@/components/_renderers/CardRenderer";
import PageCardRenderer from "@/components/_renderers/PageCardRenderer";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardSlider.module.scss";

type PropsType = {
  cards: QueryItem["Card"][] | undefined | null;
  pages: QueryItem["Page"][] | undefined | null;
  fallbackVariant: CardVariantType;
  columnCount: number;
  className?: string;
};

export default function CardSlider({
  cards,
  pages,
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
      {cards?.map((card) => (
        <SwiperSlide key={card.sys.id} className={styles.card}>
          <CardRenderer card={card} fallbackVariant={fallbackVariant} />
        </SwiperSlide>
      ))}
      {pages?.map((page) => (
        <SwiperSlide key={page.sys.id} className={styles.card}>
          <PageCardRenderer page={page} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
