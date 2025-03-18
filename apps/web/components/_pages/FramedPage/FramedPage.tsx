import Breadcrumbs from "@/components/Breadcrumbs";
import PageItem from "@/components/PageItem";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import styles from "./FramedPage.module.scss";

type PropsType = {
  className?: string;
};

export default function FramedPage({ className }: PropsType) {
  const { page } = useContentful();
  const { postDividerItems, preDividerItems } = usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: page.name || "", href: "/mentors" },
        ]}
      />
      <div className={styles.contentItems}>
        {[...preDividerItems, ...postDividerItems].map((item) => (
          <PageItem key={item?.sys.id} item={item} />
        ))}
      </div>
    </main>
  );
}
