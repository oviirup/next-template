import { Metadata, Viewport } from "next";
import { SITE, THEME_COLOR } from "@/app";
import { Providers } from "@/components/layout/providers";
import { fonts } from "@/lib/fonts";
import { canonical, cn } from "@/lib/utils";
import "./globals.css";

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

export default function RootLayout({ children }: React.PropsWithChildren) {
  const fontClassNames = [fonts.sans.variable, fonts.code.variable];
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontClassNames, "flex flex-col bg-background px-2")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
