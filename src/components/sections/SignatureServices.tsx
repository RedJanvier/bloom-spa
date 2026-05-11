import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";

export function SignatureServices() {
  const services = getFeaturedServices();
  return (
    <section className="bg-cream py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <Container size="wide" className="relative">
        <SectionHeading
          eyebrow="Signature rituals"
          title={
            <>
              The treatments our guests <span className="font-script text-gold-dark">return for</span>.
            </>
          }
          subtitle="A short, curated list — chosen for the way they leave you feeling. Browse the full menu when you’re ready."
        />

        <div className="mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-forest-dark hover:text-sage transition-colors"
          >
            View full menu
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
