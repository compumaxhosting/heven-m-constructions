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

export default function AdditionsUnionCountyPage() {
  return (
    <ServicePageWrapper>
      <PremiumHero 
        badge="UNION COUNTY, NJ"
        title={
          <>
            Additions in <br />
            <span className="italic text-terracotta">Union County, NJ</span>
          </>
        }
        description="When your home has the right location but not enough room, an addition can give your family the space you need without starting over somewhere else."
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
                We help homeowners throughout Union County, NJ plan residential additions that improve usable space, circulation, comfort, and the connection between existing and new areas.
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
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </CinematicCard>

        {/* --- AN ADDITION THAT BELONGS --- */}
        <GlassCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div variants={fadeIn}>
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
                An Addition <br />
                <span className="italic text-terracotta">That Belongs</span>
              </h2>
              <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
                Every Union County property presents different conditions. The design may need to account for the existing home's architecture, lot configuration, structural system, rooflines, windows, utilities, drainage, and applicable municipal requirements.
              </p>
              <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-medium text-terracotta">
                A thoughtful addition works with those conditions rather than forcing the same design onto every house.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
              <h3 className="font-display text-3xl text-forest mb-6">
                Addition Options <span className="italic text-terracotta">in Union County</span>
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Kitchen & Dining Expansions', desc: 'Create larger culinary and gathering spaces that become the heart of the home.' },
                  { title: 'Family Room Additions', desc: 'Add comfortable space to relax, entertain, and spend time together.' },
                  { title: 'Primary Bedroom Suites', desc: 'Design a private retreat with ample closet space and a modern bath.' },
                  { title: 'New Bedrooms', desc: 'Provide additional rooms for a growing family or welcome guests.' },
                  { title: 'Home Offices', desc: 'Establish a quiet, dedicated professional workspace.' },
                  { title: 'Rear & Side Additions', desc: 'Strategically expand the existing footprint to maximize your property.' },
                  { title: 'Second-Story Expansions', desc: 'Build upwards to significantly increase square footage when lot size is limited.' }
                ].map((item, i) => (
                  <div key={i} className="border-b border-forest/10 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-display text-lg text-forest mb-1">{item.title}</h4>
                    <p className="text-[14px] leading-[1.6] text-forest-deep/70 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </GlassCard>

        {/* --- CENTRED QUOTE / MAKE YOUR HOME WORK BETTER --- */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
            Make Your Home <br />
            <span className="italic text-terracotta">Work Better</span>
          </motion.h2>
          <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-12">
            <p>
              Adding a room isn't always enough. A successful project considers how people enter, move through, and use the home. Expanding one area may create an opportunity to improve adjoining rooms, increase natural light, open up circulation, or create a more practical connection between indoor spaces.
            </p>
            <p className="font-medium italic">
              Hevan M Constructions approaches each project individually rather than starting with a one-size-fits-all addition package.
            </p>
          </motion.div>
        </div>
      </ContentWrapper>

      <PremiumCTA 
        title={<>Start Planning Your <br /><span className="italic text-terracotta">Union County Addition</span></>}
        description={
          <>
            <p>You don't necessarily need a different house. You may need a better version of the one you already own.</p>
            <p>Whether you are considering a modest living-space extension or a major second-story expansion, early planning helps establish realistic expectations for design, construction, approvals, and budget.</p>
          </>
        }
        linkTo="/contact"
        linkText="Contact Us to Discuss Your Project →"
      />
    </ServicePageWrapper>
  );
}
