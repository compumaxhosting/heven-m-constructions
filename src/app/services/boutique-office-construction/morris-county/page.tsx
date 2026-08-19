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

export default function MorrisCountyOfficePage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="MORRIS COUNTY, NJ"
        title={<>Boutique Office Construction in <br /><span className="italic text-terracotta">Morris County</span></>}
        description="Custom Commercial Spaces for Independent Businesses. A boutique office should be designed around the business inside it. Haven M Construction provides boutique office construction and renovation services in Morris County, NJ, helping small businesses and professional firms create workspaces that combine practical function with a distinctive visual identity."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Boutique Office', path: '/services/boutique-office-construction' }
        ]}
      />

      <ContentWrapper>

        {/* --- OFFICE PROJECTS --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Commercial Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Office Projects We <br /><span className="italic text-terracotta">Can Help With</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Our boutique office construction services can include everything from professional renovations to custom commercial interiors. The starting point should always be your specific business requirements.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  Projects we can help with:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Executive office renovations',
                  'Small firm headquarters',
                  'Creative studio construction',
                  'Professional office renovations',
                  'Office interior build-outs',
                  'Reception & conference rooms',
                  'Private client meeting rooms',
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

        {/* --- BUILD AROUND YOUR BRAND & RENOVATION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Build Around <span className="italic text-terracotta">Your Brand</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              An office needs to accommodate more than desks. It may need to support focused work, private conversations, client meetings, presentations, collaboration, storage, and employee interaction—all within the same footprint.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep font-medium italic border-l-2 border-terracotta/30 pl-4 py-1">
              The goal is to create a space that feels intentional and appropriate for your business.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Transforming an Existing <span className="italic text-terracotta">Commercial Space</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4">
              An existing office may already have the location and basic infrastructure your business needs. A renovation can focus on changing what is not working.
            </p>
            <h4 className="font-display text-xl text-forest mb-4">Depending on the property, that could mean:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {['Removing or adding partitions', 'Creating private offices', 'Improving reception', 'Expanding meeting space', 'Updating finishes', 'Reworking lighting', 'Improving storage', 'Creating flexible work areas'].map((item, i) => (
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
            Our Approach to <span className="italic text-terracotta">Office Construction</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Discovery', desc: 'We learn about your business, employees, clients, workflow, and objectives.' },
              { title: 'Existing-Space Review', desc: 'We consider the current configuration and conditions of the property.' },
              { title: 'Project Development', desc: 'The layout, materials, finishes, and construction requirements are brought together into a defined scope.' },
              { title: 'Pre-Construction', desc: 'The project schedule, materials, applicable permits, and other requirements are coordinated.' },
              { title: 'Construction', desc: 'The office improvements are completed according to the approved project scope.' },
              { title: 'Completion', desc: 'The finished work is reviewed and prepared for occupancy or continued business use.' },
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
              How Much Does a <span className="italic text-terracotta">Boutique Office Cost?</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light text-center mb-12">
              The investment depends on the project. Important variables include office size, existing layout, demolition, new partitions, electrical, lighting, HVAC, plumbing, flooring, millwork, finish materials, fixtures, permit requirements, and project complexity.
            </motion.p>

            <motion.div variants={fadeIn} className="border-t border-forest/10 pt-10">
              <h3 className="font-display text-2xl text-forest mb-6 text-center">Frequently Asked <span className="italic text-terracotta">Questions</span></h3>
              <div className="border-t border-forest/15">
                {[
                  { q: 'What is a boutique office?', a: 'It is a customized professional workspace designed around a specific company\'s needs, identity, and workflow rather than a generic layout.' },
                  { q: 'Can you create a small firm headquarters?', a: 'Yes. A small headquarters can combine executive offices, work areas, reception, conference rooms, storage, and client spaces within a coordinated design.' },
                  { q: 'Can you renovate an older office?', a: 'Potentially. The existing condition needs to be assessed before determining what can be renovated, replaced, or reconfigured.' },
                  { q: 'What affects office renovation costs?', a: 'The main factors include the size of the space, existing conditions, construction scope, building systems, materials, finishes, and required approvals.' },
                  { q: 'How can I prepare for an office consultation?', a: 'Identify what currently works, what does not, how many people use the space, and what you want the renovated office to accomplish.' },
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
        title={<>Boutique Office Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Morris County</span></>}
        description={
          <>
            <p>Haven M Construction serves Morris County businesses from Verona, New Jersey.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">If your current office no longer fits your business, contact Haven M Construction to discuss your project.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
