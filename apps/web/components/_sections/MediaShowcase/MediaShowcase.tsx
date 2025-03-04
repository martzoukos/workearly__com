import Media from "@/components/Media";
import { QueryItem } from "@workearly/api";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MediaShowcase.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function MediaShowcase({ section }: PropsType) {
  const assets = section.assetsCollection?.items || [];

  return (
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
  );
}
