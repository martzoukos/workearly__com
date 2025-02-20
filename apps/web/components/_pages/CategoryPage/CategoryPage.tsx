import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryCover from "@/components/CategoryCover";
import PageItem from "@/components/PageItem";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import styles from "./CategoryPage.module.scss";

type PropsType = {
  className?: string;
};

export default function CategoryPage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems, postDividerItems } = usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
      <header className={styles.header}>
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={[
            { name: "Home", href: "/" },
            { name: "Courses", href: "/courses" },
            { name: page.name || "" },
          ]}
        />
        <CategoryCover />
      </header>
      {[...preDividerItems, ...postDividerItems].map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
