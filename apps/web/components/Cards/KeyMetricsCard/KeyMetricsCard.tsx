import Text from "@/components/Text/Text";
import styles from "./KeyMetricsCard.module.scss";

type PropsType = {};

const KeyMetricsCard = () => {
  return (
    <div className={styles.card}>
      <Text size="d2" className={styles.title}>
        20k+
      </Text>
      <Text size="h4" className={styles.subtitle}>
        Graduates
      </Text>
    </div>
  );
};

export default KeyMetricsCard;
