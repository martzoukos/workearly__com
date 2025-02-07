import Image from "next/image";
import Text from "../Text/Text";
import styles from "./PartnerHero.module.scss";
type PropsType = {};

export default function PartnerHero() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Text size="d2">Partners</Text>
        <Text size="h6">
          World-class CEOs, business leaders, investors, academics, and
          entrepreneurs supporting Workearly by sharing their experience,
          guidance and knowledge
        </Text>
      </div>

      <div className={styles.mediaContainer}>
        <Image
          src={"/hero.png"}
          alt=""
          width={100}
          height={100}
          className={styles.media}
        />
      </div>
    </div>
  );
}
