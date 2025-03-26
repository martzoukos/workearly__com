import AltCertificateCard from "@/components/_cards/AltCertificateCard";
import Button from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import FilterList from "@/components/FilterList";
import Pagination from "@/components/Pagination";
import Text from "@/components/Text";
import Viewport from "@/components/Viewport";
import { getPageTags } from "@/hooks/usePageResolver";
import usePagination from "@/hooks/usePagination";
import useSectionResolver from "@/hooks/useSectionResolver";
import useTranslate from "@/hooks/useTranslate";
import { Close, Filter } from "@carbon/icons-react";
import {
  CERTIFICATE_CATEGORIES,
  CERTIFICATE_LEVELS,
  isDefined,
  QueryItem,
} from "@workearly/api";
import clsx from "clsx";
import {
  DelimitedArrayParam,
  useQueryParam,
  withDefault,
} from "use-query-params";
import styles from "./CertificateIndex.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  hideFilters?: boolean;
  className?: string;
};

export default function CertificateIndex({
  section,
  hideFilters,
  className,
}: PropsType) {
  const { translate } = useTranslate();
  const { getReferences } = useSectionResolver(section);
  const pagination = usePagination();

  const [categories, setCategories] = useQueryParam(
    "category",
    withDefault(DelimitedArrayParam, [])
  );
  const [levels, setLevels] = useQueryParam(
    "level",
    withDefault(DelimitedArrayParam, [])
  );

  let filteredPages = getReferences("Page").filter((page) =>
    page.contentCollection?.items.some(
      (item) => item?.__typename === "PeopleDetails"
    )
  );

  if (categories.length) {
    filteredPages = filteredPages.filter((page) => {
      const tags = getPageTags(page);

      return tags.some((tag) =>
        categories.filter(isDefined).includes(tag.id as string)
      );
    });
  }

  if (levels.length) {
    filteredPages = filteredPages.filter((page) => {
      const tags = getPageTags(page);

      return tags.some((tag) =>
        levels.filter(isDefined).includes(tag.id as string)
      );
    });
  }

  const hasFilters = [categories, levels]
    .map((group) => group.filter(isDefined))
    .some((group) => group.length);

  const filtersElement = (
    <>
      <FilterList
        type="checkbox"
        title={translate("Category")}
        items={CERTIFICATE_CATEGORIES.map((category) => ({
          title: category.name as string,
          value: category.id as string,
        }))}
        selected={categories.filter(isDefined) as string[]}
        onChange={setCategories}
      />
      <Divider />
      <FilterList
        type="checkbox"
        title={translate("Level")}
        items={CERTIFICATE_LEVELS.map((level) => ({
          title: level.name as string,
          value: level.id as string,
        }))}
        selected={levels.filter(isDefined) as string[]}
        onChange={setLevels}
      />
    </>
  );

  return (
    <section
      className={clsx(styles.root, hideFilters && styles.noFilters, className)}
    >
      {!hideFilters && (
        <Viewport showAfter="md">
          <aside className={styles.aside}>
            <Text as="h6">{translate("Filters")}</Text>
            {filtersElement}
          </aside>
        </Viewport>
      )}
      <div className={styles.content}>
        {(section.title || section.text || !hideFilters) && (
          <header className={styles.header}>
            <div className={styles.titleContainer}>
              {section.title && <Text as="h2">{section.title}</Text>}
              {section.text && <Text>{section.text}</Text>}
            </div>
            {!hideFilters && (
              <Viewport showUntil="md">
                <div className={styles.headerActions}>
                  <Drawer
                    title={translate("Filters")}
                    trigger={
                      <Button variant="Outlined">
                        <Filter />
                      </Button>
                    }
                  >
                    <aside className={styles.aside}>{filtersElement}</aside>
                  </Drawer>
                </div>
              </Viewport>
            )}
          </header>
        )}
        {hasFilters && !hideFilters && (
          <div className={styles.filters}>
            {categories.map((category) => (
              <Button
                key={category}
                isRounded
                colorScheme="Surface"
                onClick={() =>
                  setCategories(categories.filter((c) => c !== category))
                }
              >
                {
                  CERTIFICATE_CATEGORIES.find((tag) => tag.id === category)
                    ?.name
                }{" "}
                <Close />
              </Button>
            ))}
            {levels.map((level) => (
              <Button
                key={level}
                isRounded
                colorScheme="Surface"
                onClick={() => setLevels(levels.filter((c) => c !== level))}
              >
                {CERTIFICATE_LEVELS.find((tag) => tag.id === level)?.name}{" "}
                <Close />
              </Button>
            ))}
          </div>
        )}
        <div className={styles.grid}>
          {pagination.getCurrentPageItems(filteredPages).map((page) => (
            <AltCertificateCard key={page.sys.id} page={page} />
          ))}
          {pagination.getCurrentPageItems(filteredPages).length === 0 && (
            <Text size="h3" className={styles.noResults}>
              No results found
            </Text>
          )}
        </div>
        <Pagination pages={filteredPages} {...pagination} />
      </div>
    </section>
  );
}

const Divider = () => <hr className={styles.divider} />;
