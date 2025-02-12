import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./PurchaseCourse.module.scss";

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
          sizes="30vw"
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.buttons}>
            <Button asChild variant="Outlined" colorScheme="Green">
              <Link href="/project-management-bootcamp">Personal</Link>
            </Button>
            <Button asChild variant="Outlined">
              <Link href="/project-management-bootcamp">Team</Link>
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
            <Link href="https://www.holy.gd/">Purchase course</Link>
          </Button>

          <Button asChild variant="Outlined" isFullWidth colorScheme="Black">
            <Link href="https://www.holy.gd/">Share</Link>
          </Button>

          <Button asChild variant="Outlined" isFullWidth colorScheme="Black">
            <Link href="https://www.holy.gd/"> Gift this Course</Link>
          </Button>
        </footer>
      </div>
    </div>
  );
}
