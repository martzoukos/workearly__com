import Breadcrumbs from "@/components/Breadcrumbs";
import CourseCover from "@/components/CourseCover";
import PageItem from "@/components/PageItem";
import PurchaseCourse from "@/components/PurchaseCourse";
import Viewport from "@/components/Viewport";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import { Course, WithContext } from "schema-dts";
import styles from "./CoursePage.module.scss";

type PropsType = {
  className?: string;
};

export default function CoursePage({ className }: PropsType) {
  const { page } = useContentful();
  const { courseDetails, preDividerItems, postDividerItems } =
    usePageResolver(page);

  let jsonLd: WithContext<Course> | undefined = undefined;

  if (courseDetails) {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: courseDetails.h1Title || "",
      image: courseDetails.videoThumbnail?.url || "",
      description: courseDetails.summary || "",
      courseCode: courseDetails.id || "",
    };
  }

  return (
    <main className={clsx(styles.root, className)}>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Breadcrumbs
            className={styles.breadcrumbs}
            items={[
              { name: "Home", href: "/" },
              { name: "Courses", href: "/courses" },
              { name: page.name || "" },
            ]}
          />
          <CourseCover />
          <Viewport showUntil="md">
            <PurchaseCourse hideMedia isInverted />
          </Viewport>
          {preDividerItems.map((item) => (
            <PageItem
              key={item?.sys.id}
              item={item}
              className={styles.contentItem}
            />
          ))}
        </div>
        <Viewport showAfter="md">
          <aside className={styles.sidebar}>
            <PurchaseCourse isInverted />
          </aside>
        </Viewport>
      </div>
      {postDividerItems.map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
