import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./Services";

const faqs = [
  { q: "How do I hire a worker?", a: "Search for the service you need, browse nearby verified workers, view their ratings and profile, then book with a single click. You'll get a confirmation and contact details immediately." },
  { q: "How are workers verified?", a: "Every worker undergoes government-ID verification, address verification, and a skill/reference check before their profile becomes active on WorkLink." },
  { q: "How can I become a worker?", a: "Click 'Become a Worker', complete your profile with your skills and documents, and once verified you'll start receiving job requests in your area." },
  { q: "Is registration free?", a: "Yes, registration is completely free for both customers and workers. We only charge a small service fee on successfully completed bookings." },
  { q: "Can I rate workers?", a: "Absolutely. After every completed job you can leave a rating and review to help other customers make informed decisions." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="wl-container max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display font-semibold text-foreground">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-secondary text-secondary-foreground rotate-180" : "bg-primary/10 text-primary"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-wl-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}