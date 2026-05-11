import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs uppercase tracking-[0.3em] mb-4",
            invert ? "text-blush" : "text-gold-dark",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl font-medium leading-tight text-balance",
          invert ? "text-cream" : "text-forest-dark",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed text-pretty",
            invert ? "text-cream/80" : "text-ink-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
