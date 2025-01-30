import Image from "next/image";
import styles from "./StickyCourseCard.module.scss";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import NextLink from "next/link";

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
          <Button asChild variant="Tab" className={styles.button}>
            <NextLink href="/project-management-bootcamp">Personal</NextLink>
          </Button>
          <Button asChild variant="Tab" className={styles.button}>
            <NextLink href="/project-management-bootcamp">Team</NextLink>
          </Button>
        </div>

        <Text size="small" className={styles.description}>
          Workearly Bootcamps use AI to personalize learning for each
          participant, offering tailored material, real-time support, and
          connections with Hiring Partners and like-minded peers.
        </Text>

        <div className={styles.timeLeft}>
          <Image src="/clock.svg" alt="" width={12} height={12} />
          <Text size="caption">9 hours left at this price!</Text>
        </div>

        <Text size="h6" className={styles.price}>
          €9.99
        </Text>
      </div>

      <div className={styles.courseActions}>
        <Button
          asChild
          variant="Tab"
          colorScheme="Black"
          behaviour="Flex"
          className={styles.button}
        >
          <NextLink href="https://www.holy.gd/">Purchase course</NextLink>
        </Button>

        <Button
          asChild
          variant="Outlined"
          colorScheme="Black"
          className={styles.button}
        >
          <NextLink href="https://www.holy.gd/">Share</NextLink>
        </Button>

        <Button
          asChild
          variant="Outlined"
          colorScheme="Black"
          className={styles.button}
        >
          <NextLink href="https://www.holy.gd/"> Gift this Course</NextLink>
        </Button>
      </div>
    </div>
  );
};

export default StickyCourseCard;
