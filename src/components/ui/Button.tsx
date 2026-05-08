"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-accent hover:bg-accent-dark text-white shadow-md hover:shadow-lg":
            variant === "primary",
          "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white":
            variant === "outline",
          "text-accent hover:underline underline-offset-4 px-0": variant === "ghost",
          "bg-white text-charcoal hover:bg-cream shadow-md hover:shadow-lg":
            variant === "white",
        },
        {
          "px-5 py-2 text-sm": size === "sm",
          "px-8 py-3 text-sm": size === "md",
          "px-10 py-4 text-base": size === "lg",
        },
        variant === "ghost" && "px-0",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
