import Image from "next/image";
import styles from "./StickyCourseCard.module.scss";
import { CustomLink } from "@/components/Button/Button";

type PropsType = {};

const StickyCourseCard = () => {
  return (
    <div className={styles.card} data-color="Green">
      <Image
        src="/course-card.png"
        alt=""
        width={100}
        height={100}
        className={styles.media}
      />

      <div className={styles.content}>
        <div className={styles.buttons}>
          <CustomLink
            href="/project-management-bootcamp"
            variant="Tab"
            className={styles.button}
          >
            Personal
          </CustomLink>
          <CustomLink
            href="/project-management-bootcamp"
            variant="Tab"
            className={styles.button}
          >
            Team
          </CustomLink>
        </div>

        <p className={styles.description}>
          Workearly Bootcamps use AI to personalize learning for each
          participant, offering tailored material, real-time support, and
          connections with Hiring Partners and like-minded peers.
        </p>

        <div className={styles.timeLeft}>
          <Image src="/clock.svg" alt="" width={12} height={12} />
          <p className={styles.time}>9 hours left at this price!</p>
        </div>

        <p className={styles.price}>€9.99</p>
      </div>

      <div className={styles.courseActions}>
        <CustomLink href="https://www.holy.gd/" color="Black" behaviour="Flex">
          Purchase course
        </CustomLink>
        <CustomLink
          href="https://www.holy.gd/"
          color="Black"
          variant="Outlined"
        >
          Share
        </CustomLink>
        <CustomLink
          href="https://www.holy.gd/"
          color="Black"
          variant="Outlined"
        >
          Gift this Course
        </CustomLink>
      </div>
    </div>
  );
};

export default StickyCourseCard;
