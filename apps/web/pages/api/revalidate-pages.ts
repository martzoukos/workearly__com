import { PAGE_COLLECTION_QUERY, QueryItem } from "@workearly/api";
import { fetchLocalCollection } from "@workearly/api/server";
import { NextApiRequest, NextApiResponse } from "next";
import { getPageSlugs } from "./revalidate";

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
    const items = fetchLocalCollection<QueryItem["Page"]>(
      PAGE_COLLECTION_QUERY,
      (page) => page.variant === req.body?.variant
    );
    const slugs = getPageSlugs({ items });

    await Promise.all(slugs.map((url) => res.revalidate(url)));

    return res.json({ revalidated: true, slugs });
  } catch (error) {
    console.error("Revalidation error:", error);
    return res.status(500).json({ message: "Error revalidating pages" });
  }
}
