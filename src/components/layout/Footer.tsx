import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <a href="#">
          <Image
            src="/images/faramour-logo.png"
            alt="Faramour"
            width={120}
            height={22}
            className="brightness-0 invert"
          />
        </a>
        <p>© 2026 Faramour. All rights reserved.</p>
      </div>
    </footer>
  );
}
