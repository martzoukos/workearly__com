import CardRenderer from "@/components/_renderers/CardRenderer";
import PageCardRenderer from "@/components/_renderers/PageCardRenderer";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardSlider.module.scss";

type PropsType = {
  cards: QueryItem["Card"][] | undefined | null;
  pages: QueryItem["Page"][] | undefined | null;
  fallbackVariant: CardVariantType;
  fallbackTheme: ThemeType;
  columnCount: number;
  className?: string;
};

export default function CardSlider({
  cards,
  pages,
  fallbackVariant,
  columnCount,
  fallbackTheme,
}: PropsType) {
  const style = {
    "--column-count": columnCount,
    "--gap": "0.5rem",
  } as React.CSSProperties;

  return (
    <Swiper
      slidesPerView={1.25}
      spaceBetween={8}
      style={style}
      className={styles.root}
      breakpoints={{
        480: {
          slidesPerView: "auto",
        },
      }}
    >
      {cards?.map((card) => (
        <SwiperSlide key={card.sys.id} className={styles.slide}>
          <CardRenderer
            card={card}
            fallbackVariant={fallbackVariant}
            fallbackTheme={fallbackTheme}
          />
        </SwiperSlide>
      ))}
      {pages?.map((page) => (
        <SwiperSlide key={page.sys.id} className={styles.slide}>
          <PageCardRenderer page={page} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
