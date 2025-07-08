"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);
import PricingFeature from "./pricingFeature";

export default function Pricing() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    // Animate heading
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    // Animate subheading
    gsap.from(subheadingRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: 0.55,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    // Animate cards (each card triggers individually as it enters viewport)
    if (cardsRef.current) {
      const cardElements = cardsRef.current.querySelectorAll(".pricing-card");
      cardElements.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.85,
          y: 40,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      id="pricing"
      className="w-full h-fit py-16 md:py-[72px] md:px-16 lg:p-24 flex flex-col items-center gap-10 md:gap-[72px]"
    >
      <div className="flex items-center flex-col text-center">
        <h1
          ref={headingRef}
          className="text-[32px] md:text-5xl lg:text-[56px] font-jakarta text-black font-bold px-12 sm:px-0"
        >
          Flexible Plans to Fit Your Needs
        </h1>
        <h4
          ref={subheadingRef}
          className="text-base md:text-xl md:pt-2 text-[#555555] max-w-lg lg:max-w-2xl text-center px-8 sm:px-4"
        >
          Whether you are just starting out or have a large subscriber base, we
          have a plan that will meet your email marketing needs and budget.
        </h4>
      </div>
      <div
        ref={cardsRef}
        className="h-fit w-full grid grid-cols-1 min-[1224px]:grid-cols-3 gap-8 justify-items-center px-6"
      >
        <div className="pricing-card relative w-full h-fit text-black">
          <div className="absolute bg-black rounded-xl px-4 py-1 flex items-center right-4 top-5">
            <h2 className="text-base min-[1400px]:text-xl text-[#EFECE6]">Free 7-day trial</h2>
          </div>
          <div className="w-full h-full rounded-2xl absolute bg-black gap -z-10 inset-[10px]"></div>
          <div className="bg-[#EFECE6] border border-black w-full h-fit rounded-2xl flex flex-col p-10 gap-4">
            <h2 className="text-2xl">Starter plan</h2>
            <div className="flex items-end gap-2">
              <h1 className="font-extrabold text-5xl">$19.00</h1>
              <h1 className="text-xl text-[#555555]">/month</h1>
            </div>
            <div className="flex flex-col gap-4 text-[#555555] mt-2 sm:mt-4">
              <h2 className="text-2xl font-semibold text-black">Includes:</h2>
              <PricingFeature
                text="Up to 1,000 subscribers"
                tickcolour="#101214"
              />
              <PricingFeature
                text="5,000 emails per month"
                tickcolour="#101214"
              />
              <PricingFeature
                text="Drag-and-drop email editor"
                tickcolour="#101214"
              />
              <PricingFeature
                text="Customizable email templates"
                tickcolour="#101214"
              />
              <PricingFeature
                text="Basic reporting and analytics"
                tickcolour="#101214"
              />
            </div>
            <div className="flex flex-col mt-2">
              <button className="text-[#EFECE6] bg-black py-2 rounded-full text-2xl font-jakarta hover:bg-slate-700 border-4 border-black transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="pricing-card relative w-full h-fit text-[#EFECE6]">
          <div className="absolute bg-[#EFECE6] rounded-xl px-4 p-1 flex items-center right-4 top-5">
            <h2 className="text-base min-[1400px]:text-xl text-black">Most popular</h2>
          </div>
          <div className="w-full h-full rounded-2xl absolute bg-[#555555] gap -z-10 inset-[10px]"></div>
          <div className="bg-black border border-black w-full h-fit rounded-2xl flex flex-col p-10 gap-4">
            <h2 className="text-2xl">Pro plan</h2>
            <div className="flex items-end gap-2">
              <h1 className="font-extrabold text-5xl">$49.00</h1>
              <h1 className="text-xl text-[#CCCCCC]">/month</h1>
            </div>
            <div className="flex flex-col gap-4 text-[#DDDDDD] mt-2 sm:mt-4">
              <h2 className="text-2xl font-semibold text-[#EFECE6]">
                Includes:
              </h2>
              <PricingFeature
                text="Up to 5,000 subscribers"
                tickcolour="#EFECE6"
              />
              <PricingFeature
                text="25,000 emails per month"
                tickcolour="#EFECE6"
              />
              <PricingFeature
                text="Drag-and-drop email editor"
                tickcolour="#EFECE6"
              />
              <PricingFeature
                text="Customizable email templates"
                tickcolour="#EFECE6"
              />
              <PricingFeature
                text="Advanced reporting and analytics"
                tickcolour="#EFECE6" />
              <PricingFeature text="A/B testing" tickcolour="#EFECE6" />
              <PricingFeature
                text="Automated email workflows"
                tickcolour="#EFECE6"
              />
            </div>
            <div className="flex flex-col mt-2">
              <button className="text-black bg-[#EFECE6] py-2 rounded-full text-2xl font-jakarta hover:bg-[#EFECE6]/85 border-4 border-[#EFECE6] transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="pricing-card relative w-full h-fit text-black">
          <div className="w-full h-full rounded-2xl absolute bg-black gap -z-10 inset-[10px]"></div>
          <div className="bg-[#EFECE6] border border-black w-full h-fit rounded-2xl flex flex-col p-10 gap-4">
            <h2 className="text-2xl">Enterprise Plan</h2>
            <h1 className="font-extrabold text-5xl">Contact Sales</h1>
            <div className="flex flex-col gap-4 text-[#555555] mt-2">
              <h2 className="text-2xl font-semibold text-black">Includes:</h2>
              <PricingFeature text="Custom subscribers" tickcolour="#101214" />
              <PricingFeature
                text="Custmo emails per month"
                tickcolour="#101214"
              />
              <PricingFeature
                text="Drag-and-drop email editor"
                tickcolour="#101214"
              />
              <PricingFeature
                text="Customizable email templates"
                tickcolour="#101214"
              />
              <PricingFeature
                text="Advanced reporting and analytics"
                tickcolour="#101214"
              />
              <PricingFeature text="A/B testing" tickcolour="#101214" />
              <PricingFeature
                text="Automated email workflows"
                tickcolour="#101214"
              />
              <PricingFeature
                text="Dedicated account manager"
                tickcolour="#101214"
              />
              <PricingFeature text="Custom integrations" tickcolour="#101214" />
            </div>
            <div className="flex flex-col mt-2">
              <button className="text-[#EFECE6] bg-black py-2 rounded-full text-2xl font-jakarta hover:bg-slate-700 border-4 border-black transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
