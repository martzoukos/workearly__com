import CourseCard from "@/components/_cards/CourseCard/CourseCard";
import CardRenderer from "@/components/_renderers/CardRenderer";
import ActionButton from "@/components/ActionButton";
import Shell from "@/components/Shell";
import Text from "@/components/Text/Text";
import { useViewport } from "@/components/Viewport";
import { CardVariantType } from "@/hooks/useCardResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useSectionResolver from "@/hooks/useSectionResolver";
import useShellResolver from "@/hooks/useShellResolver";
import { getCourseListSchema } from "@/lib/jsonLdSchemas";
import { useContentful } from "@/stores/ContentfulStore";
import { isDefined, QueryItem } from "@workearly/api";
import clsx from "clsx";
import { useRouter } from "next/router";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardShowcase.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function CardShowcase({ section, className }: PropsType) {
  const { getReference, relationshipMap } = useContentful();
  const { cardTheme } = useSectionResolver(section);
  const shell = useShellResolver(section);
  const isUntilMd = useViewport({ showUntil: "md" });
  const { page } = useContentful();
  const { categoryOrJobDetails } = usePageResolver(page);
  const router = useRouter();

  return (
    <Shell.Root className={clsx(styles.root, className)} {...shell}>
      {categoryOrJobDetails && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getCourseListSchema(
                router,
                categoryOrJobDetails,
                section.contentCollection?.items
                  .map((item) => getReference("Page", item?.sys.id || ""))
                  .filter(isDefined) || [],
                relationshipMap
              )
            ),
          }}
        />
      )}
      {isUntilMd && (
        <div className={styles.headerWrapper}>
          <Header section={section} />
          <Metadata section={section} />
        </div>
      )}
      <Swiper
        slidesPerView={"auto"}
        slidesOffsetAfter={isUntilMd ? 0 : 40}
        spaceBetween={8}
      >
        {!isUntilMd && (
          <SwiperSlide className={styles.headerSlide}>
            <div className={styles.headerWrapper}>
              <Header section={section} />
              <Metadata section={section} />
              <Footer section={section} />
            </div>
          </SwiperSlide>
        )}
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
                <CardRenderer
                  card={card}
                  fallbackVariant={section.cardVariant as CardVariantType}
                  fallbackTheme={cardTheme}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
      {isUntilMd && <Footer section={section} />}
    </Shell.Root>
  );
}

function Header({ section }: PropsType) {
  return (
    <header className={styles.header}>
      <Text as="h3">{section.title}</Text>
      <Text>{section.text}</Text>
    </header>
  );
}

function Metadata({ section }: PropsType) {
  const { metadata } = useSectionResolver(section);

  if (!metadata) {
    return null;
  }

  const highestPercentage = metadata.values.reduce(
    (max: number, v) => Math.max(max, Number(v.percentage)),
    0
  );

  return (
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
  );
}

function Footer({ section }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const actions = getReferences("Action");

  if (!actions.length) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      {actions.map((action) => (
        <ActionButton key={action.sys.id} action={action} />
      ))}
    </footer>
  );
}
