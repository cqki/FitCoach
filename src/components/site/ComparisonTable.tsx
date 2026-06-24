import { Check, Minus } from "lucide-react";

const ROWS: { label: string; tiers: [boolean, boolean, boolean] }[] = [
  { label: "Custom training plan", tiers: [true, true, true] },
  { label: "Nutrition strategy", tiers: [true, true, true] },
  { label: "Weekly check-ins", tiers: [true, true, true] },
  { label: "Direct messaging", tiers: [false, true, true] },
  { label: "Video check-ins", tiers: [false, true, true] },
  { label: "Weekly strategy calls", tiers: [false, false, true] },
  { label: "Priority support", tiers: [false, false, true] },
];

const TIERS = ["Foundation", "Transformation", "Elite 1:1"];

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto border border-border">
      <table className="w-full text-sm min-w-[640px]">
        <thead>
          <tr className="bg-card">
            <th className="text-left px-6 py-5 font-sans text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground">
              What's included
            </th>
            {TIERS.map((t, i) => (
              <th
                key={t}
                className={`text-left px-6 py-5 font-display text-lg tracking-wide ${
                  i === 1 ? "text-primary" : "text-foreground"
                }`}
              >
                {t}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.label} className="border-t border-border">
              <td className="px-6 py-4 text-foreground/85">{row.label}</td>
              {row.tiers.map((on, i) => (
                <td key={i} className="px-6 py-4">
                  {on ? (
                    <Check className={`size-5 ${i === 1 ? "text-primary" : "text-foreground"}`} />
                  ) : (
                    <Minus className="size-5 text-muted-foreground/50" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
