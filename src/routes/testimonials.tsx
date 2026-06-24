import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { CTAButton } from "@/components/site/CTAButton";
import { StatCard } from "@/components/site/StatCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TESTIMONIALS } from "@/lib/site-data";
import client3 from "@/assets/client-3.jpg";
import { Star, Quote, Check } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — FitCoach" },
      {
        name: "description",
        content:
          "Client stories from people who found structure, confidence, consistency, and sustainable fitness results.",
      },
      { property: "og:title", content: "Testimonials — FitCoach" },
      {
        property: "og:description",
        content: "Real client stories from a premium online fitness coaching experience.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const PROOF_STATS = [
  { value: "4.9★", label: "Average Rating" },
  { value: "150+", label: "Clients Coached" },
  { value: "90%+", label: "Check-In Completion" },
  { value: "12 wks", label: "Common Milestone" },
];

const STORY_POINTS = [
  "No more restarting every Monday",
  "Built a consistent weekly routine",
  "Learned flexible nutrition targets",
  "Lost 13 kg without extreme restriction",
];

const CLIENT_TYPES = [
  "Busy professionals",
  "Beginners starting from zero",
  "Parents with limited time",
  "Clients tired of yo-yo dieting",
  "People returning after a long break",
  "Strength-focused transformations",
];

function TestimonialsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Client Stories"
        title={
          <>
            Proof From People Who Finally{" "}
            <span className="font-serif italic font-normal text-primary">Found Structure.</span>
          </>
        }
        subtitle="A premium testimonial page designed to build trust, reduce hesitation, and show that the coaching system works for real people with real lives."
      />

      {/* PROOF STRIP */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-8 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROOF_STATS.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="pb-24 md:pb-36">
        <div className="container-x">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Client Feedback"
              title={
                <>
                  Not Just Weight Lost.{" "}
                  <span className="font-serif italic font-normal text-primary">
                    Confidence Gained.
                  </span>
                </>
              }
              subtitle="The strongest testimonials show the emotional transformation too: confidence, consistency, control, and trust in the process."
            />

            <CTAButton to="/contact" variant="outline">
              Apply For Coaching
            </CTAButton>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT TYPE SECTION */}
      <section className="border-y border-border bg-charcoal/30 py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="eyebrow mb-5">Who This Helps</div>
            <h2 className="headline-lg text-balance">
              The best testimonials make visitors think,{" "}
              <span className="font-serif italic font-normal text-primary">
                “that sounds like me.”
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              This section helps coaches show that their process can support different client types
              while still feeling focused and premium.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CLIENT_TYPES.map((type) => (
              <div
                key={type}
                className="border border-border bg-background p-5 text-sm uppercase tracking-[0.14em] text-muted-foreground"
              >
                <span className="mr-3 text-primary">•</span>
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="border-b border-border bg-background py-24 md:py-36">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] xl:gap-20">
          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <div className="absolute -inset-5 -z-10 bg-primary/10 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
              <img
                src={client3}
                alt="Featured coaching client"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 border border-border bg-background/90 p-5 backdrop-blur sm:left-auto sm:right-6 sm:w-64">
              <div className="font-display text-3xl text-primary">-13kg</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                Sustainable transformation
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5">Featured Story</div>

            <h2 className="headline-lg text-balance">
              From inconsistent to{" "}
              <span className="font-serif italic font-normal text-primary">in control.</span>
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Before coaching, Ana felt stuck in a cycle of strict diets, missed workouts, and
              frustration. With a realistic plan, weekly check-ins, and simple nutrition targets,
              she lost 13 kg, built confidence, and finally understood how to maintain her results.
            </p>

            <div className="mt-8 flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>

            <blockquote className="mt-6 border-l-2 border-primary pl-5 font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
              “I'm not starting over every Monday anymore. That alone changed my life.”
            </blockquote>

            <div className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Ana M. — Transformation Coaching
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {STORY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="border-b border-border bg-charcoal/30 py-20 md:py-28">
        <div className="container-x mx-auto max-w-5xl text-center">
          <Quote className="mx-auto mb-8 size-10 text-primary" />

          <h2 className="font-serif text-3xl italic leading-relaxed text-foreground md:text-5xl">
            “The difference was not another perfect plan. It was finally having a coach, a
            structure, and a reason to stay consistent.”
          </h2>

          <div className="mt-8 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            A stronger testimonial section builds belief before the application
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-28 md:py-40 grain">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "var(--gradient-spotlight)" }}
        />

        <div className="container-x mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-6">Your Story Starts Here</div>

          <h2 className="headline-lg text-balance">
            Want A Story{" "}
            <span className="font-serif italic font-normal text-primary">Like This?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Apply for coaching and take the first step toward more structure, confidence, and
            sustainable progress.
          </p>

          <div className="mt-10 flex justify-center">
            <CTAButton to="/contact">Apply For Coaching</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
