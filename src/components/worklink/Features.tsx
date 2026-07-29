import { ShieldCheck, MapPin, MousePointerClick, Star, Lock, Headphones } from "lucide-react";
import { SectionHeading } from "./Services";

const features = [
  { icon: ShieldCheck, title: "Verified Professionals", desc: "Every worker is identity verified with document checks." },
  { icon: MapPin, title: "Location-Based Matching", desc: "Find skilled workers available near you instantly." },
  { icon: MousePointerClick, title: "Easy Booking", desc: "Book the right professional with a single click." },
  { icon: Star, title: "Ratings & Reviews", desc: "Choose confidently with real customer feedback." },
  { icon: Lock, title: "Secure Platform", desc: "Encrypted communication and safe transactions." },
  { icon: Headphones, title: "Fast Support", desc: "Get quick help whenever you need us — 24/7." },
];

export function Features() {
  return (
    <section id="about" className="bg-muted/40 py-20 md:py-28">
      <div className="wl-container">
        <SectionHeading eyebrow="Why Choose WorkLink" title="Built on Trust, Designed for Convenience" subtitle="A modern service platform crafted to bring reliability, transparency and speed to every booking." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="wl-card-hover rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className={`grid h-12 w-12 place-items-center rounded-xl ${i % 2 ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}>
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}