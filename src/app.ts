import { env, isDev, isPreview } from "@/env";

export const SITE_NAME = "Next Template";
export const SITE_DESC = "Simple Next.js template to get started quickly";

export const DOMAIN = "acme.com";

export const SITE_DOMAIN = isDev
  ? `localhost:${env.PORT}`
  : isPreview
    ? env.VERCEL_URL
    : DOMAIN;

export const SITE_URL = isDev
  ? `http://${SITE_DOMAIN}/`
  : `https://${SITE_DOMAIN}/`;

export const SITE = {
  NAME: SITE_NAME,
  DESC: SITE_DESC,
  DOMAIN: SITE_DOMAIN,
  URL: SITE_URL,
};

export const THEME_COLOR = {
  LIGHT: "#fafaf9", // stone-50
  DARK: "#09090b", // zinc-950
};
