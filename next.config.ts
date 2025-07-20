import type { NextConfig } from "next";

const repoName = "kjb-portfolio";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  homepage: isProd ? `https://kjbrian9.github.io/${repoName}` : "",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
