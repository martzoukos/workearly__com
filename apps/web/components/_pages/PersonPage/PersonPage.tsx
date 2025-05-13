import Breadcrumbs from "@/components/Breadcrumbs";
import PageItem from "@/components/PageItem";
import PersonCover from "@/components/PersonCover";
import usePageResolver from "@/hooks/usePageResolver";
import usePeopleDetailsResolver from "@/hooks/usePeopleDetailsResolver";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import styles from "./PersonPage.module.scss";

type PropsType = {
  className?: string;
};

export default function PersonPage({ className }: PropsType) {
  const { page } = useContentful();
  const { peopleDetails, postDividerItems, preDividerItems } =
    usePageResolver(page);
  const { indexLabel, indexLink } = usePeopleDetailsResolver(peopleDetails);

  return (
    <main className={clsx(styles.root, className)}>
      <div className={styles.hero}>
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={[
            { name: "Home", href: "/" },
            { name: indexLabel, href: indexLink },
            { name: page.name || "", href: `/${page.slug}` },
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
