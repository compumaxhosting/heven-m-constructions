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

export default function ValueEngineeringMorrisCountyPage() {
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
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Morris County, NJ</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Value Engineering <br />
              in <span className="italic text-terracotta">Morris County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-6">
              A successful construction project is not simply one that comes in under budget. It should also deliver the required function, quality, durability, and performance. Hevan M Constructions provides value engineering in Morris County, NJ to help owners and project teams evaluate construction decisions with those objectives in mind.
            </motion.p>

            <motion.p variants={fadeIn} className="text-[16px] sm:text-[17px] leading-[1.7] text-forest-deep/75 font-light">
              Our approach focuses on identifying practical alternatives that may improve cost efficiency, constructability, schedule, material selection, and long-term value.
            </motion.p>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- WHAT WE REVIEW --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Review Areas
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-6 tracking-[-0.02em]">
              What We <span className="italic text-terracotta">Review</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-linen/70 font-light mb-16 max-w-2xl">
              A value engineering review can examine different parts of a project depending on its stage and requirements.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Design Efficiency', desc: 'We look at whether proposed design solutions are practical and appropriately aligned with the project\'s intended use.' },
                { title: 'Material Selection', desc: 'Different products can have different purchase prices, installation requirements, service lives, and maintenance needs. Those factors should be evaluated together.' },
                { title: 'Constructability', desc: 'Construction experience can reveal potential issues that are not obvious from plans alone.' },
                { title: 'Installation', desc: 'A technically suitable component may still require excessive labor, specialized installation, difficult access, or complicated sequencing.' },
                { title: 'Long-Term Costs', desc: 'Initial construction cost is only one part of the financial picture. Maintenance, repair, replacement, and operating considerations may influence the better choice.' },
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

        {/* --- WHY EARLY VE MATTERS & PRACTICAL APPROACH --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Why Early Value <span className="italic text-terracotta">Engineering Matters</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Value engineering tends to be most useful when project decisions still have flexibility. During early planning and design, the project team can compare alternatives before significant procurement and construction commitments are made.
            </p>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Later in the project, value engineering may still identify opportunities, but the range of practical changes can become narrower.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep/80 font-light italic border-l-2 border-terracotta/30 pl-4 py-1">
              This is consistent with New Jersey's constructability guidance, which emphasizes involving construction knowledge early enough to influence alternatives before significant design costs have been incurred.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">
              A Practical Approach to <br/><span className="italic text-terracotta">Morris County Construction</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4">
              Morris County projects can vary considerably in size, scope, property conditions, and construction requirements. That is why Hevan M Constructions approaches each value engineering assignment according to the specific project, rather than applying a generic checklist of substitutions.
            </p>
            <p className="text-[15px] leading-[1.7] text-forest-deep font-medium mb-4">
              A useful recommendation should explain:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-4">
              {[
                'What is being changed',
                'Why the change is being considered',
                'How it affects construction',
                'Whether the required function is maintained',
                'Potential cost implications',
                'Potential schedule implications',
                'Potential maintenance or durability implications',
                'What should be reviewed before implementation'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1 font-medium text-forest-deep/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- VALUE ENGINEERING & CONSTRUCTION RISK --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Value Engineering and <span className="italic text-terracotta">Construction Risk</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep/80 font-light max-w-2xl mx-auto mb-10">
              Good value engineering can also support risk reduction. A proposed alternative may look less expensive but introduce:
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 text-left">
              {[
                'Additional coordination',
                'Longer lead times',
                'Difficult installation',
                'Greater maintenance requirements',
                'Procurement uncertainty',
                'Scheduling challenges'
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center text-center p-6 rounded-2xl bg-white/60 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
                  <span className="text-[15px] text-forest-deep font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeIn} className="text-center text-[18px] leading-[1.8] text-forest-deep font-medium max-w-2xl mx-auto border-t border-forest/10 pt-8">
              Considering these factors helps project teams avoid decisions based solely on an initial price difference.
            </motion.p>
          </div>
        </motion.div>

        {/* --- WHEN TO REQUEST A REVIEW --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              When to Request a <span className="italic text-terracotta">Morris County Review</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
              A review may be worthwhile if:
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              'Construction estimates have increased.',
              'The owner wants alternatives before finalizing the design.',
              'A material or system has a high installed cost.',
              'Constructability is a concern.',
              'The project schedule is tight.',
              'A contractor has identified a potentially better method.',
              'The team wants to compare initial cost against long-term value.'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/40 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-terracotta/60 flex-shrink-0" />
                <span className="text-[15px] text-forest-deep/90 leading-relaxed">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-forest py-16 sm:py-24 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-6 leading-[1.05] tracking-[-0.02em]">
              Value Engineering in <br className="hidden sm:block" /><span className="italic text-terracotta">Morris County, NJ</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Hevan M Constructions helps Morris County owners and construction teams look for measurable, practical improvements rather than superficial cost reductions.</p>
              <p>If you are planning a construction project in Morris County and want an independent construction-focused perspective on value, materials, constructability, or project efficiency, contact Hevan M Constructions.</p>
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