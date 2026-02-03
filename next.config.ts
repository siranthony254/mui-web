import type { NextConfig } from "next";

const repoName = "mui-web";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out", 

  ...(isProd && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
