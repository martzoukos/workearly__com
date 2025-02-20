import Text from "@/components/Text";
import { isDefined, QueryItem } from "@workearly/api";
import Image from "next/image";
import styles from "./Hero.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function Hero({ section }: PropsType) {
  const assets = section.assetsCollection?.items.filter(isDefined) || [];
  const asset = assets.at(0);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Text as="h1" size="d2">
          {section.title}
        </Text>
        <Text size="h6">{section.text}</Text>
      </div>

      {asset?.url && (
        <div className={styles.media}>
          <Image
            src={asset.url}
            alt={asset.title || section.title || ""}
            fill={true}
            sizes="30vw"
          />
        </div>
      )}
    </div>
  );
}
