import { useState } from "react";

const GOALS = [
  "Lose fat",
  "Build muscle",
  "Improve fitness",
  "Nutrition coaching",
  "Full body transformation",
];
const CHALLENGES = [
  "Consistency",
  "Nutrition",
  "Training plan",
  "Motivation",
  "Time",
  "Accountability",
];
const PROGRAMS = [
  "Foundation Coaching",
  "Transformation Coaching",
  "Elite 1:1 Coaching",
  "Not sure yet",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="bg-card border border-border p-8 md:p-12"
    >
      <div className="eyebrow mb-3">Application</div>
      <h2 className="font-display text-3xl md:text-4xl mb-10">Tell us about your goal</h2>

      {sent ? (
        <div className="border border-primary/40 bg-primary/5 p-8 text-center">
          <div className="font-display text-3xl text-primary">Application received.</div>
          <p className="mt-3 text-muted-foreground">
            We'll review your goals and respond within 48 hours to schedule your consultation call.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full Name" name="name" required />
          <Field label="Email Address" name="email" type="email" required />
          <Field label="Phone Number (optional)" name="phone" />
          <Select label="Main Goal" name="goal" options={GOALS} />
          <Select label="Biggest Challenge" name="challenge" options={CHALLENGES} />
          <Select label="Preferred Program" name="program" options={PROGRAMS} />
          <div className="md:col-span-2">
            <Label>Tell us about your goal</Label>
            <textarea
              name="message"
              rows={5}
              className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-colors"
              placeholder="What are you working toward, and what's holding you back?"
            />
          </div>
          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary px-10 py-4 text-[0.78rem] tracking-[0.22em] uppercase text-primary-foreground transition-colors hover:bg-bone"
            >
              Send Application
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[0.7rem] tracking-[0.22em] uppercase text-muted-foreground mb-2">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-colors"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        name={name}
        className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-colors appearance-none"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
