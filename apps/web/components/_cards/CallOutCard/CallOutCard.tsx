import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import { isDefined, QueryItem } from "@workearly/api";
import clsx from "clsx";
import { useContentful } from "../../../stores/ContentfulStore";
import styles from "./CallOutCard.module.scss";

type PropsType = {
  className?: string;
  card: QueryItem["Card"];
};

const CallOutCard = ({ className, card }: PropsType) => {
  const { getReferences } = useContentful();

  const actionIds =
    card.actionsCollection?.items
      .filter(isDefined)
      .map((item) => item?.sys.id) || [];
  const actions = getReferences("Action", actionIds);

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <Text size="h3" className={styles.title}>
          {card.title}
        </Text>
        {actions.map((action) => (
          <Button
            key={action?.sys.id}
            colorScheme={"Black"}
            className={styles.button}
            size="large"
          >
            {action.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CallOutCard;
