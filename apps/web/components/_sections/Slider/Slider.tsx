import "swiper/css";
import { QueryItem } from "@workearly/api";
import styles from "./Slider.module.scss";
import clsx from "clsx";
import useSectionResolver from "@/hooks/useSectionResolver";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "@/components/_cards/CourseCard/CourseCard";
import { useContentful } from "@/stores/ContentfulStore";
import { Card } from "@/components/CardGrid/CardGrid";
import { CardVariantType } from "@/hooks/useCardResolver";
// import { Swiper as SwiperCore } from "swiper/types";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function Slider({ section, className }: PropsType) {
  const { getReference } = useContentful();
  const { getReferences } = useSectionResolver(section);
  const actions = getReferences("Action");

  // const handleTouchEnd = (swiper: SwiperCore) => {
  //   if (swiper.isEnd && swiper.translate < swiper.maxTranslate()) {
  //     console.log("User stretched beyond the last slide!");
  //   }
  // };

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
            {/* {(section?.metadata?.title ||
          section?.metadata?.values?.length > 0) && (
          <div className={styles.statics}>
            {section?.metadata?.title && (
              <Text className={styles.staticsTitle}>
                {section.metadata.title}
              </Text>
            )}

            {section?.metadata?.values?.length > 0 &&
              section?.metadata.values.map((item: any) => (
                <div
                  className={styles.staticsBar}
                  data-active={item.percentage == highestPercentage}
                  style={{ width: `${item.percentage}%` }}
                >
                  <Text>{item.title}</Text>
                  <Text>{item.amount}</Text>
                </div>
              ))}
          </div>
        )} */}
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
