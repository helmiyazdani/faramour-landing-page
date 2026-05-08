import SectionLabel from "@/components/ui/SectionLabel";
import ProductMockupCard from "@/components/ui/ProductMockupCard";
import Button from "@/components/ui/Button";
import { products } from "@/lib/data";

export default function CollectionShowcase() {
  const [left, center, right] = products;

  return (
    <section
      id="collections"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-showcase relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center text-white mb-16">
          <SectionLabel light className="mb-4 block">
            The Collection
          </SectionLabel>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Discover Your
            <br />
            Next Favorite Look
          </h2>
          <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
            Curated pieces that blend timeless elegance with contemporary edge.
            Something for every mood, every occasion.
          </p>
          <Button variant="white">Browse All Collections</Button>
        </div>

        {/* Floating product cards */}
        <div className="relative flex items-end justify-center gap-4 md:gap-0 h-auto md:h-[500px] flex-wrap md:flex-nowrap">
          {/* Left card */}
          <div className="md:absolute md:left-[8%] lg:left-[15%] md:-translate-y-4 md:-rotate-6 md:opacity-90 drop-shadow-2xl">
            <ProductMockupCard
              image={left.image}
              name={left.name}
              price={left.price}
              tag={left.tag}
            />
          </div>

          {/* Center card */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:scale-110 drop-shadow-2xl z-10">
            <ProductMockupCard
              image={center.image}
              name={center.name}
              price={center.price}
              tag={center.tag}
            />
          </div>

          {/* Right card */}
          <div className="md:absolute md:right-[8%] lg:right-[15%] md:translate-y-4 md:rotate-6 md:opacity-90 drop-shadow-2xl">
            <ProductMockupCard
              image={right.image}
              name={right.name}
              price={right.price}
              tag={right.tag}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
