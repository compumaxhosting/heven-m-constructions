"use client";
import { useRef } from 'react';
import Link from 'next/link';

import img31 from '../../assets/31.webp';
import asset5 from '../../assets/asset-5.webp';
import asset8 from '../../assets/asset-8.webp';

import HeroBackground from './Hero/HeroBackground';
import HeroStats from './Hero/HeroStats';

const HERO_IMG = asset8;
const CLINIC_IMG = img31;
const OFFICE_IMG = asset5;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-48 pb-20 sm:pt-56 sm:pb-36 lg:pt-64"
      style={{
        backgroundColor: '#F6F4EE',
        backgroundImage: [
          'radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.50) 0%, rgba(210,125,85,0.18) 40%, transparent 70%)',
          'radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.45) 0%, rgba(138,168,125,0.15) 40%, transparent 70%)',
          'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)',
        ].join(', '),
      }}
    >
      <HeroBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
            <span className="inline-block h-px w-10 bg-olive/60" />
            Est. 2000 · Construction studio
          </div>

          <div className="font-display col-span-12 text-[clamp(2.5rem,9.5vw,10rem)] leading-[0.92] tracking-[-0.03em] text-forest lg:col-span-9">
            <div className="overflow-hidden py-2 -my-2">
              <div className="origin-bottom-left flex flex-wrap items-center">
                <span>Built</span>
                <span className="mx-3 inline-block align-middle text-clay sm:mx-5">·</span>
                <span className="italic text-terracotta">with</span>
              </div>
            </div>
            <div className="overflow-hidden py-2 -my-2">
              <div className="origin-bottom-left">intention.</div>
            </div>
          </div>

          <div className="col-span-12 flex flex-col justify-start gap-8 lg:col-span-3 lg:pt-0 lg:gap-20">
            <p className="max-w-xs text-[17px] leading-relaxed text-forest-deep">
              Haven M Construction designs and builds refined <span className="italic text-terracotta">residential and commercial</span> spaces
              where craft is quiet and material speaks.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-linen transition-transform hover:scale-[1.03] active:scale-[0.97]">
                Begin a project <span aria-hidden="true">→</span>
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm font-medium text-forest-deep hover:text-forest transition-colors">
                See the work →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8">
            <figure className="relative overflow-hidden rounded-[24px] aspect-[16/9] lg:aspect-[4/3] shadow-[0_32px_80px_-24px_rgba(28,58,42,0.35)] bg-[#1C3A2A]/10">
              <img
                src={(typeof HERO_IMG === 'object' && HERO_IMG !== null ? ((HERO_IMG as any).default?.src || (HERO_IMG as any).src || (HERO_IMG as any).default || HERO_IMG) : HERO_IMG)}
                alt="Sunlit residence interior — Ridgemont Residence"
                className="h-full w-full object-cover origin-center"
              />
            </figure>
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-1">
            <figure className="relative overflow-hidden rounded-[18px] aspect-[4/3] lg:aspect-[4/3] bg-[#1C3A2A]/10">
              <img
                src={(typeof CLINIC_IMG === 'object' && CLINIC_IMG !== null ? ((CLINIC_IMG as any).default?.src || (CLINIC_IMG as any).src || (CLINIC_IMG as any).default || CLINIC_IMG) : CLINIC_IMG)}
                alt="Pine Grove Animal Hospital interior"
                loading="lazy"
                className="h-full w-full object-cover origin-center"
              />
            </figure>
            <figure className="relative overflow-hidden rounded-[18px] aspect-[4/3] lg:aspect-[4/3] bg-[#1C3A2A]/10">
              <img
                src={(typeof OFFICE_IMG === 'object' && OFFICE_IMG !== null ? ((OFFICE_IMG as any).default?.src || (OFFICE_IMG as any).src || (OFFICE_IMG as any).default || OFFICE_IMG) : OFFICE_IMG)}
                alt="Cedar & Stone boutique office interior"
                loading="lazy"
                className="h-full w-full object-cover origin-center"
              />
            </figure>
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}

