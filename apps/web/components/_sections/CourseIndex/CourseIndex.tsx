import CourseCard from "@/components/_cards/CourseCard";
import Button from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import FilterList from "@/components/FilterList";
import Pagination from "@/components/Pagination";
import Text from "@/components/Text";
import Viewport from "@/components/Viewport";
import {
  DATA_MAP,
  getCourseDuration,
  getCourseMentorship,
} from "@/hooks/useCourseDetailsResolver";
import usePageResolver, {
  getPageResolver,
  getPageTags,
} from "@/hooks/usePageResolver";
import usePagination from "@/hooks/usePagination";
import useSectionResolver from "@/hooks/useSectionResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { Close, Filter } from "@carbon/icons-react";
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

  const pagination = usePagination();

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

  let filteredPages = getReferences("Page").filter((page) =>
    page.contentCollection?.items.some(
      (item) => item?.__typename === "CourseDetails"
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

  if (durations.length) {
    filteredPages = filteredPages.filter((page) => {
      const { courseDetails } = getPageResolver(page, relationshipMap);
      const duration = getCourseDuration(courseDetails);

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
      const mentorship = getCourseMentorship(courseDetails);

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
          {pagination.getCurrentPageItems(filteredPages).map((page) => (
            <CourseCard key={page.sys.id} page={page} />
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
