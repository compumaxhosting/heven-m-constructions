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

export default function DesignBuildPage() {
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

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Design-Build Construction <br />
              in <span className="italic text-terracotta">New Jersey</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-10">
              Hevan M Constructions provides integrated design-build construction services from Verona, New Jersey, serving Bergen, Essex, Morris, Union, and Passaic Counties. From concept and design coordination through construction and final walkthrough, we bring the key stages of your project together under one coordinated approach.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.2em] text-forest/50 font-medium mr-2">Serving:</span>
              {[
                { name: 'Bergen', path: '/design-build-bergen-county-nj' },
                { name: 'Essex', path: '/design-build-essex-county-nj' },
                { name: 'Morris', path: '/design-build-morris-county-nj' },
                { name: 'Passaic', path: '/design-build-passaic-county-nj' },
                { name: 'Union', path: '/design-build-union-county-nj' },
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

        {/* --- CONCEPT TO COMPLETION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Capabilities
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                One Team From <br /><span className="italic text-terracotta">Concept to Completion</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Design-build combines architecture, engineering, planning, and construction into an integrated process. Instead of coordinating separate design and construction teams, the project moves forward with a connected approach from the beginning.
                </motion.p>
                <motion.p variants={fadeIn}>
                  The goal is simple: create a finished space that works for its intended purpose, budget, property, and users.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm p-8 rounded-[24px] sm:rounded-[32px] border border-white/10 shadow-sm">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta mb-6">Our process can include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Project planning',
                    'Concept development',
                    'Architectural coordination',
                    'Engineering coordination',
                    'Construction planning',
                    'Commercial construction',
                    'Renovations and build-outs',
                    'Final completion and walkthrough'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                      <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- COMMERCIAL DESIGN-BUILD --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
                Commercial <span className="italic text-terracotta">Design-Build Construction</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-8">
                <p>Design-build can be a practical choice for businesses planning a new facility, commercial interior, renovation, expansion, or specialized workspace.</p>
                <p>Each project is planned around the property's existing conditions and the client's specific requirements.</p>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
                <h3 className="font-display text-2xl text-forest mb-6">Our projects may include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    'Commercial offices',
                    'Boutique offices',
                    'Professional workspaces',
                    'Veterinary hospitals',
                    'Commercial renovations',
                    'Interior build-outs',
                    'Business expansions',
                    'Specialized facilities',
                    'Additions and improvements'
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

        {/* --- RENOVATIONS AND BUILD-OUTS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Design-Build for <br /><span className="italic text-terracotta">Renovations and Build-Outs</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              Design-build is not limited to new construction. It can also be used when an existing property needs to be renovated, reconfigured, expanded, or converted for a new use.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep/80 font-light">
              Evaluating existing conditions early helps identify potential construction challenges before work begins.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">Projects may involve:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'Interior reconfiguration',
                'New offices or rooms',
                'Structural improvements',
                'Plumbing',
                'Electrical systems',
                'HVAC',
                'Lighting',
                'Flooring and finishes',
                'Accessibility improvements',
                'Commercial build-outs',
                'Space expansions'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- SPECIALIZED FACILITIES --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Specialized Abstractions
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Design-Build for <br /><span className="italic text-terracotta">Specialized Facilities</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Specialized facilities require construction decisions that reflect how the space will actually operate.
                </motion.p>
                <motion.p variants={fadeIn}>
                  For example, veterinary hospitals may require examination rooms, treatment areas, surgical spaces, recovery areas, equipment, plumbing, electrical systems, ventilation, storage, and durable finishes.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white/10 shadow-sm mt-6 lg:mt-12">
                <h3 className="font-display text-2xl text-linen mb-6">Integrated Requirements</h3>
                <p className="text-[16px] leading-[1.7] text-linen font-medium text-terracotta">
                  A coordinated design-build approach allows these requirements to be considered together rather than treated as separate construction decisions.
                </p>
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
              How Design-Build <span className="italic text-terracotta">Works</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Planning', desc: 'We learn about your property, goals, intended use, priorities, and project requirements.' },
                { title: 'Design', desc: 'The project concept and design are developed around how the finished space needs to function.' },
                { title: 'Engineering Coordination', desc: 'Engineering requirements are coordinated with the design and construction scope.' },
                { title: 'Construction Planning', desc: 'Materials, building systems, sequencing, and construction requirements are organized before work begins.' },
                { title: 'Construction', desc: 'The project moves from plans into construction with design and building requirements kept coordinated.' },
                { title: 'Final Walkthrough', desc: 'The completed project is reviewed before the final handover.' },
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

        {/* --- IS DESIGN BUILD RIGHT --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
                Is Design-Build <br /><span className="italic text-terracotta">Right for My Project?</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-8">
                <p>Design-build can be a good option when you want design and construction coordinated through one integrated process.</p>
                <p>The best construction approach ultimately depends on your project, property, budget, and objectives.</p>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
                <h3 className="font-display text-2xl text-forest mb-6">It can be particularly useful for:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    'New commercial construction',
                    'Office construction',
                    'Veterinary facilities',
                    'Renovations',
                    'Commercial build-outs',
                    'Expansions',
                    'Specialized facilities'
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
              Planning a design-build construction project is a major decision. Here are answers to some of the most common questions we receive.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'What is design-build construction?', a: 'Design-build is a project delivery method that coordinates design and construction through one integrated process.' },
              { q: 'What does a design-build project include?', a: 'Depending on the project, services may include planning, architectural coordination, engineering coordination, construction planning, construction, and final completion.' },
              { q: 'Can design-build be used for commercial renovations?', a: 'Yes. Design-build can be used for commercial renovations, interior build-outs, additions, expansions, and new construction.' },
              { q: 'What Does Design-Build Construction Cost?', a: 'There is no standard price for a design-build project. Cost depends on the size and condition of the property, project type, design complexity, materials, structural requirements, plumbing, electrical, HVAC, finishes, equipment, permits, and overall scope. A project-specific scope and property evaluation are needed to develop a meaningful estimate.' },
              { q: 'How Long Does Design-Build Construction Take?', a: 'Every project has a different timeline. Design and engineering requirements, permitting, property conditions, materials, project size, and construction complexity can all affect the schedule. A project-specific timeline can be established once the scope is defined.' },
              { q: 'What areas does Hevan M Constructions serve?', a: 'Hevan M Constructions is based in Verona, New Jersey and serves Bergen, Essex, Morris, Union, and Passaic Counties.' },
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

        {/* --- EXPLORE BY COUNTY --- */}
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
                Serving New Jersey's <br /><span className="italic text-terracotta">Premier Communities</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light max-w-md">
                Haven M Construction brings exceptional quality and thoughtful design-build integration across Northern New Jersey:
              </motion.p>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Bergen County', path: '/design-build-bergen-county-nj' },
                  { name: 'Essex County', path: '/design-build-essex-county-nj' },
                  { name: 'Morris County', path: '/design-build-morris-county-nj' },
                  { name: 'Passaic County', path: '/design-build-passaic-county-nj' },
                  { name: 'Union County', path: '/design-build-union-county-nj' },
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
              Start Your <span className="italic text-terracotta">Design-Build Project</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Planning a commercial building, office, renovation, veterinary hospital, build-out, expansion, or specialized facility?</p>
              <p>Contact Hevan M Constructions to discuss your project, property, and design-build requirements.</p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex flex-col items-center gap-4 text-linen/40 text-[14px]">
              <p className="font-medium text-linen/80">Hevan M Constructions</p>
              <p>Verona, New Jersey</p>
              <p className="italic">Serving Bergen, Essex, Morris, Union & Passaic Counties</p>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8 flex justify-center">
              <Link to="/services" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-linen/50 hover:text-terracotta transition-colors font-medium bg-[#233528] hover:bg-[#2e4735] px-6 py-3 rounded-full border border-linen/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                Back to All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
