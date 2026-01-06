import Image from "next/image";
import Hero from "./component/hero";
import SocialProof from "./component/socialproof";
import Features from "./component/features";
import HowItWorks from "./component/HowItWorks";
import TemplateShowcase from "./component/template";
import TestimonialMasonry from "./component/testimonial";
import Pricing from "./component/pricing";
import FAQ from "./component/faq";

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen">
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <TemplateShowcase />
      <TestimonialMasonry />
      <Pricing />
      <FAQ />
    </main>
  );
}
