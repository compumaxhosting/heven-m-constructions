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

export default function AdditionsMorrisCountyPage() {
  return (
    <ServicePageWrapper>
      <PremiumHero 
        badge="MORRIS COUNTY, NJ"
        title={<>Additions in <br /><span className="italic text-terracotta">Morris County, NJ</span></>}
        description="A growing family, changing lifestyle, or need for dedicated space can make an existing Morris County home feel too small. Hevan M Constructions builds home additions in Morris County, NJ, helping homeowners increase usable space while maintaining the character and function of the existing property."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Additions', path: '/services/additions' }
        ]}
      />

      <ContentWrapper>
        
        {/* --- ADD SPACE WITHOUT STARTING OVER --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Custom Expansion
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Add Space Without <br /><span className="italic text-terracotta">Starting Over</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-linen/70 font-light mb-8">
                Moving can mean giving up a location, community, school district, or home that otherwise works well. An addition offers another possibility: adapt the house you already own to fit your current needs.
              </motion.p>
              <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                Potential additions include:
              </motion.p>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  'Bedrooms',
                  'Primary suites',
                  'Bathrooms',
                  'Family rooms',
                  'Kitchen extensions',
                  'Home offices',
                  'Sunrooms',
                  'Guest spaces',
                  'Multigenerational accommodations',
                  'Second-floor living areas'
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

        {/* --- ONE-STORY OR SECOND-STORY --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em] text-center">
              One-Story or <span className="italic text-terracotta">Second-Story Addition?</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-12 text-center">
              The right direction depends on the property.
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/40 border border-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h4 className="font-medium text-forest text-[19px] mb-4">Ground-Level Addition</h4>
                <p className="text-[15px] text-forest-deep/70 font-light leading-[1.7]">
                  A ground-level addition may work when sufficient property area is available and the desired rooms connect naturally to the existing floor plan.
                </p>
              </div>
              <div className="bg-white/40 border border-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h4 className="font-medium text-forest text-[19px] mb-4">Second-Story Addition</h4>
                <p className="text-[15px] text-forest-deep/70 font-light leading-[1.7]">
                  A second-story addition can make better use of a limited footprint, but it introduces additional structural and architectural considerations.
                </p>
              </div>
            </motion.div>

            <motion.p variants={fadeIn} className="text-center text-[16px] leading-[1.8] text-forest-deep/80 font-medium max-w-3xl mx-auto italic border-t border-forest/10 pt-8">
              The decision should be based on the property, existing structure, desired space, and applicable requirements, rather than simply choosing the least expensive option.
            </motion.p>
          </div>
        </GlassCard>

        {/* --- DESIGNING AROUND HOW YOU LIVE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Designing Around <span className="italic text-terracotta">How You Live</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              The most useful addition is not necessarily the largest one.
            </p>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
              For example, a smaller addition with excellent circulation and storage may provide more everyday value than a larger space with an inefficient layout.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              During Planning, <span className="italic text-terracotta">Consider:</span>
            </h3>
            <div className="space-y-4 mb-8">
              {[
                'Who will use the space?',
                'How will people enter it?',
                'How does it connect to existing rooms?',
                'Where will furniture go?',
                'Is storage required?',
                'Will the space eventually serve another purpose?',
                'How much natural light is desirable?'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-1">
                  <span className="text-terracotta">✦</span> <span className="font-medium text-forest-deep/70">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.7] text-forest-deep font-medium italic border-t border-forest/10 pt-6">
              These questions help turn additional square footage into genuinely useful living space.
            </p>
          </motion.div>
        </motion.div>

        {/* --- SUNROOMS & GUEST ACCOMMODATIONS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">Sunrooms & <br />Indoor-Outdoor</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6 flex-grow">
              A sunroom can create a distinct space for relaxing, reading, entertaining, dining, or enjoying views of the property.
            </p>
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light border-t border-forest/10 pt-6">
              The design should account for orientation, windows, insulation, heating and cooling, and how the new room connects with the rest of the house.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-12 h-px bg-terracotta/40 mb-6" />
            <h3 className="font-display text-3xl text-forest mb-4">Guest & <br />Family Accommodations</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6 flex-grow">
              Additional private space can make a home more flexible for visitors and extended family.
            </p>
            <p className="text-[14px] leading-[1.7] text-forest-deep/70 font-light border-t border-forest/10 pt-6">
              Depending on the project, an addition may incorporate a bedroom, bathroom, sitting area, or other amenities designed around the intended occupant.
            </p>
          </motion.div>
        </motion.div>

        {/* --- MORRIS COUNTY HOME ADDITIONS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeIn} className="w-16 h-px bg-terracotta/30 mx-auto mb-8" />
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Morris County <span className="italic text-terracotta">Home Additions</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              Hevan M Constructions serves homeowners in communities throughout Morris County, including Morristown, Madison, Morris Township, Denville, Parsippany-Troy Hills, Randolph, Chatham, Montville, and surrounding areas, subject to project scope.
            </motion.p>
            <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-forest-deep font-medium italic border-t border-forest/10 pt-8 max-w-2xl mx-auto">
              Local zoning and building requirements vary, so each addition should be evaluated according to its specific property.
            </motion.p>
          </div>
        </motion.div>

      </ContentWrapper>

      <PremiumCTA 
        title={<>Start Your Morris County <br className="hidden sm:block" /><span className="italic text-terracotta">Home Addition</span></>}
        description={
          <>
            <p>An addition should solve a real space problem while supporting the way your household will use the home for years to come.</p>
            <p className="font-medium text-linen/90">Contact Hevan M Constructions to discuss your Morris County home addition.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}