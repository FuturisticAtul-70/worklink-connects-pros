import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/worklink/Navbar";
import { Hero } from "@/components/worklink/Hero";
import { Stats } from "@/components/worklink/Stats";
import { Services } from "@/components/worklink/Services";
import { Features } from "@/components/worklink/Features";
import { HowItWorks } from "@/components/worklink/HowItWorks";
import { BecomeWorker } from "@/components/worklink/BecomeWorker";
import { Testimonials } from "@/components/worklink/Testimonials";
import { Updates } from "@/components/worklink/Updates";
import { Faq } from "@/components/worklink/Faq";
import { CtaBanner } from "@/components/worklink/CtaBanner";
import { Footer } from "@/components/worklink/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WorkLink — Find Trusted Skilled Workers Near You" },
      {
        name: "description",
        content:
          "WorkLink connects you with verified electricians, plumbers, carpenters, welders, painters and more skilled professionals in your city.",
      },
      { property: "og:title", content: "WorkLink — Skilled Workers, One Click Away" },
      {
        property: "og:description",
        content: "Book verified professionals for homes, businesses, repairs, construction and maintenance.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Features />
        <HowItWorks />
        <BecomeWorker />
        <Testimonials />
        <Updates />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
