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

export default function AdditionsPassaicCountyPage() {
  return (
    <ServicePageWrapper>
      <PremiumHero 
        badge="PASSAIC COUNTY, NJ"
        title={<>Additions in <br /><span className="italic text-terracotta">Passaic County, NJ</span></>}
        description="A home can be in the right neighborhood and still stop meeting the needs of the people living in it. Hevan M Constructions builds home additions in Passaic County, NJ, giving homeowners an opportunity to create additional living space without automatically giving up their existing home and location."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Additions', path: '/services/additions' }
        ]}
      />

      <ContentWrapper>
        
        {/* --- ADDITIONS BUILT AROUND YOUR GOALS --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Custom Expansion
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Additions Built <br /><span className="italic text-terracotta">Around Your Goals</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-linen/70 font-light mb-8">
                A home addition can be designed for many different purposes. The starting point should be the function you need—not a predetermined addition design.
              </motion.p>
              <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                Common goals include:
              </motion.p>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'More bedrooms',
                  'A larger kitchen',
                  'Expanded family space',
                  'A home office',
                  'A primary suite',
                  'A guest room',
                  'Multigenerational living',
                  'A sunroom',
                  'Additional bathrooms',
                  'Flexible recreational space'
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

        {/* --- SECOND-STORY & SUNROOMS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Second-Story <span className="italic text-terracotta">Additions</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Going up can be an effective strategy when there is limited room to expand at ground level.
            </p>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              A second floor can potentially accommodate bedrooms, bathrooms, offices, or other living areas while preserving more of the property's existing outdoor space.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep font-medium italic border-l-2 border-terracotta/30 pl-4 py-1">
              Because the project interacts directly with the existing structure, early evaluation of structural and architectural requirements is important.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Sunrooms & <span className="italic text-terracotta">Expanded Living Areas</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              A sunroom or living-area extension can create additional space for relaxing and entertaining while providing a stronger connection to the home's outdoor environment.
            </p>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light border-t border-forest/10 pt-6">
              The design should consider natural light, insulation, climate control, windows, access, and how the new area connects with existing rooms.
            </p>
          </motion.div>
        </motion.div>

        {/* --- GROWING FAMILIES & GUEST SPACE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">Additions for <br />Growing Families</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6 flex-grow">
              Children grow, households change, and rooms that once seemed spacious can quickly become crowded. An addition can provide dedicated bedrooms, play areas, study spaces, or larger shared rooms.
            </p>
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-medium border-t border-forest/10 pt-6">
              Planning for flexibility can also allow the space to change as your family's needs evolve.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">Guest & <br />Extended-Family Space</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6 flex-grow">
              A dedicated guest area can make longer visits more comfortable while preserving privacy for everyone. For households accommodating parents, adult children, or other relatives, an addition may provide a more functional arrangement than trying to repurpose existing rooms.
            </p>
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-medium border-t border-forest/10 pt-6">
              The appropriate configuration will depend on the property and applicable zoning and building requirements.
            </p>
          </motion.div>
        </motion.div>

        {/* --- WHY HOMEOWNERS CONSIDER ADDING INSTEAD OF MOVING --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Why Homeowners Consider Adding <br /><span className="italic text-terracotta">Instead of Moving</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-12">
              An addition may be worth investigating when:
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12">
              {[
                'You like your current location.',
                'Your home has become too small.',
                'You need one or two specific rooms.',
                'Your household is changing.',
                'You want more flexible living space.',
                'You want to remain in your community.'
              ].map((item, i) => (
                <div key={i} className="bg-white/40 border border-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex items-start gap-3 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60 flex-shrink-0 mt-2" />
                  <span className="text-[15px] text-forest-deep/90">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeIn} className="text-center text-[16px] leading-[1.8] text-forest-deep/90 font-medium max-w-3xl mx-auto italic border-t border-forest/10 pt-8">
              The feasibility and cost of expanding depend heavily on the individual property, so an early project assessment is valuable.
            </motion.p>
          </div>
        </GlassCard>

      </ContentWrapper>

      <PremiumCTA 
        title={<>Create the Space Your <br className="hidden sm:block" /><span className="italic text-terracotta">Home Is Missing</span></>}
        description={
          <>
            <p>Hevan M Constructions serves homeowners throughout Passaic County, including Wayne, Clifton, Paterson, Little Falls, Totowa, West Milford, Pompton Lakes, Ringwood, and surrounding communities, depending on project scope and availability.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">A well-planned addition can make an existing house significantly more functional without requiring a move. Contact Hevan M Constructions to discuss your Passaic County home addition project.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}