import Image from "next/image";
import styles from "./LogoCard.module.scss";

type PropsType = {};

const LogoCard = () => {
  return (
    <div className={styles.card}>
      <Image
        src="/icon-logo-card.png"
        alt=""
        width={140}
        height={70}
        className={styles.media}
      />
    </div>
  );
};

export default LogoCard;
