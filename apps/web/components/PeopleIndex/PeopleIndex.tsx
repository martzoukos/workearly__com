import PersonCard from "@/components/_cards/PersonCard";
import Button from "@/components/Button";
import Text from "@/components/Text";
import useFilterTabs from "@/hooks/useFilterTabs";
import { CONTENTFUL_TAGS, QueryItem } from "@workearly/api";
import clsx from "clsx";
import Link from "next/link";
import styles from "./PeopleIndex.module.scss";

type PropsType = {
  title?: string | null;
  subtitle?: string | null;
  pages: QueryItem["Page"][];
  hideFilters?: boolean;
  className?: string;
};

export default function PeopleIndex({
  pages,
  title,
  subtitle,
  hideFilters = false,
  className,
}: PropsType) {
  const categoryTabs = useFilterTabs("categories");

  const pageTagIds = [
    ...new Set(
      pages.flatMap((page) =>
        page.contentfulMetadata.tags.map((tag) => tag?.id as string)
      )
    ),
  ];

  const FILTER_TAGS = [
    { id: "all", name: "All" },
    ...CONTENTFUL_TAGS.filter((tag) => pageTagIds.includes(tag.id)),
  ];

  const filteredPages = pages.filter((page) => {
    if (categoryTabs.selected.includes("all")) return true;
    return page.contentfulMetadata.tags.some((tag) =>
      categoryTabs.selected.includes(tag?.id as string)
    );
  });

  return (
    <div className={clsx(styles.root, className)}>
      {(title || subtitle || !hideFilters) && (
        <header className={styles.header}>
          <div className={styles.headerContent}>
            {title && <Text as="h1">{title}</Text>}
            {subtitle && <Text>{subtitle}</Text>}
          </div>
          {!hideFilters && (
            <div className={styles.filterTabs}>
              {FILTER_TAGS.map((tag) => (
                <Button
                  key={tag.id}
                  className={styles.filterButton}
                  size="xsmall"
                  variant={
                    categoryTabs.selected.includes(tag.id)
                      ? "Solid"
                      : "Outlined"
                  }
                  onClick={() => {
                    const newCategories = categoryTabs.onSelect(tag.id);
                    categoryTabs.setSelected(newCategories);
                  }}
                >
                  {tag.name}
                </Button>
              ))}
            </div>
          )}
        </header>
      )}
      <div className={styles.cardGrid}>
        {filteredPages.map((page) => (
          <Link key={page.sys.id} href={page.slug || "/"}>
            <PersonCard page={page} className={styles.card} />
          </Link>
        ))}
      </div>
    </div>
  );
}
