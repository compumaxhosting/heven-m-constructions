import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      {/* Ambient Glows */}
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
                <Link
                  key={county.name}
                  to={county.path}
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

export function ExploreCounties({ title, description, counties }: { title: React.ReactNode, description: React.ReactNode, counties: Array<{ name: string; path: string }> }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-[#F6F4EE] rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-20 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-forest/5">
      {/* Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      {/* Side Gradients Matching Hero */}
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
              <Link
                key={county.name}
                to={county.path}
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
            <Link to={linkTo} className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
              {linkText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}