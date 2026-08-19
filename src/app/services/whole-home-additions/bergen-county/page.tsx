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

export default function HomeAdditionsBergenCountyPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <main className="bg-[#F6F4EE] min-h-screen selection:bg-terracotta/20 selection:text-forest-deep">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-40 pb-24 sm:pt-64 sm:pb-40 bg-[#F6F4EE]">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Ambient Glows mimicking the Vet page */}
        <div className="pointer-events-none absolute -top-[10%] -left-[10%] w-[60vw] h-[100%] bg-gradient-to-r from-[#d27d55]/60 via-[#e58a5b]/20 to-transparent blur-[100px]" />
        <div className="pointer-events-none absolute -top-[10%] -right-[10%] w-[60vw] h-[100%] bg-gradient-to-l from-[#8aa87d]/60 via-[#9dbd90]/20 to-transparent blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            <motion.div variants={fadeIn} className="mb-6 flex justify-start">
               <Link to="/services/whole-home-additions" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Bergen County, NJ</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(3.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Home Additions <br />
              in <span className="italic text-terracotta">Bergen County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-8">
              Need more space but don't want to leave the Bergen County neighborhood you love? A custom home addition can give your family the extra room, improved layout, and functionality you need—while allowing you to stay in the home you already know and love.
            </motion.p>

            <motion.p variants={fadeIn} className="text-[16px] sm:text-[18px] leading-[1.7] text-forest-deep/75 font-light">
              We provide residential home addition services throughout Bergen County, NJ, helping homeowners plan and build thoughtfully designed additions that complement their existing homes. From room additions and kitchen expansions to primary suites and second-story additions, every project is planned around your property, lifestyle, budget, and long-term goals.
            </motion.p>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- CUSTOM HOME ADDITIONS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Core Capabilities
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Custom Home Addition <br /><span className="italic text-terracotta">Services in Bergen County, NJ</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  Every home addition is different. The right design depends on your home's existing structure, property layout, family needs, and local zoning requirements.
                </motion.p>
                <motion.p variants={fadeIn} className="text-terracotta font-medium tracking-wide">
                  Our home addition services can include:
                </motion.p>
                <motion.p variants={fadeIn}>
                  Whether you need one additional room or a larger expansion, the goal is to create new living space that looks and functions like a natural part of your home.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-6">
                {[
                  'Room additions',
                  'Bedroom additions',
                  'Primary suite additions',
                  'Kitchen and dining room additions',
                  'Family room additions',
                  'Home office additions',
                  'Bathroom additions',
                  'Second-story additions',
                  'Rear home additions',
                  'Side additions',
                  'Garage additions',
                  'In-law suite additions',
                  'Bump-out additions',
                  'Add-a-level construction'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                    <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- CONTRACTOR CONSIDERATIONS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
                Home Addition Contractor <span className="italic text-terracotta">in Bergen County, NJ</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[18px] leading-[1.8] text-forest-deep/80 font-light max-w-3xl mx-auto mb-4">
                Choosing the right home addition contractor in Bergen County, NJ is about more than finding someone who can build additional square footage.
              </motion.p>
              <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-forest-deep/70 font-light max-w-3xl mx-auto">
                A successful addition requires careful planning, accurate budgeting, structural considerations, permitting, construction coordination, and attention to how the new space connects with the existing house. We consider the complete project, including:
              </motion.p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto mb-10">
              {[
                'Existing floor plans and structural conditions',
                'Foundation and framing requirements',
                'Rooflines and exterior elevations',
                'Windows and natural light',
                'Siding, brick, stone, and other exterior materials',
                'Flooring and interior transitions',
                'Plumbing and electrical systems',
                'Heating, cooling, and ventilation',
                'Drainage and site conditions',
                'Zoning and setback requirements',
                'Building permits and inspections'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[15px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="text-center text-[16px] text-forest font-medium italic border-t border-forest/10 pt-6">
              The result should feel like an intentional extension of your home—not an addition that looks disconnected from the original structure.
            </motion.div>
          </div>
        </motion.div>

        {/* --- POPULAR ADDITIONS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Popular Additions
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-3xl">
              Popular Home Additions <br /><span className="italic text-terracotta">for Bergen County Homeowners</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: 'Primary Suite Additions', 
                  desc: 'Create a more private and comfortable retreat with a new primary bedroom, bathroom, and walk-in closet. A primary suite addition can be designed around your daily routine while providing additional storage and privacy.' 
                },
                { 
                  title: 'Bedroom Additions', 
                  desc: 'When your family needs another bedroom, adding space can be an alternative to moving. A bedroom addition can also provide a comfortable guest room or flexible space that can serve another purpose in the future.' 
                },
                { 
                  title: 'Kitchen and Dining Additions', 
                  desc: 'A kitchen addition can create room for a larger island, additional cabinetry, better circulation, expanded dining space, and improved natural light.' 
                },
                { 
                  title: 'Family Room Additions', 
                  desc: 'A rear or side family room addition can provide the extra gathering space many growing families need without sacrificing the functionality of the existing rooms.' 
                },
                { 
                  title: 'Home Office Additions', 
                  desc: 'A dedicated home office can provide separation from the rest of the household while creating a quiet, functional workspace for remote work or business use.' 
                },
                { 
                  title: 'Second-Story Additions', 
                  desc: 'Building upward can be an option when the property has limited room for a larger footprint. A second-story addition can add bedrooms, bathrooms, office space, or an entire new level. Existing foundations, structural conditions, roof configuration, zoning requirements, and engineering considerations should be evaluated before determining whether a second story is feasible.' 
                },
              ].map((step, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Option 0{i + 1}</div>
                  <h3 className="font-display text-[22px] text-linen mb-4">{step.title}</h3>
                  <div className="h-px w-10 bg-linen/20 mb-4" />
                  <p className="text-linen/70 text-[14px] leading-[1.7] font-light">{step.desc}</p>
                </motion.div>
              ))}

              <motion.div variants={fadeIn} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group md:col-span-2 lg:col-span-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Option 07</div>
                <h3 className="font-display text-[24px] text-linen mb-4">Rear and Side Home Additions</h3>
                <div className="h-px w-10 bg-linen/20 mb-6" />
                <p className="text-linen/70 text-[15px] leading-[1.7] font-light mb-6">
                  Expanding outward can be an effective way to increase usable living space while maintaining the existing home's overall layout.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-terracotta font-display text-[18px] mb-3">A rear home addition may work well for:</h4>
                    <ul className="space-y-2 text-[14px] text-linen/60">
                      <li>• Family rooms</li>
                      <li>• Kitchen expansions</li>
                      <li>• Dining areas</li>
                      <li>• Primary suites</li>
                      <li>• Sunrooms</li>
                      <li>• Larger open-concept living spaces</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-terracotta font-display text-[18px] mb-3">A side addition:</h4>
                    <p className="text-linen/60 text-[14px] leading-[1.6] mb-4">
                      A side addition may provide room for bedrooms, bathrooms, offices, garages, mudrooms, or other spaces depending on the property.
                    </p>
                    <p className="text-linen/60 text-[14px] leading-[1.6] italic">
                      The available building area, setbacks, lot coverage, easements, and local zoning regulations all need to be considered before choosing where to build.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- DESIGNING AN ADDITION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Designing an Addition <br /><span className="italic text-terracotta">That Fits Your Existing Home</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              The best home additions look as though they were designed with the original house from the beginning.
            </p>
            <p className="text-[16px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              That means paying attention to architectural details such as:
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[14px] text-forest-deep/90 mb-8 border-b border-forest/10 pb-8">
              <div>• Roof pitch and rooflines</div>
              <div>• Exterior siding, brick, or stone</div>
              <div>• Window styles and placement</div>
              <div>• Door locations</div>
              <div>• Floor heights</div>
              <div>• Ceiling heights</div>
              <div>• Trim and millwork</div>
              <div>• Flooring transitions</div>
              <div>• Interior circulation</div>
              <div>• Natural light</div>
              <div>• Heating and cooling</div>
              <div>• Plumbing and electrical systems</div>
            </div>
            <p className="text-[16px] font-medium leading-[1.8] text-terracotta italic">
              Good addition design is not simply about making the house bigger. It is about making the entire home work better.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-4">Can You Add a Second Story to an Existing Home?</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">
              Potentially, yes. A second-story addition or add-a-level project may be possible, but the existing house must first be evaluated.
            </p>
            <h4 className="text-[14px] uppercase tracking-wider font-semibold text-terracotta mb-3">Important considerations include:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-[14px] text-forest-deep/90">
              <div>• Foundation capacity</div>
              <div>• Existing framing</div>
              <div>• Load-bearing walls</div>
              <div>• Roof structure</div>
              <div>• Structural engineering</div>
              <div>• Stair access</div>
              <div>• HVAC capacity</div>
              <div>• Plumbing and electrical systems</div>
              <div>• Building height</div>
              <div>• Setbacks</div>
              <div>• Zoning requirements</div>
            </div>
            <p className="text-[13px] leading-[1.7] text-forest-deep/60 font-light mt-6 italic">
              A professional evaluation can help determine whether building upward is practical compared with expanding outward.
            </p>
          </motion.div>
        </motion.div>

        {/* --- CONSIDERATIONS GRID --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl text-forest mb-4">How Much Does a Home Addition Cost in Bergen County, NJ?</h3>
              <p className="text-[14px] leading-[1.7] text-forest-deep/80 font-light mb-6">The cost of a home addition in Bergen County, NJ varies significantly from project to project. Factors that can affect the total cost include:</p>
              <div className="grid grid-cols-1 gap-y-1.5 text-[13px] text-forest-deep/90 mb-6">
                {[
                  'Addition size',
                  'Type of addition',
                  'Structural requirements',
                  'Foundation work',
                  'Site conditions',
                  'Architectural and engineering requirements',
                  'Plumbing and electrical work',
                  'HVAC modifications',
                  'Roofing and exterior materials',
                  'Windows and doors',
                  'Interior finishes',
                  'Cabinets and fixtures',
                  'Permit and approval requirements',
                  'Overall project complexity'
                ].map((item) => (
                  <div key={item}>• {item}</div>
                ))}
              </div>
            </div>
            <p className="text-[13px] leading-[1.7] text-forest-deep/60 font-light italic border-t border-forest/5 pt-4">
              Because every property is different, an accurate estimate requires evaluating the existing home, proposed scope, site conditions, design requirements, and desired finishes.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl text-forest mb-4">Do Home Additions Require Permits in Bergen County, NJ?</h3>
              <p className="text-[14px] leading-[1.7] text-forest-deep/80 font-light mb-6">Many home additions require building permits and may also involve zoning review and approvals. Before construction begins, homeowners should determine whether the project requires:</p>
              <div className="grid grid-cols-1 gap-y-1.5 text-[13px] text-forest-deep/90 mb-6">
                {[
                  'Zoning approval',
                  'Building permits',
                  'Structural plans',
                  'Architectural drawings',
                  'Engineering',
                  'Electrical permits',
                  'Plumbing permits',
                  'HVAC permits',
                  'Inspections',
                  'Variances or other approvals'
                ].map((item) => (
                  <div key={item}>• {item}</div>
                ))}
              </div>
            </div>
            <p className="text-[13px] leading-[1.7] text-forest-deep/60 font-light italic border-t border-forest/5 pt-4">
              Because local requirements differ, property-specific planning is important before finalizing an addition design or construction budget.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl text-forest mb-4">Home Addition vs. Moving</h3>
              <p className="text-[14px] leading-[1.7] text-forest-deep/80 font-light mb-6">If your current home no longer provides enough space, you may be deciding between building an addition and moving. A home addition may make sense when you:</p>
              <div className="grid grid-cols-1 gap-y-1.5 text-[13px] text-forest-deep/90 mb-6">
                {[
                  'Like your current neighborhood',
                  'Want to remain close to schools, work, or family',
                  'Own a property with expansion potential',
                  'Need additional bedrooms or living space',
                  'Want to improve your home\'s layout',
                  'Prefer to customize the new space around your family\'s needs'
                ].map((item) => (
                  <div key={item}>• {item}</div>
                ))}
              </div>
            </div>
            <p className="text-[13px] leading-[1.7] text-forest-deep/60 font-light italic border-t border-forest/5 pt-4">
              Moving may be the better option when the property cannot accommodate the desired addition, zoning restrictions are too limiting, or the overall project does not make financial sense. The right choice depends on your property, goals, budget, and long-term plans.
            </p>
          </motion.div>

        </motion.div>

        {/* --- SERVICE AREAS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-4xl mx-auto bg-linen/50 p-12 rounded-[32px] border border-forest/5">
          <motion.h2 variants={fadeIn} className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
            Home Additions Throughout <span className="italic text-terracotta">Bergen County, NJ</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-forest-deep/80 font-light mb-6">
            We serve homeowners throughout Bergen County, New Jersey, including communities such as:
          </motion.p>
          <motion.p variants={fadeIn} className="text-[15px] leading-[2] text-forest-deep font-medium mb-6">
            Ridgewood, Paramus, Tenafly, Fort Lee, Englewood, Teaneck, Hackensack, Closter, Cresskill, Demarest, Glen Rock, Bergenfield, Fair Lawn, Oradell, Mahwah, Wyckoff, Franklin Lakes, Alpine, Saddle River, Upper Saddle River, Ramsey, and surrounding Bergen County communities.
          </motion.p>
          <motion.p variants={fadeIn} className="text-[14px] leading-[1.7] text-forest-deep/60 font-light italic border-t border-forest/10 pt-6">
            Local zoning, building requirements, lot conditions, and architectural styles can vary from one municipality to another. That's why each home addition should be evaluated based on the specific property.
          </motion.p>
        </motion.div>

        {/* --- FAQ --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col gap-12">

          <motion.div variants={fadeIn} className="text-center">
            <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Common Questions <span className="inline-block h-px w-10 bg-terracotta/60" />
            </div>
            <h2 className="font-display text-4xl sm:text-[4.5rem] leading-[1.05] text-forest mb-6 tracking-[-0.02em]">
              Frequently Asked <span className="italic text-terracotta">Questions About Home Additions</span>
            </h2>
            <p className="text-[18px] leading-[1.8] text-forest-deep/80 font-light mt-6 max-w-2xl mx-auto">
              Planning a home addition is a major decision. Here are answers to some of the most common questions we receive from homeowners in Bergen County.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'What is the most popular type of home addition?', a: 'Popular projects include kitchen and family room expansions, primary suite additions, bedroom additions, rear additions, and second-story additions. The best option depends on the available property and the space your household needs.' },
              { q: 'How long does a home addition take?', a: 'Project timelines vary based on the size and complexity of the addition, design and engineering requirements, permitting, material availability, and construction scope. A project-specific schedule should be established before construction begins.' },
              { q: 'Is it cheaper to build up or out?', a: 'Neither option is automatically less expensive. Building outward may require additional foundation and site work, while building upward can involve structural reinforcement, roof removal, and additional framing. A property evaluation can help determine which option makes more sense.' },
              { q: 'Do I need an architect for a home addition?', a: 'Many home additions require architectural plans and may also require structural engineering. The exact requirements depend on the municipality, project scope, and structural changes involved.' },
              { q: 'Can a home addition increase property value?', a: 'A well-designed addition can improve a home\'s functionality and may contribute to its market value. The potential return depends on the location, quality of construction, type of addition, existing home, and local real estate market.' },
              { q: 'Should I remodel or build an addition?', a: 'If your existing home has enough square footage but needs a better layout, remodeling may be sufficient. If you need substantially more living space, a home addition may provide a better solution.' },
            ].map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div variants={fadeIn} key={i} className={`rounded-[24px] border border-white transition-colors duration-500 overflow-hidden ${isOpen ? 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]' : 'bg-white/40 hover:bg-white/70 shadow-[0_4px_20px_rgb(0,0,0,0.02)]'}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-6 sm:p-8 flex items-start sm:items-center justify-between focus:outline-none group gap-6"
                  >
                    <h3 className={`font-display text-[20px] sm:text-[22px] leading-snug transition-colors pt-1 sm:pt-0 ${isOpen ? 'text-terracotta' : 'text-forest group-hover:text-terracotta'}`}>
                      {faq.q}
                    </h3>
                    <span className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] mt-1 sm:mt-0 ${isOpen ? 'rotate-45 bg-terracotta text-white border-transparent' : 'border border-forest/15 text-forest bg-transparent group-hover:border-terracotta/30 group-hover:bg-terracotta/5'}`}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                        <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:sm:pb-8 pt-0">
                      <div className="h-px w-full bg-gradient-to-r from-forest/10 to-transparent mb-6" />
                      <p className="text-forest-deep/80 text-[16px] sm:text-[17px] leading-[1.8] font-light">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-forest py-16 sm:py-24 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-6 leading-[1.05] tracking-[-0.02em]">
              Plan Your Bergen County <br className="hidden sm:block" /><span className="italic text-terracotta">Home Addition</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>If your family needs more space, you don't necessarily have to move.</p>
              <p>A thoughtfully planned home addition in Bergen County, NJ can create the bedrooms, living areas, home office, kitchen space, or primary suite you've been missing while allowing you to remain in the community you call home.</p>
              <p>Contact us to discuss your property, goals, budget, and home addition options.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-10">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex justify-center">
               <Link to="/services/whole-home-additions" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-linen/50 hover:text-terracotta transition-colors font-medium bg-[#233528] hover:bg-[#2e4735] px-6 py-3 rounded-full border border-linen/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
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
