"use client";

import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your Turn-around-time for content delivery?",
    },
    {
      question: "Does Content Whale serve my niche?",
    },
    {
      question:
        "Agencies have problems understanding our business, how can we trust Content Whale?",
    },
    {
      question: "Do you provide Customized or Personalized content?",
    },
    {
      question: "How much does content cost at Content Whale?",
    },

    {
      question: "How can we trust the quality of your content?",
    },
  ];

  const toggleFaq = (index: number) => {};

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-15">
        <div className="flex flex-col items-center gap-11">
          {/* Main Headline */}
          <h2 className="text-5xl font-semibold text-[#434343] text-center leading-[1.253] font-serif max-w-[786px]">
            Content Writing Agency FAQs
          </h2>

          {/* FAQ Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-20 w-full max-w-[1100px] px-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#42175B] border-opacity-50 pb-8"
              >
                <div className="flex items-center justify-between gap-14 cursor-pointer">
                  <h3 className="text-lg font-medium text-[#42175B] leading-[1.2] font-lato flex-1">
                    {faq.question}
                  </h3>
                  <div className="bg-white flex items-center justify-center mr-4">
                    <div className="w-3 h-3">
                      <div>
                        <Image
                          src="/images/dropdown-icon.svg"
                          alt="Dropdown"
                          width={8}
                          height={4}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
