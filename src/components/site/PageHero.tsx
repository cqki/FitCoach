import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 grain overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{ background: "var(--gradient-spotlight)" }}
      />
      <div className="container-x">
        {eyebrow && <div className="eyebrow mb-6">{eyebrow}</div>}
        <h1 className="headline-xl text-balance max-w-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
