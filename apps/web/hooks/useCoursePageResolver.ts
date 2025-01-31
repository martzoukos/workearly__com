import { useContentful } from "../stores/ContentfulStore";

export default function useCoursePageResolver() {
  const { page, relationshipMap } = useContentful();
  const courseDetails = relationshipMap.courseDetailsCollection.find(
    (item) => item.sys.id === page.details?.sys.id
  );
  const mainItems =
    page.contentCollection?.items
      .map((item) => {
        if (item?.__typename === "ContentTypeRichText") {
          return relationshipMap.contentTypeRichTextCollection.find(
            (section) => section.sys.id === item.sys.id
          );
        } else if (item?.__typename === "Section") {
          return relationshipMap.sectionCollection.find(
            (section) => section.sys.id === item.sys.id
          );
        }
      })
      .filter(Boolean) || [];

  const hasStatLabels =
    courseDetails?.studentsCount || courseDetails?.userReviews;

  return { courseDetails, hasStatLabels, mainItems };
}
