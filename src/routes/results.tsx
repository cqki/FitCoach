import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ResultCard } from "@/components/site/ResultCard";
import { StatCard } from "@/components/site/StatCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTAButton } from "@/components/site/CTAButton";
import { RESULTS } from "@/lib/site-data";
import { Check, Camera, TrendingUp, MessageCircle, Scale } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Client Results — FitCoach" },
      {
        name: "description",
        content:
          "Realistic fitness transformations built through personalized training, flexible nutrition, consistency, and weekly accountability.",
      },
      { property: "og:title", content: "Client Results — FitCoach" },
      {
        property: "og:description",
        content:
          "Client transformations created with structured coaching, sustainable habits, and weekly progress reviews.",
      },
    ],
  }),
  component: ResultsPage,
});

const PROOF_POINTS = [
  "Before and after transformation layouts",
  "Clear client metrics and timeframes",
  "Believable progress ranges",
  "Client stories focused on consistency",
];

const TRACKED = [
  {
    icon: Scale,
    title: "Body Metrics",
    text: "Weight, measurements, photos, and visible progress are reviewed together — not judged from one number alone.",
  },
  {
    icon: TrendingUp,
    title: "Training Progress",
    text: "Strength, workout consistency, performance, and recovery help show whether the plan is moving in the right direction.",
  },
  {
    icon: MessageCircle,
    title: "Weekly Feedback",
    text: "Check-ins reveal what is working, what is difficult, and what needs to be adjusted before motivation drops.",
  },
  {
    icon: Camera,
    title: "Visual Proof",
    text: "Transformation cards are designed to make client results easy to understand, compare, and trust.",
  },
];

const CASE_STUDY = [
  "Started with inconsistent workouts and no clear nutrition structure",
  "Moved to 4 focused sessions per week with simple nutrition targets",
  "Used weekly check-ins to adjust calories, steps, and recovery",
  "Lost 13 kg while building confidence and long-term habits",
];

function ResultsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Client Results"
        title={
          <>
            Built Through{" "}
            <span className="font-serif italic font-normal text-primary">Consistency,</span> Not
            Extremes.
          </>
        }
        subtitle="A premium results page designed to showcase transformations, prove the coaching method, and help visitors believe change is possible for them too."
      />

      {/* PROOF INTRO */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-8 border-y border-border py-8 md:grid-cols-4">
            {PROOF_POINTS.map((point) => (
              <div
                key={point}
                className="text-sm uppercase tracking-[0.16em] text-muted-foreground"
              >
                <span className="mr-3 text-primary">•</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS GRID */}
      <section className="pb-24 md:pb-36">
        <div className="container-x">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Transformation Gallery"
              title={
                <>
                  Real People. Clear Metrics.{" "}
                  <span className="font-serif italic font-normal text-primary">
                    Believable Outcomes.
                  </span>
                </>
              }
              subtitle="Each card is built so coaches can easily replace names, photos, timeframes, quotes, and progress numbers."
            />

            <CTAButton to="/contact" variant="outline">
              Start Your Result
            </CTAButton>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {RESULTS.map((r) => (
              <ResultCard key={r.name} entry={r} />
            ))}
          </div>
        </div>
      </section>

      {/* AVERAGE IMPROVEMENTS */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Average Improvements"
            title={
              <>
                The Numbers Behind{" "}
                <span className="font-serif italic font-normal text-primary">The Process.</span>
              </>
            }
            subtitle="Results vary by individual. These ranges communicate realistic outcomes without making exaggerated claims."
          />

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="8–14 kg" label="Fat loss range" />
            <StatCard value="3–5×" label="Workouts per week" />
            <StatCard value="90%+" label="Check-in completion" />
            <StatCard value="12 wks" label="Common first milestone" />
          </div>

          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Disclaimer: results depend on individual effort, consistency, starting point, lifestyle,
            sleep, stress, nutrition adherence, and training history. No medical claims are made or
            implied.
          </p>
        </div>
      </section>

      {/* WHAT GETS TRACKED */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="What Gets Measured"
            title={
              <>
                Progress Is Bigger Than{" "}
                <span className="font-serif italic font-normal text-primary">
                  A Number On The Scale.
                </span>
              </>
            }
            subtitle="This section makes the coaching feel more professional by showing that progress is reviewed from multiple angles."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TRACKED.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-border bg-card/50 p-7 transition-colors hover:bg-card"
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

      {/* FEATURED CASE STUDY */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-36">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="eyebrow mb-5">Featured Story</div>

            <h2 className="headline-lg text-balance">
              From inconsistent and frustrated to{" "}
              <span className="font-serif italic font-normal text-primary">
                confident and in control.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Use this section for a stronger client story. It gives the page more emotional depth
              and makes the results feel less like random numbers.
            </p>

            <div className="mt-10">
              <CTAButton to="/testimonials" variant="outline">
                Read More Client Stories
              </CTAButton>
            </div>
          </div>

          <div className="border border-border bg-background p-8 md:p-10">
            <div className="mb-8 grid grid-cols-3 gap-4 border-b border-border pb-8 text-center">
              <div>
                <div className="font-display text-3xl text-primary">20</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Weeks
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-primary">-13kg</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Fat Loss
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-primary">4×</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Training
                </div>
              </div>
            </div>

            <h3 className="font-display text-3xl">Ana’s Transformation</h3>

            <ul className="mt-7 space-y-4">
              {CASE_STUDY.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l border-primary pl-5 font-serif text-2xl italic leading-relaxed text-foreground">
              “For the first time, I knew exactly what to do each week.”
            </blockquote>
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
          <div className="eyebrow mb-6">Your Result Starts With A Plan</div>

          <h2 className="headline-lg text-balance">
            Ready To Create A Result You Can{" "}
            <span className="font-serif italic font-normal text-primary">Actually Maintain?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Apply for coaching and take the first step toward structured training, realistic
            nutrition, and consistent accountability.
          </p>

          <div className="mt-10 flex justify-center">
            <CTAButton to="/contact">Apply Now</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
