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

export default function VeterinaryHospitalMorrisCountyPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <ServicePageWrapper>
      <PremiumHero
        badge="MORRIS COUNTY, NJ"
        title={<>Veterinary Hospital Construction in <br /><span className="italic text-terracotta">Morris County, NJ</span></>}
        description="Construction That Supports Veterinary Care. A veterinary facility has to work as a healthcare environment and a practical workplace. Hevan M Constructions provides veterinary hospital construction and renovation services in Morris County, NJ, serving veterinary practices from our Verona, New Jersey location."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Veterinary Hospital', path: '/veterinary-hospital-construction-nj' }
        ]}
      />

      <ContentWrapper>

        {/* --- START WITH THE PRACTICE --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Clinical Construction
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Start With the <br /><span className="italic text-terracotta">Practice</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Our construction approach focuses on connecting the physical space with the way the veterinary team intends to use it. Before deciding on finishes or room layouts, consider what the hospital needs to accomplish.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  Facility areas we can help with:
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Examination rooms',
                  'Treatment stations',
                  'Surgical areas',
                  'Recovery',
                  'Patient hospitalization',
                  'Diagnostic rooms',
                  'Pharmacy and storage',
                  'Reception',
                  'Client waiting',
                  'Staff work areas',
                  'Administrative offices',
                  'Animal holding'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeIn} className="mt-6 text-sm text-linen/50 italic text-center">
                The final layout should reflect the services and workflow of the practice.
              </motion.p>
            </div>
          </div>
        </CinematicCard>

        {/* --- NEW FACILITY & RENOVATION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              New Veterinary <span className="italic text-terracotta">Facility Construction</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              For a new facility, early planning can establish how clinical, client, staff, and support areas relate to one another. Addressing these questions early can help create a more coherent construction plan.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[15px] text-forest-deep/80 font-light">
              {['Where should clients enter?', 'How should patients move?', 'Where should treatment occur?', 'How should surgical/recovery connect?', 'Where will equipment be installed?', 'What storage is required?', 'What utilities will each room need?', 'How might the practice grow?'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Veterinary Clinic <span className="italic text-terracotta">Renovation</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              Renovation may be appropriate when an existing veterinary location has a good foundation but no longer supports the practice efficiently. The existing structure and infrastructure determine what changes are practical.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {['Reconfiguring exam rooms', 'Improving treatment areas', 'Creating clinical space', 'Updating reception', 'Improving storage', 'Upgrading finishes', 'Modifying plumbing', 'Improving electrical capacity', 'Updating lighting', 'Adjusting mechanical systems'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[14px] text-forest-deep/90 py-1 border-b border-forest/5 last:border-0">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-olive/80 flex-shrink-0"></span> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- EQUIPMENT & MATERIALS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">Planning Around <br />Equipment</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4 flex-grow">
              Veterinary equipment can influence construction. Large or specialized equipment may affect room dimensions, electrical capacity, plumbing, ventilation, structural requirements, access, equipment placement, and storage.
            </p>
            <p className="text-[14px] font-medium text-forest border-t border-forest/10 pt-4">
              Equipment requirements should be identified early enough to coordinate them with the construction plan.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">Durable Materials <br />for Animal Care</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-4 flex-grow">
              Veterinary environments can experience frequent cleaning, moisture, animal traffic, and demanding daily use. Material selection should consider: Durability, Cleanability, Moisture exposure, Maintenance, Safety, Expected traffic, and Intended clinical use.
            </p>
            <p className="text-[14px] italic text-forest-deep/70 border-t border-forest/10 pt-4">Material choices should be appropriate to the specific area rather than applied uniformly throughout the facility.</p>
          </motion.div>
        </motion.div>

        {/* --- FAQ --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-4 tracking-[-0.02em] text-center">
              Construction Cost in <span className="italic text-terracotta">Morris County</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light text-center mb-8">
              Construction costs vary by project. Major cost factors can include facility size, building condition, clinical requirements, structural work, plumbing, electrical systems, HVAC, finishes, equipment coordination, permitting, and construction complexity.
            </motion.p>
            <motion.div variants={fadeIn} className="border-t border-forest/10 pt-8">
              <h3 className="font-display text-2xl text-forest mb-4 text-center">Frequently Asked <span className="italic text-terracotta">Questions</span></h3>
              <div className="border-t border-forest/15 mt-4">
                {[
                  { q: 'Can you build a veterinary hospital from an existing commercial space?', a: "Possibly. The property must be evaluated for its suitability, infrastructure, layout, intended use, and applicable requirements." },
                  { q: 'Can a veterinary clinic be expanded?', a: 'An expansion may be possible when the building and property allow it. Feasibility depends on the existing structure, available space, proposed use, and applicable requirements.' },
                  { q: 'How long does veterinary hospital construction take?', a: 'There is no standard timeline. Design, engineering, permitting, materials, facility size, existing conditions, and construction complexity can all affect the schedule.' },
                  { q: 'What makes veterinary construction different?', a: 'Veterinary facilities combine healthcare functions with animal handling, specialized equipment, client areas, staff workflow, sanitation needs, and durable construction.' },
                  { q: 'How do I begin?', a: 'Start by defining the services you provide, desired facility size, room requirements, equipment, workflow, and future growth plans.' },
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
        title={<>Veterinary Hospital Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Morris County</span></>}
        description={
          <>
            <p>Hevan M Constructions serves Morris County, NJ from Verona.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Planning a new veterinary facility, clinic renovation, or hospital expansion? Contact Hevan M Constructions to discuss your project requirements.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}
