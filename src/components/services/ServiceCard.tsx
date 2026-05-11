"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Service } from "@/data/services";
import { formatDuration, formatPriceWithCurrency } from "@/lib/format";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-cream-warm shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <Link
        href={`/services/${service.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 rounded-full bg-cream/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-forest-dark shadow-md">
            {formatPriceWithCurrency(service.priceRwf)}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-ink-muted">
            <Clock size={12} />
            {formatDuration(service.durationMin)}
          </div>
          <h3 className="mt-2 font-display text-2xl font-medium text-forest-dark group-hover:text-sage transition-colors">
            {service.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted text-pretty">
            {service.shortDescription}
          </p>
          <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Discover
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
