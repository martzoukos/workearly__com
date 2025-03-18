import Media from "@/components/Media";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MediaSlider.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function MediaSlider({ section, className }: PropsType) {
  const assets = section.assetsCollection?.items || [];

  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      className={clsx(styles.swiper, className)}
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
