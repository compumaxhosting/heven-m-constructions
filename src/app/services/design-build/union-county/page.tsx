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

export default function DesignBuildUnionCountyPage() {
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
               <Link to="/design-build-construction-nj" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] hover:bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Union County, NJ</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Design-Build Contractor <br />
              in <span className="italic text-terracotta">Union County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light">
              Thoughtful Design. Coordinated Construction. One Process. Hevan M Constructions provides design-build services for homeowners throughout Union County, NJ.
            </motion.p>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- CUSTOM HOME ADDITIONS (ONE TEAM) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Capabilities
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Make Your Existing <br /><span className="italic text-terracotta">Home Work Better</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Sometimes the best reason to renovate is not that your home is in the wrong place—it is that the home no longer works the way you need it to.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Design-build gives you a way to consider those needs together with the practical requirements of construction.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-6">
                {[
                  'More living space',
                  'A better kitchen layout',
                  'An additional bedroom',
                  'A dedicated home office',
                  'A larger primary suite',
                  'Better flow between rooms',
                  'A more functional first floor'
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

        {/* --- A BETTER CONNECTION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
              A Better Connection Between <span className="italic text-terracotta">Design and Construction</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light">
              <p>Design-build can help bridge the gap between what you want and what can realistically be built. The process considers: Your goals → Existing conditions → Design → Construction requirements → Budget → Permitting → Building.</p>
              <p>That connection can be particularly valuable when a project involves several rooms or significant changes to the existing home.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- HOME ADDITION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Planning a Home Addition <span className="italic text-terracotta">in Union County?</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              Before adding space, it is important to understand how the new construction will connect to the existing house.
            </p>
            <h3 className="font-display text-2xl text-forest mb-6">Important Considerations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'How the new room will be used',
                'How people move through the home',
                'Connection to existing structure',
                'Natural light and windows',
                'Heating and cooling',
                'Electrical requirements',
                'Plumbing',
                'Exterior materials',
                'Site limitations',
                'Local requirements'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[16px] leading-[1.8] text-forest-deep/80 font-light mt-6 italic">
              Good planning can help prevent design decisions from creating construction problems later.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">What Makes Design-Build Different?</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-8">With separate design and construction arrangements, homeowners may need to coordinate information between multiple parties. With design-build, those phases are connected through one delivery process. That can make it easier to coordinate:</p>
            <div className="grid grid-cols-1 gap-y-4 mb-6">
              {[
                'Design decisions',
                'Construction methods',
                'Materials',
                'Scheduling',
                'Budget considerations',
                'Project changes'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light mt-6 italic pt-4 border-t border-forest/10">
              Design-Build Cost in Union County: The total investment depends on the size and complexity of the work, existing conditions, materials, and other project requirements. A property-specific scope and estimate are more useful than a generic cost-per-square-foot figure.
            </p>
          </motion.div>
        </motion.div>

        {/* --- PROCESS (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Project Types
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
              Residential Design-Build <span className="italic text-terracotta">Services</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Home Additions', desc: 'Add useful space while designing the new area to work with the existing house.' },
                { title: 'Kitchen Expansions', desc: 'Create more functional cooking, dining, storage, and gathering space through a coordinated remodeling plan.' },
                { title: 'Primary Suites', desc: 'Create a more comfortable private area with the bedroom, bathroom, and storage your household needs.' },
                { title: 'Whole-Home Renovations', desc: 'Coordinate several remodeling areas through one project instead of treating every room as a separate renovation.' },
                { title: 'Structural Remodeling', desc: 'When changing walls, layouts, or other structural elements, design and construction need to be considered together.' },
                { title: 'Custom Residential Projects', desc: 'For projects that do not fit a standard remodeling package, the process can be developed around your property\'s specific needs.' },
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
              Planning a design-build construction project is a major decision. Here are answers to some of the most common questions we receive from homeowners in Union County.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'What residential projects are suitable for design-build?', a: 'Home additions, major renovations, whole-home remodeling, structural changes, and other projects requiring substantial design and construction coordination can be good candidates.' },
              { q: 'Can design-build improve communication?', a: 'One of its main advantages is having design and construction coordinated through one integrated process.' },
              { q: 'Can you remodel an occupied home?', a: 'Construction planning can take the homeowner\'s day-to-day living conditions into consideration. The impact depends on the scope and areas being renovated.' },
              { q: 'How early should I contact a contractor?', a: 'The earlier you involve the construction team in a major project, the more opportunity there is to consider feasibility, construction methods, materials, and budget during planning.' },
              { q: 'What is the first step?', a: 'Start with a consultation to explain your goals, property, and proposed project.' },
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
              Design-Build Services <br className="hidden sm:block" /><span className="italic text-terracotta">in Union County</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Whether you are looking to add space, improve your home's layout, or undertake a larger renovation, we can help you explore the project from planning through construction.</p>
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
