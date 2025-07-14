import InterestForm from "@/components/_pages/InterestPage/InterestForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PurchaseCourse from "@/components/PurchaseCourse";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import styles from "./InterestPage.module.scss";

type PropsType = {
  className?: string;
};

export default function InterestPage({ className }: PropsType) {
  const { page } = useContentful();
  const { courseDetails, tags } = usePageResolver(page);

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
      <Breadcrumbs
        className={styles.breadcrumbs}
        items={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          { name: page.name || "", href: `/${page.slug}` },
        ]}
      />
      <div className={styles.content}>
        <PurchaseCourse isInverted={false} hideFooter hideQuickPurchase />
        <InterestForm />
      </div>
    </main>
  );
}
