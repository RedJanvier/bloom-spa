"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    name: "Aline U.",
    role: "Returning guest, Kigali",
    quote:
      "The four-hands massage was unlike anything I'd experienced before. I left feeling like a softer version of myself.",
    rating: 5,
  },
  {
    name: "Eric N.",
    role: "Marathoner",
    quote:
      "Their sports massage is a non-negotiable in my training cycle now. The therapists actually know what they're doing.",
    rating: 5,
  },
  {
    name: "Sandra K.",
    role: "Bride-to-be",
    quote:
      "Booked the couples package the week before our wedding. Calm, beautiful, and the hydra facial gave me my best skin in years.",
    rating: 5,
  },
  {
    name: "Patrick R.",
    role: "Visiting from Nairobi",
    quote:
      "Stumbled in on a Saturday for a quick back massage and stayed for 90 minutes of hot stones. Worth the trip back to Kigali.",
    rating: 5,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Kind words"
          title={<>What our guests <span className="font-script text-gold-dark">say</span>.</>}
        />

        <div className="relative mt-14">
          <Quote
            className="absolute -top-4 left-1/2 -translate-x-1/2 text-blush"
            size={56}
            strokeWidth={1}
          />

          <div className="relative min-h-[180px] sm:min-h-[160px] mt-12">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45 }}
                className="text-center"
              >
                <blockquote className="font-display text-2xl sm:text-3xl text-forest-dark leading-snug text-balance">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7">
                  <div className="flex justify-center gap-0.5 text-gold mb-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-ink-muted mt-1">
                    {t.role}
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full border border-forest/20 p-2 text-forest hover:bg-forest hover:text-cream transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-forest" : "w-1.5 bg-forest/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-forest/20 p-2 text-forest hover:bg-forest hover:text-cream transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
