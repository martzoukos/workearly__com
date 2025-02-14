import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import styles from "./CertificateCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
  columnCount?: number;
};
const CertificateCard = ({ card, className, columnCount = 2 }: PropsType) => {
  return (
    <div className={clsx(styles.card, className)} data-column={columnCount > 1}>
      {card?.asset?.url && (
        <Image
          src={card.asset.url}
          alt=""
          width={card.asset.width || 100}
          height={card.asset.height || 100}
          className={styles.media}
        />
      )}
      <div className={styles.content} data-column={columnCount > 1}>
        {card?.title && <Text size="h6">{card.title}</Text>}
        {card?.text && <Text>{card.text}</Text>}
      </div>
    </div>
  );
};

export default CertificateCard;
