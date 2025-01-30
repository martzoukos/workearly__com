import styles from "./IconTextCard.module.scss";
import SvgRenderer from "@/components/SvgRenderer";
import { CardQueryItem } from "@workearly/api";
import Text from "@/components/Text/Text";
import Image from "next/image";

type PropsType = {
  card: CardQueryItem;
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
      <Text as="p" size="h6">
        {card.title}
      </Text>
    </div>
  );
};

export default IconTextCard;
