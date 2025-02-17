import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { Gift, Share } from "@carbon/icons-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./PurchaseCourse.module.scss";

type PropsType = {
  className?: string;
};

export default function PurchaseCourse({ className }: PropsType) {
  const [purchaseType, setPurchaseType] = useState<"Personal" | "Team">(
    "Personal"
  );
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { translate } = useTranslate();

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
            <Button
              variant={purchaseType === "Personal" ? "Solid" : "Outlined"}
              colorScheme={purchaseType === "Personal" ? "Green" : "Black"}
              onClick={() => setPurchaseType("Personal")}
            >
              {translate("Personal")}
            </Button>
            <Button
              variant={purchaseType === "Team" ? "Solid" : "Outlined"}
              colorScheme={purchaseType === "Team" ? "Green" : "Black"}
              onClick={() => setPurchaseType("Team")}
            >
              {translate("Team")}
            </Button>
          </div>

          <Text size="small" className={styles.description}>
            {translate(
              purchaseType === "Personal"
                ? "CourseCardPersonal"
                : "CourseCardTeam"
            )}
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
            <Link href="https://www.holy.gd/">
              {translate("CourseCardCTA")}
            </Link>
          </Button>

          <Button asChild variant="Outlined" isFullWidth colorScheme="Black">
            <Link href="https://www.holy.gd/">
              <Share /> {translate("CourseCardShare")}
            </Link>
          </Button>

          <Button asChild variant="Outlined" isFullWidth colorScheme="Black">
            <Link href="https://www.holy.gd/">
              <Gift /> Gift this Course
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  );
}
