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

export const COURSE_CATEGORIES = [
  "Data Science",
  "HR",
  "IT",
  "Administration",
  "Soft Skills",
] as const;

export const COURSE_DURATIONS = [
  "1 week",
  "1-4 weeks",
  "1-3 months",
  "3-6 months",
  "6 months+",
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
