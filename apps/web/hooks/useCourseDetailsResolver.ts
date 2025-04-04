import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { QueryItem } from "@workearly/api";
import { DateTime } from "luxon";

export const DATA_MAP = {
  paces: ["pace1", "pace2"],
  durations: ["duration1", "duration2", "duration3"],
  priceRanges: ["priceRange1", "priceRange2", "priceRange3"],
  mentorships: ["mentorship1", "mentorship2"],
} as const;

export default function useCourseDetailsResolver(
  courseDetails: QueryItem["CourseDetails"] | undefined
) {
  const { endDates } = useContentful();
  const { translate } = useTranslate();

  const duration = getCourseDuration(courseDetails);
  const mentorship = getCourseMentorship(courseDetails);
  let pace = undefined;
  let cardWidth = "15rem";
  let timeLeft = undefined;
  let gift = undefined;

  if (courseDetails?.group === 1) {
    pace = DATA_MAP.paces[1];
    timeLeft = getTimeLeft(1);
    gift = getGift(1);
  } else if (courseDetails?.group === 2) {
    pace = DATA_MAP.paces[1];
    timeLeft = getTimeLeft(2);
    gift = getGift(2);
  } else if (courseDetails?.group === 3) {
    pace = DATA_MAP.paces[0];
    cardWidth = "22rem";
    timeLeft = getTimeLeft(3);
    gift = getGift(3);
  }

  function getTimeLeft(groupNumber: number) {
    const groupEndDate = endDates.find(
      (endDate) => endDate.name === `group${groupNumber}`
    )?.date;

    if (groupEndDate) {
      const difference = Math.ceil(
        DateTime.fromISO(groupEndDate).diff(DateTime.now(), "days").as("days")
      );

      if (difference > 0) {
        return `${translate("endingBefore")} ${Math.ceil(difference)} ${translate("endingAfter")}`;
      } else if (difference === 0) {
        return translate("endingToday");
      }
    }
  }
  function getGift(groupNumber: number) {
    const groupGift = endDates.find(
      (endDate) => endDate.name === `group${groupNumber}`
    )?.gift;

    return groupGift;
  }

  return {
    pace,
    duration,
    mentorship,
    cardWidth,
    timeLeft,
    gift,
  };
}

export function getCourseDuration(
  courseDetails: QueryItem["CourseDetails"] | undefined
) {
  let duration = undefined;

  if (courseDetails?.group === 1) {
    duration = DATA_MAP.durations[2];
  } else if (courseDetails?.group === 2) {
    duration = DATA_MAP.durations[1];
  } else if (courseDetails?.group === 3) {
    duration = DATA_MAP.durations[0];
  }

  return duration;
}

export function getCourseMentorship(
  courseDetails: QueryItem["CourseDetails"] | undefined
) {
  let mentorship = undefined;

  if (courseDetails?.group === 1) {
    mentorship = DATA_MAP.mentorships[1];
  } else if (courseDetails?.group === 2) {
    mentorship = DATA_MAP.mentorships[1];
  } else if (courseDetails?.group === 3) {
    mentorship = DATA_MAP.mentorships[0];
  }

  return mentorship;
}
