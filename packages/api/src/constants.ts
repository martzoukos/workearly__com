import { isDefined } from "./utils";

export const DEFAULT_LOCALE = "el";
export const LOCALES = [DEFAULT_LOCALE, "en"] as const;

export const CONTENTFUL_TAGS = [
  {
    id: "courseCategoryBusinessAnalytics",
    name: "Business Analytics",
  },
  {
    id: "courseCategoryFinance",
    name: "Finance",
  },
  {
    id: "courseCategoryDataScience",
    name: "Data Science",
  },
  {
    id: "courseCategoryHr",
    name: "HR",
  },
  {
    id: "courseCategoryIt",
    name: "IT",
  },
  {
    id: "courseCategoryDigitalMarketing",
    name: "Digital Marketing",
  },
  {
    id: "mentorsCareers",
    name: "Career Mentors",
  },
  {
    id: "mentorsFinance",
    name: "Finance Mentors",
  },
  {
    id: "mentorsIt",
    name: "IT Mentors",
  },
  {
    id: "mentorsHr",
    name: "HR Mentors",
  },
  {
    id: "mentorsFounders",
    name: "Founders",
  },
] as const;

export const COURSE_CATEGORIES = CONTENTFUL_TAGS.filter((tag) =>
  tag.id.startsWith("courseCategory")
)
  .map((tag) => tag.name.split(":").at(1)?.trim())
  .filter(isDefined);

export const COURSE_DURATIONS = [
  "1 Week",
  "1-4 Weeks",
  "1-3 Months",
  "3-6 Months",
  "6 Months+",
];

export const COURSE_PRICE_RANGES = [
  "Free",
  "Upto 50",
  "From 51 to 100",
  "101+",
] as const;

export const COURSE_SKILLS = ["Power BI", "Excel"] as const;

export const COURSE_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export const YES_NO_OPTIONS = ["Yes", "No"] as const;
