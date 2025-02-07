import styles from "./CallOutCard.module.scss";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import clsx from "clsx";
import { isDefined, QueryItem } from "@workearly/api";
import { useContentful } from "../../../stores/ContentfulStore";

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
        <Text size="h3">{card.title}</Text>
        {actions.map((action) => (
          <Button
            key={action?.sys.id}
            colorScheme={"Black"}
            className={styles.button}
          >
            {action.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CallOutCard;
