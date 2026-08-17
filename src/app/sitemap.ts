import { MetadataRoute } from "next";
import { HELP_ARTICLES } from "@/data/help-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://docentbase.com";
  const currentDate = new Date().toISOString();

  const landingPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#fee-engine`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#attendance`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#physical-support`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#homework-reports`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#calculator`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const helpStaticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/help`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/help/troubleshoot`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const helpArticlePages: MetadataRoute.Sitemap = HELP_ARTICLES.map((article) => ({
    url: `${baseUrl}/help/articles/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...landingPages, ...helpStaticPages, ...helpArticlePages];
}
