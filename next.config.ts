import { NextConfig } from "next";

const config: NextConfig = {
  reactCompiler: true,
  devIndicators: false,
  cacheComponents: true,
  typescript: { ignoreBuildErrors: true },
};

export default config;
