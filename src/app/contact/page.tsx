import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { env } from "@/lib/env";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Visit & Contact",
  description:
    "Find Bloom Spa at ST KG 326, Gate 80, Kibagabaga, Kigali. Call, WhatsApp, or drop us a line — we'd love to welcome you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(env.business.address);
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-12 bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark to-forest" />
        <Container className="relative text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-blush">
            Visit us
          </p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-medium text-balance">
            Come <span className="font-script text-blush">bloom</span> with us.
          </h1>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <ScrollReveal>
              <div className="space-y-6">
                <ContactRow icon={<MapPin size={18} />} label="Address">
                  {env.business.address}
                  <div className="mt-3">
                    <Button
                      href={`https://www.google.com/maps?q=${mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                    >
                      Open in Google Maps
                    </Button>
                  </div>
                </ContactRow>

                <ContactRow icon={<Clock size={18} />} label="Opening hours">
                  Mon–Fri · {env.hours.weekday}
                  <br />
                  Saturday · {env.hours.saturday}
                  <br />
                  Sunday · {env.hours.sunday}
                </ContactRow>

                <ContactRow icon={<Phone size={18} />} label="Phone">
                  <a
                    href={`tel:${env.business.phone}`}
                    className="hover:text-sage transition"
                  >
                    {env.business.phone}
                  </a>
                </ContactRow>

                <ContactRow icon={<Mail size={18} />} label="Email">
                  <a
                    href={`mailto:${env.business.email}`}
                    className="hover:text-sage transition"
                  >
                    {env.business.email}
                  </a>
                </ContactRow>

                <ContactRow icon={<MessageCircle size={18} />} label="WhatsApp">
                  <a
                    href={`https://wa.me/${env.business.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sage transition"
                  >
                    Chat with us on WhatsApp
                  </a>
                </ContactRow>

                <ContactRow icon={<Instagram size={18} />} label="Instagram">
                  <a
                    href={env.business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sage transition"
                  >
                    @bloomspa924
                  </a>
                </ContactRow>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl shadow-xl aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]">
                <iframe
                  title="Bloom Spa location"
                  src={`https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 rounded-full bg-forest text-blush p-3">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-ink-muted mb-1">
          {label}
        </div>
        <div className="text-base text-forest-dark leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
