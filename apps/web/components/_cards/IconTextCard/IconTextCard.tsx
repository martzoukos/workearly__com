import Card from "@/components/Card";
import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import { SvgRenderer } from "@workearly/svg";
import { ThemeType } from "@workearly/theme";
import clsx from "clsx";
import Image from "next/image";
import styles from "./IconTextCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
  theme: ThemeType;
};

const IconTextCard = ({ card, className, theme }: PropsType) => {
  return (
    <Card.Root theme={theme} className={clsx(styles.root, className)}>
      {card.asset?.url && card.asset.contentType !== "image/svg+xml" && (
        <Image
          src={card.asset.url}
          alt=""
          width={24}
          height={24}
          style={{
            objectFit: "cover",
          }}
        />
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
    </Card.Root>
  );
};

export default IconTextCard;
