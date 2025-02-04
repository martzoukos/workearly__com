import styles from "./RichCard.module.scss";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Image from "next/image";

type PropsType = {};

const RichCard = ({}: PropsType) => {
  return (
    <div className={styles.root}>
      <Text className={styles.title}>For Individuals</Text>
      <div className={styles.content}>
        <div className={styles.richText}>
          <Text size="h3">Unlock your full career potential</Text>
          <Text>
            WorkEarly uses AI and interactive tools to deliver personalized
            lessons, real-time feedback, and an engaging learning experience
            tailored to your goals.
          </Text>
        </div>

        <Image
          src="/cards.png"
          alt=""
          width={320}
          height={160}
          className={styles.media}
        />
      </div>
      <Button colorScheme={"Green"} className={styles.button}>
        <Text size="h6">Browse Courses</Text>
      </Button>
    </div>
  );
};

export default RichCard;
