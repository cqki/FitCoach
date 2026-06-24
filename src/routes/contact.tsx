import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { ProcessStep } from "@/components/site/ProcessStep";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Mail, Instagram, Globe, CheckCircle, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Apply For Coaching — FitCoach" },
      {
        name: "description",
        content: "Apply for premium online fitness coaching and book a free consultation call.",
      },
      { property: "og:title", content: "Apply For Coaching — FitCoach" },
      {
        property: "og:description",
        content:
          "Submit your coaching application and take the first step toward a structured transformation plan.",
      },
    ],
  }),
  component: ContactPage,
});

const FAQS = [
  {
    q: "Do I need experience?",
    a: "No. Programs are built around your starting point. Complete beginners and experienced lifters are equally welcome.",
  },
  {
    q: "Do I need a gym?",
    a: "Not necessarily. Plans can be built for full gyms, home gyms, or minimal-equipment setups.",
  },
  {
    q: "How soon can I start?",
    a: "Most clients start within a week of their consultation call.",
  },
  {
    q: "Is the consultation free?",
    a: "Yes. The consultation call is free and designed to make sure coaching is the right fit.",
  },
];

const TRUST_POINTS = [
  {
    icon: CheckCircle,
    title: "Application Reviewed",
    text: "Every application gives the coach context before the consultation call.",
  },
  {
    icon: Clock,
    title: "Response Within 48h",
    text: "A clear response window makes the process feel professional and reliable.",
  },
  {
    icon: ShieldCheck,
    title: "No Pressure Call",
    text: "The consultation is positioned as a fit check, not a pushy sales call.",
  },
];

function ContactPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border pt-32 pb-20 md:pt-40 md:pb-28 grain">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "var(--gradient-spotlight)" }}
        />

        <div className="container-x max-w-5xl">
          <div className="eyebrow mb-6">Apply For Coaching</div>

          <h1 className="headline-xl max-w-5xl text-balance">
            Tell Us Where You Are Now.{" "}
            <span className="font-serif italic font-normal text-primary">
              We’ll Build The Next Step.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A premium application page designed to turn interested visitors into qualified
            consultation calls.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-[1.45fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-10">
              <div className="eyebrow mb-5">Application Form</div>

              <h2 className="headline-lg text-balance">Apply For A Coaching Spot.</h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The form should feel premium and serious, but simple enough that visitors actually
                complete it.
              </p>
            </div>

            <div className="[&_button]:cursor-pointer [&_button]:active:cursor-pointing">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-8 lg:self-center">
            <div className="border border-border bg-card p-8 md:p-10">
              <div className="eyebrow mb-7">What Happens Next</div>

              <div className="space-y-7">
                <ProcessStep
                  index={1}
                  title="Submit your application"
                  description="Share your goal, current situation, and what kind of support you need."
                />
                <ProcessStep
                  index={2}
                  title="Review within 48 hours"
                  description="The application is reviewed so the consultation feels focused and useful."
                />
                <ProcessStep
                  index={3}
                  title="Consultation call"
                  description="A short call to align on goals, expectations, and whether coaching is the right fit."
                />
                <ProcessStep
                  index={4}
                  title="Your plan is built"
                  description="Custom training, nutrition, and check-in structure are prepared before the first week."
                />
              </div>
            </div>

            <div className="border border-border bg-card p-8 md:p-10">
              <div className="eyebrow mb-6">Direct Contact</div>

              <ul className="space-y-5 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-primary" />
                  coaching@fitcoach.com
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="size-4 text-primary" />
                  @fitcoach
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="size-4 text-primary" />
                  Online coaching worldwide
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-charcoal/30 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Before You Apply"
            title={
              <>
                A Simple Process That Feels{" "}
                <span className="font-serif italic font-normal text-primary">
                  Professional And Low Pressure.
                </span>
              </>
            }
            subtitle="This section helps visitors feel safe taking the next step."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TRUST_POINTS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-border bg-background p-8 transition-colors hover:bg-card"
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

      <section className="py-24 md:py-32">
        <div className="container-x mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Quick answers before you apply." align="center" />

          <div className="mt-12">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
