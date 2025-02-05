import styles from "./LogoCarousel.module.scss";
import Text from "@/components/Text/Text";
import Image from "next/image";
import { QueryItem } from "@workearly/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const images = [
  "/logos/public.png",
  "/logos/apple.png",
  "/logos/eurobank.png",
  "/logos/klarna.png",
  "/logos/opta.png",
  "/logos/slack.png",
  "/logos/slack.png",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

type PropsType = {
  assets: QueryItem["Asset"][];
  section: QueryItem["Section"];
  className?: string;
};

const LogoCarousel = ({ section, assets }: PropsType) => {
  return (
    <div className={styles.root}>
      {section.supertitle && <Text>{section.supertitle}</Text>}

      {assets.length <= 6 ? (
        <div className={styles.mediaRow}>
          {assets.map((img, index) => (
            <Image
              src={img.url || ""}
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
          {assets.map((media) => {
            return (
              <SwiperSlide>
                <Image
                  src={media.url || ""}
                  alt=""
                  width={media.width || 100}
                  height={media.height || 100}
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
