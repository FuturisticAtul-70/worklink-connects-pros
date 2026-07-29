import {
  Zap, Droplet, Hammer, Paintbrush, Flame, Wrench, Snowflake, Brick,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Zap, title: "Electrician", desc: "Wiring, repairs, installations & safety checks." },
  { icon: Droplet, title: "Plumber", desc: "Leaks, fittings, drainage and pipeline work." },
  { icon: Hammer, title: "Carpenter", desc: "Furniture, doors, custom woodwork & repairs." },
  { icon: Paintbrush, title: "Painter", desc: "Interior, exterior, textures and finishes." },
  { icon: Flame, title: "Welder", desc: "Metal fabrication, grills, gates & industrial." },
  { icon: Wrench, title: "Mechanic", desc: "Vehicles, appliances and machinery repair." },
  { icon: Snowflake, title: "AC Technician", desc: "Install, service and repair cooling systems." },
  { icon: Brick, title: "Mason", desc: "Brickwork, tiling, plastering and masonry." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="wl-container">
        <SectionHeading eyebrow="Popular Services" title="Book Skilled Professionals in Minutes" subtitle="Explore our most-requested trades. Every worker is background verified and rated by real customers." />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const accent = i % 2 === 0 ? "primary" : "secondary";
            return (
              <div
                key={s.title}
                className="wl-card-hover group rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${
                    accent === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  } group-hover:scale-110 transition-transform`}
                >
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Explore <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow, title, subtitle, light,
}: { eyebrow?: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <span className={`inline-block text-xs font-bold uppercase tracking-widest ${light ? "text-white/80" : "text-primary"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 font-display text-3xl md:text-4xl font-extrabold ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base ${light ? "text-white/80" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
    </div>
  );
}