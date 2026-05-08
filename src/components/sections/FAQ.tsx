"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <SectionLabel className="mb-4 block">Faramour</SectionLabel>
          <h2 className="font-bold text-4xl lg:text-5xl text-charcoal leading-tight">
            FAQ
          </h2>
        </div>

        {/* Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/faq-banner.png"
            alt="FAQ Banner"
            width={3880}
            height={1712}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={f.question}
                className="border border-border rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-charcoal pr-4">
                    {f.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-muted shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-muted leading-relaxed">
                      {f.answer}
                    </p>
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
