import { NextConfig } from "next";

export default async function asyncConfig() {
  return {
    reactCompiler: true,
    typescript: { ignoreBuildErrors: true }, // ignore typechecking during build
    devIndicators: false, // hides dev indicator
    allowedDevOrigins: ["192.168.1.*"],
    headers: () => [
      {
        source: "/(.*)",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Creator", value: "oviirup" },
        ],
      },
    ],
  } satisfies NextConfig;
}
