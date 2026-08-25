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

export default function AdditionsPage() {
  return (
    <main className="bg-[#F6F4EE] min-h-screen selection:bg-terracotta/20 selection:text-forest-deep">
      {/* --- HERO SECTION (Design-Build Style) --- */}
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
              <Link to="/services" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] hover:bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                Back to Services
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Verona, NJ & North Jersey</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Additions in <br />
              <span className="italic text-terracotta">Verona, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-6">
              Need more room without leaving your home or neighborhood? Hevan M Constructions builds home additions in Verona, NJ, helping homeowners create additional living space that feels like a natural extension of the existing house.
            </motion.p>

            <motion.p variants={fadeIn} className="text-[16px] sm:text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-10">
              From second-story additions and expanded living areas to sunrooms and guest-house-style spaces, we approach each addition around the home's existing architecture, the property's constraints, and the way your family intends to use the new space.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.2em] text-forest/50 font-medium mr-2">Serving:</span>
              {[
                { name: 'Bergen', path: '/home-additions-bergen-county-nj' },
                { name: 'Essex', path: '/home-additions-essex-county-nj' },
                { name: 'Morris', path: '/home-additions-morris-county-nj' },
                { name: 'Passaic', path: '/home-additions-passaic-county-nj' },
                { name: 'Union', path: '/home-additions-union-county-nj' },
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

        {/* --- DESIGNED AROUND YOUR HOME (Design-Build Style) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Custom Expansion
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Home Additions Designed <br /><span className="italic text-terracotta">Around Your Home</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  A successful addition should not look or feel like an afterthought. It should work with the existing structure, circulation, exterior appearance, and everyday use of the house.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  The right solution depends on the home's existing layout, available property area, structural requirements, local regulations, and your long-term plans.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm p-8 rounded-[24px] sm:rounded-[32px] border border-white/10 shadow-sm">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta mb-6">Depending on your goals and property, an addition may provide:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Additional bedrooms',
                    'A larger kitchen or dining area',
                    'Expanded family and living rooms',
                    'A home office',
                    'A sunroom or year-round sitting area',
                    'A guest suite',
                    'An in-law or multigenerational living area',
                    'Additional bathroom space',
                    'A second-story expansion',
                    'More storage and functional living space'
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

        {/* --- ADDITION TYPES (Cinematic 3-Col Style from Design-Build) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Addition Types
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Card 1 */}
              <motion.div variants={fadeIn} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group flex flex-col">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Style 01</div>
                <h3 className="font-display text-[26px] text-linen mb-4">Second-Story Additions</h3>
                <div className="h-px w-10 bg-linen/20 mb-6" />
                <p className="text-linen/70 text-[15px] leading-[1.7] font-light mb-8 flex-grow">
                  When expanding outward is limited, building upward can create substantial additional living space without requiring a larger ground-level footprint. Because adding another level affects the existing structure, roof configuration, stairs, exterior design, and building systems, careful planning is essential.
                </p>
                <div className="border-t border-linen/10 pt-6">
                  <p className="text-[12px] text-terracotta font-medium tracking-[0.1em] uppercase mb-4">Considered For:</p>
                  <div className="flex flex-wrap gap-2">
                    {['New bedrooms', 'Primary suites', 'Bathrooms', 'Offices', 'Family areas', 'Multigenerational space'].map(item => (
                      <span key={item} className="px-3 py-1 bg-linen/5 border border-linen/10 rounded-full text-[13px] text-linen/80">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeIn} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group flex flex-col">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Style 02</div>
                <h3 className="font-display text-[26px] text-linen mb-4">Sunrooms & Living Spaces</h3>
                <div className="h-px w-10 bg-linen/20 mb-6" />
                <p className="text-linen/70 text-[15px] leading-[1.7] font-light flex-grow">
                  A sunroom or extended living area can change how a home is used without necessarily requiring a complete second-floor expansion. These spaces can provide a comfortable transition between indoor and outdoor living while adding useful square footage to the home.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeIn} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group flex flex-col">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Style 03</div>
                <h3 className="font-display text-[26px] text-linen mb-4">Guest House & Suites</h3>
                <div className="h-px w-10 bg-linen/20 mb-6" />
                <p className="text-linen/70 text-[15px] leading-[1.7] font-light mb-8 flex-grow">
                  Additional private living space can be useful for visiting family, adult children, aging parents, or long-term guests.
                </p>
                <div className="border-t border-linen/10 pt-6">
                  <p className="text-[14px] leading-[1.7] text-linen/90 font-medium">
                    Depending on the property, an addition can be planned around a bedroom, bathroom, sitting area, kitchenette, or more independent accommodation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- WHY HOMEOWNERS CHOOSE AN ADDITION (Light bg-linen Style) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
                Why Homeowners Choose <span className="italic text-terracotta">An Addition</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-8">
                <p className="font-medium text-forest-deep">An addition may make sense when:</p>
                <p>A well-planned addition can provide the space you need while allowing you to remain in a home and community you already know.</p>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
                <div className="grid grid-cols-1 gap-y-3 gap-x-6">
                  {[
                    'Your current home is too small.',
                    'You need another bedroom or bathroom.',
                    'Your family is growing.',
                    'You want dedicated office space.',
                    'You need accommodation for relatives or guests.',
                    'You want to improve how your home functions.',
                    'Moving would mean leaving a neighborhood you value.'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                      <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- LOCAL ADDITION SERVICES (Explore By County Style) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-[#F6F4EE] rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-20 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-forest/5">
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="pointer-events-none absolute top-0 left-0 w-[50%] h-[100%] bg-gradient-to-r from-[#d27d55]/40 via-[#e58a5b]/10 to-transparent blur-[80px]" />
          <div className="pointer-events-none absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#8aa87d]/40 via-[#9dbd90]/10 to-transparent blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-6">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Service Areas
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-[2.5rem] sm:text-5xl text-forest mb-6 tracking-[-0.02em] leading-[1.05]">
                Serving New Jersey's <br /><span className="italic text-terracotta">Premier Communities</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
                Hevan M Constructions brings exceptional quality and thoughtful design-build integration across Northern New Jersey:
              </motion.p>
            </div>

            <div className="lg:col-span-7 lg:mt-6">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Bergen County', link: '/home-additions-bergen-county-nj' },
                  { title: 'Essex County', link: '/home-additions-essex-county-nj' },
                  { title: 'Morris County', link: '/home-additions-morris-county-nj' },
                  { title: 'Passaic County', link: '/home-additions-passaic-county-nj' },
                  { title: 'Union County', link: '/home-additions-union-county-nj' },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="group relative overflow-hidden rounded-[24px] border border-forest/10 bg-[#F6F4EE]/50 backdrop-blur-sm p-6 sm:p-7 transition-all hover:bg-white hover:border-terracotta/30 hover:shadow-[0_8px_30px_rgba(210,125,85,0.08)] flex items-center justify-between"
                  >
                    <span className="relative z-10 text-[18px] sm:text-[19px] font-display text-forest group-hover:text-terracotta transition-colors">
                      {item.title}
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

      {/* --- CTA SECTION (Design-Build Style) --- */}
      <section className="bg-forest py-16 sm:py-24 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeIn} className="flex justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/20 text-[12px] uppercase tracking-[0.2em] text-terracotta font-medium">
                Planning an Addition?
              </span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-6 leading-[1.05] tracking-[-0.02em]">
              Let's Discuss <br className="hidden sm:block" /><span className="italic text-terracotta">Your Project</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>The best time to identify structural, layout, budget, and permitting considerations is before construction begins.</p>
              <p>Contact Hevan M Constructions to discuss your home addition in Verona or elsewhere in North Jersey.</p>
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

          </motion.div>
        </div>
      </section>
    </main>
  );
}
