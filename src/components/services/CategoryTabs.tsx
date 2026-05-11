"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, CATEGORY_LABEL, type ServiceCategory } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

const TABS: Array<ServiceCategory | "all"> = [
  "all",
  "massage",
  "facial",
  "waxing",
  "scrub",
];

const LABEL: Record<(typeof TABS)[number], string> = {
  all: "All",
  ...CATEGORY_LABEL,
};

export function CategoryTabs() {
  const [active, setActive] = useState<(typeof TABS)[number]>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? SERVICES
        : SERVICES.filter((s) => s.category === active),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {TABS.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              type="button"
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm uppercase tracking-[0.18em] transition-colors ${
                isActive
                  ? "text-cream"
                  : "text-forest hover:text-sage"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="category-pill"
                  className="absolute inset-0 rounded-full bg-forest"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <span className="relative z-10">{LABEL[tab]}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
