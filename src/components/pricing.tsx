import React from "react";
import PricingFeature from "./pricingFeature";

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="w-full h-fit py-16 md:py-[72px] md:px-16 lg:p-24 flex flex-col items-center gap-10 md:gap-[72px]"
    >
      <div className="flex items-center flex-col text-center">
        <h1 className="text-[32px] md:text-5xl lg:text-[56px] font-jakarta text-black font-bold px-12 sm:px-0">
          Flexible Plans to Fit Your Needs
        </h1>
        <h4 className="text-base md:text-xl md:pt-2 text-[#555555] max-w-lg lg:max-w-2xl text-center px-8 sm:px-4">
          Whether you are just starting out or have a large subscriber base, we
          have a plan that will meet your email marketing needs and budget.
        </h4>
      </div>
      <div className="h-fit w-full grid grid-cols-1 min-[1224px]:grid-cols-3 gap-8 justify-items-center px-6">
        <div className="relative w-full h-fit text-black">
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
              <button className="text-[#EFECE6] bg-black py-2 rounded-full text-2xl font-jakarta">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit text-[#EFECE6]">
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
                tickcolour="#EFECE6"
              />
              <PricingFeature text="A/B testing" tickcolour="#EFECE6" />
              <PricingFeature
                text="Automated email workflows"
                tickcolour="#EFECE6"
              />
            </div>
            <div className="flex flex-col mt-2">
              <button className="text-black bg-[#EFECE6] py-2 rounded-full text-2xl font-jakarta">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit text-black">
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
              <button className="text-[#EFECE6] bg-black py-2 rounded-full text-2xl font-jakarta">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
