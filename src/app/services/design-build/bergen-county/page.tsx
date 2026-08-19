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

export default function DesignBuildBergenCountyPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

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
               <Link to="/design-build-construction-nj" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Bergen County, NJ</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Design-Build Contractor <br />
              in <span className="italic text-terracotta">Bergen County, NJ</span>
            </motion.h1>

            <motion.h2 variants={fadeIn} className="text-[20px] sm:text-[24px] text-forest font-medium tracking-tight mb-6 leading-snug">
              Plan and Build Your Home Improvement Project With One Coordinated Team
            </motion.h2>

            <motion.p variants={fadeIn} className="text-[17px] sm:text-[19px] leading-[1.7] text-forest-deep/85 font-light mb-6">
              Hevan M Constructions provides design-build construction services to homeowners in Bergen County, NJ, from our base in Verona.
            </motion.p>

            <motion.p variants={fadeIn} className="text-[16px] sm:text-[17px] leading-[1.7] text-forest-deep/75 font-light">
              Our approach connects project planning, design coordination, construction planning, and building so homeowners have one coordinated process instead of managing disconnected stages of a major renovation.
            </motion.p>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- RESIDENTIAL DESIGN-BUILD --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Capabilities
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Residential Design-Build <br /><span className="italic text-terracotta">in Bergen County</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Bergen County includes many different residential communities and property types. A project that works for one home may not be appropriate for another.
                </motion.p>
                <motion.p variants={fadeIn}>
                  That is why we begin with the existing property and your goals.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white/10 shadow-sm mt-6 lg:mt-12">
                <p className="text-[16px] leading-[1.7] text-linen/90 font-light">
                  Whether you need additional living space, a better kitchen layout, a larger primary suite, or a comprehensive renovation, the project should be planned around how your home is actually built and how you want to use it.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- DESIGN-BUILD SERVICES (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Services
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
              Design-Build <span className="italic text-terracotta">Services</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Home Additions', desc: 'Create additional space without giving up the location you already know. Possible projects include family rooms, bedrooms, primary suites, home offices, kitchen expansions, first-floor additions, and second-story additions.' },
                { title: 'Whole-Home Remodeling', desc: 'Coordinate multiple rooms and construction requirements as one larger renovation rather than treating every area as an unrelated project.' },
                { title: 'Kitchen Remodeling', desc: 'Combine layout changes, cabinetry, finishes, plumbing, electrical, and construction planning into one coordinated project.' },
                { title: 'Bathroom Remodeling', desc: 'Improve the function and appearance of your bathroom while coordinating the necessary construction and building systems.' },
                { title: 'Custom Renovations', desc: 'For more involved projects, design-build provides a structured process for moving from an initial concept to construction.' },
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

        {/* --- PROCESS (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Our Process
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
              Our Design-Build <span className="italic text-terracotta">Approach</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Start With Your Goals', desc: 'What do you need more of—space, storage, functionality, privacy, or flexibility? We start there.' },
                { title: 'Understand the Property', desc: 'The existing layout and construction affect what can realistically be changed.' },
                { title: 'Develop the Project', desc: 'The design and construction requirements are coordinated as the project takes shape.' },
                { title: 'Establish the Scope', desc: 'Materials, finishes, construction work, scheduling, and other project requirements are defined.' },
                { title: 'Build', desc: 'Once planning and required approvals are complete, construction begins.' },
                { title: 'Complete', desc: 'The finished project is reviewed and brought through final completion.' },
              ].map((step, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Phase 0{i + 1}</div>
                  <h3 className="font-display text-[22px] text-linen mb-4">{step.title}</h3>
                  <div className="h-px w-10 bg-linen/20 mb-4" />
                  <p className="text-linen/70 text-[14px] leading-[1.7] font-light">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- WHY CONSIDER DESIGN BUILD --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Why Homeowners <br/><span className="italic text-terracotta">Consider Design-Build</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              A major renovation can involve many decisions. Design-build connects those decisions through one process. Instead of having design decisions made independently from construction, the two can be considered together.
            </p>
            <h3 className="font-display text-2xl text-forest mb-6">This can help with:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-6">
              {[
                'Communication',
                'Constructability',
                'Budget planning',
                'Scheduling',
                'Material coordination',
                'Overall project management'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[14px] text-forest-deep/90 py-1.5 border-b border-forest/5 last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" /> <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">Planning a Bergen County Home Addition?</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-8">
              A home addition is more than adding square footage. The new space should connect naturally with the existing home, work with the property's layout, and support the way your household lives.
            </p>
            <p className="text-[14px] leading-[1.7] text-forest-deep/60 font-light italic mb-6">
              Before deciding on an addition, consider:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'Available space',
                'Existing structure',
                'Desired room layout',
                'Foundation requirements',
                'Plumbing and electrical needs',
                'Heating and cooling',
                'Exterior appearance',
                'Budget',
                'Local approvals'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light mt-6 italic pt-4 border-t border-forest/10">
              A project-specific evaluation is the best starting point.
            </p>
          </motion.div>
        </motion.div>

        {/* --- FAQ --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col gap-12">

          <motion.div variants={fadeIn} className="text-center">
            <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Common Questions <span className="inline-block h-px w-10 bg-terracotta/60" />
            </div>
            <h2 className="font-display text-4xl sm:text-[4.5rem] leading-[1.05] text-forest mb-6 tracking-[-0.02em]">
              Frequently Asked <span className="italic text-terracotta">Questions</span>
            </h2>
            <p className="text-[18px] leading-[1.8] text-forest-deep/80 font-light mt-6 max-w-2xl mx-auto">
              Planning a design-build construction project is a major decision. Here are answers to some of the most common questions we receive from homeowners in Bergen County.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'What is design-build construction?', a: 'Design-build combines design and construction coordination into one integrated project delivery process.' },
              { q: 'What types of residential projects can use design-build?', a: 'Design-build can be used for home additions, major remodeling, whole-home renovations, kitchens, bathrooms, and other substantial residential projects.' },
              { q: 'Can design-build help control project costs?', a: 'It can improve coordination between design and construction, but actual costs depend on the project\'s scope, materials, existing conditions, and other factors.' },
              { q: 'How long does a design-build project take?', a: 'There is no standard timeline. Design, permitting, materials, project size, and construction complexity all affect the schedule.' },
              { q: 'Do I need permits?', a: 'Many construction projects require permits, but the requirements depend on the specific work and property.' },
            ].map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div variants={fadeIn} key={i} className={`rounded-[24px] border border-white transition-colors duration-500 overflow-hidden ${isOpen ? 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]' : 'bg-white/40 hover:bg-white/70 shadow-[0_4px_20px_rgb(0,0,0,0.02)]'}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-6 sm:p-8 flex items-start sm:items-center justify-between focus:outline-none group gap-6"
                  >
                    <h3 className={`font-display text-[20px] sm:text-[22px] leading-snug transition-colors pt-1 sm:pt-0 ${isOpen ? 'text-terracotta' : 'text-forest group-hover:text-terracotta'}`}>
                      {faq.q}
                    </h3>
                    <span className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] mt-1 sm:mt-0 ${isOpen ? 'rotate-45 bg-terracotta text-white border-transparent' : 'border border-forest/15 text-forest bg-transparent group-hover:border-terracotta/30 group-hover:bg-terracotta/5'}`}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                        <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:sm:pb-8 pt-0">
                      <div className="h-px w-full bg-gradient-to-r from-forest/10 to-transparent mb-6" />
                      <p className="text-forest-deep/80 text-[16px] sm:text-[17px] leading-[1.8] font-light">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-forest py-16 sm:py-24 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-6 leading-[1.05] tracking-[-0.02em]">
              Design-Build Services <br className="hidden sm:block" /><span className="italic text-terracotta">in Bergen County, NJ</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Hevan M Constructions serves Bergen County from Verona, New Jersey.</p>
              <p>If you are considering a home addition, major renovation, or custom residential project, start with a conversation about what you want to accomplish.</p>
              <p>Contact Hevan M Constructions to discuss your Bergen County design-build project.</p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex justify-center">
               <Link to="/design-build-construction-nj" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-linen/50 hover:text-terracotta transition-colors font-medium bg-[#233528] hover:bg-[#2e4735] px-6 py-3 rounded-full border border-linen/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
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
