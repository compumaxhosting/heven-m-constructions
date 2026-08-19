import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ValueEngineeringBergenCountyPage() {
  return (
    <main className="bg-[#F6F4EE] min-h-screen selection:bg-terracotta/20 selection:text-forest-deep">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-40 pb-24 sm:pt-64 sm:pb-40 bg-[#F6F4EE]">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-[10%] -left-[10%] w-[60vw] h-[100%] bg-gradient-to-r from-[#d27d55]/60 via-[#e58a5b]/20 to-transparent blur-[100px]" />
        <div className="pointer-events-none absolute -top-[10%] -right-[10%] w-[60vw] h-[100%] bg-gradient-to-l from-[#8aa87d]/60 via-[#9dbd90]/20 to-transparent blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            <motion.div variants={fadeIn} className="mb-6 flex justify-start">
               <Link to="/services/value-engineering" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] hover:bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Bergen County, NJ</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Value Engineering <br />
              in <span className="italic text-terracotta">Bergen County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light">
              Construction projects in Bergen County, New Jersey can involve demanding budgets, limited site conditions, complex designs, and significant coordination between owners, designers, contractors, and suppliers. Hevan M Constructions provides value engineering services in Bergen County to help project teams evaluate practical alternatives before construction decisions become unnecessarily expensive. Our focus is straightforward: find opportunities to improve project value while preserving the function and performance the project requires.
            </motion.p>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- WHAT DOES VALUE ENGINEERING ACCOMPLISH --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Principles
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                What Does Value <br /><span className="italic text-terracotta">Engineering Accomplish?</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Value engineering examines how a project can achieve its intended purpose more efficiently. Rather than asking only, "How can we spend less?", a value engineering review asks:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] shadow-sm mt-6 lg:mt-12">
                <div className="absolute -left-4 -top-4 text-[120px] text-terracotta/10 font-display leading-none">"</div>
                <p className="relative z-10 text-[20px] sm:text-[24px] text-linen font-medium leading-[1.6] italic">
                  What is the most practical way to achieve the required result while balancing cost, quality, constructability, durability, and performance?
                </p>
                <div className="mt-8 pt-8 border-t border-linen/10">
                  <p className="text-[16px] leading-[1.8] text-linen/70 font-light">
                    This distinction is particularly important when an inexpensive alternative may create additional installation, maintenance, or replacement costs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- BERGEN COUNTY CONSTRUCTION VE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Review Areas
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Bergen County <span className="italic text-terracotta">Construction Value Engineering</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Hevan M Constructions can review areas including:
                </motion.p>
                <motion.p variants={fadeIn}>
                  The exact opportunities depend on the project's design, site, specifications, budget, and objectives.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-6">
                {[
                  'Building materials and specifications',
                  'Construction assemblies',
                  'Installation methods',
                  'Constructability',
                  'Project sequencing',
                  'Labor-intensive details',
                  'Material alternatives',
                  'Scope decisions',
                  'Maintenance considerations',
                  'Schedule-related construction decisions'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- CONSTRUCTABILITY MATTERS & WHEN TO BENEFIT --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Constructability */}
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Constructability <span className="italic text-terracotta">Matters</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              A design should not only meet its technical requirements; it should also be practical to build. A constructability review considers whether proposed work can be executed efficiently and safely under actual field conditions.
            </p>
            <h3 className="font-display text-2xl text-forest mb-6">Potential issues can include:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'Difficult access',
                'Installation sequencing',
                'Conflicting building components',
                'Material handling',
                'Limited working space',
                'Excessive labor requirements',
                'Coordination between trades',
                'Construction scheduling'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.8] text-forest-deep/80 font-light italic border-l-2 border-terracotta/30 pl-4 py-1 mt-6">
              NJDOT describes constructability as evaluating whether a design can be effectively and efficiently constructed while meeting overall project objectives.
            </p>
          </motion.div>

          {/* When to benefit */}
          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">
              When Bergen County Owners May <span className="italic text-terracotta">Benefit</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-8">Value engineering can be useful when:</p>
            <div className="space-y-6">
              {[
                { title: 'The project budget is under pressure.', desc: 'A systematic review can identify alternatives before reducing important project functions.' },
                { title: 'A design contains expensive components.', desc: 'Alternative systems or materials may offer comparable performance with different installation or life-cycle costs.' },
                { title: 'Construction appears complicated.', desc: 'A constructability-focused review can uncover potential inefficiencies before they become field problems.' },
                { title: 'The project is still in design.', desc: 'Early decisions generally provide more flexibility than changes made after procurement or construction.' }
              ].map((item, i) => (
                <div key={i} className="pb-6 border-b border-forest/5 last:border-0 last:pb-0">
                  <h4 className="font-medium text-forest text-[17px] mb-2">{item.title}</h4>
                  <p className="text-[15px] text-forest-deep/70 font-light leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- VALUE IS MORE THAN INITIAL PRICE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Value Is More Than <span className="italic text-terracotta">the Initial Price</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-10">
              A lower bid price does not automatically mean better value. A proper comparison may consider:
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 text-left">
              {[
                'Initial construction cost',
                'Installation difficulty',
                'Expected durability',
                'Maintenance',
                'Replacement requirements',
                'Schedule',
                'Labor',
                'Material availability',
                'Operational considerations'
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center text-center p-6 rounded-2xl bg-white/60 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
                  <span className="text-[15px] text-forest-deep font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeIn} className="text-center text-[18px] leading-[1.8] text-forest-deep font-medium max-w-2xl mx-auto border-t border-forest/10 pt-8">
              Hevan M Constructions uses this broader perspective when considering potential construction alternatives.
            </motion.p>
          </div>
        </motion.div>

      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-forest py-16 sm:py-24 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-6 leading-[1.05] tracking-[-0.02em]">
              Value Engineering for <br className="hidden sm:block" /><span className="italic text-terracotta">Bergen County Projects</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Whether the project is being planned, designed, bid, or constructed, value engineering can provide another level of review before decisions become difficult or costly to change. Our Bergen County service is intended for owners and project teams seeking practical construction value—not generic cost-cutting advice.</p>
              <p>If you are evaluating a construction budget, design alternative, material selection, or constructability issue in Bergen County, contact Hevan M Constructions to discuss whether a value engineering review is appropriate for your project.</p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex justify-center">
               <Link to="/services/value-engineering" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-linen/50 hover:text-terracotta transition-colors font-medium bg-[#233528] hover:bg-[#2e4735] px-6 py-3 rounded-full border border-linen/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}