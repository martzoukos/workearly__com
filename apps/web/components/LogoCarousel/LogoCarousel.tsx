import styles from "./LogoCarousel.module.scss";
import Text from "@/components/Text/Text";
import Image from "next/image";
import { QueryItem } from "@workearly/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type PropsType = {
  assets: QueryItem["Asset"][];
  title?: string;
  className?: string;
};

const LogoCarousel = ({ title, assets }: PropsType) => {
  return (
    <div className={styles.root}>
      {title && <Text>{title}</Text>}

      {assets.length <= 6 ? (
        <div className={styles.mediaRow}>
          {assets.map((asset) => (
            <Image
              key={asset.sys.id}
              src={asset.url || ""}
              alt=""
              width={100}
              height={100}
              className={styles.media}
            />
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={32}
          slidesPerView={6}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className={styles.slider}
        >
          {assets.map((asset) => {
            return (
              <SwiperSlide key={asset.sys.id}>
                <Image
                  src={asset.url || ""}
                  alt=""
                  width={asset.width || 100}
                  height={asset.height || 100}
                  className={styles.media}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default LogoCarousel;
