import { env } from "./env";
import { formatPriceWithCurrency, formatDuration } from "./format";
import type { Service } from "@/data/services";
import type { BookingInput } from "./booking";

export function buildWhatsAppUrl(
  service: Service,
  data: BookingInput,
): string {
  const lines = [
    `Hello ${env.business.name}, I'd like to book a treatment:`,
    "",
    `• Service: ${service.name}`,
    `• Duration: ${formatDuration(service.durationMin)}`,
    `• Price: ${formatPriceWithCurrency(service.priceRwf)}`,
    `• Date: ${data.date}`,
    `• Time: ${data.time}`,
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
  ];
  if (data.notes && data.notes.trim()) {
    lines.push("", `Notes: ${data.notes.trim()}`);
  }
  lines.push("", "Thank you!");

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${env.business.whatsapp}?text=${text}`;
}
