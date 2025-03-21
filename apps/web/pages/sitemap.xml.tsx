import { GetServerSideProps } from "next";
import { getServerSideSitemapIndexLegacy } from "next-sitemap";

const SITEMAP_TYPES = [
  "blog",
  "categories",
  "certificates",
  "courses",
  "mentors",
  "partners",
  "reskilling",
  "other",
];

export const getServerSideProps: GetServerSideProps = async (context) => {
  const urls = SITEMAP_TYPES.map(
    (type) => `${process.env.SITE_URL}/sitemap/${type}.xml`
  );

  return getServerSideSitemapIndexLegacy(context, urls);
};

export default function Page() {}
