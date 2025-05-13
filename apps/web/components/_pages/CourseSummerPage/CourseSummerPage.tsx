import Breadcrumbs from "@/components/Breadcrumbs";
import PageItem from "@/components/PageItem";
import usePageResolver from "@/hooks/usePageResolver";
import { getCourseSchema } from "@/lib/jsonLdSchemas";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import styles from "./CourseSummerPage.module.scss";

type PropsType = {
  className?: string;
};

export default function CourseSummerPage({ className }: PropsType) {
  const { page } = useContentful();
  const { courseDetails, preDividerItems, postDividerItems } =
    usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
      {courseDetails && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getCourseSchema(courseDetails)),
          }}
        />
      )}

      <Breadcrumbs
        className={styles.breadcrumbs}
        items={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          { name: page.name || "", href: `/${page.slug}` },
        ]}
      />
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
