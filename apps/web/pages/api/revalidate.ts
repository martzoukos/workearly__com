import { getServerClient, isDefined, REVALIDATE_QUERY } from "@workearly/api";
import { NextApiRequest, NextApiResponse } from "next";

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
    const entryId = req.body.entityId;

    console.log(entryId, req.body);

    if (!entryId) {
      return res.status(400).json({ message: "Missing entry ID" });
    }

    console.log("Success");

    const slugs = await getLinkedPages(entryId);

    if (slugs.length === 0) {
      return res.status(200).json({ message: "No linked pages found" });
    }

    for (const url of slugs) {
      await res.revalidate(url);
    }

    return res.json({ revalidated: true, slugs });
  } catch (error) {
    console.error("Revalidation error:", error);
    return res.status(500).json({ message: "Error revalidating pages" });
  }
}

async function getLinkedPages(entryId: string): Promise<string[]> {
  const [client] = getServerClient();

  const { data } = await client.query(REVALIDATE_QUERY, { entryId });

  const entry = data?.entryCollection?.items.at(0);

  if (!entry?.__typename) {
    return [];
  }

  if (entry.__typename === "CourseDetails") {
    return getPageSlugs(entry.linkedFrom?.pageCollection);
  } else if (entry.__typename === "PeopleDetails") {
    return getPageSlugs(entry.linkedFrom?.pageCollection);
  } else if (entry.__typename === "CategoryOrJobDetails") {
    return getPageSlugs(entry.linkedFrom?.pageCollection);
  } else if (entry.__typename === "ResourceDetails") {
    return getPageSlugs(entry.linkedFrom?.pageCollection);
  } else if (entry.__typename === "UniqueComponent") {
    return getPageSlugs(entry.linkedFrom?.pageCollection);
  } else if (entry.__typename === "Composite") {
    return getPageSlugs(entry.linkedFrom?.pageCollection);
  } else if (entry.__typename === "ContentTypeRichText") {
    const pageSlugs = getPageSlugs(entry.linkedFrom?.pageCollection);
    const sectionIds = getEntryIds(entry.linkedFrom?.sectionCollection);

    for (const id of sectionIds) {
      const slugs = await getLinkedPages(id);
      pageSlugs.push(...slugs);
    }

    return pageSlugs;
  } else if (entry.__typename === "Section") {
    const pageSlugs = getPageSlugs(entry.linkedFrom?.pageCollection);
    const compositeIds = getEntryIds(entry.linkedFrom?.compositeCollection);

    for (const id of compositeIds) {
      const slugs = await getLinkedPages(id);
      pageSlugs.push(...slugs);
    }

    return pageSlugs;
  } else if (entry.__typename === "AccordionCard") {
    const pageSlugs: string[] = [];
    const sectionIds = getEntryIds(entry.linkedFrom?.sectionCollection);

    for (const id of sectionIds) {
      const slugs = await getLinkedPages(id);
      pageSlugs.push(...slugs);
    }

    return pageSlugs;
  } else if (entry.__typename === "Card") {
    const pageSlugs: string[] = [];
    const sectionIds = getEntryIds(entry.linkedFrom?.sectionCollection);

    for (const id of sectionIds) {
      const slugs = await getLinkedPages(id);
      pageSlugs.push(...slugs);
    }

    return pageSlugs;
  } else if (entry.__typename === "Page") {
    const pageSlugs: string[] = [];
    const uniqueComponentIds = getEntryIds(
      entry.linkedFrom?.uniqueComponentCollection
    );
    const sectionIds = getEntryIds(entry.linkedFrom?.sectionCollection);
    const actionIds = getEntryIds(entry.linkedFrom?.actionCollection);
    const ids = [uniqueComponentIds, sectionIds, actionIds].flat();

    for (const id of ids) {
      const slugs = await getLinkedPages(id);
      pageSlugs.push(...slugs);
    }

    return pageSlugs;
  } else if (entry.__typename === "Action") {
    const pageSlugs: string[] = [];
    const peopleDetailsIds = getEntryIds(
      entry.linkedFrom?.peopleDetailsCollection
    );
    const sectionIds = getEntryIds(entry.linkedFrom?.sectionCollection);
    const compositeIds = getEntryIds(entry.linkedFrom?.compositeCollection);
    const ids = [peopleDetailsIds, sectionIds, compositeIds].flat();

    for (const id of ids) {
      const slugs = await getLinkedPages(id);
      pageSlugs.push(...slugs);
    }

    return pageSlugs;
  }

  return [];
}

function getPageSlugs(
  pageCollection:
    | { items: Array<{ slug?: string | null; variant?: string | null } | null> }
    | undefined
    | null
): string[] {
  return (
    pageCollection?.items
      .filter((item) => item?.slug !== "404")
      .filter((item) => item?.variant !== "Playground")
      .map((item) => item?.slug)
      .filter(isDefined) ?? []
  ).map((slug) => (slug === "home" ? "/" : `/${slug}`));
}

function getEntryIds(
  entryCollection:
    | { items: Array<{ sys: { id: string } | null } | null> }
    | undefined
    | null
): string[] {
  return (
    entryCollection?.items.map((item) => item?.sys?.id).filter(isDefined) ?? []
  );
}
