import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
    stylePreprocessorOptions: {
      includePaths: ["./node_modules"],
    },
  },
};

export default nextConfig;
