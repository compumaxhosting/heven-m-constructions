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

export default function UnionCountyOfficePage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="UNION COUNTY, NJ"
        title={<>Boutique Office Construction in <br /><span className="italic text-terracotta">Union County</span></>}
        description="A More Intentional Approach to Office Construction. The right office can help your business feel organized, professional, and ready for the people who use it every day. Haven M Construction provides boutique office construction and renovation services in Union County, NJ."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Boutique Office', path: '/services/boutique-office-construction' }
        ]}
      />

      <ContentWrapper>

        {/* --- BOUTIQUE OFFICE SERVICES --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Commercial Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Boutique Office <br /><span className="italic text-terracotta">Services</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Creating customized environments for small firms, professional businesses, executive teams, and creative companies. We can help with a variety of professional office projects, from custom interior improvements to complete commercial interior build-outs.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  Services we can help with:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Office renovations',
                  'Commercial build-outs',
                  'Executive suites',
                  'Private offices',
                  'Reception areas',
                  'Conference rooms',
                  'Client meeting spaces',
                  'Creative studios',
                  'Small firm headquarters',
                  'Office reconfigurations'
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

        {/* --- WHAT MAKES AN OFFICE WORK WELL --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Create a Better <span className="italic text-terracotta">First Impression</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              For businesses that meet clients in person, the office can be an extension of the brand. A reception area should feel welcoming. A conference room should feel comfortable and professional. Private offices should provide the right balance of privacy and accessibility.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep font-medium italic border-l-2 border-terracotta/30 pl-4 py-1">
              Materials and finishes can support that experience without making the space unnecessarily complicated.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-4">
              Making a Small Office <span className="italic text-terracotta">Feel Larger</span>
            </h3>
            <p className="text-[14px] leading-[1.7] text-forest-deep/80 font-light mb-6">A boutique office does not need a large footprint to feel comfortable. Thoughtful planning can improve the perception and functionality of a smaller space through:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {['Better circulation', 'Strategic partitions', 'Appropriate lighting', 'Integrated storage', 'Flexible work areas', 'Consistent finishes', 'Efficient meeting spaces'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[14px] text-forest-deep/90 py-1 border-b border-forest/5 last:border-0">
                  <span className="w-1.5 h-px bg-terracotta/50 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- WHAT MAKES AN OFFICE WORK --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              What Makes an <span className="italic text-terracotta">Office Work Well?</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-10">
              Good office construction starts with function. These practical decisions can then be combined with materials and finishes that represent your business.
            </motion.p>
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-2xl mx-auto mb-10">
              {[
                'How employees move through the office',
                'Where clients are welcomed',
                'Where private conversations happen',
                'How teams collaborate',
                'Where focused work takes place',
                'How equipment is stored',
                'Where meetings are held',
                'How lighting supports the space'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">✦</span>
                  <span className="text-[15px] text-forest-deep/90">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </GlassCard>

        {/* --- PROCESS --- */}
        <CinematicCard>
          <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
            <span className="inline-block h-px w-10 bg-terracotta/60" /> Our Process
          </motion.div>
          <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
            From first conversation <span className="italic text-terracotta">to finished office.</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Define the Vision', desc: 'We discuss the business, the space, and the outcome you want.' },
              { title: 'Examine the Office', desc: 'The current layout and condition help determine what can be retained, changed, or rebuilt.' },
              { title: 'Plan Improvements', desc: 'The proposed layout, materials, finishes, and construction requirements are developed.' },
              { title: 'Organize the Project', desc: 'The scope, scheduling, materials, and applicable approvals are coordinated.' },
              { title: 'Construct the Space', desc: 'The planned renovation or build-out is completed through the construction phase.' },
              { title: 'Final Review', desc: 'The finished office is reviewed and prepared for use.' },
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

        {/* --- FAQ --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="sticky top-32 lg:pr-8">
              <h2 className="font-display text-4xl sm:text-[3.5rem] leading-[1.05] text-forest mb-6 tracking-[-0.02em]">
                Office Renovation Costs in <br className="hidden lg:block"/><span className="italic text-terracotta">Union County</span>
              </h2>
              <div className="w-16 h-px bg-terracotta/30 mb-6" />
              <p className="text-[16px] leading-[1.8] text-forest-deep/80 font-light">
                No two office projects cost the same. The final investment can depend on the building's existing condition, office size, demolition, partitions, electrical and lighting work, HVAC, plumbing, flooring, millwork, finishes, and project complexity. A site-specific assessment and detailed scope are necessary for meaningful pricing.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-forest/15">
              {[
                { q: 'Can you customize an office for a small business?', a: 'Yes. Boutique office construction is particularly suited to businesses that want their space designed around their specific workflow and identity.' },
                { q: 'Can an office include both private and open work areas?', a: 'Yes. The layout can combine different workspace types depending on the company\'s needs.' },
                { q: 'Can you create a client-facing reception area?', a: 'Yes. Reception and waiting areas can be incorporated into a larger office renovation or build-out.' },
                { q: 'Is office construction different from residential remodeling?', a: 'Yes. Commercial projects can involve different building, accessibility, occupancy, permitting, and operational considerations.' },
                { q: 'How do I request an office project estimate?', a: 'Contact Haven M Construction with your property location, office requirements, and the type of renovation or build-out you are considering.' },
              ].map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div variants={fadeIn} key={i} className="border-b border-forest/10 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left py-6 sm:py-8 flex items-start sm:items-center justify-between focus:outline-none group gap-6"
                    >
                      <h3 className="font-display text-[20px] sm:text-[24px] leading-snug text-forest group-hover:text-terracotta transition-colors pt-1 sm:pt-0">{faq.q}</h3>
                      <span className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-forest/15 flex items-center justify-center text-forest transition-transform duration-500 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] mt-1 sm:mt-0 ${isOpen ? 'rotate-45 bg-forest/5' : ''}`}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                          <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}>
                      <p className="text-forest-deep/80 text-[16px] sm:text-[17px] leading-[1.8] font-light pb-8 sm:pb-10 pr-4 sm:pr-20">{faq.a}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </ContentWrapper>

      <PremiumCTA
        title={<>Boutique Office Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Union County</span></>}
        description={
          <>
            <p>Haven M Construction provides customized office construction and renovation services in Union County, NJ.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Ready to create an office that works better for your business? Contact Haven M Construction to discuss your project.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
