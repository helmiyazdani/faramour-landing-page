import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Faramour — Wear Your Story",
  description:
    "Discover premium, sustainable fashion crafted for the modern individual. Exclusive designs, ethical materials, delivered to your door.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} font-sans bg-cream text-charcoal antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
