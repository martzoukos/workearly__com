import { toPageSlugs } from "@workearly/api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.query.secret !== process.env.CONTENTFUL_PREVIEW_SECRET_TOKEN ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({});

  const pageSlugs = toPageSlugs(req.query.slug as string);

  if (!pageSlugs?.length) {
    return res.redirect(`/`);
  }

  res.redirect(`/${req.query.slug}` as string);
}
