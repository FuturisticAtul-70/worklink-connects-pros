import { HardHat, Github, Linkedin, Mail, Phone, Send } from "lucide-react";

const cols = [
  { title: "Company", links: ["About", "Services", "Contact", "Careers"] },
  { title: "Support", links: ["Help Center", "Privacy Policy", "Terms & Conditions", "Trust & Safety"] },
  { title: "For Workers", links: ["Register", "Worker App", "Payments", "Training"] },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="wl-container py-16 grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]">
        <div>
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-white text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary">
              <HardHat size={20} />
            </span>
            Work<span className="text-secondary -ml-1.5">Link</span>
          </a>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Connecting Skilled Hands with Every Home & Business. India's trusted platform for verified professionals.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-primary transition">
              <Github size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-primary transition">
              <Linkedin size={16} />
            </a>
            <a href="mailto:hello@worklink.app" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-primary transition">
              <Mail size={16} />
            </a>
            <a href="tel:+911800000000" aria-label="Phone" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-primary transition">
              <Phone size={16} />
            </a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display font-bold text-white">{c.title}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-display font-bold text-white">Newsletter</h4>
          <p className="mt-4 text-sm text-white/70">Get product updates and safety guidelines in your inbox.</p>
          <form className="mt-4 flex items-center rounded-xl bg-white/5 p-1.5 ring-1 ring-white/10">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-white/50"
            />
            <button className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-white hover:bg-primary/90 transition" aria-label="Subscribe">
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wl-container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© 2026 WorkLink. All Rights Reserved.</p>
          <p>Made with care for skilled professionals across India.</p>
        </div>
      </div>
    </footer>
  );
}