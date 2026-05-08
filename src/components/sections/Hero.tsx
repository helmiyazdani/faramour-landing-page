import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center bg-cream px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <SectionLabel className="mb-4 block">Faramour</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal leading-[1.05] mb-8">
            Dress that reflects the aspects of ourselves✨
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/faramour.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 text-base shadow-md hover:shadow-lg transition-all duration-200"
            >
              Visit Faramour
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[600px]">
            <Image
              src="/images/hero.png"
              alt="Faramour model wearing new collection"
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
