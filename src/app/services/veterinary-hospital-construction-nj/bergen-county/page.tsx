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

export default function VeterinaryHospitalBergenCountyPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="BERGEN COUNTY, NJ"
        title={<>Veterinary Hospital Construction in <br /><span className="italic text-terracotta">Bergen County, NJ</span></>}
        description="Build a Veterinary Facility Around Your Practice. A veterinary hospital needs to support clinical care, staff workflow, animal handling, client interaction, and the equipment used every day. Hevan M Constructions provides veterinary hospital construction and renovation services in Bergen County, NJ."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Veterinary Hospital', path: '/veterinary-hospital-construction-nj' }
        ]}
      />

      <ContentWrapper>

        {/* --- DESIGNED FOR REAL-WORLD WORKFLOW --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Clinical Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Designed for <br /><span className="italic text-terracotta">Real-World Workflow</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Whether you are planning a new veterinary clinic, expanding an existing practice, or converting a suitable commercial space, we help coordinate construction around the intended use of the facility.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  Facility areas we can help with:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Reception and waiting areas',
                  'Examination rooms',
                  'Treatment areas',
                  'Surgical rooms',
                  'Pre-op and recovery areas',
                  'Diagnostic spaces',
                  'Laboratory areas',
                  'Patient hospitalization',
                  'Animal holding areas',
                  'Pharmacy and storage',
                  'Staff areas',
                  'Administrative offices'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeIn} className="mt-6 text-sm text-linen/50 italic text-center">
                The appropriate spaces depend on the services and operating model of the veterinary practice.
              </motion.p>
            </div>
          </div>
        </CinematicCard>

        {/* --- CLINIC BUILD-OUTS & SURGICAL AREAS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Construction for <span className="italic text-terracotta">Surgical Areas</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Surgical environments require careful coordination between the room layout, equipment, utilities, staff movement, and adjacent clinical spaces.
            </p>
            <h3 className="font-display text-2xl text-forest mb-4">Planning may address:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[15px] text-forest-deep/80 font-light">
              {['Surgical room configuration', 'Equipment locations', 'Electrical requirements', 'Lighting', 'Storage', 'Pre-operative areas', 'Recovery areas', 'Staff circulation', 'Cleaning/maintenance', 'Mechanical/ventilation'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-forest-deep/70 italic">Clinical specifications should be established with the veterinary practice and appropriate design professionals.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Veterinary Clinic <span className="italic text-terracotta">Build-Outs</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              An existing commercial property may provide an opportunity to create a veterinary practice without starting with a completely new building.
            </p>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              A build-out can involve interior reconfiguration, new examination rooms, treatment areas, plumbing, electrical work, lighting, HVAC modifications, durable flooring and wall finishes, reception improvements, storage, and specialized clinical areas.
            </p>
            <p className="text-[14px] font-medium text-forest border-t border-forest/10 pt-4">
              The existing building should be evaluated before determining whether it is suitable for the intended use.
            </p>
          </motion.div>
        </motion.div>

        {/* --- RENOVATING AN EXISTING HOSPITAL --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">Renovating an <br />Existing Hospital</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6 flex-grow">
              An established veterinary practice may need more examination rooms, improved treatment space, updated finishes, or a better patient and staff flow. Renovation can provide an opportunity to improve the facility while retaining an existing location.
            </p>
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-medium border-t border-forest/10 pt-6">
              The project may require careful sequencing when the practice remains operational.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">What Affects <br />Construction Cost?</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4 flex-grow">
              There is no standard price for veterinary construction. Costs can depend on facility size, new construction or renovation, existing building conditions, number of clinical rooms, surgical requirements, plumbing and electrical needs, HVAC, equipment requirements, finishes, millwork, accessibility, and permits.
            </p>
            <p className="text-[14px] italic text-forest-deep/70 border-t border-forest/10 pt-4">
              A property-specific scope is necessary for meaningful budgeting.
            </p>
          </motion.div>
        </motion.div>

        {/* --- FAQ --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em] text-center">
              Frequently Asked <span className="italic text-terracotta">Questions</span>
            </motion.h2>
            <div className="border-t border-forest/15 mt-8">
              {[
                { q: 'How much does it cost to build a veterinary hospital in Bergen County?', a: 'The cost varies substantially according to the building, size, clinical services, equipment, finishes, mechanical systems, and construction scope. A project-specific estimate is needed.' },
                { q: 'Can you convert an existing building into a veterinary clinic?', a: "Potentially. The property's physical condition, layout, infrastructure, intended use, and applicable requirements all need to be evaluated." },
                { q: 'Can you construct veterinary surgical areas?', a: 'Yes. Construction can include dedicated surgical spaces when they are part of the project\'s scope and appropriately planned.' },
                { q: 'What should be planned before construction?', a: 'Define your veterinary services, room requirements, equipment, patient volume, staff workflow, storage needs, budget, and future expansion goals.' },
                { q: 'Do veterinary facilities require special planning?', a: 'Yes. Animal care facilities can have specialized requirements involving clinical workflow, sanitation, ventilation, utilities, equipment, accessibility, and other building considerations.' },
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
          </div>
        </GlassCard>

      </ContentWrapper>

      <PremiumCTA
        title={<>Veterinary Hospital Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Bergen County</span></>}
        description={
          <>
            <p>Hevan M Constructions is based in Verona, NJ and serves Bergen County as part of our North Jersey service area.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Planning a veterinary clinic, animal hospital, renovation, or expansion? Contact Hevan M Constructions to discuss your project.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
