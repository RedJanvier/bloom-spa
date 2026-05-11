import Link from "next/link";
import { SERVICES, CATEGORY_LABEL, type ServiceCategory } from "@/data/services";
import { formatDuration, formatPrice } from "@/lib/format";
import { env } from "@/lib/env";

const ORDER: ServiceCategory[] = ["massage", "facial", "waxing", "scrub"];

export function PriceList() {
  return (
    <div className="rounded-3xl bg-forest text-cream p-8 sm:p-12 shadow-xl">
      <p className="text-center font-script text-3xl text-blush mb-1">Price List</p>
      <p className="text-center text-xs uppercase tracking-[0.3em] text-cream/60 mb-10">
        All prices in {env.currency}
      </p>

      <div className="grid gap-12 md:grid-cols-2">
        {ORDER.map((cat) => {
          const items = SERVICES.filter((s) => s.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat}>
              <h3 className="font-display text-2xl text-blush mb-5 uppercase tracking-wider">
                {CATEGORY_LABEL[cat]}
              </h3>
              <ul className="space-y-3">
                {items.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group grid grid-cols-[1fr_auto_auto] items-baseline gap-3 sm:gap-4 text-sm hover:text-blush transition-colors"
                    >
                      <span className="text-cream/90 group-hover:text-blush truncate">
                        {s.name}
                      </span>
                      <span className="text-cream/50 text-xs whitespace-nowrap">
                        {formatDuration(s.durationMin)}
                      </span>
                      <span className="font-semibold text-cream tabular-nums whitespace-nowrap">
                        {formatPrice(s.priceRwf)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
