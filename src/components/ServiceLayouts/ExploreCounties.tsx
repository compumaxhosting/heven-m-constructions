"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn, staggerContainer } from '../ServiceLayouts';

export function ExploreCounties({ title, description, counties }: { title: React.ReactNode, description: React.ReactNode, counties: Array<{ name: string; path: string }> }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-[#F6F4EE] rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-20 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-forest/5">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="pointer-events-none absolute top-0 left-0 w-[50%] h-[100%] bg-gradient-to-r from-[#d27d55]/40 via-[#e58a5b]/10 to-transparent blur-[80px]" />
      <div className="pointer-events-none absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#8aa87d]/40 via-[#9dbd90]/10 to-transparent blur-[80px]" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-6">
            <span className="inline-block h-px w-10 bg-terracotta/60" /> Service Areas
          </motion.div>
          <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em] leading-[1.1]">
            {title}
          </motion.h2>
          <motion.div variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light max-w-md">
            {description}
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {counties.map((county) => (
              <Link key={county.name}
                href={county.path}
                className="group relative overflow-hidden rounded-[24px] border border-forest/10 bg-[#F6F4EE]/50 backdrop-blur-sm p-6 transition-all hover:bg-white hover:border-terracotta/30 hover:shadow-[0_8px_30px_rgba(210,125,85,0.08)] flex items-center justify-between"
              >
                <span className="relative z-10 text-[19px] font-display text-forest group-hover:text-terracotta transition-colors">
                  {county.name}
                </span>
                <span className="relative z-10 w-10 h-10 rounded-full border border-forest/15 flex items-center justify-center text-forest/50 group-hover:bg-terracotta group-hover:text-white group-hover:border-terracotta transition-all duration-500 ease-out -rotate-45 group-hover:rotate-0">
                  →
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
