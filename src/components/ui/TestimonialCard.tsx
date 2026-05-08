import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

export default function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating,
}: Testimonial) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-muted leading-relaxed mb-6 text-sm">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
          <Image src={avatar} alt={author} fill className="object-cover" />
        </div>
        <div>
          <p className="font-semibold text-sm text-charcoal">{author}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}
