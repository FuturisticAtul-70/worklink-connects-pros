import { Search, UserCheck, CalendarCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "./Services";

const steps = [
  { icon: Search, title: "Search Service", desc: "Tell us what you need and where." },
  { icon: UserCheck, title: "Choose Nearby Worker", desc: "Browse verified profiles and ratings." },
  { icon: CalendarCheck, title: "Book Service", desc: "Pick a time that works for you." },
  { icon: Sparkles, title: "Get Work Done", desc: "Sit back — a pro handles the rest." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="wl-container">
        <SectionHeading eyebrow="How WorkLink Works" title="Four Simple Steps to a Job Done Right" />
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" aria-hidden />
          <ol className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="relative text-center">
                  <div className="mx-auto relative grid h-20 w-20 place-items-center rounded-2xl bg-card border border-border shadow-lg">
                    <Icon size={30} className={i % 2 ? "text-secondary" : "text-primary"} />
                    <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold shadow">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[220px] mx-auto">{s.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}