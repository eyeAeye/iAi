import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // This replaces `next export`
  reactStrictMode: true,
  trailingSlash: true, // Recommended for GitHub Pages
  basePath: isGithubPages ? '/iAi' : '',
  assetPrefix: isGithubPages ? '/iAi' : '',
};

export default nextConfig;
