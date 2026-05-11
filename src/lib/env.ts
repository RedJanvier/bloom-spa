function read(key: string, fallback?: string): string {
  const value = process.env[key];
  if (value === undefined || value === "") {
    if (fallback !== undefined) return fallback;
    if (typeof window === "undefined") {
      throw new Error(`Missing required env var: ${key}`);
    }
    return "";
  }
  return value;
}

function readBool(key: string, fallback = false): boolean {
  const v = process.env[key];
  if (v === undefined || v === "") return fallback;
  return v === "true" || v === "1";
}

function readNumber(key: string, fallback: number): number {
  const v = process.env[key];
  if (!v) return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export const env = {
  siteUrl: read("NEXT_PUBLIC_SITE_URL", "http://localhost:3000"),
  business: {
    name: read("NEXT_PUBLIC_BUSINESS_NAME", "Bloom Spa"),
    address: read(
      "NEXT_PUBLIC_BUSINESS_ADDRESS",
      "ST KG 326, Gate 80, Kibagabaga, Kigali, Rwanda",
    ),
    lat: readNumber("NEXT_PUBLIC_BUSINESS_LAT", -1.9325),
    lng: readNumber("NEXT_PUBLIC_BUSINESS_LNG", 30.1158),
    phone: read("NEXT_PUBLIC_BUSINESS_PHONE", "+250788000000"),
    email: read("NEXT_PUBLIC_BUSINESS_EMAIL", "hello@bloomspa.rw"),
    whatsapp: read("NEXT_PUBLIC_BUSINESS_WHATSAPP", "250788000000"),
    instagram: read(
      "NEXT_PUBLIC_INSTAGRAM_URL",
      "https://www.instagram.com/bloomspa924/",
    ),
  },
  hours: {
    weekday: read("NEXT_PUBLIC_HOURS_WEEKDAY", "09:00-20:00"),
    saturday: read("NEXT_PUBLIC_HOURS_SATURDAY", "09:00-20:00"),
    sunday: read("NEXT_PUBLIC_HOURS_SUNDAY", "10:00-18:00"),
  },
  currency: read("NEXT_PUBLIC_CURRENCY", "RWF"),
  notify: {
    emailEnabled: readBool("NEXT_PUBLIC_NOTIFY_EMAIL_ENABLED", true),
    whatsappEnabled: readBool("NEXT_PUBLIC_NOTIFY_WHATSAPP_ENABLED", true),
  },
  emailjs: {
    serviceId: read("NEXT_PUBLIC_EMAILJS_SERVICE_ID", ""),
    templateId: read("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", ""),
    publicKey: read("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", ""),
  },
};

export type Env = typeof env;
