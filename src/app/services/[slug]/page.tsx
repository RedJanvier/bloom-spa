import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import {
  SERVICES,
  getServiceBySlug,
  getRelatedServices,
} from "@/data/services";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceHero } from "@/components/services/ServiceHero";
import { BookCard } from "@/components/services/BookCard";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const dynamic = "force-static";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} · Bloom Spa`,
      description: service.shortDescription,
      images: [{ url: service.image, width: 1600, height: 1200 }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug, 3);

  return (
    <>
      <ServiceHero service={service} />

      {/* Body */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <ScrollReveal>
              <h2 className="font-display text-3xl text-forest-dark mb-5">
                What to expect
              </h2>
              <p className="text-ink-muted leading-relaxed text-pretty">
                {service.longDescription}
              </p>

              <h3 className="font-display text-2xl text-forest-dark mt-12 mb-4">
                Benefits
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <Check className="shrink-0 mt-0.5 text-sage" size={18} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <BookCard service={service} />
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream-warm py-20">
          <Container size="wide">
            <h2 className="font-display text-3xl sm:text-4xl text-forest-dark text-center mb-10">
              You might also like
            </h2>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <ServiceCard key={r.slug} service={r} index={i} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ]}
      />
    </>
  );
}
