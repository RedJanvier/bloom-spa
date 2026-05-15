"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WordReveal } from "@/components/ui/WordReveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function BookingHero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative pt-32 sm:pt-40 pb-14 bg-forest text-cream overflow-hidden">
      {/* Soft background image — slow zoom + fade */}
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 bg-gradient-to-b from-forest-dark/85 via-forest-dark/70 to-forest"
      />

      {/* Blush curtain wipe */}
      {!reduced && (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.85, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "top" }}
          className="absolute inset-0 bg-blush pointer-events-none"
          aria-hidden
        />
      )}

      <Container className="relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
          className="text-xs uppercase tracking-[0.35em] text-blush"
        >
          Reserve your time
        </motion.p>

        <WordReveal
          as="h1"
          delay={1.05}
          stagger={0.085}
          duration={0.9}
          segments={[
            { text: "Book" },
            { text: "your" },
            { text: "Bloom", className: "font-script text-blush" },
            { text: "ritual." },
          ]}
          className="mt-3 font-display text-5xl sm:text-6xl font-medium text-balance"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.55, ease: EASE }}
          className="mt-5 max-w-xl mx-auto text-cream/80 text-pretty"
        >
          Pick a treatment and a time — we&apos;ll confirm by email or WhatsApp
          within the hour during opening times.
        </motion.p>
      </Container>
    </section>
  );
}
