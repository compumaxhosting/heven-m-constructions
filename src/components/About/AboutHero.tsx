"use client";
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from './animationVariants';
import asset4 from '../../assets/asset-4.webp';

export default function AboutHero() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-44 pb-24 sm:pt-52 sm:pb-32"
        style={{
          backgroundColor: '#F6F4EE',
          backgroundImage: [
            'radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.50) 0%, rgba(210,125,85,0.18) 40%, transparent 70%)',
            'radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.45) 0%, rgba(138,168,125,0.15) 40%, transparent 70%)',
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)',
          ].join(', '),
        }}
      >
        <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />
        <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply" />
        
        <motion.div 
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive mb-8">
                <span className="inline-block h-px w-10 bg-olive/60" /> About the Practice
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-display text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.03em] text-forest">
                A studio dedicated to the <span className="italic text-terracotta">art of making.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-8 text-lg leading-relaxed text-forest-deep max-w-md">
                Haven M Construction was founded in 2000 to blur the line between design and construction. We believe that when architects and craftspeople work as one, the spaces they create become timeless. We are a unified studio of 42 artisans based in Verona, New Jersey.
              </motion.p>
            </div>
            
            <motion.div variants={scaleIn} className="lg:col-span-6">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-2xl shadow-forest/10">
                <div className="absolute inset-0 bg-forest/5 z-10 pointer-events-none mix-blend-multiply" />
                <img src={(typeof asset4 === 'object' && asset4 !== null ? ((asset4 as any).default?.src || (asset4 as any).src || (asset4 as any).default || asset4) : asset4)} alt="Automart building" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
              </figure>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </>
  );
}
