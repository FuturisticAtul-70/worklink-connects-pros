import { ArrowRight, CheckCircle2 } from "lucide-react";
import img from "@/assets/become-worker.jpg";

const perks = [
  "Grow your customer base",
  "Set your own schedule",
  "Secure & timely payments",
  "Free professional profile",
];

export function BecomeWorker() {
  return (
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="wl-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-secondary/30 to-primary/30 blur-2xl" aria-hidden />
          <img
            src={img}
            alt="Team of skilled workers"
            width={1200}
            height={1000}
            loading="lazy"
            className="relative rounded-3xl shadow-2xl w-full"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary">
            Join The Network
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-foreground">
            Become a <span className="text-primary">WorkLink</span> Professional
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of skilled professionals and grow your career by connecting
            with customers in your area.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={18} className="text-secondary shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:-translate-y-0.5 transition">
            Register as Worker <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}