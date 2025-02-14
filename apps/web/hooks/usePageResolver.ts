import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { isDefined, QueryItem } from "@workearly/api";
import { useContentful } from "../stores/ContentfulStore";

const DATA_MAP = {
  wordsPerMinute: 200,
  variants: [
    "Default",
    "Post",
    "Course",
    "Playground",
    "Post",
    "Job",
    "Category",
    "Framed",
    "Person",
  ],
} as const;

export type PageVariantType = (typeof DATA_MAP)["variants"][number];

export default function usePageResolver(page: QueryItem["Page"]) {
  const { relationshipMap } = useContentful();

  // TODO: Use getReferences here?
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
        } else if (item?.__typename === "CategoryOrJobDetails") {
          return relationshipMap.categoryOrJobDetailsCollection.find(
            (section) => section?.sys.id === item.sys.id
          );
        }
      })
      .filter(isDefined) || [];

  const dividerIndex = items.findIndex(
    (item) =>
      item?.__typename === "UniqueComponent" &&
      item.variant === "Full Width Divider"
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
  const categoryOrJobDetails = items.find(
    (item) => item?.__typename === "CategoryOrJobDetails"
  ) as QueryItem["CategoryOrJobDetails"];

  const richTexts = items.filter(
    (item) => item?.__typename === "ContentTypeRichText"
  ) as QueryItem["ContentTypeRichText"][];

  const readingTime = calculateReadingTime(
    richTexts.map((richText) => richText?.body?.json)
  );

  function getHeadingsDoc() {
    const richText = preDividerItems
      .filter((x) => x?.__typename === "ContentTypeRichText")
      .at(0) as QueryItem["ContentTypeRichText"];

    const headingsDoc = richText.body
      ? {
          ...(richText.body.json as Document),
          content: (richText.body.json as Document).content.filter((node) =>
            [BLOCKS.HEADING_2].includes(node.nodeType)
          ),
        }
      : undefined;

    return headingsDoc;
  }

  const variant = page.variant as PageVariantType;

  return {
    courseDetails,
    peopleDetails,
    resourceDetails,
    categoryOrJobDetails,
    preDividerItems,
    postDividerItems,
    items,
    readingTime,
    getHeadingsDoc,
    variant,
  };
}

function calculateReadingTime(documents: Document[]) {
  const plainText = documents
    .map((document) => documentToPlainTextString(document))
    .join(" ");
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  return Math.ceil(wordCount / DATA_MAP.wordsPerMinute);
}
