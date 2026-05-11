"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-forest-dark text-cream">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <div className="ken-burns absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
            alt="Calm candle-lit massage room at Bloom Spa"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/40 to-forest-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/60 via-transparent to-transparent" />
      </div>

      {/* Animated overlay wipe on mount */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "120%" }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="absolute inset-0 bg-blush pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-40 pb-24 min-h-[100svh] flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-blush"
        >
          <Sparkles size={14} />
          Luxury Wellness · Kibagabaga, Kigali
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl sm:text-7xl lg:text-8xl font-medium leading-[1.02] text-balance"
        >
          Where stillness <span className="font-script text-blush block sm:inline">blooms</span> into ritual.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.75, duration: 0.7 }}
          className="mt-7 max-w-xl text-base sm:text-lg text-cream/85 leading-relaxed text-pretty"
        >
          Signature massages, advanced facials, and bespoke body care —
          performed by master therapists in a quiet, beautifully crafted retreat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/book" variant="secondary" size="lg">
            Book your visit <ArrowRight size={18} />
          </Button>
          <Button href="/services" variant="ghost" size="lg" className="text-cream hover:bg-cream/10">
            Explore the menu
          </Button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-cream/60">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-blush to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
