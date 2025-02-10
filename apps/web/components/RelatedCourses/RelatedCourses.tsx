import { QueryItem } from "@workearly/api";
import styles from "./RelatedCourses.module.scss";
import clsx from "clsx";
import useSectionResolver from "@/hooks/useSectionResolver";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CourseCard from "@/components/_cards/CourseCard/CourseCard";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function RelatedCourses({ section, className }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const pages = getReferences("Page");
  const actions = getReferences("Action");

  return (
    <section className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Text as="h3">{section.title}</Text>
          <Text>{section.text}</Text>
        </header>
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
      <div className={styles.cards}>
        <Swiper slidesPerView={2.5}>
          {pages.map((page) => (
            <SwiperSlide key={page.sys.id}>
              <CourseCard page={page} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
