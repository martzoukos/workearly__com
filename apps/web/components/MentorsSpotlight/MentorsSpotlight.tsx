import Shell from "@/components/Shell";
import useSectionResolver from "@/hooks/useSectionResolver";
import useShellResolver from "@/hooks/useShellResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./MentorsSpotlight.module.scss";
import usePageResolver from "@/hooks/usePageResolver";
import Link from "next/link";
import Image from "next/image";
import { Frame } from "@workearly/svg";
import Text from "@/components/Text";
import { useViewport } from "@/components/Viewport";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import SwiperCore from "swiper";
import { ChevronLeft, ChevronRight } from "@carbon/icons-react";

type PropsType = {
  section: QueryItem["Section"];
  hideFilters?: boolean;
  className?: string;
};

export default function MentorsSpotlight({ section, className }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const pages = getReferences("Page");
  const shell = useShellResolver(section);
  const swiperRef = useRef<SwiperCore>();

  const style = {
    "--count": pages.length,
  } as React.CSSProperties;

  return (
    <Shell.Section
      section={section}
      className={clsx(styles.root, className)}
      {...shell}
    >
      {pages.length <= 3 ? (
        <div className={styles.cardGrid} style={style}>
          {pages.map((page) => (
            <MentorsSpotlightCard key={page.sys.id} page={page} />
          ))}
        </div>
      ) : (
        <>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            modules={[Navigation]}
            spaceBetween={24}
            centeredSlides={true}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              740: { slidesPerView: 3.2 },
            }}
            className={styles.slider}
            initialSlide={1}
          >
            {pages.map((page) => (
              <SwiperSlide key={page.sys.id}>
                <MentorsSpotlightCard key={page.sys.id} page={page} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.arrows}>
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <ChevronRight size={24} />
            </button>
          </div>
        </>
      )}
    </Shell.Section>
  );
}

type CardPropsType = {
  page: QueryItem["Page"];
};

function MentorsSpotlightCard({ page }: CardPropsType) {
  const { peopleDetails } = usePageResolver(page);
  const isUntilMd = useViewport({ showUntil: "md" });

  if (!peopleDetails) {
    return null;
  }

  return (
    <Link href={page.slug || "/"} className={styles.link}>
      <div className={styles.content}>
        {peopleDetails.asset?.url && (
          <Image
            src={peopleDetails.asset.url}
            alt={peopleDetails.asset.title || peopleDetails.name || ""}
            width={peopleDetails.asset.width || 416}
            height={peopleDetails.asset.height || 416}
            className={styles.asset}
          />
        )}

        <div className={styles.labelContainer}>
          <div className={styles.label}>
            <Frame />

            {peopleDetails.name && (
              <Text
                size={isUntilMd ? "caption" : "p"}
                className={styles.personName}
              >
                {peopleDetails.name}
              </Text>
            )}
            {peopleDetails.role && (
              <Text
                size={isUntilMd ? "caption" : "small"}
                className={styles.personRole}
              >
                {peopleDetails.role}
              </Text>
            )}
          </div>
          {peopleDetails.shortDescription && (
            <div className={clsx(styles.label, styles.secondLabel)}>
              <Frame />

              <Text
                size={isUntilMd ? "caption" : "p"}
                className={styles.personName}
              >
                {peopleDetails.shortDescription}
              </Text>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
