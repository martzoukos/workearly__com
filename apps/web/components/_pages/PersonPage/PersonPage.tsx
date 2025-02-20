import Breadcrumbs from "@/components/Breadcrumbs";
import PageItem from "@/components/PageItem";
import PersonCover from "@/components/PersonCover";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import styles from "./PersonPage.module.scss";

type PropsType = {
  className?: string;
};

export default function PersonPage({ className }: PropsType) {
  const { page } = useContentful();
  const { postDividerItems, preDividerItems } = usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
      <div className={styles.hero}>
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={[
            { name: "Home", href: "/" },
            { name: "Mentors", href: "/mentors" },
            { name: page.name || "" },
          ]}
        />
        <PersonCover className={styles.heroContent} />
      </div>

      {[...preDividerItems, ...postDividerItems].map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
