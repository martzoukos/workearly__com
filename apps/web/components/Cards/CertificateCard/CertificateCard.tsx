import Image from "next/image";
import styles from "./CertificateCard.module.scss";
import Text from "@/components/Text/Text";

type PropsType = {};

const CertificateCard = () => {
  return (
    <div className={styles.card} data-cards={1}>
      <Image
        src="/certificate.png"
        alt=""
        width={140}
        height={100}
        className={styles.media}
      />

      <div className={styles.content} data-cards={1}>
        <Text size="h6">Project Management Certificate</Text>
        <Text>
          Earn your Project Management Certificate to enhance your skills and
          advance your career in managing successful projects.
        </Text>
      </div>
    </div>
  );
};

export default CertificateCard;
