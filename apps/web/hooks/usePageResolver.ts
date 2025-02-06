import { QueryItem } from "@workearly/api";
import { useContentful } from "../stores/ContentfulStore";

export default function usePageResolver(page: QueryItem["Page"]) {
  const { relationshipMap } = useContentful();

  const items =
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
        } else if (item?.__typename === "UniqueComponent") {
          return relationshipMap.uniqueComponentCollection.find(
            (section) => section.sys.id === item.sys.id
          );
        } else if (item?.__typename === "CourseDetails") {
          return relationshipMap.courseDetailsCollection.find(
            (section) => section.sys.id === item.sys.id
          );
        } else if (item?.__typename === "PeopleDetails") {
          return relationshipMap.peopleDetailsCollection.find(
            (section) => section.sys.id === item.sys.id
          );
        } else if (item?.__typename === "ResourceDetails") {
          return relationshipMap.resourceDetailsCollection.find(
            (section) => section.sys.id === item.sys.id
          );
        }
      })
      .filter(Boolean) || [];

  const dividerIndex = items.findIndex(
    (item) =>
      item?.__typename === "UniqueComponent" &&
      item.variant === "Start Full Width"
  );

  const preDividerItems =
    dividerIndex === -1 ? items : items.slice(0, dividerIndex);
  const postDividerItems =
    dividerIndex === -1 ? [] : items.slice(dividerIndex + 1);

  const courseDetails = items.find(
    (item) => item?.__typename === "CourseDetails"
  ) as QueryItem["CourseDetails"];
  const peopleDetails = items.find(
    (item) => item?.__typename === "PeopleDetails"
  ) as QueryItem["PeopleDetails"];
  const resourceDetails = items.find(
    (item) => item?.__typename === "ResourceDetails"
  ) as QueryItem["ResourceDetails"];

  return {
    courseDetails,
    peopleDetails,
    resourceDetails,
    preDividerItems,
    postDividerItems,
    items,
  };
}
