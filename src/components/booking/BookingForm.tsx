"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { toast } from "sonner";
import {
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
  CalendarDays,
  Clock,
  User,
} from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { bookingSchema, type BookingInput } from "@/lib/booking";
import { sendBookingEmail } from "@/lib/emailjs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { env } from "@/lib/env";
import { readStorage, writeStorage, STORAGE_KEYS, type StoredCustomer } from "@/lib/storage";
import { ServicePreview } from "./ServicePreview";
import { DatePicker } from "./DatePicker";
import { TimeGrid } from "./TimeGrid";
import { Button } from "@/components/ui/Button";
import { formatPriceWithCurrency, formatDuration } from "@/lib/format";
import { cn } from "@/lib/cn";

const DEFAULT_CHANNEL: BookingInput["channel"] = env.notify.whatsappEnabled
  ? env.notify.emailEnabled
    ? "both"
    : "whatsapp"
  : "email";

const EASE = [0.22, 1, 0.36, 1] as const;
const FORM_START = 1.7; // seconds — kicks in after BookingHero settles

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export function BookingForm() {
  const router = useRouter();
  const search = useSearchParams();
  const preselectedSlug = search.get("service") ?? "";

  const [submitted, setSubmitted] = useState(false);

  const reduced = useReducedMotion();

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceSlug: preselectedSlug,
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      notes: "",
      channel: DEFAULT_CHANNEL,
    },
    mode: "onBlur",
  });

  // Hydrate stored customer details once on mount.
  useEffect(() => {
    const stored = readStorage<StoredCustomer | null>(
      STORAGE_KEYS.customer,
      null,
    );
    if (stored) {
      if (stored.name) setValue("name", stored.name);
      if (stored.phone) setValue("phone", stored.phone);
      if (stored.email) setValue("email", stored.email);
      if (stored.preferredChannel) setValue("channel", stored.preferredChannel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedSlug = watch("serviceSlug");
  const selectedDate = watch("date");
  const selectedTime = watch("time");
  const selectedService = useMemo(
    () => getServiceBySlug(selectedSlug),
    [selectedSlug],
  );

  const onSubmit = async (data: BookingInput) => {
    const service = getServiceBySlug(data.serviceSlug);
    if (!service) {
      toast.error("Please choose a valid service.");
      return;
    }

    const wantsEmail =
      env.notify.emailEnabled &&
      (data.channel === "email" || data.channel === "both");
    const wantsWhatsapp =
      env.notify.whatsappEnabled &&
      (data.channel === "whatsapp" || data.channel === "both");

    try {
      if (wantsEmail) {
        await sendBookingEmail(service, data);
      }

      writeStorage<StoredCustomer>(STORAGE_KEYS.customer, {
        name: data.name,
        phone: data.phone,
        email: data.email,
        preferredChannel: data.channel,
      });

      if (wantsWhatsapp) {
        const url = buildWhatsAppUrl(service, data);
        // open in a new tab without losing context
        window.open(url, "_blank", "noopener,noreferrer");
      }

      setSubmitted(true);
      toast.success("Your booking request was sent.");
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong sending your request. Please try WhatsApp or call us.",
      );
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-forest text-cream p-10 sm:p-14 text-center shadow-xl max-w-2xl mx-auto"
      >
        <CheckCircle2 className="mx-auto text-blush" size={56} strokeWidth={1.5} />
        <h2 className="mt-6 font-display text-4xl">Thank you, {watch("name").split(" ")[0]}.</h2>
        <p className="mt-4 text-cream/80 leading-relaxed">
          Your request for{" "}
          <span className="text-blush font-semibold">{selectedService?.name}</span>{" "}
          on{" "}
          <span className="text-blush font-semibold">
            {watch("date")} at {watch("time")}
          </span>{" "}
          has been sent. We&apos;ll confirm shortly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            href="/services"
            variant="secondary"
            size="md"
          >
            Browse more services
          </Button>
          <Button
            variant="ghost"
            size="md"
            className="text-cream hover:bg-cream/10"
            onClick={() => {
              setSubmitted(false);
              reset({
                serviceSlug: "",
                date: "",
                time: "",
                name: watch("name"),
                phone: watch("phone"),
                email: watch("email"),
                notes: "",
                channel: watch("channel"),
              });
              router.replace("/book");
            }}
          >
            Book another
          </Button>
        </div>
      </motion.div>
    );
  }

  const inputBase =
    "w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm " +
    "placeholder:text-ink-muted/60 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 transition";
  const labelBase =
    "block text-xs font-semibold uppercase tracking-[0.18em] text-forest-dark mb-2";

  const itemTransition = reduced
    ? { duration: 0 }
    : { duration: 0.7, ease: EASE };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-10 lg:gap-14 lg:grid-cols-[1fr_1.05fr]"
      noValidate
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: reduced
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren: 0.12, delayChildren: FORM_START },
        },
      }}
    >
      {/* LEFT — preview */}
      <motion.div
        variants={itemVariants}
        transition={itemTransition}
        className="lg:sticky lg:top-28 self-start order-2 lg:order-1"
      >
        <ServicePreview service={selectedService} />
      </motion.div>

      {/* RIGHT — form */}
      <div className="order-1 lg:order-2 space-y-10">
        {/* Step 1 — service */}
        <motion.fieldset
          variants={itemVariants}
          transition={itemTransition}
          className="space-y-4"
        >
          <Step n={1} title="Choose your treatment" />
          <div>
            <label htmlFor="serviceSlug" className={labelBase}>
              Service
            </label>
            <Controller
              control={control}
              name="serviceSlug"
              render={({ field }) => (
                <select id="serviceSlug" {...field} className={inputBase}>
                  <option value="">— Select a service —</option>
                  {["massage", "facial", "waxing", "scrub"].map((cat) => (
                    <optgroup
                      key={cat}
                      label={cat[0].toUpperCase() + cat.slice(1) + "s"}
                    >
                      {SERVICES.filter((s) => s.category === cat).map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name} — {formatDuration(s.durationMin)} ·{" "}
                          {formatPriceWithCurrency(s.priceRwf)}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              )}
            />
            {errors.serviceSlug && <FieldError>{errors.serviceSlug.message}</FieldError>}
          </div>
        </motion.fieldset>

        {/* Step 2 — date + time */}
        <motion.fieldset
          variants={itemVariants}
          transition={itemTransition}
          className="space-y-5"
        >
          <Step n={2} title="Pick a date & time" />
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className={labelBase}>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={12} /> Date
                </span>
              </label>
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <DatePicker value={field.value} onChange={field.onChange} />
                )}
              />
              {errors.date && <FieldError>{errors.date.message}</FieldError>}
            </div>
            <div>
              <label className={labelBase}>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={12} /> Time
                </span>
              </label>
              <Controller
                control={control}
                name="time"
                render={({ field }) => (
                  <TimeGrid
                    date={selectedDate}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.time && <FieldError>{errors.time.message}</FieldError>}
            </div>
          </div>
        </motion.fieldset>

        {/* Step 3 — details */}
        <motion.fieldset
          variants={itemVariants}
          transition={itemTransition}
          className="space-y-5"
        >
          <Step n={3} title="Your details" icon={<User size={14} />} />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelBase}>Full name</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className={inputBase}
                placeholder="Your name"
                {...register("name")}
              />
              {errors.name && <FieldError>{errors.name.message}</FieldError>}
            </div>
            <div>
              <label htmlFor="phone" className={labelBase}>Phone</label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                className={inputBase}
                placeholder="0788 123 456"
                {...register("phone")}
              />
              {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className={labelBase}>Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={inputBase}
                placeholder="you@email.com"
                {...register("email")}
              />
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="notes" className={labelBase}>
                Special requests <span className="text-ink-muted/60 normal-case font-normal">(optional)</span>
              </label>
              <textarea
                id="notes"
                rows={3}
                className={inputBase + " resize-none"}
                placeholder="Preferred therapist, pressure level, allergies…"
                {...register("notes")}
              />
            </div>
          </div>

          {/* Channel */}
          {(env.notify.emailEnabled || env.notify.whatsappEnabled) && (
            <div>
              <label className={labelBase}>How should we confirm?</label>
              <Controller
                control={control}
                name="channel"
                render={({ field }) => (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {env.notify.emailEnabled && (
                      <ChannelOption
                        active={field.value === "email"}
                        onClick={() => field.onChange("email")}
                        icon={<Mail size={16} />}
                        label="Email only"
                      />
                    )}
                    {env.notify.whatsappEnabled && (
                      <ChannelOption
                        active={field.value === "whatsapp"}
                        onClick={() => field.onChange("whatsapp")}
                        icon={<MessageCircle size={16} />}
                        label="WhatsApp only"
                      />
                    )}
                    {env.notify.emailEnabled && env.notify.whatsappEnabled && (
                      <ChannelOption
                        active={field.value === "both"}
                        onClick={() => field.onChange("both")}
                        icon={
                          <span className="inline-flex">
                            <Mail size={14} />
                            <MessageCircle size={14} className="-ml-1" />
                          </span>
                        }
                        label="Both"
                      />
                    )}
                  </div>
                )}
              />
            </div>
          )}
        </motion.fieldset>

        <motion.div
          variants={itemVariants}
          transition={itemTransition}
          className="pt-2"
        >
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || !selectedService || !selectedDate || !selectedTime}
            className="w-full sm:w-auto"
          >
            <Send size={16} />
            {isSubmitting ? "Sending…" : "Send booking request"}
          </Button>
          <p className="mt-3 text-xs text-ink-muted">
            By submitting, you agree we may contact you via the chosen channel.
          </p>
        </motion.div>
      </div>
    </motion.form>
  );
}

function Step({
  n,
  title,
  icon,
}: {
  n: number;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-forest text-cream text-xs font-semibold">
        {n}
      </span>
      <h2 className="font-display text-2xl text-forest-dark inline-flex items-center gap-2">
        {icon}
        {title}
      </h2>
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-red-700">{children}</p>;
}

function ChannelOption({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm transition-all",
        active
          ? "border-forest bg-forest text-cream shadow-md"
          : "border-forest/15 bg-cream hover:border-forest text-forest-dark",
      )}
    >
      {icon}
      {label}
    </button>
  );
}
