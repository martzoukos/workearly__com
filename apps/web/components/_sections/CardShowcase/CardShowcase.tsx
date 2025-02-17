import CourseCard from "@/components/_cards/CourseCard/CourseCard";
import Button from "@/components/Button/Button";
import { Card } from "@/components/CardGrid/CardGrid";
import Text from "@/components/Text/Text";
import { CardVariantType } from "@/hooks/useCardResolver";
import useSectionResolver from "@/hooks/useSectionResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardShowcase.module.scss";
// import { Swiper as SwiperCore } from "swiper/types";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function Slider({ section, className }: PropsType) {
  const { getReference } = useContentful();
  const { getReferences, metadata } = useSectionResolver(section);
  const actions = getReferences("Action");

  // const handleTouchEnd = (swiper: SwiperCore) => {
  //   if (swiper.isEnd && swiper.translate < swiper.maxTranslate()) {
  //     console.log("User stretched beyond the last slide!");
  //   }
  // };

  const highestPercentage =
    metadata?.values?.reduce(
      (max: number, v) => Math.max(max, Number(v.percentage)),
      0
    ) || 0;

  return (
    <section className={clsx(styles.root, className)}>
      <Swiper
        slidesPerView={"auto"}
        wrapperClass={styles.swiperWrapper}
        slidesOffsetAfter={40}
        // onTouchEnd={handleTouchEnd}
      >
        <SwiperSlide className={styles.headerSlide}>
          <div className={styles.headerWrapper}>
            <header className={styles.header}>
              <Text as="h3">{section.title}</Text>
              <Text>{section.text}</Text>
            </header>
            {metadata && (
              <div className={styles.metadata}>
                {metadata.title && (
                  <Text className={styles.metadataTitle}>{metadata.title}</Text>
                )}

                {metadata.values.map((value) => (
                  <div
                    key={value.title}
                    className={styles.metadataBar}
                    data-active={Number(value.percentage) == highestPercentage}
                    style={{ width: `${value.percentage}%` }}
                  >
                    <Text>{value.title}</Text>
                    <Text>{value.amount}</Text>
                  </div>
                ))}
              </div>
            )}
            {actions.length > 0 && (
              <footer>
                {actions.map((action) => (
                  <Button key={action.sys.id} colorScheme="Black">
                    {action.name}
                  </Button>
                ))}
              </footer>
            )}
          </div>
        </SwiperSlide>
        {section.contentCollection?.items.map((item) => {
          if (item?.__typename === "Page") {
            const page = getReference("Page", item.sys.id);

            if (!page) {
              return null;
            }

            return (
              <SwiperSlide key={page.sys.id} className={styles.cardSlide}>
                <CourseCard page={page} />
              </SwiperSlide>
            );
          } else if (item?.__typename === "Card") {
            const card = getReference("Card", item.sys.id);

            if (!card) {
              return null;
            }

            return (
              <SwiperSlide key={card.sys.id} className={styles.cardSlide}>
                <Card
                  card={card}
                  fallbackVariant={section.cardVariant as CardVariantType}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </section>
  );
}
