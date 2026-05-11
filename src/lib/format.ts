import { env } from "./env";

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-RW", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPriceWithCurrency(amount: number): string {
  return `${formatPrice(amount)} ${env.currency}`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (m === 0) return `${h} hr${h > 1 ? "s" : ""}`;
  return `${h}h ${m}m`;
}
