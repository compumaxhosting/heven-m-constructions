import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomeAdditionsUnionCountyPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <main className="bg-[#F6F4EE] min-h-screen selection:bg-terracotta/20 selection:text-forest-deep">

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-44 pb-32 sm:pt-52"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(35,53,40,0.03) 0%, transparent 70%)'
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]" 
             style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.div variants={fadeIn} className="mb-6 flex justify-center">
               <Link to="/services/whole-home-additions" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Union County, NJ</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,5.5rem)] text-forest leading-[1.05] tracking-[-0.02em] mb-8">
              Home Additions in <br className="hidden sm:block" />
              <span className="italic text-terracotta">Union County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-12 max-w-2xl mx-auto">
              When your home has the right location but not enough room, an addition can give your family the space you need without starting over somewhere else.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-32">

        {/* --- EXPAND THE SPACE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <motion.div variants={fadeIn} className="relative">
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-forest mb-8 leading-[1.1] tracking-[-0.02em]">
                Expand the Space <br /><span className="italic text-terracotta">You Already Have</span>
              </h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-forest-deep/80 font-light">
                <p>We help homeowners throughout Union County, NJ plan residential additions that improve usable space, circulation, comfort, and the connection between existing and new areas.</p>
                <p>A home addition can solve very different problems. You may need a larger kitchen, a dedicated office, more room for children, a comfortable gathering space, or a private primary suite.</p>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6">
            <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-sm">
              <h3 className="font-display text-2xl text-forest mb-6">Build Around the Existing Property</h3>
              <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">Every Union County property presents different conditions. The design may need to account for the existing home's architecture, lot configuration, structural system, rooflines, windows, utilities, drainage, and applicable municipal requirements.</p>
              <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-medium text-terracotta">A thoughtful addition works with those conditions rather than forcing the same design onto every house.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- POPULAR ADDITIONS (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />
          
          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Common Projects
            </motion.div>
            
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
              Addition Options <span className="italic text-terracotta">in Union County</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Kitchen & Dining Expansions', desc: 'Create larger culinary and gathering spaces that become the heart of the home.' },
                { title: 'Family Room Additions', desc: 'Add comfortable space to relax, entertain, and spend time together.' },
                { title: 'Primary Bedroom Suites', desc: 'Design a private retreat with ample closet space and a modern bath.' },
                { title: 'New Bedrooms', desc: 'Provide additional rooms for a growing family or welcome guests.' },
                { title: 'Home Offices', desc: 'Establish a quiet, dedicated professional workspace.' },
                { title: 'Rear & Side Additions', desc: 'Strategically expand the existing footprint to maximize your property.' },
                { title: 'Second-Story Expansions', desc: 'Build upwards to significantly increase square footage when lot size is limited.' },
              ].map((step, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                  <h3 className="font-display text-[22px] text-linen mb-4">{step.title}</h3>
                  <div className="h-px w-10 bg-linen/20 mb-4" />
                  <p className="text-linen/70 text-[14px] leading-[1.7] font-light">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- IS AN ADDITION RIGHT / BETTER FUNCTION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
                Make Your Home <span className="italic text-terracotta">Work Better</span>
              </h2>
              <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
                Adding a room isn't always enough. A successful project considers how people enter, move through, and use the home. Expanding one area may create an opportunity to improve adjoining rooms, increase natural light, open up circulation, or create a more practical connection between indoor spaces.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white/40 p-8 sm:p-10 rounded-[32px] border border-white/60">
              <h3 className="font-display text-2xl text-forest mb-6">Is an Addition Right for Your Home?</h3>
              <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">Before planning the project, consider these important questions. These answers can help determine whether an addition, renovation, or combination of both makes the most sense.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'What isn\'t working in your current layout?',
                  'Which rooms need more space?',
                  'Would expanding one area improve the rest of the house?',
                  'Is a first-floor or second-floor addition more appropriate?',
                  'How will the project affect the home\'s exterior?',
                  'What approvals or permits may be required?',
                  'What should the space accomplish five or ten years from now?'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-terracotta mt-1">✦</span>
                    <span className="text-[14px] text-forest-deep/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- FAQ --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="sticky top-32 lg:pr-8">
              <h2 className="font-display text-4xl sm:text-[3.5rem] leading-[1.05] text-forest mb-6 tracking-[-0.02em]">
                Frequently Asked <br className="hidden lg:block"/><span className="italic text-terracotta">Questions</span>
              </h2>
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="border-t border-forest/15">
              {[
                { q: 'What type of home addition is best for a growing family?', a: 'That depends on where the home lacks space. A bedroom addition can address sleeping needs, while a family-room or kitchen expansion may improve shared living areas. A whole-home evaluation can reveal which approach provides the greatest benefit.' },
                { q: 'Can an addition improve an outdated floor plan?', a: 'Yes. Expanding an existing room can create an opportunity to improve circulation, connections between spaces, natural light, and overall functionality.' },
                { q: 'Is a second-floor addition an option in Union County?', a: 'It may be. The existing structure, foundation, roof, property configuration, design, and local requirements all need to be evaluated before determining feasibility.' },
                { q: 'Can I add space without making my home look oversized?', a: 'Good planning considers proportions, rooflines, windows, setbacks, and the relationship between the addition and the original house. The goal is a balanced result rather than simply maximizing square footage.' },
              ].map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div variants={fadeIn} key={i} className="border-b border-forest/10 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left py-6 sm:py-8 flex items-start sm:items-center justify-between focus:outline-none group gap-6"
                    >
                      <h3 className="font-display text-[20px] sm:text-[24px] leading-snug text-forest group-hover:text-terracotta transition-colors pt-1 sm:pt-0">
                        {faq.q}
                      </h3>
                      <span className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-forest/15 flex items-center justify-center text-forest transition-transform duration-500 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] mt-1 sm:mt-0 ${isOpen ? 'rotate-45 bg-forest/5' : ''}`}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                          <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <motion.div 
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                    >
                      <p className="text-forest-deep/80 text-[16px] sm:text-[17px] leading-[1.8] font-light pb-8 sm:pb-10 pr-4 sm:pr-20">
                        {faq.a}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-forest py-24 sm:py-32 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-8 leading-[1.05] tracking-[-0.02em]">
              Start With What Your <br className="hidden sm:block" /><span className="italic text-terracotta">Home Is Missing</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-14 max-w-2xl mx-auto font-light">
              <p>You don't necessarily need a different house. You may need a better version of the one you already own.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-16">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex justify-center">
               <Link to="/services/whole-home-additions" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
