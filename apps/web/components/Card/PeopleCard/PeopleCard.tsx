import Image from "next/image";
import styles from "./PeopleCard.module.scss";
import Text from "@/components/Text/Text";

type PropsType = {};

const PeopleCard = () => {
  return (
    <div className={styles.card}>
      <Image
        src="/people.png"
        alt=""
        width={100}
        height={100}
        className={styles.media}
      />

      <div className={styles.label}>
        <Text size="caption">Jamie Lee</Text>
        <p className={styles.job}>Director of Services, Vortex</p>
      </div>
    </div>
  );
};

export default PeopleCard;
