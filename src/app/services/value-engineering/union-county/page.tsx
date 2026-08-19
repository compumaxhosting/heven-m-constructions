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

export default function ValueEngineeringUnionCountyPage() {
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
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Union County, NJ</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Value Engineering <br />
              in <span className="italic text-terracotta">Union County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-6">
              Construction budgets can change quickly when material selections, labor requirements, design complexity, and site conditions interact. Hevan M Constructions provides value engineering in Union County, NJ to help project owners and construction teams identify practical ways to improve project value while maintaining the required result.
            </motion.p>

            <motion.p variants={fadeIn} className="text-[16px] sm:text-[18px] leading-[1.8] text-forest-deep/80 font-light italic border-t border-forest/10 pt-4">
              The emphasis is on better construction decisions—not simply lower prices.
            </motion.p>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- WHAT IS INCLUDED IN A REVIEW --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Review Areas
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                What Is Included in a <span className="italic text-terracotta">Value Engineering Review?</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-linen/70 font-light mb-8">
                Value engineering can involve a detailed review of the relationship between the project's requirements and the way those requirements are being delivered. Depending on the project, that may include:
              </motion.p>
              <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                Every recommendation should be evaluated against the project's actual specifications and performance requirements.
              </motion.p>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4 lg:mt-6">
                {[
                  'Design alternatives',
                  'Material substitutions',
                  'Construction assemblies',
                  'Installation methods',
                  'Labor requirements',
                  'Constructability',
                  'Project sequencing',
                  'Procurement considerations',
                  'Maintenance',
                  'Durability',
                  'Schedule',
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

        {/* --- CONSTRUCTION VE & DIFFERENCE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Construction Value Engineering in <span className="italic text-terracotta">Union County</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              A construction alternative should make sense in the real world.
            </p>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              For example, changing a specified material may reduce its purchase price but increase installation labor. A different system might install faster but have a higher maintenance requirement. Another alternative may reduce both cost and installation complexity while maintaining the required performance.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep font-medium italic border-l-2 border-terracotta/30 pl-4 py-1">
              Value engineering is about identifying these trade-offs.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">
              The Difference Between Cost Cutting and <span className="italic text-terracotta">Value Engineering</span>
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white/40 p-5 rounded-xl border border-forest/5">
                <p className="text-[13px] text-terracotta font-medium tracking-[0.1em] uppercase mb-2">Cost cutting asks:</p>
                <p className="text-[16px] text-forest-deep italic leading-[1.6]">"How can the project cost less?"</p>
              </div>
              <div className="bg-white/40 p-5 rounded-xl border border-forest/5">
                <p className="text-[13px] text-forest/60 font-medium tracking-[0.1em] uppercase mb-2">Value engineering asks:</p>
                <p className="text-[16px] text-forest italic font-medium leading-[1.6]">"How can the project achieve its required function and performance more efficiently?"</p>
              </div>
            </div>

            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              That distinction protects the owner from changes that appear inexpensive initially but create problems later.
            </p>

            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light italic border-t border-forest/10 pt-6">
              NJDOT's value engineering guidance similarly focuses on improving value through cost, constructability, and other project considerations while maintaining the basic functional requirements.
            </p>
          </motion.div>
        </motion.div>

        {/* --- WHEN PROJECTS NEED VE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              When Union County Projects <span className="italic text-terracotta">May Need Value Engineering</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-12">
              Consider bringing value engineering into the process when:
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                { title: 'The Estimate Is Too High', desc: 'A systematic review can identify areas where alternatives deserve consideration.' },
                { title: 'The Design Is Complex', desc: 'Construction input may uncover opportunities to simplify installation.' },
                { title: 'Materials Are Driving Costs', desc: 'Alternative products or assemblies can be compared according to installed and long-term value.' },
                { title: 'The Schedule Is Tight', desc: 'Construction methods and sequencing may be reviewed for efficiency.' },
                { title: 'The Owner Wants More From the Budget', desc: 'Value engineering can help prioritize resources toward the components that matter most to project performance.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/60 border border-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
                  <h4 className="font-medium text-forest text-[17px] mb-3">{item.title}</h4>
                  <p className="text-[14px] text-forest-deep/70 font-light leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* --- CONSTRUCTION-FOCUSED PERSPECTIVE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              A Construction-Focused <span className="italic text-terracotta">Perspective</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Hevan M Constructions evaluates value engineering from the standpoint of what can realistically be executed in the field. That means looking at more than drawings and unit prices.
            </motion.p>
            <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              The review can consider how an option will be procured, delivered, installed, coordinated, maintained, and ultimately perform.
            </motion.p>
            <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep font-medium italic border-t border-forest/10 pt-8 max-w-2xl mx-auto">
              The result is intended to give owners and project teams useful information for making informed decisions.
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
              Discuss Your <br className="hidden sm:block" /><span className="italic text-terracotta">Project Needs</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Hevan M Constructions provides value engineering services for projects throughout Union County, including areas such as Union, Elizabeth, Linden, Rahway, Westfield, Cranford, Plainfield, Scotch Plains, and surrounding communities, subject to project scope and service availability.</p>
              <p>If your Union County construction project needs cost optimization, constructability review, or an evaluation of design and material alternatives, contact Hevan M Constructions for a project-specific discussion.</p>
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