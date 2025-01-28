import path from "path";
import { DEFAULT_LOCALE, LOCALES } from "@workearly/api";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
    stylePreprocessorOptions: {
      includePaths: ["./node_modules"],
    },
  },
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
  },
};

export default nextConfig;
