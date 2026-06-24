export interface ResultEntry {
  name: string;
  result: string;
  timeframe: string;
  metrics: string;
  quote: string;
  image: string;
}

export function ResultCard({ entry }: { entry: ResultEntry }) {
  return (
    <article className="group flex flex-col bg-card border border-border hover-lift">
      <div className="grid grid-cols-2 gap-px bg-border">
        <Frame label="Before" image={entry.image} dim />
        <Frame label="After" image={entry.image} />
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl text-foreground">{entry.name}</h3>
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-primary">
            {entry.timeframe}
          </span>
        </div>
        <p className="mt-3 text-sm text-foreground/80">{entry.result}</p>
        <p className="mt-2 text-xs tracking-[0.18em] uppercase text-muted-foreground">
          {entry.metrics}
        </p>
        <blockquote className="mt-6 font-serif italic text-base text-foreground/85 leading-relaxed border-l-2 border-primary pl-4">
          “{entry.quote}”
        </blockquote>
      </div>
    </article>
  );
}

function Frame({ label, image, dim = false }: { label: string; image: string; dim?: boolean }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
      <img
        src={image}
        alt={label}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          dim ? "grayscale brightness-75 contrast-110" : ""
        }`}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: "linear-gradient(180deg, transparent, oklch(0.10 0.005 60 / 0.85))" }}
      />
      <div className="absolute bottom-3 left-3 text-[0.65rem] tracking-[0.3em] uppercase text-bone/90">
        {label}
      </div>
    </div>
  );
}
