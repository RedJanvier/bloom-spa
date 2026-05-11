import emailjs from "@emailjs/browser";
import { env } from "./env";
import { formatPriceWithCurrency, formatDuration } from "./format";
import type { Service } from "@/data/services";
import type { BookingInput } from "./booking";

export function isEmailJsConfigured(): boolean {
  return Boolean(
    env.emailjs.serviceId && env.emailjs.templateId && env.emailjs.publicKey,
  );
}

export async function sendBookingEmail(
  service: Service,
  data: BookingInput,
): Promise<void> {
  if (!isEmailJsConfigured()) {
    // Dev convenience: log instead of throwing so the form still succeeds end-to-end.
    console.warn(
      "[Bloom] EmailJS not configured — skipping email send. Payload:",
      { service: service.name, ...data },
    );
    return;
  }

  const payload = {
    to_business: env.business.name,
    business_email: env.business.email,
    service_name: service.name,
    service_duration: formatDuration(service.durationMin),
    service_price: formatPriceWithCurrency(service.priceRwf),
    booking_date: data.date,
    booking_time: data.time,
    customer_name: data.name,
    customer_phone: data.phone,
    customer_email: data.email,
    customer_notes: data.notes || "—",
    notification_channel: data.channel,
  };

  await emailjs.send(
    env.emailjs.serviceId,
    env.emailjs.templateId,
    payload,
    { publicKey: env.emailjs.publicKey },
  );
}
