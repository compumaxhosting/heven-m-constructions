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

export default function ValueEngineeringPage() {
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
            
            <h1 className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Value Engineering <br />
              in <span className="italic text-terracotta">Verona, NJ</span>
            </h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-10">
              When construction costs, design decisions, material selections, or project requirements need closer evaluation, value engineering can help owners make better decisions before unnecessary costs become part of the project.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.2em] text-forest/50 font-medium mr-2">Serving:</span>
              {[
                { name: 'Bergen', path: '/value-engineering-bergen-county-nj' },
                { name: 'Essex', path: '/value-engineering-essex-county-nj' },
                { name: 'Morris', path: '/value-engineering-morris-county-nj' },
                { name: 'Passaic', path: '/value-engineering-passaic-county-nj' },
                { name: 'Union', path: '/value-engineering-union-county-nj' },
              ].map((county) => (
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

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- WHAT IS VALUE ENGINEERING --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Capabilities
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                What Is Value <br /><span className="italic text-terracotta">Engineering?</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Value engineering is a structured review of a construction project to determine whether there are better ways to achieve the required result.
                </motion.p>
                <motion.p variants={fadeIn}>
                  The goal is not simply to choose the cheapest option. A lower initial price can create higher maintenance costs, shorter service life, installation problems, or performance issues. Effective value engineering considers the relationship between cost, function, quality, constructability, durability, and long-term value.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Materials and assemblies',
                  'Construction methods',
                  'Design alternatives',
                  'Building systems',
                  'Project sequencing',
                  'Constructability',
                  'Labor and installation requirements',
                  'Long-term maintenance considerations',
                  'Schedule implications',
                  'Overall project cost'
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

        {/* --- VALUE ENGINEERING VS CUTTING COSTS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
              Value Engineering vs. <span className="italic text-terracotta">Cutting Costs</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light">
              <p>Value engineering is not synonymous with removing features or selecting inexpensive materials. A useful value engineering recommendation should answer three questions:</p>
              <ul className="text-left max-w-xl mx-auto space-y-4 mt-6 mb-8">
                <li className="flex gap-4"><span className="text-terracotta font-medium">1.</span> Does the alternative perform the required function?</li>
                <li className="flex gap-4"><span className="text-terracotta font-medium">2.</span> Does it maintain acceptable quality, safety, durability, and compliance?</li>
                <li className="flex gap-4"><span className="text-terracotta font-medium">3.</span> Does it create meaningful overall value?</li>
              </ul>
              <p>This distinction matters because a decision that reduces the construction budget but creates additional maintenance, replacement, installation, or operational costs may not represent genuine value.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- WHY EARLY? --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Why Consider Value <span className="italic text-terracotta">Engineering Early?</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              The earlier value engineering is incorporated, the more opportunities a project team generally has to consider alternatives. Changes made during early planning or design can often be easier to implement than changes after materials have been purchased, contracts have been awarded, or construction has begun.
            </p>
            <h3 className="font-display text-2xl text-forest mb-6">Why Haven M Construction?</h3>
            <p className="text-[16px] leading-[1.8] text-forest-deep/80 font-light">
              Haven M Construction approaches value engineering from a construction-focused perspective. The objective is to identify practical opportunities rather than recommend theoretical changes that are difficult to implement in the field. Our review considers the relationship between design intent and actual construction—including materials, labor, sequencing, access, installation, durability, and long-term performance.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">When Should You Request a Review?</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-8">Consider value engineering when:</p>
            <div className="grid grid-cols-1 gap-y-4">
              {[
                'A project estimate is higher than expected.',
                'Material costs are putting pressure on the budget.',
                'A design is difficult or expensive to construct.',
                'You are comparing multiple construction systems.',
                'The project schedule is becoming a concern.',
                'You want to evaluate alternatives before construction begins.',
                'You are reviewing proposed changes during construction.',
                'Long-term maintenance costs are important to the owner.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- SERVICES (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Value Engineering
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
              Services in Verona and <span className="italic text-terracotta">North Jersey</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Design and Material Alternatives', desc: 'We review whether proposed materials, systems, or assemblies have practical alternatives that can provide the required performance at a more favorable overall value.' },
                { title: 'Constructability Review', desc: 'A design may look efficient on paper but create challenges during construction. Early constructability review can identify installation conflicts, sequencing concerns, access issues, or other conditions that may increase cost or delay.' },
                { title: 'Cost-Conscious Construction Planning', desc: 'Value engineering can help owners and project teams understand where construction resources are being allocated and where alternative approaches may make better financial sense.' },
                { title: 'Scope and System Evaluation', desc: 'Individual components of a project can be reviewed to determine whether the specified approach is necessary to achieve the intended result.' },
                { title: 'Life-Cycle Considerations', desc: 'The best choice is not always the least expensive option at the beginning. Durability, maintenance, replacement requirements, energy use, and expected service life can all influence true project value.' },
              ].map((step, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Service 0{i + 1}</div>
                  <h3 className="font-display text-[22px] text-linen mb-4">{step.title}</h3>
                  <div className="h-px w-10 bg-linen/20 mb-4" />
                  <p className="text-linen/70 text-[14px] leading-[1.7] font-light">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- EXPLORE BY COUNTY --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-[#F6F4EE] rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-20 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-forest/5">
          {/* Architectural Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          {/* Side Gradients */}
          <div className="pointer-events-none absolute top-0 left-0 w-[50%] h-[100%] bg-gradient-to-r from-[#d27d55]/40 via-[#e58a5b]/10 to-transparent blur-[80px]" />
          <div className="pointer-events-none absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#8aa87d]/40 via-[#9dbd90]/10 to-transparent blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-6">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Service Areas
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em] leading-[1.1]">
                Serving Five <br /><span className="italic text-terracotta">North Jersey Counties</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light max-w-md">
                Haven M Construction provides value engineering support in Verona and throughout Bergen, Essex, Morris, Union, and Passaic counties in New Jersey. Each market presents different project conditions. A value engineering review should therefore consider the actual building, site, design, scope, schedule, and objectives rather than relying on generic cost-cutting recommendations.
              </motion.p>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Bergen County', path: '/value-engineering-bergen-county-nj' },
                  { name: 'Essex County', path: '/value-engineering-essex-county-nj' },
                  { name: 'Morris County', path: '/value-engineering-morris-county-nj' },
                  { name: 'Union County', path: '/value-engineering-union-county-nj' },
                  { name: 'Passaic County', path: '/value-engineering-passaic-county-nj' },
                ].map((county) => (
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

      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-forest py-16 sm:py-24 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-6 leading-[1.05] tracking-[-0.02em]">
              Determine Your <br className="hidden sm:block" /><span className="italic text-terracotta">Project's True Value</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Looking for value engineering in Verona, NJ or elsewhere in North Jersey? Contact Haven M Construction to discuss your project and determine whether a value engineering review could improve its overall value.</p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex flex-col items-center gap-4 text-linen/40 text-[14px]">
               <p className="font-medium text-linen/80">Haven M Construction</p>
               <p>Verona, New Jersey</p>
               <p className="italic">Serving Bergen, Essex, Morris, Union & Passaic Counties</p>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8 flex justify-center">
               <Link to="/services" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-linen/50 hover:text-terracotta transition-colors font-medium bg-[#233528] hover:bg-[#2e4735] px-6 py-3 rounded-full border border-linen/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to All Services
               </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}