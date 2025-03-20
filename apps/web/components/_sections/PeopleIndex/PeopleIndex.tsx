import PersonCard from "@/components/_cards/PersonCard";
import Button from "@/components/Button";
import Select from "@/components/Select";
import Shell from "@/components/Shell";
import Viewport from "@/components/Viewport";
import useFilterTabs from "@/hooks/useFilterTabs";
import useSectionResolver from "@/hooks/useSectionResolver";
import useShellResolver from "@/hooks/useShellResolver";
import { MENTOR_TAGS, QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./PeopleIndex.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  hideFilters?: boolean;
  className?: string;
};

export default function PeopleIndex({
  section,
  hideFilters,
  className,
}: PropsType) {
  const { getReferences, titleSize } = useSectionResolver(section);
  const pages = getReferences("Page");
  const shell = useShellResolver(section);
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
    ...MENTOR_TAGS.filter((tag) => pageTagIds.includes(tag.id)),
  ];

  const filteredPages = pages.filter((page) => {
    if (categoryTabs.selected.includes("all")) return true;
    return page.contentfulMetadata.tags.some((tag) =>
      categoryTabs.selected.includes(tag?.id as string)
    );
  });

  return (
    <Shell.Root className={clsx(styles.root, className)} {...shell}>
      {(section.title || section.text || !hideFilters) && (
        <Shell.Header
          supertitle={section.supertitle}
          title={section.title}
          text={section.text}
          titleSize={titleSize}
          className={clsx(!hideFilters && styles.header)}
        >
          {!hideFilters && (
            <>
              <Viewport showAfter="md">
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
              </Viewport>
              <Viewport showUntil="md">
                <Select
                  className={styles.filterSelect}
                  value={categoryTabs.selected.at(0) as string}
                  onValueChange={(value) => categoryTabs.setSelected([value])}
                >
                  {FILTER_TAGS.map((tag) => (
                    <Select.Item key={tag.id} value={tag.id}>
                      {tag.name}
                    </Select.Item>
                  ))}
                </Select>
              </Viewport>
            </>
          )}
        </Shell.Header>
      )}
      <div className={styles.cardGrid}>
        {filteredPages.map((page) => (
          <PersonCard key={page.sys.id} page={page} className={styles.card} />
        ))}
      </div>
    </Shell.Root>
  );
}
