import { useEffect, useState } from "react";
import { Menu, X, HardHat } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(37,99,235,0.25)]"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="wl-container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md">
            <HardHat size={20} />
          </span>
          <span className="text-foreground">
            Work<span className="text-secondary">Link</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-lg border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10 transition">
            Login
          </button>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 hover:-translate-y-0.5 transition">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg text-foreground hover:bg-muted"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur">
          <ul className="wl-container flex flex-col py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-foreground hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex gap-2 pt-2">
              <button className="flex-1 rounded-lg border border-primary/30 px-4 py-2 text-sm font-semibold text-primary">
                Login
              </button>
              <button className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}