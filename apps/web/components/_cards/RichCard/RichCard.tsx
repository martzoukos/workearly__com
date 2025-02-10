import styles from "./RichCard.module.scss";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Image from "next/image";
import clsx from "clsx";
import { isDefined, QueryItem } from "@workearly/api";
import { useContentful } from "../../../stores/ContentfulStore";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

const RichCard = ({ card, className }: PropsType) => {
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
};

export default RichCard;
