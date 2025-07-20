import type { NextConfig } from "next";

const repoName = "kjb-portfolio";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export function getImagePath(src: string) {
  return isProd ? `/${repoName}${src}` : src;
}

export default nextConfig;
