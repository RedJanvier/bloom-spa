import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BookingForm } from "@/components/booking/BookingForm";
import { BookingHero } from "@/components/booking/BookingHero";

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
      <BookingHero />

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
