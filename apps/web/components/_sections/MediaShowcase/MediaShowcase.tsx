import ActionButton from "@/components/ActionButton";
import Media from "@/components/Media";
import Text from "@/components/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MediaShowcase.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function MediaShowcase({ section }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const actions = getReferences("Action");
  const assets = section.assetsCollection?.items || [];

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <Text as="h3" className={styles.title}>
          {section.title}
        </Text>
        <Text as="small" className={styles.description}>
          {section.text}
        </Text>
        <div className={styles.actions}>
          {actions.map((action) => (
            <ActionButton key={action.sys.id} action={action} />
          ))}
        </div>
      </header>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        className={styles.swiper}
      >
        {assets.map((asset) => {
          return (
            <SwiperSlide key={asset?.sys.id}>
              <Media
                asset={asset}
                aspectRatio="16 / 9"
                imageProps={{
                  quality: 100,
                  sizes: "30vw",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
