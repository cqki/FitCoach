import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProgramCard } from "@/components/site/ProgramCard";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { CTAButton } from "@/components/site/CTAButton";
import { PROGRAMS } from "@/lib/site-data";
import { Check, X, ArrowRight, Clock, MessageCircle, Target, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — FitCoach" },
      {
        name: "description",
        content:
          "Premium online fitness coaching programs built around structure, accountability, nutrition, and sustainable body transformation.",
      },
      { property: "og:title", content: "Programs — FitCoach" },
      {
        property: "og:description",
        content:
          "Choose the coaching level that matches your goal, lifestyle, and desired support.",
      },
    ],
  }),
  component: ProgramsPage,
});

const FIT = [
  "You want a clear plan instead of guessing what to do each week",
  "You are tired of restarting every Monday with no long-term structure",
  "You want accountability from someone who tracks your progress properly",
  "You want nutrition guidance without extreme restriction or food guilt",
  "You are ready to communicate honestly and follow a real process",
];

const NOT_FIT = [
  "You want an extreme crash diet or unrealistic overnight transformation",
  "You are looking for a cheap PDF plan with no support or feedback",
  "You are not willing to check in, track progress, or communicate honestly",
  "You want motivation only, without changing daily habits and routines",
];

const OUTCOMES = [
  {
    icon: Target,
    title: "Clear Direction",
    text: "Clients know exactly what to train, what to track, and what to focus on each week.",
  },
  {
    icon: MessageCircle,
    title: "Consistent Support",
    text: "Check-ins and feedback keep the plan from becoming another forgotten fitness program.",
  },
  {
    icon: TrendingUp,
    title: "Measured Progress",
    text: "Training, nutrition, habits, photos, and body metrics are reviewed so adjustments make sense.",
  },
  {
    icon: Clock,
    title: "Built Around Real Life",
    text: "The program adapts to work, school, travel, family, stress, and imperfect weeks.",
  },
];

const JOURNEY = [
  {
    step: "01",
    title: "Choose Your Level",
    text: "Pick the support level that matches the client’s goal, experience, and desired accountability.",
  },
  {
    step: "02",
    title: "Apply For Coaching",
    text: "The visitor completes a short application so the coach can qualify the lead before the call.",
  },
  {
    step: "03",
    title: "Book The Consultation",
    text: "The coach reviews the goal, obstacles, schedule, training history, and best program fit.",
  },
  {
    step: "04",
    title: "Start The Plan",
    text: "The client receives a personalized training and nutrition strategy with clear next steps.",
  },
];

const VALUE_POINTS = [
  "Custom training plan",
  "Nutrition targets",
  "Weekly check-ins",
  "Progress tracking",
  "Plan adjustments",
  "Direct coach support",
];

function ProgramsPage() {
  return (
    <Layout>
      {/* PROGRAMS HERO */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="container-x">
          <div className="eyebrow mb-5">Coaching Programs</div>

          <h1 className="headline-xl max-w-4xl">
            Choose The Right Level Of Coaching
            <span className="block font-serif italic font-normal text-primary">
              For Your Transformation.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every program is designed around the same goal: helping clients build sustainable
            results through structure, accountability, and expert guidance.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="border border-border p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Foundation
              </div>
              <div className="mt-2 font-display text-3xl text-primary">€149</div>
            </div>

            <div className="border border-primary p-5 bg-card">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">Most Popular</div>
              <div className="mt-2 font-display text-3xl text-primary">€249</div>
            </div>

            <div className="border border-border p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Elite 1:1
              </div>
              <div className="mt-2 font-display text-3xl text-primary">€399</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section className="pt-20 pb-24 md:pt-28 md:pb-40">
        <div className="container-x">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="eyebrow mb-5">Choose Your Path</div>
              <h2 className="headline-lg text-balance">
                Three levels of support for different{" "}
                <span className="font-serif italic font-normal text-primary">
                  goals, lifestyles, and budgets.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:ml-auto">
              Each program card is structured to help coaches sell clearly: who it is for, what is
              included, what level of support the client receives, and what action they should take
              next.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {PROGRAMS.map((p) => (
              <ProgramCard key={p.name} program={p} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-border bg-charcoal/30 p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <h3 className="font-display text-2xl">Not sure which option fits best?</h3>
              <p className="mt-2 text-muted-foreground">
                A consultation helps match the client to the right coaching level.
              </p>
            </div>

            <CTAButton to="/contact" variant="outline">
              Book A Consultation
            </CTAButton>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What Clients Get"
            title={
              <>
                More Than A Workout Plan.{" "}
                <span className="font-serif italic font-normal text-primary">
                  A Complete Coaching Experience.
                </span>
              </>
            }
            subtitle="This section increases perceived value by showing that the coach is selling structure, support, accountability, and transformation — not just exercises."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-border bg-background p-7 transition-colors hover:bg-card"
                >
                  <div className="mb-7 inline-flex size-12 items-center justify-center border border-primary/40 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE / VALUE STACK */}
      <section className="py-24 md:py-36">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="eyebrow mb-5">The Coaching Experience</div>
            <h2 className="headline-lg text-balance">
              The client should feel guided before they even{" "}
              <span className="font-serif italic font-normal text-primary">book the call.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Premium program pages do not only list features. They explain the experience, reduce
              uncertainty, and make the offer feel organized, professional, and worth paying for.
            </p>
          </div>

          <div className="grid overflow-hidden border border-border sm:grid-cols-2">
            {VALUE_POINTS.map((point, index) => (
              <div
                key={point}
                className="border-b border-border bg-card/40 p-6 last:border-b-0 sm:border-r sm:[&:nth-child(even)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="font-display text-3xl text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 text-lg text-foreground">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Compare"
            title={
              <>
                What Is Included In{" "}
                <span className="font-serif italic font-normal text-primary">Each Tier.</span>
              </>
            }
            subtitle="A clear comparison table helps visitors justify moving to a higher support level."
          />

          <div className="mt-12">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                From First Click To{" "}
                <span className="font-serif italic font-normal text-primary">First Check-In.</span>
              </>
            }
            subtitle="This section makes the buying process feel simple, safe, and professional."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((item) => (
              <div
                key={item.step}
                className="relative border border-border bg-background p-7 transition-colors hover:bg-card"
              >
                <div className="font-display text-4xl text-primary">{item.step}</div>
                <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>

                <ArrowRight className="absolute right-6 top-7 hidden size-5 text-primary/60 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIT / NOT FIT */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-32">
        <div className="container-x">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="eyebrow mb-5">Client Fit</div>
              <h2 className="headline-lg text-balance">
                Strong offers do not attract everyone.{" "}
                <span className="font-serif italic font-normal text-primary">
                  They qualify the right people.
                </span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              This section improves conversion quality by helping coaches repel poor leads and
              attract people who are ready for structure, communication, and accountability.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border border-primary/40 bg-background p-8 md:p-10">
              <div className="eyebrow mb-4 text-primary">A Fit</div>
              <h3 className="font-display text-3xl md:text-4xl">This coaching is for you if…</h3>

              <ul className="mt-8 space-y-4">
                {FIT.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground/90">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-background/60 p-8 md:p-10">
              <div className="eyebrow mb-4 text-muted-foreground">Not A Fit</div>
              <h3 className="font-display text-3xl md:text-4xl">This is not for you if…</h3>

              <ul className="mt-8 space-y-4">
                {NOT_FIT.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-muted-foreground">
                    <X className="mt-0.5 size-5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-border py-28 md:py-40 grain">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "var(--gradient-spotlight)" }}
        />

        <div className="container-x mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-6">Choose With Confidence</div>

          <h2 className="headline-lg text-balance">
            Not Sure Which Program{" "}
            <span className="font-serif italic font-normal text-primary">Fits?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Book a free consultation and choose the coaching level that matches the goal, schedule,
            and support needed.
          </p>

          <div className="mt-10 flex justify-center">
            <CTAButton to="/contact">Book A Free Consultation</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
