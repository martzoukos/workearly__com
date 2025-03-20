import { QueryItem } from "@workearly/api";

export const DATA_MAP = {
  paces: ["pace1", "pace2"],
  durations: ["duration1", "duration2", "duration3"],
  priceRanges: ["priceRange1", "priceRange2", "priceRange3"],
  mentorships: ["mentorship1", "mentorship2"],
} as const;

export default function useCourseDetailsResolver(
  courseDetails: QueryItem["CourseDetails"] | undefined
) {
  return getCourseDetailsResolver(courseDetails);
}

export function getCourseDetailsResolver(
  courseDetails: QueryItem["CourseDetails"] | undefined
) {
  let pace = undefined;
  let duration = undefined;
  let mentorship = undefined;
  let cardWidth = "15rem";

  if (courseDetails?.group === 1) {
    pace = DATA_MAP.paces[1];
    duration = DATA_MAP.durations[2];
    mentorship = DATA_MAP.mentorships[1];
  } else if (courseDetails?.group === 2) {
    pace = DATA_MAP.paces[1];
    duration = DATA_MAP.durations[1];
    mentorship = DATA_MAP.mentorships[1];
  } else if (courseDetails?.group === 3) {
    pace = DATA_MAP.paces[0];
    duration = DATA_MAP.durations[0];
    mentorship = DATA_MAP.mentorships[0];
    cardWidth = "22rem";
  }

  return {
    pace,
    duration,
    mentorship,
    cardWidth,
  };
}
