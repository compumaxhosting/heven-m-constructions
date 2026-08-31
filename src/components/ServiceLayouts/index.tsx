"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PremiumHero } from './PremiumHero';
import { ExploreCounties } from './ExploreCounties';

export const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function ServicePageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-[#F6F4EE] min-h-screen selection:bg-terracotta/20 selection:text-forest-deep">
      {children}
    </main>
  );
}

export function IntroSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white py-16 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
        <div className="text-[18px] sm:text-[24px] leading-[1.8] text-forest-deep font-medium">
          {children}
        </div>
      </div>
    </section>
  );
}

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">
      {children}
    </div>
  );
}

export function CinematicCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
      {children}
    </motion.div>
  );
}

export function PremiumCTA({ title, description, linkTo = "/contact", linkText = "Contact Us to Discuss Your Project →" }: { title: React.ReactNode, description: React.ReactNode, linkTo?: string, linkText?: string }) {
  return (
    <section className="bg-forest py-16 sm:py-24 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden mt-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-6 leading-[1.05] tracking-[-0.02em]">
            {title}
          </motion.h2>
          <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
            {description}
          </motion.div>

          <motion.div variants={fadeIn}>
            <Link href={linkTo} className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
              {linkText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export { PremiumHero, ExploreCounties };
