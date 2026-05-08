"use client";

import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";
import GradientText from "@/components/ui/GradientText";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center bg-cream px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <SectionLabel className="mb-4 block">Faramour</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal leading-[1.05] mb-8">
            <TextGenerateEffect
              words="Dress that reflects the aspects of"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-charcoal"
              duration={0.5}
              staggerDelay={0.15}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.3 }}
            >
              <GradientText
                text="ourselves✨"
                gradient="linear-gradient(90deg, #c9a96e 0%, #f0d5a0 25%, #e8b86d 50%, #f0d5a0 75%, #c9a96e 100%)"
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
              />
            </motion.span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/faramour.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 text-base shadow-md hover:shadow-lg transition-all duration-200"
            >
              Visit Faramour
            </a>
          </div>
        </div>

        {/* Video */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[600px]">
            <video
              src="/images/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
