import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import styles from "./LogoShowcase.module.scss";
import Viewport from "@/components/Viewport";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type PropsType = {
  assets: QueryItem["Asset"][];
  columnCount: number;
  className?: string;
};

export default function LogoShowcase({
  assets,
  columnCount,
  className,
}: PropsType) {
  const style = {
    "--column-count": columnCount,
  } as React.CSSProperties;

  // Group assets into chunks of 4 for 2x2 grid layout
  const groupAssetsIntoSlides = (
    assets: QueryItem["Asset"][],
    groupSize: number,
  ) => {
    const groups = [];
    for (let i = 0; i < assets.length; i += groupSize) {
      groups.push(assets.slice(i, i + groupSize));
    }
    return groups;
  };

  const assetGroups = groupAssetsIntoSlides(assets, 4);

  return (
    <>
      <Viewport showUntil="md">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          className={styles.slider}
        >
          {assetGroups.map((group, index) => (
            <SwiperSlide key={`group-${index}`}>
              <div className={styles.gridSlide}>
                {group.map((asset) => (
                  <ImageWrapper key={asset.sys.id} asset={asset} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Viewport>
      <Viewport showAfter="md">
        <div className={clsx(styles.root, className)} style={style}>
          {assets.map((asset) => (
            <ImageWrapper key={asset.sys.id} asset={asset} />
          ))}
        </div>
      </Viewport>
    </>
  );

  function ImageWrapper({ asset }: { asset: QueryItem["Asset"] }) {
    return (
      <div className={styles.wrapper}>
        <Image
          src={asset.url || ""}
          alt={asset.description || ""}
          width={140}
          height={70}
          className={styles.image}
        />
      </div>
    );
  }
}
