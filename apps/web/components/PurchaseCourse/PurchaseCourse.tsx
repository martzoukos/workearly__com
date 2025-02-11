import Image from "next/image";
import styles from "./PurchaseCourse.module.scss";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import NextLink from "next/link";
import { useContentful } from "@/stores/ContentfulStore";
import usePageResolver from "@/hooks/usePageResolver";
import clsx from "clsx";
import CoursePrices from "../CoursePrices/CoursePrices";

type PropsType = {
  className?: string;
};

export default function PurchaseCourse({ className }: PropsType) {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);

  if (!courseDetails) {
    return null;
  }

  return (
    <div className={clsx(styles.root, className)} data-color="Green">
      <div className={styles.media}>
        <Image
          src="/course-card.png"
          fill={true}
          alt={page.name || ""}
          quality={100}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.buttons}>
            <Button asChild variant="Outlined" colorScheme="Green">
              <NextLink href="/project-management-bootcamp">Personal</NextLink>
            </Button>
            <Button asChild variant="Outlined">
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
            <Text size="caption">{courseDetails?.timeLeft}</Text>
          </div>

          {courseDetails && (
            <CoursePrices
              courseDetails={courseDetails}
              className={styles.prices}
            />
          )}
        </div>

        <footer className={styles.footer}>
          <Button asChild colorScheme="Black" isFullWidth size="large">
            <NextLink href="https://www.holy.gd/">Purchase course</NextLink>
          </Button>

          <Button asChild variant="Outlined" isFullWidth colorScheme="Black">
            <NextLink href="https://www.holy.gd/">Share</NextLink>
          </Button>

          <Button asChild variant="Outlined" isFullWidth colorScheme="Black">
            <NextLink href="https://www.holy.gd/"> Gift this Course</NextLink>
          </Button>
        </footer>
      </div>
    </div>
  );
}
