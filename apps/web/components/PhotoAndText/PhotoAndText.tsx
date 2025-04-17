import { PhotoAndText as PhotoAndTextType, QueryItem } from "@workearly/api";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./PhotoAndText.module.scss";
import Shell from "@/components/Shell";
import clsx from "clsx";
import useSectionResolver from "@/hooks/useSectionResolver";
import Text from "@/components/Text";
import useShellResolver from "@/hooks/useShellResolver";
import { ChevronLeft, ChevronRight } from "@carbon/icons-react";
import { useRef } from "react";
import SwiperCore from "swiper";
import useCardResolver from "@/hooks/useCardResolver";
import ActionButton from "@/components/ActionButton";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

const PhotoAndText = ({ section, className }: PropsType) => {
  const { getReferences } = useSectionResolver(section);
  const cards = getReferences("Card");
  const shell = useShellResolver(section);
  const swiperRef = useRef<SwiperCore>();
  const isGreen = section.metadata?.length > 0 || false;

  return (
    <Shell.Section
      section={section}
      className={clsx(styles.section, className)}
      {...shell}
    >
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        modules={[Navigation]}
        spaceBetween={24}
        centeredSlides={true}
        className={styles.slider}
        data-green={isGreen}
      >
        {cards.map((card) => {
          const { getReferences } = useCardResolver(card);
          const actions = getReferences("Action");
          return (
            <SwiperSlide key={card.sys.id}>
              <div className={styles.card}>
                <div className={styles.mediaContainer}>
                  <Image
                    src={card.asset?.url || ""}
                    alt=""
                    width={330}
                    height={43}
                    className={styles.media}
                  />
                </div>
                <div className={styles.details}>
                  {card.title && <Text size="h4">{card.title}</Text>}
                  {card.text && <Text>{card.text}</Text>}

                  <div className={styles.footer}>
                    {isGreen && (
                      <div className={styles.table}>
                        {isGreen &&
                          section.metadata.map((item: PhotoAndTextType) => {
                            return (
                              <>
                                <Text className={styles.label}>
                                  {item.label}
                                </Text>
                                <Text className={styles.value}>
                                  {item.value}
                                </Text>
                              </>
                            );
                          })}
                      </div>
                    )}

                    <div className={styles.actions}>
                      {actions.map((action) => (
                        <ActionButton key={action?.sys.id} action={action} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={styles.arrows}>
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <ChevronRight size={24} />
        </button>
      </div>
    </Shell.Section>
  );
};

export default PhotoAndText;
