import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock, Tag } from "lucide-react";
import {
  SERVICES,
  getServiceBySlug,
  getRelatedServices,
  CATEGORY_LABEL,
} from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { formatDuration, formatPriceWithCurrency } from "@/lib/format";

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
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/70 to-forest" />
        </div>
        <Container className="relative">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/70 hover:text-blush transition-colors"
          >
            <ArrowLeft size={14} />
            All services
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-blush">
            {CATEGORY_LABEL[service.category]}
          </p>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl font-medium leading-[1.05] text-balance max-w-3xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-2xl text-cream/85 text-lg leading-relaxed text-pretty">
            {service.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-2 text-sm">
              <Clock size={14} />
              {formatDuration(service.durationMin)}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-2 text-sm">
              <Tag size={14} />
              {formatPriceWithCurrency(service.priceRwf)}
            </span>
          </div>
        </Container>
      </section>

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

            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl bg-forest text-cream p-8 sticky top-28 shadow-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-blush">
                  Ready when you are
                </p>
                <h3 className="mt-3 font-display text-3xl">
                  Book this treatment
                </h3>
                <div className="mt-5 flex items-baseline justify-between border-y border-cream/10 py-4">
                  <span className="text-cream/70 text-sm">Duration</span>
                  <span className="font-semibold">
                    {formatDuration(service.durationMin)}
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-b border-cream/10 py-4">
                  <span className="text-cream/70 text-sm">Price</span>
                  <span className="font-display text-2xl text-blush">
                    {formatPriceWithCurrency(service.priceRwf)}
                  </span>
                </div>
                <Button
                  href={`/book?service=${service.slug}`}
                  variant="secondary"
                  size="lg"
                  className="w-full mt-6"
                >
                  Continue to booking <ArrowRight size={16} />
                </Button>
                <p className="mt-4 text-xs text-cream/60 text-center">
                  Booking is free — we’ll confirm by email or WhatsApp.
                </p>
              </div>
            </ScrollReveal>
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
