import SectionLabel from "@/components/ui/SectionLabel";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data";

const stats = [
  { value: "12,000+", label: "Happy Customers" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Would Recommend" },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel className="mb-4 block">Testimonials</SectionLabel>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            Loved By Our{" "}
            <em className="text-accent not-italic">Community</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-12 border-t border-border grid grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif font-bold text-3xl lg:text-4xl text-charcoal">
                {s.value}
              </p>
              <p className="text-sm text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
