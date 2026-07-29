import { Users, CheckCircle2, MapPin, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, value: 50000, suffix: "+", label: "Registered Workers", color: "text-primary" },
  { icon: CheckCircle2, value: 15000, suffix: "+", label: "Completed Jobs", color: "text-secondary" },
  { icon: MapPin, value: 120, suffix: "+", label: "Cities Covered", color: "text-primary" },
  { icon: Star, value: 4.8, suffix: "★", label: "Average Rating", color: "text-secondary", decimals: 1 },
];

function useCountUp(target: number, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return { ref, display: decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString() };
}

function StatCard({ s }: { s: (typeof stats)[number] }) {
  const { ref, display } = useCountUp(s.value, s.decimals ?? 0);
  const Icon = s.icon;
  return (
    <div
      ref={ref}
      className="wl-card-hover rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
    >
      <div className={`mx-auto grid h-12 w-12 place-items-center rounded-xl bg-muted ${s.color}`}>
        <Icon size={22} />
      </div>
      <div className="mt-4 font-display text-3xl font-extrabold text-foreground">
        {display}
        {s.suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="wl-container -mt-10 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} s={s} />
        ))}
      </div>
    </section>
  );
}