import Image from "next/image";
import styles from "./IconTextCard.module.scss";

type PropsType = {};

const IconTextCard = () => {
  return (
    <div className={styles.card}>
      <Image src={"/camera.svg"} alt="" width={24} height={24} />
      <p className={styles.title}>20 hours on-demand video</p>
    </div>
  );
};

export default IconTextCard;
