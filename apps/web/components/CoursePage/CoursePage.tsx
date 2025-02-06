import styles from "./CoursePage.module.scss";
import { useContentful } from "../../stores/ContentfulStore";
import clsx from "clsx";
import CourseDetails from "../CourseDetails/CourseDetails";
import PurchaseCourse from "@/components/PurchaseCourse/PurchaseCourse";
import PageItem from "../PageItem/PageItem";
import usePageResolver from "../../hooks/usePageResolver";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

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
            items={[
              { name: "Home", href: "/" },
              { name: "Courses", href: "/courses" },
              { name: page.name || "" },
            ]}
          />
          <CourseDetails />
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
