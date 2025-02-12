import Link from "next/link";
import styles from "./PlaygroundPage.module.scss";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import usePageResolver from "@/hooks/usePageResolver";
import PartnerHero from "@/components/PartnerHero/PartnerHero";
import PageItem from "@/components/PageItem/PageItem";

type PropsType = {
  className?: string;
};

export default function PlaygroundPage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems, postDividerItems } = usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <nav className={styles.breadcrumbs}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>{page.name}</li>
          </ul>
        </nav>
        <PartnerHero />
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
