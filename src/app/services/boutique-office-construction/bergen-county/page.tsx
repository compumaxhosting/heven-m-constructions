import React from 'react';
import { motion } from 'framer-motion';
import {
  ServicePageWrapper,
  PremiumHero,
  ContentWrapper,
  CinematicCard,
  GlassCard,
  PremiumCTA,
  fadeIn,
  staggerContainer
} from '../../../../components/ServiceLayouts';

export default function BergenCountyOfficePage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="BERGEN COUNTY, NJ"
        title={<>Boutique Office Construction in <br /><span className="italic text-terracotta">Bergen County</span></>}
        description="Professional Workspaces With Character and Purpose. Your office should reflect the quality of your business. Haven M Construction provides boutique office construction and renovation services in Bergen County, NJ, for business owners who want a workspace that feels professional, functional, and distinctive."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Boutique Office', path: '/services/boutique-office-construction' }
        ]}
      />

      <ContentWrapper>

        {/* --- MORE THAN A STANDARD BUILD-OUT --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Commercial Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                More Than a <br /><span className="italic text-terracotta">Standard Build-Out</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  A successful boutique office balances appearance with everyday function. The layout should make it easy for employees to work, clients to navigate, and meetings to happen comfortably.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  Office spaces we can help with:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Reception & waiting areas',
                  'Private offices',
                  'Executive suites',
                  'Conference rooms',
                  'Flexible workspaces',
                  'Client consultation rooms',
                  'Creative studios',
                  'Custom built-in features'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </CinematicCard>

        {/* --- DESIGN THAT SUPPORTS WORKFLOW --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Design That Supports <span className="italic text-terracotta">Your Workflow</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Before construction begins, consider how people actually use the space. Do employees need quiet areas for focused work? Do clients regularly visit? Do you need private conversations, team meetings, or presentation areas?
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep font-medium italic border-l-2 border-terracotta/30 pl-4 py-1">
              These questions can influence the layout, partitions, lighting, acoustics, storage, and technology requirements.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Renovating an Existing <span className="italic text-terracotta">Office</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              A complete relocation is not always necessary. If your current location works for your business, an interior renovation may allow you to improve the space around your changing needs.
            </p>
            <h4 className="font-display text-xl text-forest mb-4">When Should You Renovate?</h4>
            <ul className="space-y-3 text-[15px] text-forest-deep/80 font-light">
              <li className="flex items-start gap-3"><span className="text-terracotta mt-1">✦</span> Your team has outgrown the existing layout</li>
              <li className="flex items-start gap-3"><span className="text-terracotta mt-1">✦</span> Clients need a better meeting environment</li>
              <li className="flex items-start gap-3"><span className="text-terracotta mt-1">✦</span> Your workspace no longer reflects your brand</li>
              <li className="flex items-start gap-3"><span className="text-terracotta mt-1">✦</span> Employees need more functional work areas</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* --- PROCESS (CINEMATIC) --- */}
        <CinematicCard>
          <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
            <span className="inline-block h-px w-10 bg-terracotta/60" /> Our Process
          </motion.div>
          <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
            A practical <span className="italic text-terracotta">construction process</span> for your business.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Understand the Business', desc: 'We start by learning how your company operates and what you want the office to accomplish.' },
              { title: 'Review the Space', desc: 'The existing property is considered before developing the proposed improvements.' },
              { title: 'Develop the Scope', desc: 'Layout changes, materials, finishes, systems, and construction requirements are defined.' },
              { title: 'Prepare for Construction', desc: 'Scheduling, materials, permits, inspections, and other applicable requirements are coordinated.' },
              { title: 'Complete the Build-Out', desc: 'The planned work is constructed and managed through completion.' },
              { title: 'Review Finished Space', desc: 'The completed office is reviewed before the project is turned over for use.' },
            ].map((step, i) => (
              <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Step 0{i + 1}</div>
                <h3 className="font-display text-[24px] text-linen mb-4">{step.title}</h3>
                <div className="h-px w-10 bg-linen/20 mb-4" />
                <p className="text-linen/70 text-[14px] leading-[1.7] font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </CinematicCard>

        {/* --- WHY CHOOSE / COST --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em] text-center">
              Office Construction Cost in <span className="italic text-terracotta">Bergen County</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light text-center mb-12">
              Office construction pricing depends on the project rather than the county alone. Factors can include the size of the office, existing conditions, demolition, partitions, electrical systems, lighting, HVAC, plumbing, flooring, millwork, finishes, and required approvals. A site-specific scope and estimate provide a more useful basis for decision-making.
            </motion.p>

            <motion.div variants={fadeIn} className="border-t border-forest/10 pt-10">
              <h3 className="font-display text-2xl text-forest mb-6 text-center">Frequently Asked <span className="italic text-terracotta">Questions</span></h3>
              <div className="border-t border-forest/15">
                {[
                  { q: 'What businesses are a good fit for boutique offices?', a: 'Professional practices, consultants, creative businesses, small firms, executive teams, and owner-operated companies can all benefit from a customized office environment.' },
                  { q: 'Can a small office still have a premium feel?', a: 'Yes. Good space planning, lighting, materials, finishes, and detailing can make a smaller office feel polished without unnecessary complexity.' },
                  { q: 'Can you renovate an occupied office?', a: 'Possibly. The approach depends on the scope and areas affected. Construction planning can take business operations into account.' },
                  { q: 'Do office renovations require permits?', a: 'Some commercial improvements require permits and approvals, depending on the work and property. Requirements should be evaluated before construction.' },
                  { q: 'How do I start?', a: 'Contact Haven M Construction with your property location, approximate office size, and goals for the space.' },
                ].map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="border-b border-forest/10 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full text-left py-6 sm:py-8 flex items-start sm:items-center justify-between focus:outline-none group gap-6"
                      >
                        <h4 className="font-display text-[18px] sm:text-[22px] leading-snug text-forest group-hover:text-terracotta transition-colors pt-1 sm:pt-0">
                          {faq.q}
                        </h4>
                        <span className={`flex-shrink-0 w-10 h-10 rounded-full border border-forest/15 flex items-center justify-center text-forest transition-transform duration-500 mt-1 sm:mt-0 ${isOpen ? 'rotate-45 bg-forest/5' : ''}`}>
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                      <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}>
                        <p className="text-forest-deep/80 text-[15px] sm:text-[16px] leading-[1.8] font-light pb-8 pr-4 sm:pr-20">{faq.a}</p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </GlassCard>

      </ContentWrapper>

      <PremiumCTA
        title={<>Boutique Office Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Bergen County</span></>}
        description={
          <>
            <p>Haven M Construction provides boutique office construction and renovation services to Bergen County businesses from our base in Verona, New Jersey.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Planning a new office or renovating your current workspace? Contact Haven M Construction to discuss your project.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
