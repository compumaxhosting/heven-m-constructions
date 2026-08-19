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

export default function EssexCountyOfficePage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="ESSEX COUNTY, NJ"
        title={<>Boutique Office Construction in <br /><span className="italic text-terracotta">Essex County</span></>}
        description="Purpose-Built Office Spaces for Growing Businesses. A professional office should support the way your business operates while giving clients and employees the right first impression."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Boutique Office', path: '/services/boutique-office-construction' }
        ]}
      />

      <ContentWrapper>

        {/* --- BUILD AROUND YOUR BUSINESS --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Commercial Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Build an Office <br /><span className="italic text-terracotta">Around Your Business</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Haven M Construction provides boutique office construction and renovation services in Essex County, NJ, helping business owners create distinctive workspaces for professional practices, creative studios, executive offices, and small firms.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  A boutique office is planned around your business, your clients, and your daily operations:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Private offices',
                  'Executive suites',
                  'Reception areas',
                  'Conference rooms',
                  'Client meeting spaces',
                  'Creative studios',
                  'Open work areas',
                  'Custom commercial interiors'
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

        {/* --- CLIENT EXPERIENCE & RENOVATION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Creating the Right <span className="italic text-terracotta">Client Experience</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              For many small businesses, the office is part of the customer experience. A thoughtfully designed entrance can establish the tone before a meeting begins. A comfortable conference room can improve client interactions.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep font-medium italic border-l-2 border-terracotta/30 pl-4 py-1">
              Design decisions should consider both how the office looks and how it functions.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Office Renovation for <span className="italic text-terracotta">Essex County Businesses</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              If your existing office has the right location but the wrong layout, renovation may be a better solution than moving. An office renovation can transform an outdated or inefficient space by improving the functional layout.
            </p>
            <h4 className="font-display text-xl text-forest mb-4">Possible Improvements Include:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {['Room configuration', 'Lighting', 'Flooring', 'Walls and partitions', 'Reception areas', 'Meeting spaces', 'Electrical capacity', 'Finishes'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[14px] text-forest-deep/90 py-1 border-b border-forest/5 last:border-0">
                  <span className="w-1.5 h-px bg-terracotta/50 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- PROCESS --- */}
        <CinematicCard>
          <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
            <span className="inline-block h-px w-10 bg-terracotta/60" /> Our Process
          </motion.div>
          <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
            From <span className="italic text-terracotta">existing space</span> to finished office.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Consultation', desc: 'We discuss your business, the existing space, your goals, and what you want the finished office to accomplish.' },
              { title: 'Space Assessment', desc: 'The property is evaluated to understand its current layout and construction conditions.' },
              { title: 'Planning', desc: 'The proposed layout, finishes, materials, and construction requirements are coordinated around your needs.' },
              { title: 'Construction Planning', desc: 'The project scope, schedule, materials, and applicable approvals are addressed before construction begins.' },
              { title: 'Build-Out or Renovation', desc: 'The planned improvements are completed and coordinated through construction.' },
              { title: 'Final Completion', desc: 'The finished space is reviewed and prepared for your business to use.' },
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

        {/* --- COST & FAQ --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em] text-center">
              Cost of Boutique Office Construction in <span className="italic text-terracotta">Essex County</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light text-center mb-12">
              There is no universal price for an office construction project. Costs can depend on square footage, existing conditions, demolition, partitions, electrical and lighting, plumbing, HVAC, flooring, millwork, finishes, permits, and overall complexity.
            </motion.p>

            <motion.div variants={fadeIn} className="border-t border-forest/10 pt-10">
              <h3 className="font-display text-2xl text-forest mb-6 text-center">Frequently Asked <span className="italic text-terracotta">Questions</span></h3>
              <div className="border-t border-forest/15">
                {[
                  { q: 'What is boutique office construction?', a: 'Boutique office construction creates a customized professional workspace around a company\'s brand, workflow, employees, and clients.' },
                  { q: 'Can an existing Essex County office be renovated?', a: 'Yes. Depending on the property and scope, an existing office can be reconfigured with new rooms, finishes, lighting, work areas, and other improvements.' },
                  { q: 'Can you build executive offices?', a: 'Yes. Private executive offices can be incorporated into a larger office renovation or commercial build-out.' },
                  { q: 'Can you create a creative studio?', a: 'Yes. A creative studio can be planned around the specific workflow, equipment, storage, lighting, and collaboration needs of the business.' },
                  { q: 'How much does office construction cost?', a: 'Costs vary by property, size, materials, building systems, finishes, and scope. A project-specific estimate is more useful than a generic price.' },
                ].map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="border-b border-forest/10 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full text-left py-6 sm:py-8 flex items-start sm:items-center justify-between focus:outline-none group gap-6"
                      >
                        <h4 className="font-display text-[18px] sm:text-[22px] leading-snug text-forest group-hover:text-terracotta transition-colors pt-1 sm:pt-0">{faq.q}</h4>
                        <span className={`flex-shrink-0 w-10 h-10 rounded-full border border-forest/15 flex items-center justify-center text-forest transition-transform duration-500 mt-1 sm:mt-0 ${isOpen ? 'rotate-45 bg-forest/5' : ''}`}>
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
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
        title={<>Boutique Office Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Essex County</span></>}
        description={
          <>
            <p>Haven M Construction is based in Verona, New Jersey and provides boutique office construction and renovation services in Essex County.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Ready to create a workspace that fits your business? Contact Haven M Construction to discuss your project.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
