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

export default function PassaicCountyOfficePage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="PASSAIC COUNTY, NJ"
        title={<>Boutique Office Construction in <br /><span className="italic text-terracotta">Passaic County</span></>}
        description="Create a Workspace That Fits the Way You Work. Your office should support your business—not force your business to work around an inefficient layout. Haven M Construction provides boutique office construction and renovation services in Passaic County, NJ."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Boutique Office', path: '/services/boutique-office-construction' }
        ]}
      />

      <ContentWrapper>

        {/* --- OFFICE SERVICES --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Commercial Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Office Construction <br /><span className="italic text-terracotta">Services</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Helping business owners create practical, distinctive spaces for work, meetings, clients, and growth. From business needs to physical space, the construction plan should reflect how the office needs to operate.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  Services we can help with:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Executive offices',
                  'Boutique professional offices',
                  'Creative studios',
                  'Small company headquarters',
                  'Client reception areas',
                  'Conference rooms',
                  'Private offices',
                  'Custom office improvements'
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

        {/* --- BUSINESS NEEDS TO PHYSICAL SPACE & RENOVATION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              From Business Needs to <span className="italic text-terracotta">Physical Space</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Before choosing finishes or furniture, think about how the space needs to operate. A professional office may require privacy and client meeting rooms. A creative studio may need flexible areas, storage, and specialized lighting.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep font-medium italic border-l-2 border-terracotta/30 pl-4 py-1">
              An owner-operated company may need an executive office combined with a compact team workspace. The construction plan should reflect those differences.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-4">
              Construction With Business Operations in <span className="italic text-terracotta">Mind</span>
            </h3>
            <p className="text-[14px] leading-[1.7] text-forest-deep/80 font-light mb-6">An office renovation can affect the way a company works during construction. Planning should consider:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {['Which areas remain accessible', 'Where construction can occur', 'Material deliveries', 'Employee access', 'Client access', 'Noise and disruption', 'Project sequencing', 'Final move-in requirements'].map((item, i) => (
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
            How the project <span className="italic text-terracotta">comes together.</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Consultation', desc: 'We learn about your business and what you want the office to accomplish.' },
              { title: 'Property Review', desc: 'The existing space is considered to identify opportunities and limitations.' },
              { title: 'Project Planning', desc: 'The proposed layout, construction scope, materials, and finishes are coordinated.' },
              { title: 'Pre-Construction', desc: 'Scheduling, materials, applicable permits, and other requirements are organized.' },
              { title: 'Construction', desc: 'The approved improvements are completed through the construction phase.' },
              { title: 'Completion', desc: 'The finished space is reviewed before the project is considered complete.' },
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
              What Does Boutique <span className="italic text-terracotta">Office Construction Cost?</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light text-center mb-12">
              The cost of an office project depends on its specific requirements. Factors can include size, existing condition, demolition, partitions, electrical systems, lighting, HVAC, plumbing, flooring, millwork, fixtures, finish materials, permitting, and construction complexity.
            </motion.p>

            <motion.div variants={fadeIn} className="border-t border-forest/10 pt-10">
              <h3 className="font-display text-2xl text-forest mb-6 text-center">Frequently Asked <span className="italic text-terracotta">Questions</span></h3>
              <div className="border-t border-forest/15">
                {[
                  { q: 'What types of businesses use boutique offices?', a: 'Boutique offices can work well for professional firms, consultants, creative businesses, small companies, executive teams, and owner-operated businesses.' },
                  { q: 'Can you convert an existing commercial space into an office?', a: 'Depending on the property\'s condition and applicable requirements, an existing space may be renovated or built out for office use.' },
                  { q: 'Can you design space for a growing team?', a: 'Yes. Office planning can incorporate a combination of individual work areas, shared spaces, meeting rooms, storage, and future flexibility.' },
                  { q: 'How long does an office renovation take?', a: 'There is no universal timeline. The scope, permitting, materials, building conditions, and complexity of the project all affect the schedule.' },
                  { q: 'What is the first step?', a: 'Contact Haven M Construction with your property information and an overview of what you want to change. A consultation can establish the appropriate next steps.' },
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
        title={<>Boutique Office Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Passaic County</span></>}
        description={
          <>
            <p>Haven M Construction helps Passaic County businesses create distinctive, functional workspaces through customized office construction and renovation.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Planning an office renovation, build-out, executive suite, or creative studio? Contact Haven M Construction to discuss your project.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
