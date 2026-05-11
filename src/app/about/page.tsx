import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Bloom Spa",
  description:
    "Meet Bloom Spa — a modern wellness sanctuary in Kibagabaga, Kigali, blending Rwandan warmth with internationally trained therapists.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Quietly excellent",
    body: "Internationally trained therapists, evidence-led techniques, and a no-rush approach to every treatment.",
  },
  {
    title: "Made in Rwanda",
    body: "Locally sourced oils, scrubs, and teas — paired with global wellness rituals from Thailand, Sweden, and beyond.",
  },
  {
    title: "Care without compromise",
    body: "Single-use linens, sanitised tools every time, and a private suite for treatments that ask for it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-20 bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark to-forest" />
        </div>
        <Container className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-blush">
            Our story
          </p>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl font-medium text-balance max-w-3xl">
            A neighbourhood spa, with a <span className="font-script text-blush">world-class</span> touch.
          </h1>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80"
                  alt="Founder portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl text-forest-dark text-balance">
                Born in Kigali. Built for everyone who needs to breathe.
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed text-pretty">
                Bloom Spa opened in Kibagabaga because we wanted somewhere our
                own friends, neighbours, and family could afford to come back to —
                not just a place for tourists or hotel guests. A space where the
                tea is warm, the linens are crisp, the music is right, and the
                therapists actually listen.
              </p>
              <p className="mt-4 text-ink-muted leading-relaxed text-pretty">
                Every member of our team trained in international techniques and
                continues monthly skills refreshers. We blend Rwandan hospitality
                with treatments you&apos;d find in Paris, Bangkok, or Cape Town —
                without ever forgetting where we are.
              </p>
              <div className="mt-8">
                <Button href="/book" variant="primary">
                  Book a visit
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream-warm py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-dark text-center text-balance">
            What we hold ourselves to.
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="rounded-3xl bg-cream p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-5xl font-display text-blush">0{i + 1}</div>
                  <h3 className="mt-4 font-display text-2xl text-forest-dark">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed text-pretty">
                    {v.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
