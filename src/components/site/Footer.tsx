import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl tracking-[0.18em]">
              FIT<span className="text-primary"> / </span>COACH
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Online fitness and nutrition coaching built on structure, education, and weekly
              accountability — for clients who want results that last.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-10 place-items-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/programs", label: "Programs" },
            ]}
          />
          <FooterCol
            title="Proof"
            links={[
              { to: "/results", label: "Client Results" },
              { to: "/testimonials", label: "Testimonials" },
            ]}
          />
          <FooterCol
            title="Start"
            links={[
              { to: "/contact", label: "Apply for Coaching" },
              { to: "/contact", label: "Free Consultation" },
            ]}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs tracking-widest uppercase text-muted-foreground">
          <span>© {new Date().getFullYear()} Fit Coach. All rights reserved.</span>
          <span>coaching@fitcoach.com · @fitcoach</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-sans text-[0.7rem] tracking-[0.28em] uppercase text-primary mb-5">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="hover:text-foreground transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
