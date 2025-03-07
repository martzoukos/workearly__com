import ActionButton from "@/components/ActionButton";
import Card from "@/components/Card";
import Text from "@/components/Text/Text";
import useCardResolver from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";
import clsx from "clsx";
import styles from "./CallOutCard.module.scss";

type PropsType = {
  className?: string;
  card: QueryItem["Card"];
  theme: ThemeType;
};

const CallOutCard = ({ className, card, theme }: PropsType) => {
  const { getReferences } = useCardResolver(card);
  const actions = getReferences("Action");

  return (
    <Card.Root theme={theme} className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <Text size="h3" className={styles.title}>
          {card.title}
        </Text>
        {actions.map((action) => (
          <ActionButton key={action?.sys.id} action={action} />
        ))}
      </div>
    </Card.Root>
  );
};

export default CallOutCard;
