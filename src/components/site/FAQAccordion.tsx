import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQ {
  q: string;
  a: string;
}

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-xl md:text-2xl text-foreground">{item.q}</span>
              {isOpen ? (
                <Minus className="size-5 text-primary shrink-0" />
              ) : (
                <Plus className="size-5 text-primary shrink-0" />
              )}
            </button>
            <div
              className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden text-muted-foreground leading-relaxed max-w-2xl">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
