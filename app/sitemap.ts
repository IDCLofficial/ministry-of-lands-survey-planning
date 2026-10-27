import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Static public routes only. Dynamic detail pages (news/events/projects) are not listed yet.
const routes = [
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/department", priority: 0.8, changeFrequency: "monthly" },
  { path: "/events", priority: 0.7, changeFrequency: "weekly" },
  { path: "/media", priority: 0.4, changeFrequency: "monthly" },
  { path: "/news", priority: 0.8, changeFrequency: "daily" },
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${SITE_URL}${r.path}`, changeFrequency: r.changeFrequency, priority: r.priority }));
}
