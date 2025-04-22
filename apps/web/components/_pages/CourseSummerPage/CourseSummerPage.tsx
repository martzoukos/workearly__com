import Breadcrumbs from "@/components/Breadcrumbs";
import PageItem from "@/components/PageItem";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import { Course, WithContext } from "schema-dts";
import styles from "./CourseSummerPage.module.scss";
import SummerCourseCover from "@/components/SummerCourseCover";

type PropsType = {
  className?: string;
};

export default function CourseSummerPage({ className }: PropsType) {
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

      <Breadcrumbs
        className={styles.breadcrumbs}
        items={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          { name: page.name || "" },
        ]}
      />
      <SummerCourseCover />
      {preDividerItems.map((item) => (
        <PageItem
          key={item?.sys.id}
          item={item}
          className={styles.contentItem}
        />
      ))}

      {postDividerItems.map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
