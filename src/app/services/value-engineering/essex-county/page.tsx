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

export default function ValueEngineeringEssexCountyPage() {
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
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Essex County, NJ</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Value Engineering <br />
              in <span className="italic text-terracotta">Essex County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-6">
              Hevan M Constructions provides value engineering in Essex County, NJ, helping construction owners and project teams examine whether a planned approach is the most effective way to achieve the project's goals. Based in Verona, Essex County is part of our core service area.
            </motion.p>

            <motion.p variants={fadeIn} className="text-[16px] sm:text-[17px] leading-[1.7] text-forest-deep/75 font-light">
              We also work with projects throughout the surrounding North Jersey region. Our value engineering approach looks beyond simple cost reduction. We consider function, constructability, materials, installation, durability, schedule, maintenance, and overall project value.
            </motion.p>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- HOW VALUE ENGINEERING HELPS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Principles
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                How Value Engineering <br /><span className="italic text-terracotta">Helps a Project</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Construction decisions often become expensive because they are made sequentially. Value engineering introduces a structured opportunity to question those decisions earlier.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] shadow-sm mt-6 lg:mt-12">
                <div className="flex flex-wrap gap-3 mb-8">
                  {['A material is selected', 'A system is designed around it', 'Installation requirements follow', 'Labor & schedule are established', 'Then a cost problem appears'].map((step, i) => (
                    <div key={i} className="flex items-center gap-2 text-[14px] font-medium text-linen/75 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      <span className="text-terracotta/80">{i+1}.</span> {step}
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/10 pt-8 relative">
                  <div className="absolute -left-2 -top-6 text-[80px] text-terracotta/10 font-display leading-none">"</div>
                  <p className="relative z-10 text-[20px] sm:text-[22px] text-linen font-medium leading-[1.6] italic pl-6 border-l-2 border-terracotta/40">
                    The objective is to determine whether another practical approach can accomplish the same required function more efficiently.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- OUR VALUE ENGINEERING FOCUS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Review Areas
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-6 tracking-[-0.02em]">
              Our Value <span className="italic text-terracotta">Engineering Focus</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-linen/70 font-light mb-16 max-w-2xl">
              Depending on the project, Hevan M Constructions can evaluate:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Materials', desc: 'Are specified materials appropriate for the intended application? Are there alternatives worth comparing?' },
                { title: 'Construction Methods', desc: 'Could a different installation method reduce labor, complexity, or schedule pressure?' },
                { title: 'Design Details', desc: 'Are certain details unnecessarily difficult or expensive to construct?' },
                { title: 'Constructability', desc: 'Can the proposed design be built efficiently under actual site conditions?' },
                { title: 'Life-Cycle Value', desc: 'Would a slightly different initial investment produce better durability or lower maintenance over time?' },
                { title: 'Project Sequencing', desc: 'Could construction sequencing be improved to reduce disruption, labor inefficiency, or schedule risk?' }
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

        {/* --- VERONA & ESSEX COUNTY & NOT CHEAPEST CONSTRUCTION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Value Engineering in <span className="italic text-terracotta">Verona & Essex County</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Essex County contains a broad mix of established communities and development conditions. That makes project-specific analysis particularly important.
            </p>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              A recommendation that works for one building or site may not be appropriate for another. For that reason, Hevan M Constructions does not treat value engineering as a list of predetermined substitutions.
            </p>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
              Recommendations should be connected to the actual project requirements, design, site conditions, and construction objectives.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">
              Value Engineering Is Not <br/><span className="italic text-terracotta">"Cheapest Construction"</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              One of the most important principles of value engineering is that cost and value are not identical.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Removing a component may reduce cost while also reducing performance.',
                'Choosing a cheaper material may increase maintenance.',
                'Changing an installation method may save labor but create scheduling or coordination problems.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1 font-medium text-forest-deep/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-forest/10 pt-6">
              <p className="text-[13px] text-terracotta font-medium tracking-[0.1em] uppercase mb-2">The Better Question Is:</p>
              <p className="text-[18px] text-forest italic font-medium leading-[1.6]">
                "Can the project achieve its required function and performance with a more efficient overall approach?"
              </p>
              <p className="text-[14px] mt-4 text-forest-deep/60">That is the purpose of a meaningful value engineering review.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- WHEN TO BRING IN VALUE ENGINEERING --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              When to Bring in <span className="italic text-terracotta">Value Engineering</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-12">
              For Essex County projects, consider a review when:
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-12">
              {[
                'Preliminary estimates exceed the available budget.',
                'Material selections are unusually expensive.',
                'The design includes complicated construction details.',
                'The owner is comparing alternative systems.',
                'Construction sequencing is difficult.',
                'The project requires scope optimization.',
                'A contractor or project team has identified a potential alternative.',
                'Changes are being considered after bidding or during construction.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/60 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60 flex-shrink-0" />
                  <span className="text-[15px] text-forest-deep/90">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeIn} className="text-center text-[15px] leading-[1.8] text-forest-deep/70 font-medium max-w-3xl mx-auto italic border-t border-forest/10 pt-8">
              New Jersey's public construction framework also recognizes value engineering proposals as alternatives that should achieve cost savings while maintaining required performance, quality, reliability, and safety.
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
              Ready to Discuss <br className="hidden sm:block" /><span className="italic text-terracotta">Your Project?</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Hevan M Constructions brings a construction-oriented perspective to value engineering in Essex County. The goal is to help owners and project teams make better-informed construction decisions before avoidable costs become embedded in the project.</p>
              <p>For value engineering in Verona, Newark, Montclair, Livingston, West Orange, and other Essex County locations, contact Hevan M Constructions to discuss your project requirements.</p>
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