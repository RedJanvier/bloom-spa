"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export const FAQS = [
  {
    question: "Where is Bloom Spa located?",
    answer:
      "We are at ST KG 326, Gate 80, Kibagabaga, Kigali. Easy parking on-site, just a few minutes from Kibagabaga Hospital.",
  },
  {
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "We strongly recommend booking ahead — our therapists are usually fully scheduled, especially on weekends. Walk-ins are welcome when slots are open.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash (RWF), mobile money (MTN MoMo, Airtel Money), and major debit/credit cards at the spa.",
  },
  {
    question: "Should I arrive early for my appointment?",
    answer:
      "Yes — please arrive 10 minutes early so you can change, fill out a short intake form, and start your treatment fully relaxed.",
  },
  {
    question: "Are your therapists certified?",
    answer:
      "Every Bloom therapist is internationally trained and certified in massage, facial, and waxing techniques, and undergoes regular refresher training.",
  },
  {
    question: "Can I book a treatment as a gift?",
    answer:
      "Absolutely. Contact us via WhatsApp and we'll prepare a beautifully presented gift card for any treatment or value.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Good to know"
          title={<>Frequently asked <span className="font-script text-gold-dark">questions</span>.</>}
        />

        <div className="mt-12 divide-y divide-forest/10 border-y border-forest/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-sage"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl text-forest-dark text-pretty">
                    {f.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 rounded-full border border-forest/20 p-1.5"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-ink-muted leading-relaxed text-pretty">
                        {f.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
      <FaqJsonLd items={FAQS} />
    </section>
  );
}
