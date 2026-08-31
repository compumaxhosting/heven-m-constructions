"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn, staggerContainer } from '../ServiceLayouts';

interface PremiumHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  servingLabel?: string;
  servingLinks?: Array<{ name: string; path: string }>;
}

export function PremiumHero({ badge, title, description, servingLabel = "Serving:", servingLinks }: PremiumHeroProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-64 sm:pb-40 bg-[#F6F4EE]">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="pointer-events-none absolute -top-[10%] -left-[10%] w-[60vw] h-[100%] bg-gradient-to-r from-[#d27d55]/60 via-[#e58a5b]/20 to-transparent blur-[100px]" />
      <div className="pointer-events-none absolute -top-[10%] -right-[10%] w-[60vw] h-[100%] bg-gradient-to-l from-[#8aa87d]/60 via-[#9dbd90]/20 to-transparent blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
          
          <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-forest mb-8">
            <span className="inline-block h-px w-12 bg-forest/40" /> {badge}
          </motion.div>

          <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
            {title}
          </motion.h1>

          <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-10">
            {description}
          </motion.p>
          
          {servingLinks && servingLinks.length > 0 && (
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.2em] text-forest/50 font-medium mr-2">{servingLabel}</span>
              {servingLinks.map((county) => (
                <Link key={county.name}
                  href={county.path}
                  className="group flex items-center gap-2 rounded-full border border-forest/15 bg-white/40 backdrop-blur-sm px-5 py-2.5 text-[14px] font-medium text-forest transition-all hover:bg-forest hover:text-linen hover:border-forest shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(35,53,40,0.15)]"
                >
                  {county.name}
                  <span className="text-terracotta group-hover:text-terracotta transition-transform duration-300 -rotate-45 group-hover:rotate-0 inline-block">→</span>
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
