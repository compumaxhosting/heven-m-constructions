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

export default function VeterinaryHospitalPassaicCountyPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="PASSAIC COUNTY, NJ"
        title={<>Veterinary Hospital Construction in <br /><span className="italic text-terracotta">Passaic County, NJ</span></>}
        description="Build a Veterinary Facility for Efficient Patient Care. Veterinary hospitals combine medical treatment, animal handling, diagnostics, surgery, recovery, client service, and administrative work. The construction needs to accommodate all of these functions without making the facility unnecessarily complicated."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Veterinary Hospital', path: '/veterinary-hospital-construction-nj' }
        ]}
      />

      <ContentWrapper>

        {/* --- HOW THE HOSPITAL WILL OPERATE --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Clinical Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                How the Hospital <br /><span className="italic text-terracotta">Will Operate</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Hevan M Constructions provides veterinary hospital construction and renovation services in Passaic County, NJ, serving veterinary practices from Verona, New Jersey. A veterinary facility should be planned around movement and relationships between spaces.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  Key spatial relationships to consider:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Reception and examination',
                  'Examination and treatment',
                  'Treatment and diagnostics',
                  'Surgery and recovery',
                  'Hospitalization and treatment',
                  'Staff areas and clinical spaces',
                  'Storage and points of use'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeIn} className="mt-6 text-sm text-linen/50 italic text-center">
                The right configuration depends on the veterinary services provided.
              </motion.p>
            </div>
          </div>
        </CinematicCard>

        {/* --- CONSTRUCTION SERVICES (CINEMATIC) --- */}
        <CinematicCard>
          <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
            <span className="inline-block h-px w-10 bg-terracotta/60" /> Construction Services
          </motion.div>
          <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-3xl">
            Veterinary Hospital <br className="hidden md:block" /><span className="italic text-terracotta">Construction Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'New Animal Hospitals', desc: "Construct a new facility around the practice's intended services, capacity, equipment, and workflow." },
              { title: 'Veterinary Clinic Build-Outs', desc: 'Convert an appropriate existing commercial interior into a functional veterinary practice.' },
              { title: 'Veterinary Hospital Renovations', desc: 'Improve an existing facility through reconfiguration, updated finishes, system improvements, or additional clinical space.' },
              { title: 'Veterinary Practice Expansions', desc: 'Add examination rooms, treatment areas, staff space, storage, or other capacity when the property allows.' },
            ].map((step, i) => (
              <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                <h3 className="font-display text-[26px] text-linen mb-4">{step.title}</h3>
                <div className="h-px w-10 bg-linen/20 mb-4" />
                <p className="text-linen/70 text-[15px] leading-[1.7] font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </CinematicCard>

        {/* --- EXAMINATION & RECOVERY AREAS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Coordinating <span className="italic text-terracotta">Veterinary Equipment</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Equipment should be considered early in the construction process. Depending on the equipment, requirements may influence:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[15px] text-forest-deep/80 font-light">
              {['Electrical capacity', 'Plumbing', 'Ventilation', 'Room dimensions', 'Structural needs', 'Access', 'Counter space', 'Storage'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-forest font-medium pt-4 border-t border-forest/10">Early coordination can reduce conflicts between the facility and equipment installation.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Renovating a <span className="italic text-terracotta">Veterinary Practice</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4">
              Renovation can be an alternative to relocating. A project might focus on one area or involve a broader facility transformation, such as adding examination rooms, expanding treatment space, improving reception, creating a surgical area, updating flooring, reconfiguring circulation, improving storage, and updating building systems.
            </p>
            <p className="text-[14px] font-medium text-forest border-t border-forest/10 pt-4">
              The scope should be based on the existing property's condition and the practice's goals.
            </p>
          </motion.div>
        </motion.div>

        {/* --- COST --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Veterinary Hospital <span className="italic text-terracotta">Construction Cost</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-10">
              The cost of a Passaic County veterinary project depends on the specific property and scope. Common factors include:
            </motion.p>
            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-left max-w-3xl mx-auto mb-10">
              {['Facility size', 'Existing building conditions', 'New construction versus renovation', 'Structural work', 'Plumbing', 'Electrical', 'HVAC', 'Clinical room requirements', 'Surgical facilities', 'Finishes', 'Millwork', 'Equipment', 'Accessibility', 'Permits and inspections'].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-terracotta/60 mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span>
                  <span className="text-[15px] text-forest-deep/90">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeIn} className="text-center text-[16px] leading-[1.8] text-forest-deep/90 font-medium max-w-3xl mx-auto italic border-t border-forest/10 pt-8">
              A detailed scope provides a better foundation for project budgeting than a generic industry price.
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
                { q: 'How much does veterinary hospital construction cost in Passaic County?', a: "Costs vary according to the property's condition, facility size, clinical requirements, equipment, building systems, finishes, and project complexity." },
                { q: 'Can an existing office or commercial property become a veterinary clinic?', a: "It may be possible, depending on the property's configuration, infrastructure, zoning, intended use, and applicable requirements." },
                { q: 'Can you build a veterinary surgical suite?', a: 'A construction project can include dedicated surgical space when required by the practice and appropriately incorporated into the overall facility plan.' },
                { q: 'What makes an animal hospital different from a normal commercial building?', a: 'Veterinary hospitals must accommodate clinical functions, animals, medical equipment, sanitation, patient movement, staff workflow, client areas, and specialized building requirements.' },
                { q: 'Should equipment be selected before construction?', a: 'Equipment requirements should be identified early because some equipment can affect room dimensions, utilities, electrical capacity, ventilation, and other construction decisions.' },
                { q: 'How long does a veterinary clinic build-out take?', a: 'The schedule depends on the size and complexity of the space, existing conditions, design and permitting, materials, equipment coordination, and construction scope.' },
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
        title={<>Veterinary Hospital Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Passaic County, NJ</span></>}
        description={
          <>
            <p>Based in Verona, New Jersey, Hevan M Constructions serves veterinary practices in Passaic County and throughout its North Jersey service area.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Planning a veterinary clinic, animal hospital, renovation, or expansion? Contact Hevan M Constructions to discuss your project and property.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
