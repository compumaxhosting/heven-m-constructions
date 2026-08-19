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

export default function DesignBuildPassaicCountyPage() {
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
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Passaic County, NJ</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Design-Build Contractor <br />
              in <span className="italic text-terracotta">Passaic County, NJ</span>
            </motion.h1>

            <motion.h2 variants={fadeIn} className="text-[20px] sm:text-[24px] text-forest font-medium tracking-tight mb-6 leading-snug">
              A Coordinated Way to Plan, Remodel, and Build
            </motion.h2>

            <motion.p variants={fadeIn} className="text-[17px] sm:text-[19px] leading-[1.7] text-forest-deep/85 font-light mb-6">
              Hevan M Constructions provides residential design-build construction services in Passaic County, NJ, from our location in Verona.
            </motion.p>

            <motion.p variants={fadeIn} className="text-[16px] sm:text-[17px] leading-[1.7] text-forest-deep/75 font-light">
              For homeowners planning a substantial renovation or addition, our design-build approach connects project planning, design coordination, construction planning, and building through one coordinated process.
            </motion.p>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- DESIGN-BUILD TYPES OF HOMES --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Capabilities
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Design-Build for <br /><span className="italic text-terracotta">Different Types of Homes</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Passaic County includes a variety of residential communities and property settings. That means there is no single solution for every renovation.
                </motion.p>
                <motion.p variants={fadeIn}>
                  A successful project begins by understanding the existing home and identifying what needs to change.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white/10 shadow-sm mt-6 lg:mt-12">
                <p className="text-[16px] leading-[1.7] text-linen/90 font-light">
                  Whether the goal is more space, a better layout, or a complete transformation, the design should respond to the property rather than forcing the property into a predetermined plan.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- RESIDENTIAL SERVICES --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
                Residential <span className="italic text-terracotta">Services</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-8">
                <p>We can help plan and coordinate projects such as additions, reconfigurations, structural transformations, and custom plans.</p>
                <p className="text-[16px] font-medium text-terracotta">We structure a unified process around your specific requirements.</p>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
                <h3 className="font-display text-2xl text-forest mb-6">We can help plan and coordinate projects such as:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    'Home additions',
                    'Family room additions',
                    'Bedroom additions',
                    'Primary suite additions',
                    'Kitchen expansions',
                    'Second-story additions',
                    'Whole-home remodeling',
                    'Kitchen remodeling',
                    'Bathroom remodeling',
                    'Structural renovations',
                    'Custom residential projects'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-1.5 border-b border-forest/5 last:border-0">
                      <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- PROCESS (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> The Process
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
              What the Design-Build Process <span className="italic text-terracotta">Looks Like</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Project Discovery', desc: 'We learn what you want to accomplish and what problems you want the renovation to solve.' },
                { title: 'Property Review', desc: 'The existing home and proposed improvements are considered together.' },
                { title: 'Design Development', desc: 'The project layout, materials, finishes, and construction requirements are developed around your goals.' },
                { title: 'Scope and Estimate', desc: 'The work is defined and the major project costs and requirements are evaluated.' },
                { title: 'Pre-Construction', desc: 'Scheduling, materials, permitting, and other project details are coordinated.' },
                { title: 'Construction', desc: 'The project moves into construction with coordination between the necessary trades.' },
                { title: 'Final Walkthrough', desc: 'The completed work is reviewed before the project is considered complete.' },
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

        {/* --- WHEN DESIGN-BUILD MAKES SENSE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              When Design-Build <br/><span className="italic text-terracotta">Makes Sense</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              Design-build can be particularly helpful when your project involves multiple connected decisions. For example, expanding a kitchen may involve more than cabinetry. It can affect walls, plumbing, electrical systems, flooring, lighting, and HVAC.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              A home addition can involve even more coordination between the existing structure and new construction. Bringing those considerations together early can make the overall process easier to manage.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-forest/10 to-transparent my-6" />
            <h3 className="font-display text-2xl text-forest mb-4">Home Additions in Passaic County</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              If your current home meets your location and lifestyle needs but lacks enough space, an addition can provide another option.
            </p>
            <p className="text-[14px] leading-[1.7] text-forest-deep/65 font-light italic mb-6">
              Depending on the property, you might add:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {[
                'A family room',
                'Bedroom',
                'Home office',
                'Primary suite',
                'Expanded kitchen',
                'Additional living area'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[14px] text-forest-deep/90 py-1.5 border-b border-forest/5 last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" /> <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light mt-6 italic">
              For properties where the available footprint is limited, building upward may also be an option worth evaluating. The feasibility of any addition depends on the existing structure, site, design, and applicable requirements.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <div className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
              <h3 className="font-display text-2xl text-forest mb-6">Planning Around Your Budget</h3>
              <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
                A good project starts with realistic expectations. Instead of selecting finishes before understanding the scope, consider the project as a whole:
              </p>
              <div className="grid grid-cols-1 gap-y-3 mb-6">
                {[
                  'What are you changing?',
                  'What needs to be built?',
                  'What systems will be affected?',
                  'What materials do you want?',
                  'What approvals are required?'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-1.5 border-b border-forest/5 last:border-0">
                    <span className="text-terracotta mt-1">✦</span> <span className="flex-1 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light italic pt-4 border-t border-forest/10">
                Answering these questions early creates a stronger foundation for budgeting and planning.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
              <h3 className="font-display text-2xl text-forest mb-6">What to Look for in a Design-Build Contractor</h3>
              <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">Before selecting a contractor, ask:</p>
              <div className="grid grid-cols-1 gap-y-3">
                {[
                  'Who coordinates the design and construction?',
                  'What is included in the project scope?',
                  'Who handles permitting?',
                  'How are changes documented?',
                  'How is the project scheduled?',
                  'Which trades are involved?',
                  'How will communication be handled?',
                  'What is included in the estimate?'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-1.5 border-b border-forest/5 last:border-0">
                    <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light mt-6 italic pt-4 border-t border-forest/10">
                Clear answers are important before construction begins.
              </p>
            </div>
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
              Planning a design-build construction project is a major decision. Here are answers to some of the most common questions we receive from homeowners in Passaic County.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'What is the advantage of design-build?', a: 'Design-build connects design and construction through one coordinated process, which can simplify communication and project management.' },
              { q: 'Is design-build suitable for additions?', a: 'Yes. It can be useful when an addition requires coordination between the existing home, new structure, utilities, finishes, and exterior design.' },
              { q: 'Can design-build be used for remodeling?', a: 'Yes. It can be used for larger kitchen, bathroom, whole-home, structural, and multi-room remodeling projects.' },
              { q: 'How much does a home renovation cost in Passaic County?', a: 'There is no universal price. Costs vary according to project size, existing conditions, materials, structural work, systems, finishes, and complexity.' },
              { q: 'How do I begin?', a: 'Contact Hevan M Constructions with your project goals and property location. A consultation can help determine the appropriate next steps.' },
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
              Design-Build Construction <br className="hidden sm:block" /><span className="italic text-terracotta">in Passaic County, NJ</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Hevan M Constructions is based in Verona, New Jersey and serves homeowners throughout Passaic County.</p>
              <p>From a new addition to a major renovation, we provide a coordinated approach designed to connect planning and construction from the beginning.</p>
              <p>Ready to discuss your project? Contact Hevan M Constructions to schedule a consultation.</p>
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
