import Breadcrumbs from "@/components/Breadcrumbs";
import CourseCover from "@/components/CourseCover";
import Motif from "@/components/Motif";
import PageItem from "@/components/PageItem";
import PurchaseCourse from "@/components/PurchaseCourse";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import styles from "./CoursePage.module.scss";

type PropsType = {
  className?: string;
};

export default function CoursePage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems, postDividerItems } = usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
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
          {preDividerItems.map((item) => (
            <PageItem
              key={item?.sys.id}
              item={item}
              className={styles.contentItem}
            />
          ))}
        </div>
        <aside className={styles.sidebar}>
          <Motif isInverted={true}>
            <PurchaseCourse />
          </Motif>
        </aside>
      </div>
      {postDividerItems.map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
