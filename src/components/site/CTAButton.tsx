import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-bone hover:text-ink",
  outline: "border border-foreground/30 text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:text-primary",
};

export function CTAButton({
  to,
  href,
  children,
  variant = "primary",
  className = "",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base = `group inline-flex items-center gap-3 px-7 py-4 text-[0.78rem] tracking-[0.22em] uppercase transition-colors ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </>
  );
  if (href) {
    return (
      <a href={href} className={base}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={base}>
      {content}
    </Link>
  );
}
