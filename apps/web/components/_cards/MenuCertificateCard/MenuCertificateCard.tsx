import Text from "@/components/Text";
import styles from "./MenuCertificateCard.module.scss";

export default function MenuCertificateCard() {
  return (
    <div className={styles.root}>
      <div className={styles.img}></div>

      <div>
        <Text>Certificate Title</Text>
        <Text>Certificate Description</Text>
      </div>
    </div>
  );
}
