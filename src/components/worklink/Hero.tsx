import { Search, MapPin, ArrowRight, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-workers.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" aria-hidden />

      <div className="wl-container relative grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div className="animate-wl-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Trusted by 50,000+ workers nationwide
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Find Trusted Skilled <span className="text-primary">Workers</span>{" "}
            <span className="text-secondary">Near You</span>
          </h1>
          <p className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground">
            Book verified professionals for homes, businesses, repairs, construction,
            maintenance, and industrial work — all in one place.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-white/70 backdrop-blur-md p-3 shadow-xl">
            <div className="grid gap-2 md:grid-cols-[1fr_auto_auto] md:items-center">
              <div className="flex items-center gap-2 rounded-xl bg-muted/60 px-4 py-3">
                <Search size={18} className="text-primary shrink-0" />
                <input
                  className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                  placeholder="Search services (Electrician, Plumber...)"
                />
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-muted/60 px-4 py-3">
                <MapPin size={18} className="text-secondary shrink-0" />
                <select className="bg-transparent outline-none text-sm text-foreground/80">
                  <option>All Locations</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bengaluru</option>
                  <option>Chennai</option>
                </select>
              </div>
              <button className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 hover:-translate-y-0.5 transition inline-flex items-center justify-center gap-2">
                Find Workers <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border-2 border-secondary bg-white px-5 py-3 text-sm font-semibold text-secondary hover:bg-secondary hover:text-secondary-foreground transition">
              <Briefcase size={16} /> Become a Worker
            </button>
            <span className="text-xs text-muted-foreground self-center">
              ✓ Free registration &nbsp; ✓ Verified profiles
            </span>
          </div>
        </div>

        <div className="relative animate-wl-fade-up">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl" aria-hidden />
          <img
            src={heroImage}
            alt="Skilled workers: electricians, plumbers, carpenters and more"
            width={1600}
            height={1200}
            className="relative rounded-3xl shadow-2xl w-full object-cover animate-wl-float"
          />
        </div>
      </div>
    </section>
  );
}