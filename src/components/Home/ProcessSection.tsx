"use client";
import { useRef } from 'react';
import Link from 'next/link';
import { processSteps } from '../../data/siteData';

import asset7 from '../../assets/asset-7.webp';
const BLUEPRINT_IMG = asset7;

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="process" ref={ref} className="mesh-forest grain relative overflow-hidden py-28 text-linen sm:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <img
          src={(typeof BLUEPRINT_IMG === 'object' && BLUEPRINT_IMG !== null ? ((BLUEPRINT_IMG as any).default?.src || (BLUEPRINT_IMG as any).src || (BLUEPRINT_IMG as any).default || BLUEPRINT_IMG) : BLUEPRINT_IMG)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute right-[-10%] top-[10%] w-[46%] rotate-[8deg] rounded-3xl opacity-40 mix-blend-luminosity"
        />
      </div>
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-clay/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <header className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-clay">
            <span className="inline-block h-px w-10 bg-clay/70" />
            03 — Process
          </div>
          <h3 className="font-display col-span-12 text-[clamp(2.4rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] lg:col-span-10">
            Four movements from <span className="italic text-clay">first sketch</span> to final walkthrough.
          </h3>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-[24px] border border-linen/15 bg-linen/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-clay/60"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-clay">{step.num}</div>
              <div className="font-display mt-6 text-4xl">{step.title}</div>
              <div className="mt-4 h-px w-10 bg-linen/30" />
              <p className="mt-4 text-sm leading-relaxed text-linen/75">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-linen/15 pt-8">
          <p className="text-sm text-linen/70 max-w-lg">
            Interested in learning how our unified design-build method eliminates miscommunication and surprises?
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/services/design-build"
              className="inline-flex items-center gap-2 text-sm font-medium text-linen hover:text-clay transition-colors group"
            >
              <span>Explore Design-Build</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
