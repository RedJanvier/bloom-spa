import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

const STATS = [
  { value: 24, suffix: "+", label: "Signature treatments" },
  { value: 8, suffix: "", label: "Master therapists" },
  { value: 5000, suffix: "+", label: "Guests welcomed" },
  { value: 4.9, suffix: "/5", label: "Average rating" },
];

export function About() {
  return (
    <section className="bg-forest text-cream py-24 sm:py-32 overflow-hidden">
      <Container size="wide">
        <div className="grid gap-14 lg:gap-20 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1400&q=80"
                  alt="A serene treatment room at Bloom Spa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:-right-12 hidden sm:block aspect-square w-44 rounded-3xl overflow-hidden shadow-2xl border-4 border-forest">
                <Image
                  src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=600&q=80"
                  alt="Soft hand-poured candles"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-5">
              About Bloom Spa
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-tight text-balance">
              A quiet retreat in the heart of <span className="font-script text-blush">Kibagabaga</span>.
            </h2>
            <p className="mt-6 text-cream/80 leading-relaxed text-pretty">
              Bloom was born from a simple belief — that good wellness should feel
              effortless, and that every Rwandan deserves a beautiful place to slow
              down. From the first deep breath at our door to the last sip of warm
              tea before you leave, every detail is shaped to help you unwind.
            </p>
            <p className="mt-4 text-cream/80 leading-relaxed text-pretty">
              Our therapists are certified in international techniques — Swedish,
              deep tissue, lymphatic drainage, hydrafacials — and trained to read
              your body, not just your booking form.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl text-blush">
                    <AnimatedNumber value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
