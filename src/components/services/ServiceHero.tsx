"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { CATEGORY_LABEL, type Service } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { WordReveal } from "@/components/ui/WordReveal";
import { formatDuration, formatPriceWithCurrency } from "@/lib/format";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ServiceHero({ service }: { service: Service }) {
  const reduced = useReducedMotion();
  const wordCount = service.name.split(" ").filter(Boolean).length;
  const titleEndDelay = 0.35 + (wordCount - 1) * 0.07 + 0.4;

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 bg-forest text-cream overflow-hidden">
      {/* Hero image — slow zoom-out + fade in */}
      <motion.div
        initial={
          reduced ? { opacity: 0 } : { opacity: 0, scale: 1.12 }
        }
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0"
      >
        <Image
          src={service.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
      </motion.div>

      {/* Gradient veil — cross-fades */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/65 to-forest"
      />

      {/* Soft blush curtain wipe — only the first ~700ms */}
      {!reduced && (
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 0.85, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "right" }}
          className="absolute inset-0 bg-blush pointer-events-none"
          aria-hidden
        />
      )}

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.9, ease: EASE }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/70 hover:text-blush transition-colors"
          >
            <ArrowLeft size={14} />
            All services
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
          className="mt-8 text-xs uppercase tracking-[0.3em] text-blush"
        >
          {CATEGORY_LABEL[service.category]}
        </motion.p>

        <WordReveal
          as="h1"
          text={service.name}
          delay={1.1}
          stagger={0.07}
          duration={0.95}
          className="mt-3 font-display text-5xl sm:text-7xl font-medium leading-[1.05] text-balance max-w-3xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 + titleEndDelay - 0.45, ease: EASE }}
          className="mt-5 max-w-2xl text-cream/85 text-lg leading-relaxed text-pretty"
        >
          {service.shortDescription}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 1.1 + titleEndDelay - 0.2 } },
          }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Pill icon={<Clock size={14} />}>
            {formatDuration(service.durationMin)}
          </Pill>
          <Pill icon={<Tag size={14} />}>
            {formatPriceWithCurrency(service.priceRwf)}
          </Pill>
        </motion.div>
      </Container>
    </section>
  );
}

function Pill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 12, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, ease: EASE }}
      className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-2 text-sm"
    >
      {icon}
      {children}
    </motion.span>
  );
}
