import Text from "@/components/Text/Text";
import ArticleCard from "@/components/_cards/ArticleCard/ArticleCard";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./RelatedArticles.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function RelatedArticles({ section, className }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const pages = getReferences("Page");

  return (
    <section className={clsx(styles.root, className)}>
      <header className={styles.header}>
        {section.title && <Text as="h4">{section.title}</Text>}
        {section.text && <Text>{section.text}</Text>}
      </header>
      <div className={styles.cards}>
        {pages.map((page) => (
          <ArticleCard key={page.sys.id} page={page} />
        ))}
      </div>
    </section>
  );
}
