import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
    additionalData: `@import "./styles/variables.scss";`,
    prependData: `@import "./styles/mixins.scss";`,
  },
};

export default nextConfig;
