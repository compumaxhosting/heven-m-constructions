"use client";
import Link from 'next/link';

export default function PortfolioCTA() {
  return (
    <section className="mesh-warm py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
        <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.02em] text-forest mb-6">
          Tell us about your{" "}
          <span className="italic text-terracotta">project</span>.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.02]"
        >
          Begin a project →
        </Link>
      </div>
    </section>
  );
}
