import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import StatCard from "@/components/StatCard";
import Text from "@/components/Text/Text";
import Viewport from "@/components/Viewport";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./SummerCourseCover.module.scss";

export default function SummerCourseCover() {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { translate } = useTranslate();
  const { duration, mentorship, pace, cardWidth } =
    useCourseDetailsResolver(courseDetails);
  const router = useRouter();

  if (!courseDetails) {
    return null;
  }

  const group4Label1 = translate("group4_label1");
  const group4Label2 = translate("group4_label2");
  const group4Label3 = translate("group4_label3");
  const group4Label4 = translate("group4_label4");
  const group4Label5 = translate("group4_label5");

  return (
    <section className={styles.root}>
      <Viewport showUntil="lg">
        <div className={styles.mediaWrapper}>
          <Image
            src={courseDetails?.videoThumbnail?.url || ""}
            alt={page.name || ""}
            width={courseDetails?.videoThumbnail?.width || 0}
            height={courseDetails?.videoThumbnail?.height || 0}
            className={styles.media}
          />
        </div>
      </Viewport>
      <div className={styles.content}>
        <header className={styles.header}>
          <Text as="h1">{page.name}</Text>
          <Text>{courseDetails?.summary}</Text>
        </header>

        <div
          className={styles.statCards}
          style={{ "--min-card-width": cardWidth } as React.CSSProperties}
        >
          {duration && (
            <StatCard
              label={translate("Duration")}
              value={translate(duration)}
              className={styles.statCard}
            />
          )}
          {pace && (
            <StatCard
              label={translate("Pace")}
              value={translate(pace)}
              className={styles.statCard}
            />
          )}
          {mentorship && (
            <StatCard
              label={translate("Mentorship")}
              value={translate(mentorship)}
              className={styles.statCard}
            />
          )}
          {group4Label1 && (
            <StatCard
              label={group4Label1}
              value={translate("group4_value1")}
              className={styles.statCard}
            />
          )}
          {group4Label2 && (
            <StatCard
              label={group4Label2}
              value={translate("group4_value2")}
              className={styles.statCard}
            />
          )}
          {group4Label3 && (
            <StatCard
              label={group4Label3}
              value={translate("group4_value3")}
              className={styles.statCard}
            />
          )}
          {group4Label4 && (
            <StatCard
              label={group4Label4}
              value={translate("group4_value4")}
              className={styles.statCard}
            />
          )}
          {group4Label5 && (
            <StatCard
              label={group4Label5}
              value={translate("group4_value5")}
              className={styles.statCard}
            />
          )}
        </div>

        <div className={styles.payments}>
          {courseDetails.applicationFormUrl ? (
            <Button asChild size="medium" colorScheme="Black">
              <Link href={courseDetails.applicationFormUrl}>
                {translate("Apply")}
              </Link>
            </Button>
          ) : (
            <Button
              id={`purchase-button-${courseDetails.id}`}
              size="medium"
              colorScheme="Black"
              onClick={() => {
                router.push(`/payment/${page.slug}`);
              }}
            >
              {translate("Purchase")}
            </Button>
          )}

          {courseDetails && (
            <CoursePrices courseDetails={courseDetails} showKlarna />
          )}
        </div>
      </div>

      <Viewport showAfter="lg">
        <div className={styles.mediaWrapper}>
          <Image
            src={courseDetails?.videoThumbnail?.url || ""}
            alt={page.name || ""}
            width={courseDetails?.videoThumbnail?.width || 0}
            height={courseDetails?.videoThumbnail?.height || 0}
            className={styles.media}
          />
        </div>
      </Viewport>
    </section>
  );
}
