import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thiagodev.site";
  const locales = ["pt", "en"];

  const routes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: {
        pt: `${baseUrl}/pt`,
        en: `${baseUrl}/en`,
      },
    },
  }));

  return routes;
}

