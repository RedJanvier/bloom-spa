import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/services", "/book", "/about", "/contact"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${env.siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${env.siteUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
