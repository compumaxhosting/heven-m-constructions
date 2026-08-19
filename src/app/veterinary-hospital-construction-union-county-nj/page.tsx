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
} from '../../components/ServiceLayouts';

export default function VeterinaryHospitalUnionCountyPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="UNION COUNTY, NJ"
        title={<>Veterinary Hospital Construction in <br /><span className="italic text-terracotta">Union County, NJ</span></>}
        description="Create a Veterinary Facility That Works for Staff, Patients, and Clients. A veterinary hospital must accommodate more than medical rooms. The facility also needs to support staff movement, patient handling, equipment, storage, sanitation, and client interaction."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Veterinary Hospital', path: '/veterinary-hospital-construction-nj' }
        ]}
      />

      <ContentWrapper>

        {/* --- PLAN THE FACILITY AROUND PATIENT FLOW --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Clinical Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Plan the Facility <br /><span className="italic text-terracotta">Around Patient Flow</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  The physical arrangement of a veterinary hospital can influence daily operations. The important point is to plan the facility around actual clinical operations.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  Key spatial areas:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Reception',
                  'Examination',
                  'Treatment',
                  'Diagnostics',
                  'Surgery',
                  'Recovery',
                  'Hospitalization',
                  'Staff areas'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeIn} className="mt-6 text-sm text-linen/50 italic text-center">
                Not every practice requires every area, and the ideal arrangement depends on the services offered.
              </motion.p>
            </div>
          </div>
        </CinematicCard>

        {/* --- VETERINARY CONSTRUCTION SERVICES --- */}
        <CinematicCard>
          <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
            <span className="inline-block h-px w-10 bg-terracotta/60" /> Construction Services
          </motion.div>
          <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-3xl">
            Veterinary <br className="hidden md:block" /><span className="italic text-terracotta">Construction Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'New Veterinary Hospitals', desc: 'Build a new facility around the practice\'s intended services, capacity, equipment, and workflow.' },
              { title: 'Veterinary Clinic Build-Outs', desc: 'Convert an appropriate existing commercial interior into a functional veterinary practice.' },
              { title: 'Hospital Renovations', desc: 'Improve an existing facility through reconfiguration, updated finishes, system improvements, or additional clinical space.' },
              { title: 'Practice Expansions', desc: 'Add examination rooms, treatment areas, staff space, storage, or other capacity when the property allows.' },
            ].map((step, i) => (
              <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                <h3 className="font-display text-[26px] text-linen mb-4">{step.title}</h3>
                <div className="h-px w-10 bg-linen/20 mb-4" />
                <p className="text-linen/70 text-[15px] leading-[1.7] font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </CinematicCard>

        {/* --- BUILD-OUTS & EXAM ROOMS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-6">
              Build-Outs for <br /><span className="italic text-terracotta">Veterinary Practices</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4 flex-grow">
              Converting an existing commercial interior into a veterinary clinic involves more than installing partitions. The project may require coordination of:
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-[14px] text-forest-deep/80 mb-4">
              {['Plumbing', 'Electrical', 'Lighting', 'HVAC', 'Flooring', 'Wall finishes', 'Doors', 'Casework', 'Storage', 'Clinical equipment', 'Reception areas'].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-terracotta/60 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
            <p className="text-[14px] italic text-forest-deep/70 border-t border-forest/10 pt-4">
              Existing building conditions should be assessed before the construction scope is finalized.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-6">
              Creating Better <span className="italic text-terracotta">Examination and Treatment Areas</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4 flex-grow">
              Examination and treatment rooms need to support the veterinary team without creating unnecessary movement. Planning can consider:
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-[14px] text-forest-deep/80 mb-4">
              {['Room accessibility', 'Equipment placement', 'Storage', 'Work surfaces', 'Electrical outlets', 'Lighting', 'Plumbing', 'Staff circulation', 'Patient movement', 'Cleanability'].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive/80 flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
            <p className="text-[14px] italic text-forest-deep/70 border-t border-forest/10 pt-4">
              The exact specifications should be determined according to the practice's clinical requirements.
            </p>
          </motion.div>
        </motion.div>

        {/* --- RENOVATION & FUTURE GROWTH --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Renovating an Operating <br /><span className="italic text-terracotta">Veterinary Practice</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Renovating an existing hospital can be more complicated when the practice continues seeing patients. Project planning may therefore need to consider:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-[15px] text-forest-deep/80 font-light">
              {['Construction phasing', 'Temporary access', 'Separation of construction areas', 'Material deliveries', 'Staff movement', 'Patient safety', 'Client access', 'Scheduling'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-terracotta mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-forest font-medium pt-4 border-t border-forest/10">The appropriate approach depends on the scope and operating conditions.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Building for <span className="italic text-terracotta">Future Growth</span>
            </h3>
            <div className="space-y-4 text-[15px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              <p>Veterinary practices can change over time.</p>
              <p>When planning a new facility or major renovation, consider whether the space can accommodate future needs such as additional examination rooms, larger treatment capacity, expanded staff areas, or new equipment.</p>
              <p className="font-medium text-forest pt-2 border-t border-forest/10">Planning for flexibility does not mean building unnecessary space. It means understanding where future changes may affect today's construction decisions.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- COST --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Veterinary Hospital <span className="italic text-terracotta">Construction Costs</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              There is no fixed cost for veterinary facility construction in Union County. The investment depends on factors such as:
            </motion.p>
            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-left max-w-3xl mx-auto mb-10">
              {['Facility size', 'Property condition', 'Construction type', 'Clinical requirements', 'Number of rooms', 'Mechanical systems', 'Electrical work', 'Plumbing', 'Finishes', 'Equipment', 'Accessibility', 'Permitting', 'Project complexity'].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span>
                  <span className="text-[15px] text-forest-deep/90">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-forest-deep/90 font-medium italic border-t border-forest/10 pt-8">
              A project-specific scope is necessary for accurate budgeting.
            </motion.p>
          </div>
        </GlassCard>

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
                { q: 'Can you build a veterinary clinic in an existing building?', a: "Potentially. The building's condition, configuration, infrastructure, intended use, and applicable requirements must be evaluated." },
                { q: 'What should a veterinary hospital include?', a: "There is no universal layout. Requirements depend on services, patient volume, staffing, equipment, and clinical workflow." },
                { q: 'Can you renovate an existing animal hospital?', a: 'Yes, renovation can include reconfiguration, new rooms, updated finishes, system improvements, or additional clinical capacity.' },
                { q: 'How should a veterinary hospital be planned?', a: 'Start with services and workflow, then determine room requirements, equipment, utilities, circulation, storage, client areas, and construction needs.' },
                { q: 'Can you help with a hospital expansion?', a: 'Expansion can be considered when the existing building and property support the proposed work.' },
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
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4"><path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
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
        title={<>Veterinary Hospital Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Union County, NJ</span></>}
        description={
          <>
            <p>Hevan M Constructions is based in Verona, New Jersey and serves veterinary practices in Union County and surrounding North Jersey communities.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Planning a veterinary clinic, animal hospital, renovation, or expansion? Contact Hevan M Constructions to discuss your facility.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
