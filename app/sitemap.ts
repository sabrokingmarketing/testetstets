import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const lastModified = "2026-10-17";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
