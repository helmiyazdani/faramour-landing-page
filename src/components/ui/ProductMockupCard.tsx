import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductMockupCardProps {
  image: string;
  name: string;
  price: string;
  tag?: string;
  className?: string;
}

export default function ProductMockupCard({
  image,
  name,
  price,
  tag,
  className,
}: ProductMockupCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-2xl p-4 w-48 md:w-56",
        className
      )}
    >
      <div className="relative rounded-xl overflow-hidden h-36 md:h-44 bg-gray-100 mb-3">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      {tag && (
        <span className="text-xs bg-accent/10 text-accent rounded-full px-2 py-0.5">
          {tag}
        </span>
      )}
      <h4 className="font-semibold text-sm mt-1 text-charcoal">{name}</h4>
      <p className="text-accent font-bold text-sm">{price}</p>
    </div>
  );
}
