import { Metadata, Viewport } from "next";
import { SITE, THEME_COLOR } from "@/app";
import { canonical } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.URL),
  title: { default: SITE.NAME, template: `%s | ${SITE.NAME}` },
  description: SITE.DESC,
  alternates: {
    canonical: canonical("/"),
  },
  openGraph: {
    type: "website",
    title: { default: SITE.NAME, template: `%s | ${SITE.NAME}` },
    description: SITE.DESC,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: { default: SITE.NAME, template: `%s | ${SITE.NAME}` },
    description: SITE.DESC,
  },
  robots: { index: true, follow: true },
  icons: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" }],
};

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { color: THEME_COLOR.DARK, media: "(prefers-color-scheme: dark)" },
    { color: THEME_COLOR.LIGHT, media: "(prefers-color-scheme: light)" },
  ],
};
