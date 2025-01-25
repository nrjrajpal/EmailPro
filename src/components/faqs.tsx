"use client"

import { useState } from "react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 0,
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. Your service will continue until the end of your current billing period.",
  },
  {
    id: 1,
    question: "Is there a limit to the number of emails I can send per month?",
    answer:
      'There is no limit to the number of emails you can send per month with "Email Pro." Our pricing plans are based on the number of subscribers you have, ensuring that you have the flexibility to send as many emails as needed to engage with your audience effectively.',
  },
  {
    id: 2,
    question: "Can I customize the email templates to match my brand?",
    answer:
      "Yes, all our email templates are fully customizable to match your brand's colors, fonts, and style guidelines.",
  },
  {
    id: 3,
    question: 'How does the A/B testing feature work in "Email Pro"?',
    answer:
      "Our A/B testing feature allows you to test different versions of your emails with a subset of your audience before sending to the full list.",
  },
  {
    id: 4,
    question: "Are there any discounts available for non-profit organizations?",
    answer:
      "Yes, we offer special pricing for qualified non-profit organizations. Please contact our support team for more information.",
  },
  {
    id: 5,
    question: 'Does "Email Pro" offer customer support?',
    answer: "Yes, we provide 24/7 customer support through email and live chat for all our customers.",
  },
]

export default function FAQs() {
  const [expandedId, setExpandedId] = useState<number | null>()

  const toggleQuestion = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div
      id="faqs"
      className="w-screen h-fit py-20 md:py-[72px] md:px-16 lg:p-24 flex flex-col items-center gap-10 md:gap-[72px] bg-black rounded-t-[75px] lg:rounded-t-[100px]"
    >
      <div className="flex items-center flex-col text-center max-w-screen-2xl">
        <h1 className="text-[32px] md:text-5xl lg:text-[56px] leading-9 md:leading-none font-jakarta text-[#EFECE6] font-bold px-12 sm:px-0">
          Frequently Asked Questions
        </h1>
        <h4 className="text-base md:text-xl md:pt-2 text-[#EFECE6] max-w-xl lg:max-w-3xl text-center px-8 sm:px-4">
          Contact our team via <a href="mailto:support@emailpro.com" className="underline">support@email.pro</a> you have other questions
        </h4>
      </div>
      <div className="space-y-4 max-w-screen-2xl mx-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-lg transition-all duration-300 ease-in-out overflow-hidden
                ${expandedId === faq.id ? "bg-[#EFECE6]" : "border-2 border-[#555555] hover:bg-[#222222]"}`}
            >
              <button onClick={() => toggleQuestion(faq.id)} className="w-full text-left p-4 sm:p-6">
                <div className="flex justify-between items-center">
                  <span
                    className={`text-base sm:text-lg font-medium pr-4 sm:pr-8 transition-colors duration-300
                    ${expandedId === faq.id ? "text-black" : "text-white"}`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-5 w-5 transition-all duration-300
                      ${expandedId === faq.id ? "rotate-45 text-black" : "text-white"}`}
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out
                  ${expandedId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 text-gray-700 text-sm sm:text-base">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
