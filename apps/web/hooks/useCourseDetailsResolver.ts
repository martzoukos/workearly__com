import { useContentful } from "../stores/ContentfulStore";

export default function useCourseDetailsResolver() {
  const { page, relationshipMap } = useContentful();
  const courseDetails = relationshipMap.courseDetailsCollection.find(
    (item) => item.sys.id === page.details?.sys.id
  );

  const hasStatLabels =
    courseDetails?.studentsCount || courseDetails?.userReviews;

  return { courseDetails, hasStatLabels };
}
