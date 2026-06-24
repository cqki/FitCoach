import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/results", label: "Results" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-background/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Link to="/" className="font-display text-xl tracking-[0.18em] text-foreground">
            FIT<span className="text-primary"> / </span>COACH
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{
                  className: "text-muted-foreground hover:text-foreground",
                }}
                className="text-[0.78rem] tracking-[0.2em] uppercase transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 border border-primary/60 px-5 py-2.5 text-[0.72rem] tracking-[0.22em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Apply Now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden text-foreground p-2 -mr-2"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-[#050505]">
          <div className="container-x flex flex-col gap-2 pt-12 pb-16 h-full">
            {NAV.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-5xl text-foreground py-3 border-b border-border tracking-wide"
                style={{
                  animation: `fade-up 0.5s ${i * 60}ms both`,
                }}
              >
                {n.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center bg-primary text-primary-foreground py-5 text-sm tracking-[0.22em] uppercase"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
