import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProgramCard } from "@/components/site/ProgramCard";
import { ResultCard } from "@/components/site/ResultCard";
import { StatCard } from "@/components/site/StatCard";
import { PROGRAMS, RESULTS } from "@/lib/site-data";
import heroCoach from "@/assets/hero-coach.jpg";
import aboutCoach from "@/assets/about-coach.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FitCoach — Premium Fitness Coaching Website Template" },
      {
        name: "description",
        content:
          "A premium online fitness coaching website template built to generate leads, showcase results, and book consultation calls.",
      },
      { property: "og:title", content: "FitCoach — Premium Coaching Template" },
      {
        property: "og:description",
        content:
          "A high-end website template for online fitness coaches, personal trainers, transformation coaches, and nutrition coaches.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    n: "01",
    t: "Training That Fits",
    d: "Custom workouts built around the client’s goal, schedule, experience level, and available equipment.",
  },
  {
    n: "02",
    t: "Nutrition Without Extremes",
    d: "Clear targets, flexible structure, and realistic guidance clients can follow without crash dieting.",
  },
  {
    n: "03",
    t: "Accountability That Works",
    d: "Weekly check-ins, progress reviews, and support that keeps clients consistent when motivation drops.",
  },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden grain pt-28 pb-20 md:pt-36 md:pb-28">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-spotlight)" }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-background to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent"
        />

        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] xl:gap-20">
          <div className="relative z-10 animate-fade-up">
            <div className="eyebrow mb-5">FitCoach — Online Coaching Template</div>

            <h1 className="headline-xl max-w-4xl text-balance">
              Build A Body That Looks Strong, Feels Powerful, And{" "}
              <span className="font-serif italic font-normal text-primary">Fits Your Life.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A premium fitness coaching experience for people who want structure, accountability,
              and sustainable transformation — without extreme dieting or random workout plans.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CTAButton to="/contact">Apply For Coaching</CTAButton>
              <CTAButton to="/results" variant="outline">
                View Results
              </CTAButton>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 border-y border-border py-5 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:grid-cols-3 sm:gap-6">
              <div>
                <span className="block font-display text-2xl tracking-normal text-primary">
                  150+
                </span>
                Clients Coached
              </div>
              <div>
                <span className="block font-display text-2xl tracking-normal text-primary">
                  4.9★
                </span>
                Client Rating
              </div>
              <div>
                <span className="block font-display text-2xl tracking-normal text-primary">
                  1:1
                </span>
                Personalized Plans
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <div className="absolute -inset-6 -z-10 bg-primary/10 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
              <img
                src={heroCoach}
                alt="Fitness coaching transformation lifestyle"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 border border-border bg-background/90 p-5 backdrop-blur md:-left-8 md:right-auto md:w-64">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="font-display text-4xl leading-none text-primary">12 wks</div>
                  <div className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Avg. transformation
                  </div>
                </div>
                <div className="text-right text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Built for
                  <span className="block text-foreground">real life</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM TRUST STRIP */}
      <section className="border-y border-border bg-charcoal/30 py-8">
        <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatCard value="150+" label="Clients Coached" />
          <StatCard value="4.9★" label="Average Rating" />
          <StatCard value="5+ yrs" label="Experience" />
          <StatCard value="100%" label="Custom Plans" />
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Method"
            title={
              <>
                Coaching Built For{" "}
                <span className="font-serif italic font-normal text-primary">Real Life.</span>
              </>
            }
            subtitle="A simple premium framework coaches can adapt to their own training style, offer, and client results."
          />

          <div className="mt-14 grid overflow-hidden border border-border md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="group border-b border-border bg-background p-8 transition-colors hover:bg-card md:border-b-0 md:border-r md:p-10 last:md:border-r-0"
              >
                <div className="font-display text-4xl text-primary">{p.n}</div>
                <h3 className="mt-7 font-display text-3xl leading-tight">{p.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS PREVIEW */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-36">
        <div className="container-x">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Client Transformations"
              title={
                <>
                  Results That Feel{" "}
                  <span className="font-serif italic font-normal text-primary">
                    Believable, Premium, And Real.
                  </span>
                </>
              }
              subtitle="Transformation cards are designed to be easily replaced with each coach’s own client stories, photos, and metrics."
            />
            <div className="shrink-0">
              <CTAButton to="/results" variant="outline">
                View All Results
              </CTAButton>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESULTS.slice(0, 3).map((r) => (
              <ResultCard key={r.name} entry={r} />
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Coaching Offers"
            title={
              <>
                Three Program Levels, Built To{" "}
                <span className="font-serif italic font-normal text-primary">Convert.</span>
              </>
            }
            subtitle="Clear offer cards help visitors understand the level of support, compare options, and move toward applying."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PROGRAMS.map((p) => (
              <ProgramCard key={p.name} program={p} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <CTAButton to="/programs" variant="ghost">
              Compare Programs In Detail
            </CTAButton>
          </div>
        </div>
      </section>

      {/* COACH PREVIEW */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-36">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="absolute -inset-5 -z-10 bg-primary/10 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
              <img
                src={aboutCoach}
                alt="Fitness coach portrait"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5">Coach Authority</div>
            <h2 className="headline-lg max-w-3xl text-balance">
              A personal brand section that builds{" "}
              <span className="font-serif italic font-normal text-primary">
                trust before the call.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              This section gives coaches space to communicate their philosophy, experience,
              certifications, and story — without making the page feel like a boring biography.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <StatCard value="150+" label="Clients" />
              <StatCard value="5+ yrs" label="Experience" />
              <StatCard value="1:1" label="Support" />
              <StatCard value="100%" label="Custom" />
            </div>

            <div className="mt-10">
              <CTAButton to="/about" variant="outline">
                Meet The Coach
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-border py-28 md:py-44 grain">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-70"
          style={{ background: "var(--gradient-spotlight)" }}
        />

        <div className="container-x mx-auto max-w-5xl text-center">
          <div className="eyebrow mb-6">Apply For Coaching</div>

          <h2 className="headline-xl text-balance">
            Ready To Stop Guessing And Start{" "}
            <span className="font-serif italic font-normal text-primary">
              Following A Real Plan?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A strong final CTA gives every coach a clean, high-converting path to turn visitors into
            qualified consultation calls.
          </p>

          <div className="mt-11 flex justify-center">
            <CTAButton to="/contact">Apply Now</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
