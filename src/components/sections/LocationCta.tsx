import Image from "next/image";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { env } from "@/lib/env";

export function LocationCta() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-dark text-cream py-24 sm:py-32">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-forest-dark" />
      </div>
      <Container size="default" className="relative">
        <ScrollReveal className="text-center">
          <SectionHeading
            invert
            eyebrow="Pay us a visit"
            title={<>Your sanctuary is <span className="font-script text-blush">three minutes</span> from Kibagabaga.</>}
            subtitle="Walk in, breathe out. We’ll have warm tea ready."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur p-6">
              <MapPin className="mx-auto text-blush" size={22} />
              <p className="mt-3 text-sm leading-relaxed">{env.business.address}</p>
            </div>
            <div className="rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur p-6">
              <Clock className="mx-auto text-blush" size={22} />
              <p className="mt-3 text-sm leading-relaxed">
                Mon–Fri {env.hours.weekday}
                <br />
                Sat {env.hours.saturday}
                <br />
                Sun {env.hours.sunday}
              </p>
            </div>
            <div className="rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur p-6">
              <Phone className="mx-auto text-blush" size={22} />
              <p className="mt-3 text-sm leading-relaxed">
                <a href={`tel:${env.business.phone}`} className="hover:text-blush transition">
                  {env.business.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book" variant="secondary" size="lg">
              Book your visit
            </Button>
            <Button
              href={`https://wa.me/${env.business.whatsapp}`}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="border-cream text-cream hover:bg-cream hover:text-forest"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
