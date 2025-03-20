import CONTENTFUL_TAGS from "./contentful/__generated__/contentful-tags.json";
import { isDefined } from "./utils";

export const DEFAULT_LOCALE = "el";
export const LOCALES = [DEFAULT_LOCALE, "en"] as const;

export const YES_NO_OPTIONS = ["Yes", "No"] as const;

export const COURSE_CATEGORIES = CONTENTFUL_TAGS.filter((tag) =>
  tag.id.startsWith("courseCategory")
)
  .map((tag) => ({
    ...tag,
    name: tag.name.split(":").at(1)?.trim(),
  }))
  .filter(isDefined);

export const ARTICLE_CATEGORIES = CONTENTFUL_TAGS.filter((tag) =>
  tag.id.startsWith("articleCategory")
)
  .map((tag) => ({
    ...tag,
    name: tag.name.split(":").at(1)?.trim(),
  }))
  .filter(isDefined);

export const ARTICLE_TOPICS = CONTENTFUL_TAGS.filter((tag) =>
  tag.id.startsWith("articleTopic")
)
  .map((tag) => ({
    ...tag,
    name: tag.name.split(":").at(1)?.trim(),
  }))
  .filter(isDefined);

export const MENTOR_TAGS = CONTENTFUL_TAGS.filter((tag) =>
  tag.id.startsWith("mentors")
)
  .map((tag) => ({
    ...tag,
    name: tag.name.split(":").at(1)?.trim(),
  }))
  .filter(isDefined);
