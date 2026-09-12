import type { MetadataRoute } from "next";
import { getAllColumnArticles } from "@/lib/column";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/company", "/contact", "/column"].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const columnRoutes = getAllColumnArticles().map((article) => ({
    url: `${siteConfig.siteUrl}/column/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticRoutes, ...columnRoutes];
}
