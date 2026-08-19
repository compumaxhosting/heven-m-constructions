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

export default function VeterinaryHospitalEssexCountyPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="ESSEX COUNTY, NJ"
        title={<>Veterinary Hospital Construction in <br /><span className="italic text-terracotta">Essex County, NJ</span></>}
        description="Purpose-Built Construction for Veterinary Practices. A veterinary hospital must bring clinical areas, patient care, staff workflow, equipment, client spaces, and building systems together in one functional environment. Hevan M Constructions provides veterinary hospital construction, clinic build-outs, renovations, and facility improvements in Essex County, NJ."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Veterinary Hospital', path: '/veterinary-hospital-construction-nj' }
        ]}
      />

      <ContentWrapper>

        {/* --- PLAN AROUND DAILY OPERATIONS --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Clinical Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Plan Around <br /><span className="italic text-terracotta">Daily Operations</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Whether you are developing a new practice or improving an existing facility, construction should begin with a clear understanding of how the space will be used.
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
                  'Pre-op and recovery spaces',
                  'Diagnostic areas',
                  'Laboratory space',
                  'Patient hospitalization',
                  'Animal holding areas',
                  'Pharmacy and storage',
                  'Staff workspaces',
                  'Administrative offices'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeIn} className="mt-6 text-sm text-linen/50 italic text-center">
                Not every practice needs the same combination of spaces. The construction plan should reflect the actual operation of the hospital.
              </motion.p>
            </div>
          </div>
        </CinematicCard>

        {/* --- CLINIC BUILD-OUTS & SURGICAL SPACES --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Construction for <span className="italic text-terracotta">Surgical Spaces</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Surgical areas require coordination between clinical workflow, room configuration, equipment, utilities, and supporting spaces.
            </p>
            <h3 className="font-display text-2xl text-forest mb-4">Planning may include:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[15px] text-forest-deep/80 font-light">
              {['Surgical rooms', 'Pre-op areas', 'Recovery', 'Equipment locations', 'Storage', 'Lighting', 'Electrical requirements', 'Plumbing', 'Mechanical systems', 'Staff circulation'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-forest-deep/70 italic">Clinical requirements should be established with the veterinary practice and appropriate design professionals.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Veterinary Clinic <span className="italic text-terracotta">Build-Outs</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              An existing commercial property can sometimes be converted into a veterinary practice when the building and proposed use are suitable.
            </p>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4">
              A veterinary build-out may involve interior demolition and reconfiguration, examination rooms, treatment areas, reception, plumbing, electrical systems, lighting, HVAC modifications, flooring and wall finishes, casework and storage, and clinical support spaces.
            </p>
            <p className="text-[14px] font-medium text-forest border-t border-forest/10 pt-4">
              Existing conditions should be evaluated before establishing the final scope.
            </p>
          </motion.div>
        </motion.div>

        {/* --- MATERIALS & COST --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">Materials for <br />Veterinary Environments</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6 flex-grow">
              Animal hospitals experience frequent cleaning, moisture, traffic, and demanding daily use. For that reason, finishes should be selected with the intended application in mind. Relevant considerations: Durability, Cleanability, Moisture resistance, Maintenance, Safety, Traffic, Long-term performance.
            </p>
            <p className="text-[14px] italic text-forest-deep/70 border-t border-forest/10 pt-4">Different rooms may require different material approaches.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">Construction Cost in <br />Essex County</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4 flex-grow">
              Veterinary construction costs vary by project and property. Factors can include building size, new construction or renovation, existing conditions, number of clinical spaces, surgical requirements, plumbing & electrical, HVAC, flooring and finishes, millwork, equipment coordination, accessibility, and permitting.
            </p>
            <p className="text-[14px] italic text-forest-deep/70 border-t border-forest/10 pt-4">A site evaluation and defined scope are needed for a meaningful construction estimate.</p>
          </motion.div>
        </motion.div>

        {/* --- VETERINARY RENOVATION --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em] text-center">
              Veterinary <span className="italic text-terracotta">Renovation</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light text-center mb-8">
              An established practice may need additional capacity without moving to another property. Renovation can help address issues such as limited examination rooms, inefficient patient flow, insufficient treatment space, outdated finishes, inadequate storage, changing staff requirements, and additional clinical services.
            </motion.p>
            <motion.p variants={fadeIn} className="text-center text-[16px] leading-[1.8] text-forest-deep/90 font-medium max-w-3xl mx-auto italic border-t border-forest/10 pt-8">
              If the practice remains operational during construction, phasing and site access may need to be considered.
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
                { q: 'How much does it cost to build a veterinary hospital in Essex County?', a: 'There is no universal price. Size, building conditions, clinical requirements, equipment, finishes, utilities, and project complexity all affect the cost.' },
                { q: 'Can you convert an existing commercial space into a veterinary clinic?', a: "Potentially. The property's layout, infrastructure, condition, intended use, and applicable requirements need to be evaluated." },
                { q: 'Can you renovate an operating veterinary hospital?', a: 'Renovation may be possible while a practice remains open, but the construction plan may need to address phasing, access, patient safety, and separation from active construction areas.' },
                { q: 'What should I consider before building a veterinary hospital?', a: 'Start with your services, patient volume, equipment, room requirements, staff workflow, storage, budget, property, and potential future growth.' },
                { q: 'Do veterinary hospitals require specialized construction?', a: 'Veterinary facilities can have specialized needs involving clinical workflow, animal handling, sanitation, ventilation, plumbing, electrical systems, equipment, and durable finishes.' },
                { q: 'How long does veterinary hospital construction take?', a: 'The timeline depends on the size, design, permitting, existing conditions, materials, equipment, and construction complexity of the project.' },
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
        title={<>Veterinary Hospital Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Essex County</span></>}
        description={
          <>
            <p>Hevan M Constructions is located in Verona, New Jersey and serves veterinary practices throughout Essex County.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Planning a new veterinary hospital, clinic build-out, renovation, or expansion? Contact Hevan M Constructions to discuss your project.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
