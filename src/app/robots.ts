import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Google-Extended",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "CCBot",
          "Bytespider",
          "cohere-ai",
          "Amazonbot",
          "meta-externalagent",
          "FacebookBot",
          "Twitterbot",
          "LinkedInBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://docentbase.com/sitemap.xml",
    host: "https://docentbase.com",
  };
}
