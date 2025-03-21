import { getServerClient, PAGE_SLUGS_QUERY } from "@workearly/api";
import { GetServerSideProps } from "next";
import { getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [client] = getServerClient();

  const { data } = await client
    .query(PAGE_SLUGS_QUERY, {
      where: {
        slug_not_in: ["404"],
        variant_in: ["Category"],
        features_contains_none: ["No Index"],
      },
      limit: 1000,
    })
    .toPromise();

  const slugs =
    data?.pageCollection?.items.map((item) => item?.slug || "") || [];

  const urls = slugs.map((slug) => ({
    loc: `${process.env.SITE_URL}/${slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
  }));

  return getServerSideSitemapLegacy(context, urls);
};

export default function Page() {}
