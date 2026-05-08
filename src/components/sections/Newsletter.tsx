"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal text-white">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel light className="mb-4 block">
          Stay In The Loop
        </SectionLabel>
        <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Get Early Access to{" "}
          <em className="text-accent not-italic">New Drops</em>
        </h2>
        <p className="text-white/60 text-lg mb-8">
          Join 10,000+ style-forward subscribers. Be first to know about new
          collections, exclusive offers, and behind-the-scenes moments.
        </p>

        {submitted ? (
          <div className="bg-white/10 rounded-2xl px-8 py-6 inline-block">
            <p className="font-semibold text-white text-lg">You&apos;re on the list!</p>
            <p className="text-white/60 text-sm mt-1">
              We&apos;ll be in touch with the next drop.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
            />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/40">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
