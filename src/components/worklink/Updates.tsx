import { FileText, ShieldAlert, MapPinned, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "./Services";

const updates = [
  { icon: ShieldAlert, tag: "Announcement", date: "Jul 20, 2026", title: "New Worker Verification Process", desc: "Enhanced multi-step ID and skill verification now live across all cities." },
  { icon: FileText, tag: "Guidelines", date: "Jul 12, 2026", title: "Updated Safety Guidelines", desc: "Read the latest on-site safety protocols for workers and customers." },
  { icon: MapPinned, tag: "Expansion", date: "Jul 05, 2026", title: "20 New Cities Added", desc: "WorkLink is now available in 120+ cities across the country." },
  { icon: Sparkles, tag: "Platform", date: "Jun 28, 2026", title: "Faster Booking Experience", desc: "Redesigned booking flow reduces time-to-hire by 40%." },
];

export function Updates() {
  return (
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="wl-container">
        <SectionHeading eyebrow="Latest Updates" title="News, Guidelines & Announcements" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {updates.map((u) => {
            const Icon = u.icon;
            return (
              <article key={u.title} className="wl-card-hover flex flex-col rounded-2xl border-l-4 border-primary bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                    <Icon size={12} /> {u.tag}
                  </span>
                  <span className="text-muted-foreground">{u.date}</span>
                </div>
                <h3 className="mt-4 font-display font-bold text-foreground">{u.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{u.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Read more <ArrowRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}