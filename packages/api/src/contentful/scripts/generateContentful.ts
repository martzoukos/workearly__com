import fs from "fs";
import {
  ACCORDION_CARD_COLLECTION_QUERY,
  ACTION_COLLECTION_QUERY,
  CARD_COLLECTION_QUERY,
  CATEGORY_OR_JOB_DETAILS_COLLECTION_QUERY,
  COMPOSITE_COLLECTION_QUERY,
  CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
  COURSE_DETAILS_COLLECTION_QUERY,
  PAGE_COLLECTION_QUERY,
  PEOPLE_DETAILS_COLLECTION_QUERY,
  RESOURCE_DETAILS_COLLECTION_QUERY,
  SECTION_COLLECTION_QUERY,
  UNIQUE_COMPONENT_COLLECTION_QUERY,
} from "../graphql/queries";
import generateCollection from "./generateCollection";

const OUTPUT_DIR = "../../packages/api/src/contentful/__generated__";

export default async function generateContentful() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  await generateCollection({
    query: ACCORDION_CARD_COLLECTION_QUERY,
    mapItems: (data) => data?.accordionCardCollection?.items,
    mapTotal: (data) => data?.accordionCardCollection?.total,
    outputDir: OUTPUT_DIR,
  });

  await generateCollection({
    query: ACTION_COLLECTION_QUERY,
    mapItems: (data) => data?.actionCollection?.items,
    mapTotal: (data) => data?.actionCollection?.total,
    outputDir: OUTPUT_DIR,
  });

  await generateCollection({
    query: CARD_COLLECTION_QUERY,
    mapItems: (data) => data?.cardCollection?.items,
    mapTotal: (data) => data?.cardCollection?.total,
    outputDir: OUTPUT_DIR,

    variables: {
      limit: 50,
    },
  });

  await generateCollection({
    query: CATEGORY_OR_JOB_DETAILS_COLLECTION_QUERY,
    mapItems: (data) => data?.categoryOrJobDetailsCollection?.items,
    mapTotal: (data) => data?.categoryOrJobDetailsCollection?.total,
    outputDir: OUTPUT_DIR,
  });

  await generateCollection({
    query: COMPOSITE_COLLECTION_QUERY,
    mapItems: (data) => data?.compositeCollection?.items,
    mapTotal: (data) => data?.compositeCollection?.total,
    outputDir: OUTPUT_DIR,

    variables: {
      limit: 50,
    },
  });

  await generateCollection({
    query: CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
    mapItems: (data) => data?.contentTypeRichTextCollection?.items,
    mapTotal: (data) => data?.contentTypeRichTextCollection?.total,
    outputDir: OUTPUT_DIR,

    variables: {
      limit: 10,
    },
  });

  await generateCollection({
    query: COURSE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) => data?.courseDetailsCollection?.items,
    mapTotal: (data) => data?.courseDetailsCollection?.total,
    outputDir: OUTPUT_DIR,
  });

  await generateCollection({
    query: PAGE_COLLECTION_QUERY,
    mapItems: (data) => data?.pageCollection?.items,
    mapTotal: (data) => data?.pageCollection?.total,
    outputDir: OUTPUT_DIR,

    variables: {
      limit: 50,
    },
  });

  await generateCollection({
    query: PEOPLE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) => data?.peopleDetailsCollection?.items,
    mapTotal: (data) => data?.peopleDetailsCollection?.total,
    outputDir: OUTPUT_DIR,

    variables: {
      limit: 50,
    },
  });

  await generateCollection({
    query: RESOURCE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) => data?.resourceDetailsCollection?.items,
    mapTotal: (data) => data?.resourceDetailsCollection?.total,
    outputDir: OUTPUT_DIR,
  });

  await generateCollection({
    query: SECTION_COLLECTION_QUERY,
    mapItems: (data) => data?.sectionCollection?.items,
    mapTotal: (data) => data?.sectionCollection?.total,
    outputDir: OUTPUT_DIR,

    variables: {
      limit: 20,
    },
  });

  await generateCollection({
    query: UNIQUE_COMPONENT_COLLECTION_QUERY,
    mapItems: (data) => data?.uniqueComponentCollection?.items,
    mapTotal: (data) => data?.uniqueComponentCollection?.total,
    outputDir: OUTPUT_DIR,

    variables: {
      limit: 50,
    },
  });

  console.log("✅ All collections dumped successfully");
}

generateContentful();
