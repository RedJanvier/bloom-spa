"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function DatePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (date: string) => void;
}) {
  const selected = value ? new Date(value) : undefined;

  return (
    <div className="rounded-2xl border border-forest/10 bg-cream-warm/40 p-3 sm:p-4">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={(d) => {
          if (!d) return;
          // ISO date (yyyy-mm-dd) in local time
          const y = d.getFullYear();
          const m = String(d.getMonth() + 1).padStart(2, "0");
          const day = String(d.getDate()).padStart(2, "0");
          onChange(`${y}-${m}-${day}`);
        }}
        disabled={{ before: new Date() }}
        showOutsideDays
        weekStartsOn={1}
        styles={{
          caption: { color: "var(--color-forest-dark)" },
        }}
        classNames={{
          today: "text-gold-dark font-semibold",
          selected: "rdp-selected",
        }}
      />
      <style jsx global>{`
        .rdp-root {
          --rdp-accent-color: var(--color-forest);
          --rdp-accent-background-color: var(--color-blush);
          --rdp-day-height: 38px;
          --rdp-day-width: 38px;
          --rdp-day_button-height: 38px;
          --rdp-day_button-width: 38px;
          font-family: var(--font-inter);
        }
        .rdp-day_button:hover:not([disabled]) {
          background: var(--color-blush-soft);
          color: var(--color-forest-dark);
        }
        .rdp-selected .rdp-day_button {
          background: var(--color-forest) !important;
          color: var(--color-cream) !important;
        }
        .rdp-chevron {
          fill: var(--color-forest-dark);
        }
      `}</style>
    </div>
  );
}
