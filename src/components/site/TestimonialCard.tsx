import { Star } from "lucide-react";

export interface Testimonial {
  name: string;
  initials: string;
  rating: number;
  program: string;
  result: string;
  quote: string;
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex flex-col h-full bg-card border border-border p-8 md:p-10 hover-lift">
      <div className="flex items-center gap-1 text-primary">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-6 font-serif text-xl md:text-2xl text-foreground leading-snug">
        “{t.quote}”
      </blockquote>
      <div className="mt-auto pt-8 flex items-center gap-4 border-t border-border mt-10">
        <div className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-display text-lg">
          {t.initials}
        </div>
        <div className="min-w-0">
          <div className="font-display text-lg tracking-wide">{t.name}</div>
          <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
            {t.program} · {t.result}
          </div>
        </div>
      </div>
    </article>
  );
}
