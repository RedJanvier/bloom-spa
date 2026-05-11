import { z } from "zod";

export const channelSchema = z.enum(["email", "whatsapp", "both"]);
export type NotifyChannel = z.infer<typeof channelSchema>;

const phoneRegex = /^(?:\+?250|0)?7\d{8}$/;

export const bookingSchema = z.object({
  serviceSlug: z.string().min(1, "Please choose a service."),
  date: z
    .string()
    .min(1, "Please select a date.")
    .refine((d) => {
      const picked = new Date(d);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return picked >= today;
    }, "Date cannot be in the past."),
  time: z.string().min(1, "Please select a time."),
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Use a Rwandan number — e.g. 0788123456 or +250788123456."),
  email: z.string().trim().email("Please enter a valid email."),
  notes: z.string().max(500).optional().or(z.literal("")),
  channel: channelSchema,
});

export type BookingInput = z.infer<typeof bookingSchema>;
