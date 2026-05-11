import { env } from "@/lib/env";
import type { Service } from "@/data/services";
import { CATEGORY_LABEL } from "@/data/services";

function parseHours(range: string): { opens: string; closes: string } | null {
  const [opens, closes] = range.split("-");
  if (!opens || !closes) return null;
  return { opens: opens.trim(), closes: closes.trim() };
}

function jsonLd(data: unknown) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const weekday = parseHours(env.hours.weekday);
  const sat = parseHours(env.hours.saturday);
  const sun = parseHours(env.hours.sunday);

  const data = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${env.siteUrl}#business`,
    name: env.business.name,
    description:
      "Luxury day spa offering massages, advanced facials, body scrubs, and waxing in Kibagabaga, Kigali.",
    url: env.siteUrl,
    telephone: env.business.phone,
    email: env.business.email,
    image: `${env.siteUrl}/og-default.jpg`,
    priceRange: "RWF 5,000–100,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ST KG 326, Gate 80",
      addressLocality: "Kibagabaga",
      addressRegion: "Kigali",
      addressCountry: "RW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: env.business.lat,
      longitude: env.business.lng,
    },
    sameAs: [env.business.instagram],
    openingHoursSpecification: [
      weekday && {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: weekday.opens,
        closes: weekday.closes,
      },
      sat && {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: sat.opens,
        closes: sat.closes,
      },
      sun && {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: sun.opens,
        closes: sun.closes,
      },
    ].filter(Boolean),
  };

  return jsonLd(data);
}

export function ServiceJsonLd({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.longDescription,
    image: service.image,
    category: CATEGORY_LABEL[service.category],
    provider: { "@id": `${env.siteUrl}#business` },
    areaServed: { "@type": "City", name: "Kigali" },
    offers: {
      "@type": "Offer",
      price: service.priceRwf,
      priceCurrency: env.currency,
      availability: "https://schema.org/InStock",
      url: `${env.siteUrl}/services/${service.slug}`,
    },
  };
  return jsonLd(data);
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${env.siteUrl}${it.url}`,
    })),
  };
  return jsonLd(data);
}

export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
  return jsonLd(data);
}
