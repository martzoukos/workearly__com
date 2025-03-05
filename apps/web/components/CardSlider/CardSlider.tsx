import CardRenderer from "@/components/_renderers/CardRenderer";
import PageCardRenderer from "@/components/_renderers/PageCardRenderer";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import { Themed, ThemeType } from "@workearly/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardSlider.module.scss";

type PropsType = {
  cards: QueryItem["Card"][] | undefined | null;
  pages: QueryItem["Page"][] | undefined | null;
  fallbackVariant: CardVariantType;
  cardTheme: ThemeType;
  columnCount: number;
  className?: string;
};

export default function CardSlider({
  cards,
  pages,
  fallbackVariant,
  columnCount,
  cardTheme,
}: PropsType) {
  const style = {
    "--column-count": columnCount,
    "--gap": "0.5rem",
  } as React.CSSProperties;

  return (
    <Themed asChild theme={cardTheme} style={style} className={styles.root}>
      <Swiper slidesPerView="auto" spaceBetween={8}>
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
    </Themed>
  );
}
