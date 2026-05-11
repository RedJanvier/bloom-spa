"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    alt: "Treatment room with candles",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1000&q=80",
    alt: "Aromatic oils and herbs",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=80",
    alt: "Facial treatment in progress",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    alt: "Coffee scrub texture",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=80",
    alt: "Hot stone massage detail",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1000&q=80",
    alt: "Therapist preparing oils",
    span: "",
  },
];

export function Gallery() {
  return (
    <section className="bg-cream-warm py-24 sm:py-32">
      <Container size="wide">
        <SectionHeading
          eyebrow="Inside Bloom"
          title={
            <>
              A space designed to <span className="font-script text-gold-dark">slow you down</span>.
            </>
          }
          subtitle="Quiet rooms, soft light, and details considered down to the last petal."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 grid-rows-[200px_200px_200px] sm:grid-rows-[260px_260px_260px] gap-3 sm:gap-4">
          {PHOTOS.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl shadow-md ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/15 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
