import { QueryItem } from "@workearly/api";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./AdvancedLogoCarousel.module.scss";
import Shell from "@/components/Shell";
import clsx from "clsx";
import useSectionResolver from "@/hooks/useSectionResolver";
import Text from "@/components/Text";
import useShellResolver from "@/hooks/useShellResolver";
import { Autoplay } from "swiper/modules";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

const AdvancedLogoCarousel = ({ section, className }: PropsType) => {
  const { getReferences } = useSectionResolver(section);
  const cards = getReferences("Card");
  const shell = useShellResolver(section);

  const style = {
    "--count": cards.length,
  } as React.CSSProperties;

  return (
    <Shell.Section
      section={section}
      className={clsx(styles.section, className)}
      {...shell}
    >
      <div className={styles.root}>
        {cards.length <= 3 ? (
          <div className={styles.mediaRow} style={style}>
            {cards.map((card) => (
              <div className={styles.card}>
                {card.title && <Text size="h5">{card.title}</Text>}
                {card.text && <Text>{card.text}</Text>}
                <Image
                  key={card.sys.id}
                  src={card.asset?.url || ""}
                  alt=""
                  width={330}
                  height={43}
                  className={styles.media}
                />
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            spaceBetween={24}
            centeredSlides={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2.2 },
            }}
            className={styles.slider}
            initialSlide={1}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.sys.id}>
                <div className={styles.card}>
                  {card.title && <Text size="h5">{card.title}</Text>}
                  {card.text && <Text>{card.text}</Text>}
                  <Image
                    src={card.asset?.url || ""}
                    alt=""
                    width={330}
                    height={43}
                    className={styles.media}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </Shell.Section>
  );
};

export default AdvancedLogoCarousel;
