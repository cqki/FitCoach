import { CTAButton } from "./CTAButton";
import { Check } from "lucide-react";

export interface Program {
  name: string;
  price: string;
  cadence: string;
  tag?: string;
  pitch: string;
  includes: string[];
  cta: string;
  featured?: boolean;
}

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article
      className={`relative flex flex-col p-8 md:p-10 hover-lift border ${
        program.featured ? "border-primary bg-card" : "border-border bg-card/40"
      }`}
    >
      {program.tag && (
        <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-[0.65rem] tracking-[0.25em] uppercase px-3 py-1">
          {program.tag}
        </div>
      )}
      <div className="eyebrow">{program.cadence}</div>
      <h3 className="font-display text-3xl md:text-4xl mt-3">{program.name}</h3>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="font-display text-5xl text-foreground">{program.price}</span>
        <span className="text-sm text-muted-foreground">/ month</span>
      </div>
      <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{program.pitch}</p>

      <ul className="mt-8 space-y-3 flex-1">
        {program.includes.map((i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check className="size-4 mt-0.5 shrink-0 text-primary" />
            <span className="text-foreground/85">{i}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <CTAButton to="/contact" variant={program.featured ? "primary" : "outline"}>
          {program.cta}
        </CTAButton>
      </div>
    </article>
  );
}
