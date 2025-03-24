import fs from "fs";
import path from "path";
import process from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const redirectionsPath = path.join(process.cwd(), "redirections.json");
    const redirections = JSON.parse(fs.readFileSync(redirectionsPath, "utf8"));

    return redirections.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true, // Set to false for temporary redirects
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "sameorigin",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors https://app.contentful.com",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "http",
        hostname: "downloads.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
      },
      {
        protocol: "http",
        hostname: "videos.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "videos.ctfassets.net",
      },
    ],
  },
  transpilePackages: [],
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
    stylePreprocessorOptions: {
      includePaths: ["./node_modules"],
    },
  },
  i18n: {
    locales: ["en", "el"],
    defaultLocale: "el",
    localeDetection: false,
  },
};

export default nextConfig;
