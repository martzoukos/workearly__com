import CardRenderer from "@/components/_renderers/CardRenderer";
import PageCardRenderer from "@/components/_renderers/PageCardRenderer";
import Shell from "@/components/Shell";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardSlider.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function CardSlider({ section, className }: PropsType) {
  const { cardsCount, getReferences, cardTheme, cardVariant } =
    useSectionResolver(section);
  const cards = getReferences("Card");
  const pages = getReferences("Page");
  const style = {
    "--column-count": cardsCount,
    "--gap": "0.5rem",
  } as React.CSSProperties;

  return (
    <Shell.Section section={section} className={className}>
      <Swiper
        slidesPerView={1.25}
        spaceBetween={8}
        style={style}
        className={styles.slider}
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
              fallbackVariant={cardVariant}
              fallbackTheme={cardTheme}
            />
          </SwiperSlide>
        ))}
        {pages?.map((page) => (
          <SwiperSlide key={page.sys.id} className={styles.slide}>
            <PageCardRenderer page={page} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Shell.Section>
  );
}
