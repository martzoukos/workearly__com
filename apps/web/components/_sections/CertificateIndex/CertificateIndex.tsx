import WideArticleCard from "@/components/_cards/WideArticleCard";
import PageCardRenderer from "@/components/_renderers/PageCardRenderer";
import Button from "@/components/Button";
import Select from "@/components/Select";
import Shell from "@/components/Shell";
import Viewport, { useViewport } from "@/components/Viewport";
import useFilterTabs from "@/hooks/useFilterTabs";
import useSectionResolver from "@/hooks/useSectionResolver";
import { ALL_TAGS, QueryItem } from "@workearly/api";
import clsx from "clsx";
import { camelCase } from "lodash-es";
import styles from "./CertificateIndex.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
  hideFilters?: boolean;
};

export default function CertificateIndex({
  section,
  className,
  hideFilters,
}: PropsType) {
  const isUntilMd = useViewport({ showUntil: "md" });
  const { cardsCount, getReferences } = useSectionResolver(section);
  const pages = getReferences("Page");
  const style = {
    "--column-count": cardsCount,
  } as React.CSSProperties;

  const tabs = useFilterTabs(camelCase(section.title || "tags"));

  const pageTagIds = [
    ...new Set(
      pages.flatMap((page) =>
        page.contentfulMetadata.tags.map((tag) => tag?.id as string)
      )
    ),
  ];

  const FILTER_TAGS = [
    { id: "all", name: "All" },
    ...ALL_TAGS.filter((tag) => pageTagIds.includes(tag.id)),
  ];

  const filteredPages = pages.filter((page) => {
    if (tabs.selected.includes("all")) return true;
    return page.contentfulMetadata.tags.some((tag) =>
      tabs.selected.includes(tag?.id as string)
    );
  });

  const hasFilters = tabs.selected.filter((item) => item !== "all").length > 0;
  const hasFeatured =
    !hasFilters &&
    !isUntilMd &&
    section.features?.includes("First Post as Featured");
  const featuredPost = filteredPages.at(0);
  const restPosts = hasFeatured ? filteredPages.slice(1) : filteredPages;

  return (
    <Shell.Section section={section} className={className}>
      <div className={styles.root}>
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
                      tabs.selected.includes(tag.id) ? "Solid" : "Outlined"
                    }
                    onClick={() => {
                      const newCategories = tabs.onSelect(tag.id);
                      tabs.setSelected(newCategories);
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
                value={tabs.selected.at(0) as string}
                onValueChange={(value) => tabs.setSelected([value])}
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

        {hasFeatured && featuredPost && <WideArticleCard page={featuredPost} />}
        <div
          className={clsx(styles.grid, hasFeatured && styles.hasFeatured)}
          style={style}
        >
          {restPosts?.map((page) => (
            <PageCardRenderer key={page.sys.id} page={page} />
          ))}
        </div>
      </div>
    </Shell.Section>
  );
}
