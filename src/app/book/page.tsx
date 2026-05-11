import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Visit",
  description:
    "Reserve a massage, facial, body scrub, or waxing appointment at Bloom Spa in Kibagabaga, Kigali. Free booking — confirmed by email or WhatsApp.",
  alternates: { canonical: "/book" },
};

export const dynamic = "force-static";

export default function BookPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-12 bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark to-forest" />
        <Container className="relative text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-blush">
            Reserve your time
          </p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-medium text-balance">
            Book your <span className="font-script text-blush">Bloom</span> ritual.
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-cream/80 text-pretty">
            Pick a treatment and a time — we&apos;ll confirm by email or WhatsApp
            within the hour during opening times.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container size="wide">
          <Suspense
            fallback={
              <div className="h-[600px] flex items-center justify-center text-ink-muted">
                Loading booking…
              </div>
            }
          >
            <BookingForm />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
