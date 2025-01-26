"use client";

import FAQs from "@/components/faqs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import TrustedBy from "@/components/trustedBy";
import WhyEmailPro from "@/components/whyemailpro";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  useGSAP(() => {
    const introTL = gsap.timeline();
    introTL
      .set(".hero", { opacity: 1 })
      .fromTo(
        ".heading-word",
        { opacity: 0, y: 40, rotate: 4 },
        { opacity: 1, y: 0, stagger: 0.08, rotate: 0 }
      )
      .fromTo(".email-field", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6})
      .fromTo(".email-field-subtext", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3}, "-=0.4")
      .fromTo(".hero-image", { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 0.4}, "+=0.2")
  });

  return (
    <div className="min-h-screen min-w-fit flex flex-col items-center">
      <div className="h-fit max-w-screen-2xl w-full">
        <Hero />
        <TrustedBy />
        <WhyEmailPro />
        <Pricing />
      </div>
      <FAQs />
      <Footer/>
    </div>
  );
}
