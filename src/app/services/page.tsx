import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CategoryTabs } from "@/components/services/CategoryTabs";
import { PriceList } from "@/components/services/PriceList";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore the full Bloom Spa menu — Swedish, deep tissue, aromatherapy, hot stone and sports massage; advanced facials; body scrubs and waxing in Kigali.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark to-forest" />
        <Container className="relative text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-blush">
            The Bloom Menu
          </p>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl font-medium text-balance">
            Every treatment, every <span className="font-script text-blush">price</span>.
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-cream/80 text-pretty">
            From a 30-minute back massage to a 90-minute candle-lit hot-stone
            ritual. Filter by category or browse the full list below.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container size="wide">
          <CategoryTabs />
        </Container>
      </section>

      <section className="bg-cream-warm py-20 sm:py-24">
        <Container>
          <PriceList />
        </Container>
      </section>
    </>
  );
}
