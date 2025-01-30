import { AssetQueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./AssetGrid.module.scss";
import Image from "next/image";

type PropsType = {
  assets: AssetQueryItem[];
  cardsCount: number;
  className?: string;
};

export default function AssetGrid({
  assets,
  cardsCount,
  className,
}: PropsType) {
  const style = {
    "--cards-count": cardsCount,
  } as React.CSSProperties;

  return (
    <div className={clsx(styles.root, className)} style={style}>
      {assets.map((asset) => (
        <div key={asset.sys.id} className={styles.wrapper}>
          <Image
            src={asset.url || ""}
            alt={asset.description || ""}
            width={140}
            height={70}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
