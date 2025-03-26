import Text from "@/components/Text";
import styles from "./StepsShowcase.module.scss";
import useCardResolver from "@/hooks/useCardResolver";
import { isDefined, QueryItem } from "@workearly/api";
import ActionButton from "@/components/ActionButton";

type PropsType = {
  card: QueryItem["Card"];
  cardNumber: number;
};

export default function StepsCard({ card, cardNumber }: PropsType) {
  const { getReferences } = useCardResolver(card);
  const actions = getReferences("Action").filter(isDefined);
  const action = actions.at(0);

  return (
    <div key={card.sys.id} className={styles.cardContainer}>
      <div className={styles.progress}>
        <div className={styles.number}>{cardNumber}</div>
        <div className={styles.border}></div>
      </div>
      <div className={styles.card}>
        <div>
          <Text size="h6" className={styles.cardTitle}>
            {card.title}
          </Text>
          <Text>{card.text}</Text>
        </div>

        {action && (
          <ActionButton
            action={action}
            colorSchemes={{
              light: "Green",
              dark: "Black",
            }}
          />
        )}
      </div>
    </div>
  );
}
