"use client";

import { useMemo } from "react";
import { env } from "@/lib/env";
import { cn } from "@/lib/cn";

function parseRange(range: string): [number, number] {
  const [open, close] = range.split("-").map((s) => s.trim());
  const [oh, om] = open.split(":").map(Number);
  const [ch, cm] = close.split(":").map(Number);
  return [oh * 60 + om, ch * 60 + cm];
}

function minutesToLabel(m: number): string {
  const h = Math.floor(m / 60);
  const mm = m % 60;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  const suffix = h < 12 ? "AM" : "PM";
  return `${h12}:${String(mm).padStart(2, "0")} ${suffix}`;
}

function generateSlots(range: string, step = 30): string[] {
  const [start, end] = parseRange(range);
  const slots: string[] = [];
  // last bookable start is 60 min before close
  for (let t = start; t <= end - 60; t += step) {
    slots.push(minutesToLabel(t));
  }
  return slots;
}

export function TimeGrid({
  date,
  value,
  onChange,
}: {
  date: string;
  value: string;
  onChange: (time: string) => void;
}) {
  const slots = useMemo(() => {
    if (!date) return [];
    const d = new Date(date);
    const day = d.getDay(); // 0 = Sun
    const range =
      day === 0
        ? env.hours.sunday
        : day === 6
          ? env.hours.saturday
          : env.hours.weekday;
    return generateSlots(range);
  }, [date]);

  if (!date) {
    return (
      <p className="text-sm text-ink-muted">
        Pick a date first to see available times.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {slots.map((slot) => {
        const active = value === slot;
        return (
          <button
            key={slot}
            type="button"
            onClick={() => onChange(slot)}
            className={cn(
              "rounded-full px-3 py-2 text-xs sm:text-sm font-medium transition-all",
              "border border-forest/15",
              active
                ? "bg-forest text-cream border-forest shadow-md"
                : "bg-cream-warm/30 text-forest-dark hover:border-forest hover:bg-cream-warm",
            )}
          >
            {slot}
          </button>
        );
      })}
    </div>
  );
}
