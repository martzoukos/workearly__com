import Breadcrumbs from "@/components/Breadcrumbs";
import PageItem from "@/components/PageItem/PageItem";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import styles from "./PlaygroundPage.module.scss";

type PropsType = {
  className?: string;
};

export default function PlaygroundPage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems, postDividerItems } = usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Courses", href: "/courses" },
            { name: page.name || "" },
          ]}
        />

        {[...preDividerItems, ...postDividerItems].map((item) => (
          <PageItem
            key={item?.sys.id}
            item={item}
            className={styles.contentItem}
          />
        ))}
      </div>
    </main>
  );
}
