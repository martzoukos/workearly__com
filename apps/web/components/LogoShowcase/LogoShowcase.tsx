import { AssetQueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./LogoShowcase.module.scss";
import Image from "next/image";

type PropsType = {
  assets: AssetQueryItem[];
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
