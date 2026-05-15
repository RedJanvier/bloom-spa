"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { formatDuration, formatPriceWithCurrency } from "@/lib/format";

const EASE = [0.22, 1, 0.36, 1] as const;

export function BookCard({ service }: { service: Service }) {
  const reduced = useReducedMotion();

  return (
    <motion.aside
      initial={
        reduced
          ? { opacity: 0 }
          : { opacity: 0, x: 24, y: 16 }
      }
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.75, delay: 1.05, ease: EASE }}
      className="rounded-3xl bg-forest text-cream p-8 lg:sticky lg:top-28 shadow-xl"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-blush">
        Ready when you are
      </p>
      <h3 className="mt-3 font-display text-3xl">Book this treatment</h3>

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
        Booking is free — we&apos;ll confirm by email or WhatsApp.
      </p>
    </motion.aside>
  );
}
