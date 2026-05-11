import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-dark shadow-md hover:shadow-lg",
  secondary:
    "bg-blush text-forest-dark hover:bg-blush-soft shadow-sm",
  outline:
    "border border-forest text-forest hover:bg-forest hover:text-cream",
  ghost: "text-forest hover:bg-forest/5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-base tracking-wide",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps | LinkProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      className,
      children,
      ...rest
    } = props;

    const base =
      "inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-wider " +
      "transition-all duration-300 ease-out " +
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold " +
      "active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

    const classes = cn(base, variants[variant], sizes[size], className);

    if ("href" in rest && rest.href) {
      const { href, target, rel } = rest;
      return (
        <Link href={href} target={target} rel={rel} className={classes}>
          {children}
        </Link>
      );
    }

    const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button ref={ref} {...buttonProps} className={classes}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
