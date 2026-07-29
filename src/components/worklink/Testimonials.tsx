import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./Services";

const items = [
  { name: "Priya Sharma", role: "Homeowner, Pune", rating: 5, text: "Booked an electrician within minutes. He arrived on time, was polite, and fixed everything perfectly. WorkLink made it so easy." },
  { name: "Rahul Mehta", role: "Restaurant Owner, Delhi", rating: 5, text: "The AC technician we booked was highly professional. Verified profiles and reviews gave me full confidence." },
  { name: "Anita Kulkarni", role: "Property Manager, Mumbai", rating: 4, text: "I manage multiple properties and WorkLink has become essential. Reliable plumbers, painters and masons — all in one app." },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="wl-container">
        <SectionHeading eyebrow="Testimonials" title="Loved by Homes & Businesses Alike" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={t.name} className="wl-card-hover relative rounded-2xl border border-border bg-card p-7 shadow-sm">
              <Quote className="absolute top-5 right-5 text-primary/20" size={40} />
              <div className="flex items-center gap-1 text-secondary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} className={s < t.rating ? "fill-current" : "opacity-30"} />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/80 leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className={`grid h-11 w-11 place-items-center rounded-full font-bold text-white ${i % 2 ? "bg-secondary" : "bg-primary"}`}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}