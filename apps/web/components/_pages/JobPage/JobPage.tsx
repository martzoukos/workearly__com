import Breadcrumbs from "@/components/Breadcrumbs";
import JobCover from "@/components/JobCover";
import PageItem from "@/components/PageItem";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import Image from "next/image";
import styles from "./JobPage.module.scss";

type PropsType = {
  className?: string;
};

export default function JobPage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems, postDividerItems, categoryOrJobDetails } =
    usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Breadcrumbs
            className={styles.breadcrumbs}
            items={[
              { name: "Home", href: "/" },
              { name: "Career Path", href: "/career" },
              { name: page.name || "" },
            ]}
          />
          <JobCover />
          {preDividerItems.map((item) => (
            <PageItem
              key={item?.sys.id}
              item={item}
              className={styles.contentItem}
            />
          ))}
        </div>
        {categoryOrJobDetails?.asset?.url && (
          <aside className={styles.sidebar}>
            <Image
              src={categoryOrJobDetails.asset.url}
              alt={categoryOrJobDetails.title || ""}
              width={330}
              height={480}
            />
          </aside>
        )}
      </div>
      {postDividerItems.map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
