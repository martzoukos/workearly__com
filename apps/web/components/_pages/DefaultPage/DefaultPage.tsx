import Breadcrumbs from "@/components/Breadcrumbs";
import PageItem from "@/components/PageItem";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import { useRouter } from "next/router";
import styles from "./DefaultPage.module.scss";

type PropsType = {
  className?: string;
};

export default function DefaultPage({ className }: PropsType) {
  const router = useRouter();
  const { page } = useContentful();
  const { preDividerItems, postDividerItems } = usePageResolver(page);

  const isHome = router.asPath === "/";

  return (
    <main className={clsx(styles.root, className)}>
      {!isHome && (
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={[{ name: "Home", href: "/" }, { name: page.name || "" }]}
        />
      )}
      {[...preDividerItems, ...postDividerItems].map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
