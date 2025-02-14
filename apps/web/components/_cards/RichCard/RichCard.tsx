import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import { isDefined, QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import { useContentful } from "../../../stores/ContentfulStore";
import styles from "./RichCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

export default function RichCard({ card, className }: PropsType) {
  const { getReferences } = useContentful();

  const actionIds =
    card.actionsCollection?.items
      .filter(isDefined)
      .map((item) => item?.sys.id) || [];
  const actions = getReferences("Action", actionIds);

  return (
    <div className={clsx(styles.root, className)}>
      {card?.title && <Text className={styles.title}>{card.title}</Text>}

      <div className={styles.content}>
        {card?.text && (
          <div className={styles.richText}>
            <Text>{card.text}</Text>
          </div>
        )}

        {card?.asset?.url && (
          <Image
            src={card.asset.url}
            alt=""
            width={card.asset.width || 100}
            height={card.asset.height || 100}
            className={styles.media}
          />
        )}
      </div>

      {actions.map((action) => (
        <Button
          key={action?.sys.id}
          colorScheme={"Green"}
          className={styles.button}
        >
          <Text size="h6"> {action.name}</Text>
        </Button>
      ))}
    </div>
  );
}
