import Link from "next/link";
import { Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import { LogoWordmark } from "./LogoMark";
import { env } from "@/lib/env";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="luxe-divider opacity-50" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <LogoWordmark tone="blush" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
            A modern wellness sanctuary in the heart of Kibagabaga, Kigali —
            where ancient rituals meet contemporary care.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link
              href={env.business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/20 p-2.5 hover:border-blush hover:text-blush transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href={`tel:${env.business.phone}`}
              className="rounded-full border border-cream/20 p-2.5 hover:border-blush hover:text-blush transition"
              aria-label="Phone"
            >
              <Phone size={18} />
            </Link>
            <Link
              href={`mailto:${env.business.email}`}
              className="rounded-full border border-cream/20 p-2.5 hover:border-blush hover:text-blush transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-blush mb-5">
            Explore
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services" className="hover:text-blush transition">Services & Pricing</Link></li>
            <li><Link href="/book" className="hover:text-blush transition">Book an Appointment</Link></li>
            <li><Link href="/about" className="hover:text-blush transition">About Bloom</Link></li>
            <li><Link href="/contact" className="hover:text-blush transition">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-blush mb-5">
            Visit
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-blush" />
              <span>{env.business.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-blush" />
              <span>
                Mon–Fri {env.hours.weekday}
                <br />
                Sat {env.hours.saturday}
                <br />
                Sun {env.hours.sunday}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {year} {env.business.name}. All rights reserved.</p>
          <p className="font-script text-base text-blush/80">Bloom · Breathe · Be</p>
        </div>
      </div>
    </footer>
  );
}
