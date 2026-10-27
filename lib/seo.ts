import type { Metadata } from "next";

// Verified production domain (Vercel project domain). Override per environment if needed.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://lands.im.gov.ng").replace(/\/$/, "");
export const SITE_NAME = "Ministry of Lands, Survey & Planning";
export const DEFAULT_DESCRIPTION =
  "Official website of the Ministry of Lands, Survey & Planning, Imo State Government: services, departments, projects, news and events.";
export const OG_IMAGE_PATH = "/og-image.jpg";

type Title = NonNullable<Metadata["title"]>;
const plainTitle = (t: Title) => (typeof t === "string" ? t : (t as { absolute?: string }).absolute);

export function pageMetadata(opts: {
  title: Title;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const image = opts.image || OG_IMAGE_PATH;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: plainTitle(opts.title),
      description: opts.description,
      url: opts.path,
      siteName: SITE_NAME,
      locale: "en_NG",
      type: opts.type || "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: plainTitle(opts.title), description: opts.description, images: [image] },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

// Layers verified SEO fields over the site's existing root metadata. Inherited title, description, keywords,
// canonical, authors and social fields are dropped (several repos were copied from other ministries);
// icons, verification tags etc. are kept. KEEP_BASE_TEXT keeps the site's own title/description when confirmed correct.
const KEEP_BASE_TEXT = false;

export function buildRootMetadata(base: Metadata = {}): Metadata {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title: baseTitle, description: baseDescription, keywords, alternates, authors, creator, publisher, category, openGraph, twitter, ...rest } = base;
  const title: Metadata["title"] =
    KEEP_BASE_TEXT && baseTitle && typeof baseTitle === "object" && "template" in baseTitle
      ? baseTitle
      : { default: (KEEP_BASE_TEXT && typeof baseTitle === "string" && baseTitle) || `${SITE_NAME} | Imo State Government`, template: `%s | ${SITE_NAME}` };
  const description = (KEEP_BASE_TEXT && typeof baseDescription === "string" && baseDescription) || DEFAULT_DESCRIPTION;
  return {
    ...rest,
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: SITE_NAME,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_NG",
      title: typeof title === "string" ? title : (title as { default: string }).default,
      description,
      images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: SITE_NAME, description, images: [OG_IMAGE_PATH] },
    robots: { index: true, follow: true },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  areaServed: { "@type": "AdministrativeArea", name: "Imo State, Nigeria" },
  parentOrganization: { "@type": "GovernmentOrganization", name: "Imo State Government" },
};

export function jsonLd(data: Record<string, unknown>) {
  // Escape "<" so content can never close the script tag.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
