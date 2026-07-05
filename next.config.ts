import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "FinSight";
const isUserOrOrgPage = repositoryName.toLowerCase().endsWith(".github.io");
const basePath = isGitHubActions && !isUserOrOrgPage ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
