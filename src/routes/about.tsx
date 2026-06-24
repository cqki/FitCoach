import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTAButton } from "@/components/site/CTAButton";
import { StatCard } from "@/components/site/StatCard";
import aboutCoach from "@/assets/about-coach.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FitCoach" },
      {
        name: "description",
        content:
          "Meet the coach behind a premium fitness coaching system built on structure, education, accountability, and sustainable results.",
      },
      { property: "og:title", content: "About — FitCoach" },
      {
        property: "og:description",
        content:
          "A premium coaching approach for sustainable fitness, nutrition, and body transformation.",
      },
    ],
  }),
  component: AboutPage,
});

const PHILOSOPHY = [
  {
    t: "Sustainable Progress",
    d: "The plan should support real life, not take it over. Training, nutrition, and habits are built to be repeated long enough to actually work.",
  },
  {
    t: "Education First",
    d: "Clients do not just receive instructions. They learn why each step matters, how to make better choices, and how to stay in control long term.",
  },
  {
    t: "Accountability With Standards",
    d: "Support should feel professional, honest, and useful. The goal is not pressure — it is clarity, consistency, and better decisions each week.",
  },
  {
    t: "Results That Last",
    d: "A transformation is only valuable if it can be maintained. The process is designed to build confidence, strength, and habits that continue after coaching.",
  },
];

const CERTS = [
  {
    title: "Certified Personal Trainer",
    text: "Foundational training knowledge for safe, structured, goal-specific programming.",
  },
  {
    title: "Nutrition Coaching Specialist",
    text: "Practical nutrition guidance focused on habits, adherence, and sustainable results.",
  },
  {
    title: "Strength & Conditioning Education",
    text: "Training principles for building strength, improving performance, and progressing intelligently.",
  },
  {
    title: "Lifestyle Coaching Experience",
    text: "Support for sleep, stress, routines, and the real-life factors that affect consistency.",
  },
];

const DIFFERENTIATORS = [
  "Personalized plans instead of generic PDFs",
  "Weekly check-ins with clear feedback",
  "Flexible nutrition without extreme food rules",
  "Progress tracking beyond just scale weight",
  "Training built around schedule and equipment",
  "A system clients can continue after coaching",
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About FitCoach"
        title={
          <>
            A Premium Coaching Brand Built Around{" "}
            <span className="font-serif italic font-normal text-primary">
              Trust, Structure, And Results.
            </span>
          </>
        }
        subtitle="This page is designed to help fitness coaches communicate authority, explain their method, and build confidence before a visitor applies."
      />

      {/* STORY / POSITIONING */}
      <section className="pb-24 md:pb-36">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] xl:gap-20">
          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <div className="absolute -inset-5 -z-10 bg-primary/10 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
              <img
                src={aboutCoach}
                alt="Fitness coach portrait"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 border border-border bg-background/90 p-5 backdrop-blur sm:left-auto sm:right-6 sm:w-64">
              <div className="font-display text-3xl text-primary">150+</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                Clients coached through structured transformation plans
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5">The Story</div>

            <h2 className="headline-lg max-w-3xl text-balance">
              Most people do not need more motivation. They need a{" "}
              <span className="font-serif italic font-normal text-primary">better system.</span>
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                After years of watching people move between random workouts, strict diets, and short
                bursts of motivation, this coaching system was built to offer something more
                reliable: structure, accountability, and a plan that can actually fit into real
                life.
              </p>

              <p>
                The goal is not to create a perfect routine for a perfect week. The goal is to build
                a process clients can follow through work, stress, social events, low-energy days,
                and busy schedules.
              </p>

              <p>
                This template gives coaches space to share their story, communicate their standards,
                and position their coaching as a premium service — not just another workout plan.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <StatCard value="150+" label="Clients" />
              <StatCard value="5+ yrs" label="Experience" />
              <StatCard value="1:1" label="Support" />
              <StatCard value="4.9★" label="Rating" />
            </div>
          </div>
        </div>
      </section>

      {/* BELIEF SECTION */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="eyebrow mb-5">The Belief</div>
            <h2 className="headline-lg text-balance">
              Coaching should feel personal, clear, and{" "}
              <span className="font-serif italic font-normal text-primary">
                impossible to ignore.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item}
                className="border border-border bg-background p-5 text-sm uppercase tracking-[0.14em] text-muted-foreground"
              >
                <span className="mr-3 text-primary">•</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Philosophy"
            title={
              <>
                No Extremes. No Guesswork.{" "}
                <span className="font-serif italic font-normal text-primary">
                  No Copy-Paste Plans.
                </span>
              </>
            }
            subtitle="This section helps coaches show that their method is structured, thoughtful, and built for long-term client success."
          />

          <div className="mt-14 grid overflow-hidden border border-border md:grid-cols-2">
            {PHILOSOPHY.map((p, i) => (
              <div
                key={p.t}
                className="group border-b border-border bg-background p-8 transition-colors hover:bg-card md:p-10 md:[&:nth-child(odd)]:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="font-display text-4xl text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight">{p.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Credentials"
              title={
                <>
                  Authority That Supports A{" "}
                  <span className="font-serif italic font-normal text-primary">Premium Offer.</span>
                </>
              }
              subtitle="Use this area for certifications, education, experience, media mentions, or specialist training."
            />

            <CTAButton to="/contact" variant="outline">
              Apply For Coaching
            </CTAButton>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c) => (
              <div
                key={c.title}
                className="border border-border bg-background p-7 transition-colors hover:bg-card"
              >
                <div className="font-display text-3xl text-primary">★</div>
                <h3 className="mt-5 font-display text-2xl leading-tight">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM METHOD */}
      <section className="py-24 md:py-36">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow mb-5">The Coaching Standard</div>
            <h2 className="headline-lg text-balance">
              A coach should never look like they are selling{" "}
              <span className="font-serif italic font-normal text-primary">a cheap PDF plan.</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Premium coaching needs to feel guided, personal, and professional from the first
              impression. This page is structured to make a coach look experienced, trustworthy, and
              capable of leading a client through a real transformation.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              The design avoids overused gym clichés and instead focuses on a modern personal-brand
              experience: strong typography, editorial spacing, confidence-building copy, and
              sections that answer the question every visitor has in their mind:
            </p>

            <blockquote className="border-l border-primary pl-6 font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
              “Can I trust this person to help me change?”
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border py-28 md:py-40 grain">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "var(--gradient-spotlight)" }}
        />

        <div className="container-x mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-6">Next Step</div>

          <h2 className="headline-lg text-balance">
            Think This Coaching Style{" "}
            <span className="font-serif italic font-normal text-primary">Fits You?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Apply for coaching and take the first step toward a structured, sustainable
            transformation plan.
          </p>

          <div className="mt-10 flex justify-center">
            <CTAButton to="/contact">Apply For Coaching</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
