import React from "react";
import Image from "next/image";
import styles from "./CertificationProviders.module.scss";

interface CertificationProvidersProps {
  centered?: boolean;
}

const CertificationProviders = ({
  centered = false,
}: CertificationProvidersProps) => {
  return (
    <div className={`${styles.container} ${centered ? styles.centered : ""}`}>
      <h3 className={styles.title}>
        Gain credentials certified by leading global institutions
      </h3>

      <div className={styles.providers}>
        <a
          href="https://portal.shrm.org/Education/History/Classes.aspx?provider=WORKEARLY%20LTD"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.providerLink}
        >
          <Image
            src="https://images.ctfassets.net/wnfwmvn24siy/1pCJYUUiVTyeVAHp2KbF2M/4a83a5dc50c9aa0cf583e84c19da3571/shrm-recertification-provider__1_.png"
            alt="SHRM Recertification Provider"
            className={styles.providerImage}
            width={140}
            height={140}
          />
        </a>

        <a
          href="https://www.credly.com/org/workearly"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.providerLink}
        >
          <Image
            src="https://images.ctfassets.net/wnfwmvn24siy/3JBPH7I2AFFswL0CLvBcPX/6f98237820221704ed91e23c1cc87c63/credly.png"
            alt="Credly by Pearson"
            className={styles.providerImage}
            width={140}
            height={140}
          />
        </a>

        <div className={styles.providerWrapper}>
          <Image
            src="https://images.ctfassets.net/wnfwmvn24siy/20isAEwy8EDVjMIXpMpjM1/8033534789036acae2022c4c9c46c5b9/hrci.png"
            alt="HRCI Recertification Provider 2025"
            className={styles.providerImage}
            width={140}
            height={140}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationProviders;
