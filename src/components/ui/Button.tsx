import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline-light";

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-white hover:opacity-90 hover:-translate-y-0.5",
  secondary:
    "border border-rose-gold text-espresso hover:bg-rose-gold/10 hover:-translate-y-0.5",
  "outline-light":
    "border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5",
};

const BASE_STYLES =
  "inline-flex items-center justify-center rounded-full px-6 py-2.5 font-body text-sm font-semibold " +
  "transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-blush";

/**
 * Shared CTA button. Renders as an <a> when `href` is provided (e.g. anchor
 * links to page sections), otherwise as a <button>.
 */
export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const styles = `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={styles}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
