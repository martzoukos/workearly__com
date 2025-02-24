import CourseCard from "@/components/_cards/CourseCard";
import Button from "@/components/Button";
import FilterList from "@/components/FilterList";
import Text from "@/components/Text";
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
import {
  DelimitedArrayParam,
  StringParam,
  useQueryParam,
  withDefault,
} from "use-query-params";
import styles from "./CourseIndex.module.scss";

type PropsType = {
  pages: QueryItem["Page"][];
  title: string | null | undefined;
  tags: Array<string>;
};

export default function CourseIndex({ title, pages, tags }: PropsType) {
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

  return (
    <section className={styles.root}>
      <aside className={styles.aside}>
        <Text as="h6">Filters</Text>
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
      </aside>
      <div className={styles.content}>
        {title && <header>{title && <Text as="h2">{title}</Text>}</header>}
        {Boolean(tags.length) && (
          <div className={styles.filters}>
            {tags.map((tag) => (
              <Button key={tag} isRounded colorScheme="Surface">
                {tag}
              </Button>
            ))}
          </div>
        )}
        <div className={styles.grid}>
          {pages.map((page) => (
            <CourseCard key={page.sys.id} page={page} />
          ))}
        </div>
        <footer className={styles.footer}>Results per view</footer>
      </div>
    </section>
  );
}

const Divider = () => <hr className={styles.divider} />;
