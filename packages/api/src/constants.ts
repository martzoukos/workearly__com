export const DEFAULT_LOCALE = "el";
export const LOCALES = [DEFAULT_LOCALE, "en"] as const;
export const THEMES = ["light", "dark"] as const;

export const CONTENTFUL_TAGS = [
  {
    id: "careerMentors",
    name: "Career Mentors",
  },
  {
    id: "financeMentors",
    name: "Finance Mentors",
  },
  {
    id: "itMentors",
    name: "IT Mentors",
  },
  {
    id: "hrMentors",
    name: "HR Mentors",
  },
  {
    id: "founders",
    name: "Founders",
  },
] as const;
