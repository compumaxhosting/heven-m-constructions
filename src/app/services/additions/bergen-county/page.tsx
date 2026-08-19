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

export default function AdditionsBergenCountyPage() {
  return (
    <ServicePageWrapper>
      <PremiumHero 
        badge="BERGEN COUNTY, NJ"
        title={<>Additions in <br /><span className="italic text-terracotta">Bergen County, NJ</span></>}
        description="When your Bergen County home no longer provides enough space, moving is not the only option. We build home additions throughout Bergen County, NJ, creating additional space for changing household needs."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Additions', path: '/services/additions' }
        ]}
      />

      <ContentWrapper>
        
        {/* --- EXPAND THE SPACE YOU ALREADY HAVE --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Custom Expansion
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Expand the Space <br /><span className="italic text-terracotta">You Already Have</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-linen/70 font-light mb-8">
                A home addition can solve different problems depending on the property and household. The design should begin with how you want to use the space, then work backward toward the appropriate construction solution.
              </motion.p>
              <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium">
                You may need:
              </motion.p>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-6">
                {[
                  'A larger kitchen and dining area',
                  'A family-room extension',
                  'Another bedroom',
                  'A primary bedroom suite',
                  'A home office',
                  'A children\'s playroom',
                  'A guest suite',
                  'A multigenerational living area',
                  'A sunroom',
                  'Additional bathrooms'
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

        {/* --- SECOND-STORY & MORE ROOM WITHOUT LEAVING --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Second-Story <span className="italic text-terracotta">Home Additions</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              For properties where expanding the footprint is difficult, a second story can be an effective way to increase usable living space.
            </p>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
              Adding a level requires careful consideration of the existing foundation and structure, roof, stairs, exterior appearance, utilities, and overall relationship between old and new construction.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              More Room Without Leaving <br /><span className="italic text-terracotta">Your Neighborhood</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              One of the advantages of an addition is the ability to adapt a home to changing needs while staying where you already live.
            </p>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light border-t border-forest/10 pt-6">
              Instead of giving up a familiar neighborhood because you need more space, homeowners can investigate whether their existing property can accommodate the required expansion.
            </p>
          </motion.div>
        </motion.div>

        {/* --- BERGEN COUNTY PROJECTS --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
              Bergen County <span className="italic text-terracotta">Addition Projects</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-12">
              <p>Every property is different. Lot dimensions, existing construction, setbacks, zoning requirements, access, utilities, and the configuration of the existing home can influence what type of addition is practical.</p>
              <p className="font-medium italic">Hevan M Constructions approaches each project individually rather than starting with a one-size-fits-all addition package.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white/40 border border-white p-8 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.02)] text-left">
              <h3 className="font-display text-3xl text-forest mb-6">
                Building for Today's Needs <span className="italic text-terracotta">and Tomorrow's</span>
              </h3>
              <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-8 max-w-2xl">
                An addition should solve the immediate space problem while also making sense for future use. Thinking about future use during planning can make the additional square footage more valuable over the long term.
              </p>
              
              <div className="border-t border-forest/10 pt-6">
                <p className="text-[12px] text-terracotta font-medium tracking-[0.1em] uppercase mb-4">For example, an extra bedroom may later become:</p>
                <div className="flex flex-wrap gap-3">
                  {['A home office', 'A study', 'A guest room', 'A hobby room', 'A nursery', 'A flexible family space'].map(item => (
                    <span key={item} className="px-4 py-2 bg-white/60 border border-forest/5 rounded-full text-[14px] font-medium text-forest-deep/80">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </GlassCard>

      </ContentWrapper>

      <PremiumCTA 
        title={<>Start Planning Your <br className="hidden sm:block" /><span className="italic text-terracotta">Bergen County Addition</span></>}
        description={
          <>
            <p>Homeowners considering additions in Hackensack, Fort Lee, Paramus, Ridgewood, Teaneck, and surrounding communities can contact Hevan M Constructions to discuss their project.</p>
            <p className="font-medium text-linen/90">Whether you are considering a modest living-space extension or a major second-story expansion, early planning helps establish realistic expectations for design, construction, approvals, and budget.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}