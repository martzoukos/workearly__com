import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import JobDetails from "@/components/JobDetails";
import PageItem from "@/components/PageItem/PageItem";
import PurchaseCourse from "@/components/PurchaseCourse/PurchaseCourse";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import styles from "./JobPage.module.scss";

type PropsType = {
  className?: string;
};

export default function JobPage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems, postDividerItems } = usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Courses", href: "/courses" },
              { name: page.name || "" },
            ]}
          />
          <JobDetails />
          {preDividerItems.map((item) => (
            <PageItem
              key={item?.sys.id}
              item={item}
              className={styles.contentItem}
            />
          ))}
        </div>
        <PurchaseCourse className={styles.sidebar} />
      </div>
      {postDividerItems.map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
