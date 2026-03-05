import { NextConfig } from "next";

const config: NextConfig = {
  devIndicators: false,
  reactCompiler: true,
  cacheComponents: true,
  typescript: { ignoreBuildErrors: true },
  transpilePackages: ["next-mdx-remote"],
};

export default config;
