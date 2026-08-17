import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { tools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tools`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const topicPages = categories.map((c) => ({
    url: `${base}/topics/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogPages = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt ?? a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const toolPages = tools.map((t) => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...topicPages, ...blogPages, ...toolPages];
}
