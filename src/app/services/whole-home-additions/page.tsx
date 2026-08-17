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
      <section className="relative overflow-hidden pt-40 pb-32 sm:pt-52 min-h-[85vh] flex items-center justify-center bg-[#F6F4EE]">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-[#e58a5b]/20 via-[#d27d55]/10 to-transparent blur-[120px] mix-blend-multiply" />
        <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-tl from-[#8aa87d]/20 via-[#67825b]/10 to-transparent blur-[120px] mix-blend-multiply" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl mx-auto flex flex-col items-center">

            <motion.div variants={fadeIn} className="mb-12 flex justify-center">
              <Link to="/services" className="group relative inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-forest font-semibold bg-[#F6F4EE]/50 backdrop-blur-md px-6 py-3 rounded-full border border-forest/15 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:border-forest/30">
                <div className="absolute inset-0 bg-forest/5 translate-y-[100%] transition-transform duration-500 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] group-hover:translate-y-0" />
                <svg className="relative z-10 transition-transform group-hover:-translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                <span className="relative z-10">Back to All Services</span>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full border border-terracotta/20 bg-terracotta/[0.03] backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[12px] uppercase tracking-[0.25em] text-terracotta font-medium">Verona, NJ & Surrounding Areas</span>
            </motion.div>

            <motion.div variants={fadeIn} className="relative mb-12">
              {/* Decorative Accent behind text */}
              <div className="absolute -inset-10 bg-gradient-to-b from-white/40 to-transparent blur-2xl -z-10 rounded-full opacity-60 pointer-events-none" />

              <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] text-forest leading-[0.95] tracking-[-0.04em] text-balance">
                Home Additions in <br />
                <span className="italic text-terracotta relative inline-block">
                  Verona, NJ
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeIn} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-terracotta/40 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-terracotta/40 to-transparent" />
              <p className="text-[18px] sm:text-[22px] leading-[1.8] text-forest-deep font-medium max-w-3xl mx-auto text-center px-8 drop-shadow-sm">
                When your home no longer provides enough space for the way you live, you don't always need to move. A thoughtfully planned home addition can give you more room while allowing you to stay in the Verona community you already know and love.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-32">

        {/* --- CUSTOM HOME ADDITIONS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="relative">
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-forest mb-8 leading-[1.1] tracking-[-0.02em]">
                Custom Home <br /><span className="italic text-terracotta">Additions</span>
              </h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-forest-deep/80 font-light">
                <p>Haven M Construction helps homeowners create functional, comfortable additions designed around their homes, lifestyles, and long-term needs.</p>
                <p>Every home has different possibilities. The goal isn't simply to add square footage. It's to create space that improves how your home works.</p>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Family room additions',
                'Bedroom additions',
                'Primary suite additions',
                'Kitchen & dining expansions',
                'Home office additions',
                'First-floor additions',
                'Second-story additions',
                'Guest & flexible spaces',
                'Garage expansions'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60" />
                  <span className="text-[15px] text-forest-deep">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* --- MORE SPACE WITHOUT MOVING --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-6">Planning Your Home Addition</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-8">Before construction begins, consider these key questions:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'How much space do you need?',
                'Where can the home expand?',
                'Build outward or upward?',
                'How will it connect to existing rooms?',
                'What structural changes are required?',
                'What zoning/permits apply?',
                'How will it affect your household?',
                'Will it support future needs?'
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
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
                { title: 'Kitchen & Dining Expansions', desc: 'Create more room for cooking, storage, dining, and everyday family activities while improving the connection between living spaces.' },
                { title: 'Family Room Additions', desc: 'Add comfortable space for relaxing, entertaining, watching movies, or spending time together.' },
                { title: 'Primary Suite Additions', desc: 'Create a private retreat with additional bedroom, bathroom, and closet space designed around your needs.' },
                { title: 'Bedroom Additions', desc: 'Add dedicated space for children, guests, or changing household requirements.' },
                { title: 'Home Office Additions', desc: 'Create a quiet, dedicated workspace without sacrificing an existing bedroom or living area.' },
                { title: 'First-Floor Additions', desc: 'Expand the main level when the property and applicable requirements allow additional footprint.' },
                { title: 'Second-Story Additions', desc: 'Build upward to create additional living space when expanding outward isn\'t the best option. Feasibility depends on structure and local requirements.' },
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="sticky top-32 lg:pr-8">
              <h2 className="font-display text-4xl sm:text-[3.5rem] leading-[1.05] text-forest mb-6 tracking-[-0.02em]">
                Frequently Asked <br className="hidden lg:block" /><span className="italic text-terracotta">Questions</span>
              </h2>
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-forest/15">
              {[
                { q: 'What is the best type of home addition for a Verona home?', a: 'There is no single answer. The right addition depends on your home\'s layout, available property, household needs, budget, and long-term plans.' },
                { q: 'Can I add a second story to my Verona home?', a: 'Possibly. The existing structure, foundation, roof configuration, property conditions, and applicable zoning and building requirements should be evaluated first.' },
                { q: 'How much does a home addition cost in Verona, NJ?', a: 'Costs vary according to size, structural work, design complexity, materials, finishes, site conditions, and project scope. A defined project scope is needed for a meaningful estimate.' },
                { q: 'Do home additions require permits in Verona?', a: 'Requirements depend on the project and property. Applicable zoning, building, and permit requirements should be determined before construction begins.' },
                { q: 'How long does a home addition take?', a: 'The timeline depends on the size and complexity of the addition, planning and approval requirements, materials, site conditions, and construction scope.' },
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
                          <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
              Home Additions in <span className="italic text-terracotta">Nearby Communities</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
              Haven M Construction also serves homeowners considering home additions in these nearby New Jersey counties:
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Bergen County', path: '/home-additions-bergen-county-nj' },
              { name: 'Essex County', path: '/home-additions-essex-county-nj' },
              { name: 'Morris County', path: '/home-additions-morris-county-nj' },
              { name: 'Passaic County', path: '/home-additions-passaic-county-nj' },
              { name: 'Union County', path: '/home-additions-union-county-nj' },
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
              Plan Your Verona <br className="hidden sm:block" /><span className="italic text-terracotta">Home Addition</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-14 max-w-2xl mx-auto font-light">
              <p>If your Verona home has the location you love but no longer has the space you need, a carefully planned addition may be the right solution.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-16">
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
