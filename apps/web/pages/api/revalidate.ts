import { getServerClient, isDefined, REVALIDATE_QUERY } from "@workearly/api";
import { RevalidateQuery } from "@workearly/api/src/contentful/graphql/__generated__/gql/graphql";
import uniq from "lodash-es/uniq";
import { NextApiRequest, NextApiResponse } from "next";

const MAX_DEPTH = 5;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const secret = process.env.REVALIDATION_SECRET;
  if (req.headers["x-revalidation-secret"] !== secret) {
    return res.status(401).json({ message: "Invalid secret" });
  }

  try {
    const { sys } = req.body;
    const entryId = sys?.id;

    if (!entryId) {
      return res.status(400).json({ message: "Missing entry ID" });
    }

    const visitedEntries = new Set<string>();
    const slugs = await getLinkedPages(entryId, visitedEntries, 0);

    if (slugs.length === 0) {
      return res.status(200).json({ message: "No linked pages found" });
    }

    await Promise.all(slugs.map((url) => res.revalidate(url)));

    return res.json({ revalidated: true, slugs });
  } catch (error) {
    console.error("Revalidation error:", error);
    return res.status(500).json({ message: "Error revalidating pages" });
  }
}

async function getLinkedPages(
  entryId: string,
  visitedEntries: Set<string>,
  depth: number
): Promise<string[]> {
  if (depth > MAX_DEPTH || visitedEntries.has(entryId)) {
    return [];
  }

  visitedEntries.add(entryId);
  const [client] = getServerClient();
  const { data } = await client.query(REVALIDATE_QUERY, { entryId });

  const entry = data?.entryCollection?.items.at(0);
  if (!entry?.__typename) {
    return [];
  }

  let pageSlugs: string[] = [];

  if (entry.linkedFrom && "pageCollection" in entry.linkedFrom) {
    pageSlugs = getPageSlugs(entry.linkedFrom.pageCollection);
  }

  const linkedIds = getLinkedIds(entry);
  const nestedSlugs = await Promise.all(
    linkedIds.map((id) => getLinkedPages(id, visitedEntries, depth + 1))
  );

  return [...pageSlugs, ...nestedSlugs.flat()];
}

type CollectionType =
  | { items: Array<{ sys: { id: string } | null } | null> }
  | undefined
  | null;

type LinkedFrom = NonNullable<
  NonNullable<RevalidateQuery["entryCollection"]>["items"][number]
>["linkedFrom"];

function getLinkedIds(entry: { linkedFrom?: LinkedFrom }): string[] {
  if (!entry.linkedFrom) {
    return [];
  }

  const collections: Array<CollectionType> = [];

  if ("sectionCollection" in entry.linkedFrom) {
    collections.push(entry.linkedFrom.sectionCollection);
  }
  if ("compositeCollection" in entry.linkedFrom) {
    collections.push(entry.linkedFrom.compositeCollection);
  }
  if ("uniqueComponentCollection" in entry.linkedFrom) {
    collections.push(entry.linkedFrom.uniqueComponentCollection);
  }
  if ("actionCollection" in entry.linkedFrom) {
    collections.push(entry.linkedFrom.actionCollection);
  }
  if ("peopleDetailsCollection" in entry.linkedFrom) {
    collections.push(entry.linkedFrom.peopleDetailsCollection);
  }

  return collections.flatMap(getEntryIds);
}

export function getPageSlugs(
  pageCollection:
    | { items: Array<{ slug?: string | null; variant?: string | null } | null> }
    | undefined
    | null
): string[] {
  const directReferences = (
    pageCollection?.items
      .filter((item) => item?.slug !== "404")
      .filter((item) => item?.variant !== "Playground")
      .map((item) => item?.slug)
      .filter(isDefined) ?? []
  ).map((slug) => (slug === "home" ? "/" : `/${slug}`));

  if (directReferences.some((slug) => slug.startsWith("/course"))) {
    directReferences.push("/courses");
  } else if (directReferences.some((slug) => slug.startsWith("/blog"))) {
    directReferences.push("/blog");
  } else if (directReferences.some((slug) => slug.startsWith("/mentors"))) {
    directReferences.push("/mentors");
  } else if (directReferences.some((slug) => slug.startsWith("/partners"))) {
    directReferences.push("/partners");
  }

  return uniq(directReferences);
}

function getEntryIds(entryCollection: CollectionType): string[] {
  return (
    entryCollection?.items.map((item) => item?.sys?.id).filter(isDefined) ?? []
  );
}
