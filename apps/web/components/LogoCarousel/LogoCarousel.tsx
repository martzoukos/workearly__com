import styles from "./LogoCarousel.module.scss";
import Text from "@/components/Text/Text";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryItem } from "@workearly/api";

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
  section: QueryItem["Section"];
  className?: string;
};

const LogoCarousel = ({ section }: PropsType) => {
  return (
    <div className={styles.root}>
      <Text>Top Companies Hire Workearly Graduates</Text>
      {images.length <= 6 ? (
        <div className={styles.mediaRow}>
          {images.map((img, index) => (
            <Image
              src={img}
              alt=""
              width={100}
              height={100}
              className={styles.media}
            />
          ))}
        </div>
      ) : (
        <Slider {...settings} className={styles.slider}>
          {images.map((img) => (
            <div>
              <Image
                src={img}
                alt=""
                width={100}
                height={100}
                className={styles.media}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default LogoCarousel;
