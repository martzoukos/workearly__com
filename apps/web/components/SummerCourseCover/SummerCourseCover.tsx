import SectionRenderer from "@/components/_renderers/SectionRenderer";
import CoursePrices from "@/components/CoursePrices";
import { PurchaseButton } from "@/components/CoursePrices/CoursePrices";
import StatCard from "@/components/StatCard";
import StickyPurchase from "@/components/StickyPurchase";
import Text from "@/components/Text/Text";
import Viewport, { useViewport } from "@/components/Viewport";
import useCompositeResolver from "@/hooks/useCompositeResolver";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { QueryItem } from "@workearly/api";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import Image from "next/image";
import styles from "./SummerCourseCover.module.scss";

type PropsType = {
  composite: QueryItem["Composite"];
  className?: string;
};

export default function SummerCourseCover({ composite, className }: PropsType) {
  const { getReferences } = useCompositeResolver(composite);
  const childSections = getReferences("Section");
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { translate } = useTranslate();
  const { duration, mentorship, pace, cardWidth } =
    useCourseDetailsResolver(courseDetails);
  const isUntilMd = useViewport({ showUntil: "md" });

  if (!courseDetails) {
    return null;
  }

  const group4Label1 = translate("group4_label1");
  const group4Label2 = translate("group4_label2");
  const group4Label3 = translate("group4_label3");
  const group4Label4 = translate("group4_label4");
  const group4Label5 = translate("group4_label5");
  const group4Label6 = translate("group4_label6");

  return (
    <section className={clsx(styles.root, className)}>
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
          {group4Label6 && (
            <StatCard
              label={group4Label6}
              value={translate("group4_value6")}
              className={styles.statCard}
            />
          )}
        </div>

        <div className={styles.payments}>
          <PurchaseButton
            page={page}
            size="medium"
            colorScheme="Black"
            isFullWidth={isUntilMd}
          />

          {courseDetails && (
            <CoursePrices courseDetails={courseDetails} showKlarna />
          )}
        </div>
        {childSections.map((section) => (
          <SectionRenderer
            key={section.sys.id}
            section={section}
            className={styles.section}
          />
        ))}
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
      <Themed isInverted>
        <StickyPurchase />
      </Themed>
    </section>
  );
}
