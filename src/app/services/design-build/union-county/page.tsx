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
      <section className="relative overflow-hidden pt-44 pb-32 sm:pt-52"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(35,53,40,0.03) 0%, transparent 70%)'
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]" 
             style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.div variants={fadeIn} className="mb-6 flex justify-center">
               <Link to="/design-build-construction-nj" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Union County, NJ</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,5.5rem)] text-forest leading-[1.05] tracking-[-0.02em] mb-8">
              Design-Build Contractor <br className="hidden sm:block" />
              <span className="italic text-terracotta">in Union County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-12 max-w-2xl mx-auto">
              Thoughtful Design. Coordinated Construction. One Process. Hevan M Constructions provides design-build services for homeowners throughout Union County, NJ.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-32">

        {/* --- UNION COUNTY DESIGN-BUILD (ONE TEAM) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="relative">
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-forest mb-8 leading-[1.1] tracking-[-0.02em]">
                Make Your Existing <br /><span className="italic text-terracotta">Home Work Better</span>
              </h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-forest-deep/80 font-light">
                <p>Sometimes the best reason to renovate is not that your home is in the wrong place—it is that the home no longer works the way you need it to.</p>
                <p>Design-build gives you a way to consider those needs together with the practical requirements of construction.</p>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'More living space',
                'A better kitchen layout',
                'An additional bedroom',
                'A dedicated home office',
                'A larger primary suite',
                'Better flow between rooms',
                'A more functional first floor'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60" />
                  <span className="text-[15px] text-forest-deep">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* --- A BETTER CONNECTION (WHITE BLOCK) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
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

        {/* --- HOME ADDITION (SPLIT GRID) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">What Makes Design-Build Different?</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-8">With separate design and construction arrangements, homeowners may need to coordinate information between multiple parties. With design-build, those phases are connected through one delivery process. That can make it easier to coordinate:</p>
            <div className="grid grid-cols-1 gap-y-4">
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
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light mt-6 italic">
              Design-Build Cost in Union County: The total investment depends on the size and complexity of the work, existing conditions, materials, and other project requirements. A property-specific scope and estimate are more useful than a generic cost-per-square-foot figure.
            </p>
          </motion.div>
        </motion.div>

        {/* --- DESIGN BUILD SERVICES (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="sticky top-32 lg:pr-8">
              <h2 className="font-display text-4xl sm:text-[3.5rem] leading-[1.05] text-forest mb-6 tracking-[-0.02em]">
                Frequently Asked <br className="hidden lg:block"/><span className="italic text-terracotta">Questions</span>
              </h2>
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="border-t border-forest/15">
              {[
                { q: 'What residential projects are suitable for design-build?', a: 'Home additions, major renovations, whole-home remodeling, structural changes, and other projects requiring substantial design and construction coordination can be good candidates.' },
                { q: 'Can design-build improve communication?', a: 'One of its main advantages is having design and construction coordinated through one integrated process.' },
                { q: 'Can you remodel an occupied home?', a: 'Construction planning can take the homeowner\'s day-to-day living conditions into consideration. The impact depends on the scope and areas being renovated.' },
                { q: 'How early should I contact a contractor?', a: 'The earlier you involve the construction team in a major project, the more opportunity there is to consider feasibility, construction methods, materials, and budget during planning.' },
                { q: 'What is the first step?', a: 'Start with a consultation to explain your goals, property, and proposed project.' },
              ].map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div variants={fadeIn} key={i} className="border-b border-forest/10 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left py-6 sm:py-8 flex items-start sm:items-center justify-between focus:outline-none group gap-6"
                    >
                      <h3 className="font-display text-[20px] sm:text-[24px] leading-snug text-forest group-hover:text-terracotta transition-colors pt-1 sm:pt-0">
                        {faq.q}
                      </h3>
                      <span className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-forest/15 flex items-center justify-center text-forest transition-transform duration-500 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] mt-1 sm:mt-0 ${isOpen ? 'rotate-45 bg-forest/5' : ''}`}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                          <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <motion.div 
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                    >
                      <p className="text-forest-deep/80 text-[16px] sm:text-[17px] leading-[1.8] font-light pb-8 sm:pb-10 pr-4 sm:pr-20">
                        {faq.a}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* --- EXPLORE BY COUNTY --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="pt-20 border-t border-forest/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 variants={fadeIn} className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
              Design-Build in <span className="italic text-terracotta">Nearby Communities</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
              Haven M Construction provides design-build construction services for businesses and property owners throughout Northern New Jersey:
            </motion.p>
          </div>
          
          <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
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
                className="group relative overflow-hidden rounded-full border border-forest/20 bg-white/50 px-8 py-4 transition-all hover:border-forest"
              >
                <div className="absolute inset-0 bg-forest translate-y-[100%] transition-transform duration-500 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] group-hover:translate-y-0" />
                <span className="relative z-10 text-[15px] font-medium text-forest transition-colors duration-500 group-hover:text-linen">
                  {county.name}
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-forest py-24 sm:py-32 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-8 leading-[1.05] tracking-[-0.02em]">
              Design-Build Services <br className="hidden sm:block" /><span className="italic text-terracotta">in Union County</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-14 max-w-2xl mx-auto font-light">
              <p>Whether you are looking to add space, improve your home's layout, or undertake a larger renovation, we can help you explore the project from planning through construction.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-16">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex justify-center">
               <Link to="/design-build-construction-nj" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
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
