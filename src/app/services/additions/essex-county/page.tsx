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

export default function AdditionsEssexCountyPage() {
  return (
    <ServicePageWrapper>
      <PremiumHero 
        badge="ESSEX COUNTY, NJ"
        title={<>Additions in <br /><span className="italic text-terracotta">Essex County, NJ</span></>}
        description="Your home may have the right location but no longer have enough room. Hevan M Constructions provides home additions in Essex County, NJ, helping homeowners expand existing properties with thoughtfully planned additional living space."
        servingLabel="Back to:"
        servingLinks={[
          { name: 'All Additions', path: '/services/additions' }
        ]}
      />

      <ContentWrapper>
        
        {/* --- WHEN AN ADDITION MAKES SENSE --- */}
        <CinematicCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Household Needs
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                When an Addition <span className="italic text-terracotta">Makes Sense</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-linen/70 font-light mb-8">
                Homeowners often consider an addition when their needs change but their location still works. An addition may be appropriate when:
              </motion.p>
              <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                Instead of treating square footage as the only goal, the planning process should focus on how the additional space will improve the home's functionality.
              </motion.p>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-6">
                {[
                  'A family needs another bedroom.',
                  'Parents need space for an adult child.',
                  'An aging family member needs accommodation.',
                  'Remote work requires a dedicated office.',
                  'The kitchen or family room feels undersized.',
                  'Guests need a more private area.',
                  'The existing layout no longer fits the household.'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0 mt-2" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </CinematicCard>

        {/* --- LIVING-SPACE ADDITIONS --- */}
        <GlassCard>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Living-Space <span className="italic text-terracotta">Additions</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-12">
              A carefully planned extension can transform an underused or undersized portion of a house. Popular possibilities include:
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                { title: 'Family-room extensions', desc: 'For larger everyday gatherings.' },
                { title: 'Kitchen & dining expansions', desc: 'For improved entertaining and family use.' },
                { title: 'Bedroom additions', desc: 'For growing households.' },
                { title: 'Home offices', desc: 'For dedicated work space.' },
                { title: 'Sunrooms', desc: 'For a bright connection between interior and exterior areas.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/40 border border-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <h4 className="font-medium text-forest text-[17px] mb-3">{item.title}</h4>
                  <p className="text-[14px] text-forest-deep/70 font-light leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </GlassCard>

        {/* --- SECOND STORIES & GUEST SPACE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <div className="w-16 h-px bg-terracotta/30 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Second Stories in <br /><span className="italic text-terracotta">Essex County</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              A second-floor addition can provide significant new living space where a property's footprint makes outward expansion difficult.
            </p>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
              However, adding another story involves much more than creating new rooms. Structural capacity, roof removal or modification, stair access, exterior appearance, mechanical systems, and applicable regulations all need to be considered.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-3xl text-forest mb-6">
              Guest and <span className="italic text-terracotta">Multigenerational Space</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              A well-planned addition can provide more privacy and flexibility for guests or extended family.
            </p>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6 border-t border-forest/10 pt-6">
              Depending on the property and applicable approvals, space can be designed around a bedroom, bathroom, sitting area, or more self-contained arrangement.
            </p>
            <p className="text-[15px] leading-[1.7] text-forest-deep font-medium italic border-l-2 border-terracotta/30 pl-4 py-1">
              The right configuration depends on who will use the space and how independently it needs to function.
            </p>
          </motion.div>
        </motion.div>

        {/* --- ADDITIONS THAT BELONG --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeIn} className="w-16 h-px bg-terracotta/30 mx-auto mb-8" />
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Additions That Belong <span className="italic text-terracotta">to the Home</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep/80 font-medium mb-6">
              The strongest additions are designed as part of the overall house.
            </motion.p>
            <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              Exterior materials, rooflines, windows, transitions, floor levels, interior circulation, and finishes all influence whether the completed addition feels integrated.
            </motion.p>
            <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep font-light italic border-t border-forest/10 pt-8 max-w-2xl mx-auto">
              Hevan M Constructions focuses on the relationship between the existing structure and the proposed expansion rather than treating the addition as an isolated construction project.
            </motion.p>
          </div>
        </motion.div>

      </ContentWrapper>

      <PremiumCTA 
        title={<>Planning an Essex County <br className="hidden sm:block" /><span className="italic text-terracotta">Home Addition?</span></>}
        description={
          <>
            <p>We serve homeowners throughout Essex County, including Verona, Montclair, Livingston, West Orange, Maplewood, South Orange, Short Hills, Bloomfield, and surrounding communities, depending on project scope.</p>
            <p className="font-medium text-linen/90 border-t border-white/10 pt-6 mt-6">Before committing to a design, it is important to understand what the property can realistically accommodate and what construction requirements may apply. Contact Hevan M Constructions to discuss your Essex County addition project and the space you want to create.</p>
          </>
        }
      />
    </ServicePageWrapper>
  );
}