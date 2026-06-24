export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-border pt-6">
      <div className="font-display text-4xl md:text-5xl text-foreground leading-none">{value}</div>
      <div className="mt-3 text-xs tracking-[0.22em] uppercase text-muted-foreground">{label}</div>
    </div>
  );
}
