import { cn } from "@/lib/cn";

export function LogoMark({
  className,
  tone = "blush",
}: {
  className?: string;
  tone?: "blush" | "forest";
}) {
  const fill = tone === "blush" ? "#E8C9C3" : "#2E3D33";
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    >
      {/* Three lotus petals */}
      <path
        d="M32 8 C25 18, 25 28, 32 36 C39 28, 39 18, 32 8 Z"
        fill={fill}
        opacity="0.95"
      />
      <path
        d="M14 22 C18 32, 25 38, 32 38 C30 30, 24 22, 14 22 Z"
        fill={fill}
        opacity="0.78"
      />
      <path
        d="M50 22 C46 32, 39 38, 32 38 C34 30, 40 22, 50 22 Z"
        fill={fill}
        opacity="0.78"
      />
      <ellipse cx="32" cy="40" rx="14" ry="2.5" fill={fill} opacity="0.5" />
    </svg>
  );
}

export function LogoWordmark({
  className,
  tone = "blush",
}: {
  className?: string;
  tone?: "blush" | "forest";
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark tone={tone} />
      <div className="leading-none">
        <div
          className={cn(
            "font-display text-2xl font-semibold tracking-[0.2em]",
            tone === "blush" ? "text-cream" : "text-forest-dark",
          )}
        >
          BLOOM
        </div>
        <div
          className={cn(
            "font-script text-base -mt-1",
            tone === "blush" ? "text-blush" : "text-gold-dark",
          )}
        >
          spa
        </div>
      </div>
    </div>
  );
}
