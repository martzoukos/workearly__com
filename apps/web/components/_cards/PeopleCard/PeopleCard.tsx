import Image from "next/image";
import styles from "./PeopleCard.module.scss";
import Text from "@/components/Text/Text";

type PropsType = {};

const PeopleCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image
          src="/people.png"
          alt=""
          width={100}
          height={100}
          className={styles.media}
        />

        <div className={styles.label}>
          <Text className={styles.labelText}>Jamie Lee</Text>
          <Text size="small" className={styles.labelText}>
            Director of Services
          </Text>
          <Text size="small" className={styles.labelText}>
            Vortex
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
