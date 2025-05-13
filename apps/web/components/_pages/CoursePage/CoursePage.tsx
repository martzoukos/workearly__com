import Breadcrumbs from "@/components/Breadcrumbs";
import CourseCover from "@/components/CourseCover";
import PageItem from "@/components/PageItem";
import PurchaseCourse from "@/components/PurchaseCourse";
import Viewport from "@/components/Viewport";
import usePageResolver from "@/hooks/usePageResolver";
import { getCourseSchema } from "@/lib/jsonLdSchemas";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import styles from "./CoursePage.module.scss";

type PropsType = {
  className?: string;
};

export default function CoursePage({ className }: PropsType) {
  const { page } = useContentful();
  const { courseDetails, preDividerItems, postDividerItems, tags } =
    usePageResolver(page);

  const category = tags.find((tag) => tag?.id?.startsWith("courseCategory"));

  return (
    <main className={clsx(styles.root, className)}>
      <NextSeo
        additionalMetaTags={[
          {
            name: "trackCourse",
            content: courseDetails?.title || "",
          },
          {
            name: "trackCategory",
            content: category?.id || "",
          },
          {
            name: "trackPrice",
            content: courseDetails?.finalCost?.toString() || "",
          },
        ]}
      />
      {courseDetails && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getCourseSchema(courseDetails)),
          }}
        />
      )}
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Breadcrumbs
            className={styles.breadcrumbs}
            items={[
              { name: "Home", href: "/" },
              { name: "Courses", href: "/courses" },
              { name: page.name || "", href: `/${page.slug}` },
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
