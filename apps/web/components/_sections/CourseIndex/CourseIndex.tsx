import CourseCard from "@/components/_cards/CourseCard";
import Button from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import FilterList from "@/components/FilterList";
import Select from "@/components/Select";
import Text from "@/components/Text";
import Viewport from "@/components/Viewport";
import {
  DATA_MAP,
  getCourseDetailsResolver,
} from "@/hooks/useCourseDetailsResolver";
import usePageResolver, { getPageResolver } from "@/hooks/usePageResolver";
import usePagination, { MIN_PAGE_LIMIT } from "@/hooks/usePagination";
import useSectionResolver from "@/hooks/useSectionResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { ChevronLeft, ChevronRight, Close, Filter } from "@carbon/icons-react";
import {
  COURSE_CATEGORIES,
  isDefined,
  QueryItem,
  YES_NO_OPTIONS,
} from "@workearly/api";
import clsx from "clsx";
import {
  DelimitedArrayParam,
  StringParam,
  useQueryParam,
  withDefault,
} from "use-query-params";
import styles from "./CourseIndex.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function CourseIndex({ section, className }: PropsType) {
  const { translate } = useTranslate();
  const { getReferences } = useSectionResolver(section);
  const { page, relationshipMap } = useContentful();
  const { variant } = usePageResolver(page);
  let filteredPages = getReferences("Page").filter((page) =>
    page.contentCollection?.items.some(
      (item) => item?.__typename === "CourseDetails"
    )
  );
  const {
    getCurrentPageItems,
    pageCount,
    pageIndex,
    pageLimit,
    setPageIndex,
    setPageLimit,
  } = usePagination({
    pages: filteredPages,
  });

  const [categories, setCategories] = useQueryParam(
    "category",
    withDefault(DelimitedArrayParam, [])
  );
  const [durations, setDurations] = useQueryParam(
    "duration",
    withDefault(DelimitedArrayParam, [])
  );
  const [priceRanges, setPriceRanges] = useQueryParam(
    "price",
    withDefault(DelimitedArrayParam, [])
  );
  const [mentoring, setMentoring] = useQueryParam(
    "mentoring",
    withDefault(StringParam, "")
  );

  if (categories.length) {
    filteredPages = filteredPages.filter((page) => {
      const { tags } = getPageResolver(page, relationshipMap);
      return tags.some((tag) =>
        categories.filter(isDefined).includes(tag.id as string)
      );
    });
  }

  if (durations.length) {
    filteredPages = filteredPages.filter((page) => {
      const { courseDetails } = getPageResolver(page, relationshipMap);
      const { duration } = getCourseDetailsResolver(courseDetails);

      if (!duration) {
        return false;
      }

      return durations.filter(isDefined).includes(duration);
    });
  }

  if (priceRanges.length) {
    filteredPages = filteredPages.filter((page) => {
      const { courseDetails } = getPageResolver(page, relationshipMap);

      let coursePriceRange: (typeof DATA_MAP.priceRanges)[number] | undefined =
        undefined;

      if (!courseDetails?.finalCost) {
        return false;
      } else if (courseDetails?.finalCost <= 50) {
        coursePriceRange = "priceRange1";
      } else if (courseDetails?.finalCost <= 100) {
        coursePriceRange = "priceRange2";
      } else if (courseDetails?.finalCost > 100) {
        coursePriceRange = "priceRange3";
      }

      return priceRanges.filter(isDefined).includes(coursePriceRange || "");
    });
  }

  if (mentoring) {
    filteredPages = filteredPages.filter((page) => {
      const { courseDetails } = getPageResolver(page, relationshipMap);
      const { mentorship } = getCourseDetailsResolver(courseDetails);

      if (mentoring === "Yes") {
        return Boolean(mentorship);
      }

      return !mentorship;
    });
  }

  const hasFilters = [categories, durations, priceRanges, [mentoring]]
    .map((group) => group.filter(isDefined))
    .some((group) => group.length);

  const filtersElement = (
    <>
      {variant !== "Category" && (
        <>
          <FilterList
            type="checkbox"
            title={translate("Category")}
            items={COURSE_CATEGORIES.map((category) => ({
              title: category.name as string,
              value: category.id as string,
            }))}
            selected={categories.filter(isDefined) as string[]}
            onChange={setCategories}
          />
          <Divider />
        </>
      )}
      <FilterList
        type="checkbox"
        title={translate("Duration")}
        items={DATA_MAP.durations.map((duration) => ({
          title: translate(duration),
          value: duration,
        }))}
        selected={durations.filter(isDefined) as string[]}
        onChange={setDurations}
      />
      <Divider />
      <FilterList
        type="checkbox"
        title={translate("PriceRange")}
        items={DATA_MAP.priceRanges.map((priceRange) => ({
          title: translate(priceRange),
          value: priceRange,
        }))}
        selected={priceRanges.filter(isDefined) as string[]}
        onChange={setPriceRanges}
      />
      <Divider />
      <FilterList
        type="radio"
        title={translate("Mentorship")}
        items={YES_NO_OPTIONS.map((option) => ({
          title: translate(option),
          value: option,
        }))}
        selected={mentoring}
        onChange={setMentoring}
      />
    </>
  );

  return (
    <section className={clsx(styles.root, className)}>
      <Viewport showAfter="md">
        <aside className={styles.aside}>
          <Text as="h6">{translate("Filters")}</Text>
          {filtersElement}
        </aside>
      </Viewport>
      <div className={styles.content}>
        {(section.title || section.text) && (
          <header className={styles.header}>
            <div className={styles.titleContainer}>
              {section.title && <Text as="h2">{section.title}</Text>}
              {section.text && <Text>{section.text}</Text>}
            </div>
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
          </header>
        )}
        {hasFilters && (
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
                {COURSE_CATEGORIES.find((tag) => tag.id === category)?.name}{" "}
                <Close />
              </Button>
            ))}
            {durations.map((duration) => (
              <Button
                key={duration}
                isRounded
                colorScheme="Surface"
                onClick={() =>
                  setDurations(durations.filter((c) => c !== duration))
                }
              >
                {translate(duration as (typeof DATA_MAP.durations)[number])}{" "}
                <Close />
              </Button>
            ))}
            {priceRanges.map((range) => (
              <Button
                key={range}
                isRounded
                colorScheme="Surface"
                onClick={() =>
                  setPriceRanges(priceRanges.filter((c) => c !== range))
                }
              >
                {translate(range as (typeof DATA_MAP.priceRanges)[number])}
                <Close />
              </Button>
            ))}
            {mentoring && (
              <Button
                isRounded
                colorScheme="Surface"
                onClick={() => setMentoring("")}
              >
                {translate(mentoring as (typeof YES_NO_OPTIONS)[number])}{" "}
                <Close />
              </Button>
            )}
          </div>
        )}
        <div className={styles.grid}>
          {getCurrentPageItems().map((page) => (
            <CourseCard key={page.sys.id} page={page} />
          ))}
          {getCurrentPageItems().length === 0 && (
            <Text size="h3" className={styles.noResults}>
              No results found
            </Text>
          )}
        </div>
        <Viewport showUntil="md">
          <footer className={styles.footer}>
            {pageIndex !== pageCount && (
              <Button
                isFullWidth
                variant="Outlined"
                onClick={() => setPageLimit(pageLimit + 4)}
              >
                Load More
              </Button>
            )}
          </footer>
        </Viewport>
        <Viewport showAfter="md">
          <footer className={styles.footer}>
            <label className={styles.pageCount}>
              Results per view
              <Select
                value={pageLimit.toString()}
                onValueChange={(count) => setPageLimit(Number(count))}
              >
                {Array.from({ length: 3 }, (_, i) => i).map((count) => (
                  <Select.Item
                    key={count}
                    value={(count * 15 + MIN_PAGE_LIMIT).toString()}
                  >
                    {count * 15 + MIN_PAGE_LIMIT}
                  </Select.Item>
                ))}
              </Select>
            </label>
            <div className={styles.pagination}>
              <Button
                variant="Outlined"
                onClick={() => setPageIndex(pageIndex - 1)}
                disabled={pageIndex === 1}
              >
                <ChevronLeft />
              </Button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                (index) => (
                  <Button
                    key={index}
                    variant="Solid"
                    onClick={() => setPageIndex(index)}
                    colorSchemes={{
                      light: index === pageIndex ? "Green" : "Surface",
                      dark: index === pageIndex ? "Green" : "Surface",
                    }}
                  >
                    {index}
                  </Button>
                )
              )}
              <Button
                variant="Outlined"
                onClick={() => setPageIndex(pageIndex + 1)}
                disabled={pageIndex === pageCount}
              >
                <ChevronRight />
              </Button>
            </div>
          </footer>
        </Viewport>
      </div>
    </section>
  );
}

const Divider = () => <hr className={styles.divider} />;
