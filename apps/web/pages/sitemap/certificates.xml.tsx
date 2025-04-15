import { PAGE_COLLECTION_QUERY, QueryItem } from "@workearly/api";
import { fetchLocalCollection } from "@workearly/api/server";
import { GetServerSideProps } from "next";
import { getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const items = fetchLocalCollection<QueryItem["Page"]>(
    PAGE_COLLECTION_QUERY,
    (page) =>
      page.slug !== "404" &&
      page.variant === "Certificate" &&
      !page.features?.includes("No Index")
  );

  const slugs = items.map((item) => item?.slug || "") || [];

  const urls = slugs.map((slug) => ({
    loc: `${process.env.SITE_URL}/${slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
  }));

  return getServerSideSitemapLegacy(context, urls);
};

export default function Page() {}
