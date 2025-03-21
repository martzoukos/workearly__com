import process from "process";

const config = {
  siteUrl: process.env.SITE_URL || "https://workearly.gr",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["**/*"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/sitemap.xml`,
      `${process.env.SITE_URL}/en/sitemap.xml`,
      `${process.env.SITE_URL}/el/sitemap.xml`,
    ],
  },
};

export default config;
