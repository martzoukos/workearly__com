import CourseCard from "@/components/_cards/CourseCard";
import Button from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import FilterList from "@/components/FilterList";
import Select from "@/components/Select";
import Text from "@/components/Text";
import Viewport, { useViewport } from "@/components/Viewport";
import usePageResolver, { getPageResolver } from "@/hooks/usePageResolver";
import useSectionResolver from "@/hooks/useSectionResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { ChevronLeft, ChevronRight, Close, Filter } from "@carbon/icons-react";
import {
  COURSE_CATEGORIES,
  COURSE_DURATIONS,
  COURSE_LEVELS,
  COURSE_PRICE_RANGES,
  COURSE_SKILLS,
  isDefined,
  QueryItem,
  YES_NO_OPTIONS,
} from "@workearly/api";
import clsx from "clsx";
import { useEffect } from "react";
import {
  DelimitedArrayParam,
  NumberParam,
  StringParam,
  useQueryParam,
  withDefault,
} from "use-query-params";
import styles from "./CourseIndex.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

const MIN_PAGE_LIMIT = 15;

export default function CourseIndex({ section, className }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const { page, relationshipMap } = useContentful();
  const { variant } = usePageResolver(page);
  const [pageLimit, setPageLimit] = useQueryParam(
    "pageLimit",
    withDefault(NumberParam, MIN_PAGE_LIMIT)
  );
  const [pageIndex, setPageIndex] = useQueryParam(
    "pageIndex",
    withDefault(NumberParam, 1)
  );
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
  const [skills, setSkills] = useQueryParam(
    "skills",
    withDefault(DelimitedArrayParam, [])
  );
  const [levels, setLevels] = useQueryParam(
    "levels",
    withDefault(DelimitedArrayParam, [])
  );
  const [mentoring, setMentoring] = useQueryParam(
    "mentoring",
    withDefault(StringParam, "")
  );
  const isUntilMd = useViewport({ showUntil: "md" });

  useEffect(() => {
    if (isUntilMd) {
      setPageLimit(4);
      setPageIndex(1);
    } else {
      setPageLimit(MIN_PAGE_LIMIT);
      setPageIndex(1);
    }
  }, [isUntilMd, setPageIndex, setPageLimit]);

  let filteredPages = getReferences("Page").filter((page) =>
    page.contentCollection?.items.some(
      (item) => item?.__typename === "CourseDetails"
    )
  );

  if (categories.length) {
    filteredPages = filteredPages.filter((page) => {
      const { tags } = getPageResolver(page, relationshipMap);
      return tags.some((tag) => categories.filter(isDefined).includes(tag));
    });
  }

  if (durations.length) {
    filteredPages = filteredPages.filter((page) => {
      const { courseDetails } = getPageResolver(page, relationshipMap);

      if (!courseDetails?.duration?.length) {
        return false;
      }

      return courseDetails.duration.some((duration) =>
        durations.filter(isDefined).includes(duration)
      );
    });
  }

  if (priceRanges.length) {
    filteredPages = filteredPages.filter((page) => {
      const { courseDetails } = getPageResolver(page, relationshipMap);

      let coursePriceRange = "Free";

      if (!courseDetails?.finalCost) {
        coursePriceRange = "Free";
      } else if (courseDetails?.finalCost <= 50) {
        coursePriceRange = "Upto 50";
      } else if (courseDetails?.finalCost <= 100) {
        coursePriceRange = "From 51 to 100";
      } else if (courseDetails?.finalCost > 100) {
        coursePriceRange = "101+";
      }

      return priceRanges.filter(isDefined).includes(coursePriceRange);
    });
  }

  if (levels.length) {
    filteredPages = filteredPages.filter((page) => {
      const { courseDetails } = getPageResolver(page, relationshipMap);

      if (!courseDetails?.level?.length) {
        return false;
      }

      return courseDetails.level.some((level) =>
        levels.filter(isDefined).includes(level)
      );
    });
  }

  const pageCount = Math.ceil(filteredPages.length / pageLimit);

  function getCurrentPageItems() {
    const startIndex = (pageIndex - 1) * pageLimit;
    const endIndex = startIndex + pageLimit;

    return filteredPages.slice(startIndex, endIndex);
  }

  const hasFilters = [
    categories,
    durations,
    priceRanges,
    skills,
    levels,
    [mentoring],
  ]
    .map((group) => group.filter(isDefined))
    .some((group) => group.length);

  const filtersElement = (
    <>
      {" "}
      {variant !== "Category" && (
        <>
          <FilterList
            type="checkbox"
            title="Category"
            items={COURSE_CATEGORIES.map((category) => ({
              title: category,
              value: category,
            }))}
            selected={categories.filter(isDefined) as string[]}
            onChange={setCategories}
          />
          <Divider />
        </>
      )}
      <FilterList
        type="checkbox"
        title="Duration"
        items={COURSE_DURATIONS.map((duration) => ({
          title: duration,
          value: duration,
        }))}
        selected={durations.filter(isDefined) as string[]}
        onChange={setDurations}
      />
      <Divider />
      <FilterList
        type="checkbox"
        title="Price Range"
        items={COURSE_PRICE_RANGES.map((priceRange) => ({
          title: priceRange,
          value: priceRange,
        }))}
        selected={priceRanges.filter(isDefined) as string[]}
        onChange={setPriceRanges}
      />
      <Divider />
      <FilterList
        type="checkbox"
        title="Skills"
        items={COURSE_SKILLS.map((skill) => ({
          title: skill,
          value: skill,
        }))}
        selected={skills.filter(isDefined) as string[]}
        onChange={setSkills}
      />
      <Divider />
      <FilterList
        type="checkbox"
        title="Level"
        items={COURSE_LEVELS.map((level) => ({
          title: level,
          value: level,
        }))}
        selected={levels.filter(isDefined) as string[]}
        onChange={setLevels}
      />
      <Divider />
      <FilterList
        type="radio"
        title="Mentoring"
        items={YES_NO_OPTIONS.map((option) => ({
          title: option,
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
          <Text as="h6">Filters</Text>
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
                  title="Filters"
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
                {category} <Close />
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
                {duration} <Close />
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
                {range} <Close />
              </Button>
            ))}
            {skills.map((skill) => (
              <Button
                key={skill}
                isRounded
                colorScheme="Surface"
                onClick={() => setSkills(skills.filter((c) => c !== skill))}
              >
                {skill} <Close />
              </Button>
            ))}
            {levels.map((level) => (
              <Button
                key={level}
                isRounded
                colorScheme="Surface"
                onClick={() => setLevels(levels.filter((c) => c !== level))}
              >
                {level} <Close />
              </Button>
            ))}
            {mentoring && (
              <Button
                isRounded
                colorScheme="Surface"
                onClick={() => setMentoring("")}
              >
                {mentoring} <Close />
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
                {Array.from({ length: 5 }, (_, i) => i).map((count) => (
                  <Select.Item
                    key={count}
                    value={(count * 3 + MIN_PAGE_LIMIT).toString()}
                  >
                    {count * 3 + MIN_PAGE_LIMIT}
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
