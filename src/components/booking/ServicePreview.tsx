"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Tag, Check } from "lucide-react";
import type { Service } from "@/data/services";
import { formatDuration, formatPriceWithCurrency } from "@/lib/format";

export function ServicePreview({ service }: { service: Service | undefined }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-forest text-cream shadow-xl">
      <AnimatePresence mode="wait">
        {service ? (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative aspect-[5/3]">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/95 text-forest-dark px-3 py-1 text-xs font-semibold">
                  <Clock size={12} />
                  {formatDuration(service.durationMin)}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blush text-forest-dark px-3 py-1 text-xs font-semibold">
                  <Tag size={12} />
                  {formatPriceWithCurrency(service.priceRwf)}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl sm:text-3xl">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/80 text-pretty">
                {service.longDescription}
              </p>

              {service.benefits.length > 0 && (
                <ul className="mt-5 grid gap-2">
                  {service.benefits.slice(0, 4).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-cream/90"
                    >
                      <Check size={16} className="text-blush mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-10 text-center"
          >
            <div className="mx-auto h-20 w-20 rounded-full bg-cream/10 flex items-center justify-center text-blush">
              <Tag size={28} />
            </div>
            <p className="mt-5 font-display text-2xl">
              Choose a treatment
            </p>
            <p className="mt-2 text-sm text-cream/70">
              Pick from the dropdown to see a preview here.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
