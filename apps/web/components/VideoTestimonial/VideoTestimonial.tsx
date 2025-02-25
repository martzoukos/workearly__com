import ReactPlayer from "react-player";
import Text from "../Text/Text";
import styles from "./VideoTestimonial.module.scss";

export default function VideoTestimonial() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.playerWrapper}>
          <ReactPlayer
            url="https://vimeo.com/347119375?share=copy"
            controls
            width="100%"
            height="100%"
            className={styles.player}
          />
        </div>

        <div className={styles.details}>
          {/* <Image src="/stars.svg" alt="" width={96} height={16} /> */}
          <Text>Maria Lopez | Marketing Specialist at GrowthWorks</Text>
          <Text>
            Maria moved from retail to marketing with WorkEarly’s digital
            marketing program, building a portfolio and landing her first role
            in content strategy.
          </Text>
        </div>
      </div>
    </div>
  );
}
