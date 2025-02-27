import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import { SvgRenderer } from "@workearly/svg";
import Image from "next/image";
import styles from "./IconTextCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
};

const IconTextCard = ({ card }: PropsType) => {
  return (
    <div className={styles.root}>
      {card.asset?.url && card.asset.contentType !== "image/svg+xml" && (
        <Image src={card.asset.url} alt="" width={24} height={24} />
      )}
      {card.asset?.url && card.asset.contentType === "image/svg+xml" && (
        <SvgRenderer src={card.asset.url} className={styles.svgWrapper} />
      )}
      {card?.title && (
        <Text as="p" size="h6">
          {card.title}
        </Text>
      )}
      {card?.text && <Text size="small">{card.text}</Text>}
    </div>
  );
};

export default IconTextCard;
