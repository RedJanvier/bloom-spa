"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Segment = { text: string; className?: string };

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Reveals a heading word-by-word with a clipped vertical slide-up + fade.
 * Pass `segments` to style certain words differently (e.g. the script accent word).
 */
export function WordReveal({
  text,
  segments,
  className,
  delay = 0,
  stagger = 0.07,
  duration = 0.9,
  as: Tag = "h1",
}: {
  text?: string;
  segments?: Segment[];
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const reduced = useReducedMotion();

  const words: Segment[] = segments
    ? segments
    : (text ?? "")
        .split(" ")
        .filter(Boolean)
        .map((t) => ({ text: t }));

  const flatText = words.map((w) => w.text).join(" ");

  if (reduced) {
    return (
      <Tag className={className} aria-label={flatText}>
        {words.map((w, i) => (
          <span key={i} className={w.className}>
            {w.text}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={flatText}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className={cn("inline-block", w.className)}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration, delay: delay + i * stagger, ease: EASE }}
          >
            {w.text}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
