import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { env } from "@/lib/env";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-dancing",
});

export const viewport: Viewport = {
  themeColor: "#2e3d33",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: `${env.business.name} — Luxury Spa in Kibagabaga, Kigali`,
    template: `%s · ${env.business.name}`,
  },
  description:
    "Bloom Spa is a luxury wellness sanctuary in Kibagabaga, Kigali — offering signature massages, advanced facials, and waxing in a calm, modern setting.",
  keywords: [
    "spa Kigali",
    "spa Kibagabaga",
    "massage Kigali",
    "facial Kigali",
    "Bloom Spa",
    "Rwanda spa",
    "wellness Kigali",
    "waxing Kigali",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: env.siteUrl,
    siteName: env.business.name,
    title: `${env.business.name} — Luxury Spa in Kibagabaga, Kigali`,
    description:
      "Signature massages, advanced facials, and waxing in Kibagabaga, Kigali.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: env.business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${env.business.name} — Luxury Spa in Kibagabaga, Kigali`,
    description:
      "Signature massages, advanced facials, and waxing in Kibagabaga, Kigali.",
    images: ["/og-default.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${dancing.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-forest focus:text-cream focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            style: {
              fontFamily: "var(--font-inter)",
            },
          }}
        />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
