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

export default function ValueEngineeringPassaicCountyPage() {
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
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Passaic County, NJ</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Value Engineering <br />
              in <span className="italic text-terracotta">Passaic County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-6">
              Every construction dollar should contribute to the project's intended outcome. Hevan M Constructions provides value engineering in Passaic County, NJ for owners and project teams looking for practical ways to evaluate construction costs, materials, methods, constructability, and long-term performance.
            </motion.p>

            <motion.p variants={fadeIn} className="text-[16px] sm:text-[17px] leading-[1.7] text-forest-deep/75 font-light">
              Our goal is not to reduce cost at the expense of quality. It is to determine whether there are better ways to achieve the required project result.
            </motion.p>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- HOW VE CAN IMPROVE A PROJECT --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Review Areas
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-6 tracking-[-0.02em]">
              How Value Engineering <br className="hidden sm:block" /><span className="italic text-terracotta">Can Improve a Project</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-linen/70 font-light mb-16 max-w-2xl">
              A value engineering review may identify opportunities in several areas.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Materials and Products', desc: 'We can evaluate whether specified materials or products have alternatives that deserve consideration based on performance, installation, availability, cost, and expected service life.' },
                { title: 'Construction Methods', desc: 'Different construction methods can have substantially different labor and scheduling requirements.' },
                { title: 'Constructability', desc: 'Plans should be practical to build. Identifying field challenges before construction can help reduce avoidable changes and inefficiencies.' },
                { title: 'Scope', desc: 'Project components can be reviewed to determine whether the specified solution is necessary to achieve the intended function.' },
                { title: 'Life-Cycle Value', desc: 'The lowest initial cost is not always the lowest total cost. Maintenance and replacement should be considered when they materially affect the decision.' },
              ].map((step, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                  <h3 className="font-display text-[22px] text-linen mb-4">{step.title}</h3>
                  <div className="h-px w-10 bg-linen/20 mb-4" />
                  <p className="text-linen/70 text-[14px] leading-[1.7] font-light">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- WHY CONSTRUCTABILITY & HOW WE APPROACH VALUE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Why Constructability Belongs in <span className="italic text-terracotta">Value Engineering</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Value engineering and constructability are closely related but not identical. Value engineering focuses on achieving required functions at better overall value. Constructability focuses on whether the design can be efficiently and effectively constructed.
            </p>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Combining the two perspectives can help identify alternatives that are both financially sensible and practical to build.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep/80 font-light italic border-l-2 border-terracotta/30 pl-4 py-1">
              New Jersey's construction guidance recognizes constructability as an important design consideration and notes that early construction input can help reduce scope changes, conflicts, claims, and delays.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">
              How We Approach <span className="italic text-terracotta">Value</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4">
              Hevan M Constructions does not treat value engineering as a catalog of inexpensive replacements. Instead, alternatives should be evaluated against the project's actual objectives.
            </p>
            <p className="text-[15px] leading-[1.7] text-forest-deep font-medium mb-6">
              A recommendation may be worthwhile if it provides:
            </p>
            
            <div className="space-y-4 mb-6">
              {[
                { primary: 'Lower installed cost', secondary: '+ comparable performance' },
                { primary: 'Better constructability', secondary: '+ reduced schedule pressure' },
                { primary: 'Higher durability', secondary: '+ lower long-term maintenance' }
              ].map((item, i) => (
                <div key={i} className="relative">
                  {i > 0 && <div className="absolute -top-3 left-6 text-[12px] font-medium italic text-forest/40">or:</div>}
                  <div className="flex items-center gap-3 text-[14px] py-1 bg-white/40 border border-forest/5 rounded-xl px-4">
                    <span className="font-medium text-forest-deep">{item.primary}</span>
                    <span className="text-terracotta">{item.secondary}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light italic">
              ...or another measurable combination of benefits. The right solution depends on the project.
            </p>
          </motion.div>
        </motion.div>

        {/* --- WHEN TO CONSIDER VE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              When Should Passaic County Owners <span className="italic text-terracotta">Consider Value Engineering?</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-12">
              A value engineering review can be particularly useful when:
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                'The project budget has increased.',
                'Construction estimates are above expectations.',
                'A design includes expensive or complex assemblies.',
                'Alternative materials are available.',
                'The project has difficult construction sequencing.',
                'Labor requirements are unusually high.',
                'The owner wants to compare competing solutions.',
                'A contractor has proposed an alternative approach.',
                'The project team wants a construction-focused review before proceeding.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-terracotta/60 flex-shrink-0" />
                  <span className="text-[15px] text-forest-deep/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-forest py-16 sm:py-24 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-6 leading-[1.05] tracking-[-0.02em]">
              Ready to Evaluate <br className="hidden sm:block" /><span className="italic text-terracotta">Your Construction Costs?</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Hevan M Constructions serves construction projects throughout Passaic County, including Paterson, Clifton, Wayne, Passaic, West Milford, Little Falls, Totowa, Pompton Lakes, and surrounding communities, depending on project requirements.</p>
              <p>Whether you are still developing a project or already evaluating construction alternatives, a focused value engineering review can provide another perspective before an expensive decision becomes difficult to change.</p>
              <p>For value engineering in Passaic County, NJ, contact Hevan M Constructions to discuss your project's scope, budget, design, and construction objectives.</p>
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