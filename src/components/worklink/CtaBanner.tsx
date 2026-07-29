import { ArrowRight, Briefcase } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20">
      <div className="wl-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-10 md:p-16 shadow-2xl">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white">
              Ready to Find the Right Skilled Worker?
            </h2>
            <p className="mt-4 text-white/85 text-base md:text-lg">
              Join millions of Indians already trusting WorkLink for their home and business needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <button className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-md hover:-translate-y-0.5 transition">
                Find Workers <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 hover:-translate-y-0.5 transition">
                <Briefcase size={16} /> Join as Worker
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}