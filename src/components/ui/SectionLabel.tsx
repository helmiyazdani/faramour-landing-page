import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({
  children,
  light,
  className,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "text-xs font-medium tracking-widest uppercase",
        light ? "text-white/70" : "text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
