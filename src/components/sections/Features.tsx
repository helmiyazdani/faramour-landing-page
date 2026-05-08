import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section id="syarat-dan-ketentuan" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <SectionLabel className="mb-4 block">Faramour</SectionLabel>
          <h2 className="font-bold text-4xl lg:text-5xl text-charcoal leading-tight">
            Syarat dan Ketentuan
          </h2>
        </div>

        {/* Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/syarat-ketentuan-banner-v2.png"
            alt="Syarat dan Ketentuan Banner"
            width={3880}
            height={1712}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {features.map((f, i) => (
            <div key={f.title} className="flex gap-4">
              <span className="text-sm font-semibold text-muted w-6 shrink-0 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
