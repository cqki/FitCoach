export function ProcessStep({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="font-display text-2xl text-primary tabular-nums w-8 shrink-0">
        {String(index).padStart(2, "0")}
      </div>
      <div>
        <h4 className="font-display text-xl text-foreground">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
