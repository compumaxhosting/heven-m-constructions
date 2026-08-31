"use client";
import { useRef } from 'react';
import Link from 'next/link';
import { pillars } from '../../data/siteData';

import asset6 from '../../assets/asset-6.webp';
const CRAFT_IMG = asset6;

export default function PracticeSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="practice" ref={ref} className="relative overflow-hidden bg-linen py-28 sm:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-6 px-4 sm:px-8">

        <div className="col-span-1 lg:col-span-5">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
            <img
              src={(typeof CRAFT_IMG === 'object' && CRAFT_IMG !== null ? ((CRAFT_IMG as any).default?.src || (CRAFT_IMG as any).src || (CRAFT_IMG as any).default || CRAFT_IMG) : CRAFT_IMG)}
              alt="Craftsman shaping fine woodwork by hand"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4 glass-dark rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-linen">
              The Practice
            </div>
          </figure>
        </div>

        <div className="col-span-1 lg:col-span-7 lg:pl-10">
          <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
            <span className="inline-block h-px w-10 bg-olive/60" />
            01 — Our practice
          </div>

          <h2 className="font-display text-[clamp(2.4rem,2.6vw,5rem)] leading-[0.98] tracking-[-0.02em] text-forest">
            A quieter kind of construction — where{' '}
            <span className="italic text-terracotta">material</span>, light, and use are considered{' '}
            <span className="italic text-teal">together</span>.
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group relative rounded-2xl border border-forest/10 bg-card p-6 transition-colors hover:border-clay/60"
              >
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-clay">{pillar.num}</div>
                <div className="font-display text-xl text-forest">{pillar.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-forest-deep">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-forest/10">
            <span className="text-sm text-forest-deep">Built with intention across every discipline.</span>
            <Link href="/services" className="inline-flex items-center gap-2 font-medium text-sm text-forest hover:text-terracotta transition-colors group">
              <span>Explore all services</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
