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

export default function WholeHomeAdditionsPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <main className="bg-[#F6F4EE] min-h-screen selection:bg-terracotta/20 selection:text-forest-deep">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-40 pb-24 sm:pt-64 sm:pb-40 bg-[#F6F4EE]">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Ambient Glows mimicking the Vet page */}
        <div className="pointer-events-none absolute -top-[10%] -left-[10%] w-[60vw] h-[100%] bg-gradient-to-r from-[#d27d55]/60 via-[#e58a5b]/20 to-transparent blur-[100px]" />
        <div className="pointer-events-none absolute -top-[10%] -right-[10%] w-[60vw] h-[100%] bg-gradient-to-l from-[#8aa87d]/60 via-[#9dbd90]/20 to-transparent blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">



            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Whole Home Additions <br />
              in <span className="italic text-terracotta">Verona, NJ</span>
            </motion.h1>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.2em] text-forest/50 font-medium mr-2">Serving:</span>
              {[
                { name: 'Bergen', path: '/whole-home-additions-bergen-county-nj' },
                { name: 'Essex', path: '/whole-home-additions-essex-county-nj' },
                { name: 'Morris', path: '/whole-home-additions-morris-county-nj' },
                { name: 'Passaic', path: '/whole-home-additions-passaic-county-nj' },
                { name: 'Union', path: '/whole-home-additions-union-county-nj' },
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

      {/* --- INTRO PARAGRAPH SECTION --- */}
      <section className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
          <p className="text-[18px] sm:text-[24px] leading-[1.8] text-forest-deep font-medium">
            When your home no longer provides enough space for the way you live, you don't always need to move. A thoughtfully planned home addition can give you more room while allowing you to stay in the Verona community you already know and love.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- CUSTOM HOME ADDITIONS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Capabilities
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Custom Home <br /><span className="italic text-terracotta">Additions</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Haven M Construction helps homeowners create functional, comfortable additions designed around their homes, lifestyles, and long-term needs.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Every home has different possibilities. Depending on your property and goals, your addition may include:
                </motion.p>
                <motion.p variants={fadeIn}>
                  The goal isn't simply to add square footage. It's to create space that improves how your home works.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-6">
                {[
                  'Family room additions',
                  'Bedroom additions',
                  'Primary suite additions',
                  'Home office additions',
                  'First-floor additions',
                  'Second-story additions',
                  'Guest & flexible spaces',
                  'Garage expansions'
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

        {/* --- MORE SPACE WITHOUT MOVING --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
              More Space <span className="italic text-terracotta">Without Moving</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light">
              <p>Your home may already have the location, neighborhood, and character you want. You may simply need more room. A home addition can provide space for a growing family, a dedicated office, larger entertaining areas, additional bedrooms, or a more comfortable primary suite.</p>
              <p>By expanding the existing home, you can address specific space needs without giving up the community and property you already enjoy.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- DESIGNED TO BELONG --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Designed to Belong <span className="italic text-terracotta">With Your Home</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              A quality addition should feel like part of the original house. Rooflines, windows, exterior materials, proportions, floor levels, lighting, finishes, and interior transitions all contribute to a cohesive result. Inside, the new space should connect naturally with existing rooms and improve the overall flow of the home.
            </p>
            <h3 className="font-display text-2xl text-forest mb-6">Our Approach</h3>
            <p className="text-[16px] leading-[1.8] text-forest-deep/80 font-light">
              We begin by understanding what you want to accomplish. From there, the existing home, available space, layout, structural considerations, and project requirements can be evaluated to determine a practical approach. The finished addition should provide useful space while complementing the existing home and supporting the way you live.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">Planning Your Home Addition</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-8">Before construction begins, consider these key questions:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'How much space do you actually need?',
                'Where can the home realistically expand?',
                'Would building outward or upward work better?',
                'How will the addition connect to existing rooms?',
                'What structural changes may be required?',
                'What zoning and permit requirements apply?',
                'How will construction affect your household?',
                'How can the new space support your future needs?'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light mt-6 italic">
              Every Verona property is different, so the right solution should be based on the actual home rather than a standard addition plan.
            </p>
          </motion.div>
        </motion.div>

        {/* --- ADDITION OPTIONS (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Home Addition Options
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
              Expand your space to <span className="italic text-terracotta">fit your lifestyle.</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Kitchen and Dining Expansions', desc: 'Create more room for cooking, storage, dining, and everyday family activities while improving the connection between living spaces.' },
                { title: 'Family Room Additions', desc: 'Add comfortable space for relaxing, entertaining, watching movies, or spending time together.' },
                { title: 'Primary Suite Additions', desc: 'Create a private retreat with additional bedroom, bathroom, and closet space designed around your needs.' },
                { title: 'Bedroom Additions', desc: 'Add dedicated space for children, guests, or changing household requirements.' },
                { title: 'Home Office Additions', desc: 'Create a quiet, dedicated workspace without sacrificing an existing bedroom or living area.' },
                { title: 'First-Floor Additions', desc: 'Expand the main level when the property and applicable requirements allow additional footprint.' },
                { title: 'Second-Story Additions', desc: 'Build upward to create additional living space when expanding outward isn\'t the best option. Feasibility depends on the existing structure, foundation, property, design, and local requirements.' },
              ].map((step, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Option 0{i + 1}</div>
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
              Planning a home addition is a major decision. Here are answers to some of the most common questions we receive from homeowners in Verona.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'What is the best type of home addition for a Verona home?', a: 'There is no single answer. The right addition depends on your home\'s layout, available property, household needs, budget, and long-term plans.' },
              { q: 'Can I add a second story to my Verona home?', a: 'Possibly. The existing structure, foundation, roof configuration, property conditions, and applicable zoning and building requirements should be evaluated first.' },
              { q: 'How much does a home addition cost in Verona, NJ?', a: 'Costs vary according to size, structural work, design complexity, materials, finishes, site conditions, and project scope. A defined project scope is needed for a meaningful estimate.' },
              { q: 'Do home additions require permits in Verona?', a: 'Requirements depend on the project and property. Applicable zoning, building, and permit requirements should be determined before construction begins.' },
              { q: 'How long does a home addition take?', a: 'The timeline depends on the size and complexity of the addition, planning and approval requirements, materials, site conditions, and construction scope.' },
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
                Haven M Construction brings exceptional quality and thoughtful design to home additions across these distinguished counties:
              </motion.p>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Bergen County', path: '/whole-home-additions-bergen-county-nj' },
                  { name: 'Essex County', path: '/whole-home-additions-essex-county-nj' },
                  { name: 'Morris County', path: '/whole-home-additions-morris-county-nj' },
                  { name: 'Passaic County', path: '/whole-home-additions-passaic-county-nj' },
                  { name: 'Union County', path: '/whole-home-additions-union-county-nj' },
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
              Plan Your Verona <br className="hidden sm:block" /><span className="italic text-terracotta">Home Addition</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>If your Verona home has the location you love but no longer has the space you need, a carefully planned addition may be the right solution.</p>
              <p>Contact Haven M Construction to discuss your home addition project and explore the possibilities for your property.</p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

