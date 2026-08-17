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
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Bergen County, NJ</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,5.5rem)] text-forest leading-[1.05] tracking-[-0.02em] mb-8">
              Home Additions in <br className="hidden sm:block" />
              <span className="italic text-terracotta">Bergen County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-12 max-w-2xl mx-auto">
              Need more space but don't want to leave the Bergen County neighborhood you love? A custom home addition can give your family the extra room, improved layout, and functionality you need.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-32">

        {/* --- CUSTOM HOME ADDITIONS (GRID) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="relative">
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-forest mb-8 leading-[1.1] tracking-[-0.02em]">
                Custom Home Addition <span className="italic text-terracotta">Services</span>
              </h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-forest-deep/80 font-light">
                <p>Every home addition is different. The right design depends on your home's existing structure, property layout, family needs, and local zoning requirements.</p>
                <p>Whether you need one additional room or a larger expansion, the goal is to create new living space that looks and functions like a natural part of your home.</p>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Room additions',
                'Bedroom additions',
                'Primary suite additions',
                'Kitchen & dining additions',
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
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60" />
                  <span className="text-[14px] text-forest-deep">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* --- CONTRACTOR CONSIDERATIONS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
                Choosing the Right Home Addition <span className="italic text-terracotta">Contractor</span>
              </h2>
              <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
                A successful addition requires careful planning, accurate budgeting, structural considerations, permitting, construction coordination, and attention to how the new space connects with the existing house. We consider the complete project, including:
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {[
                'Existing floor plans & structural conditions',
                'Foundation & framing requirements',
                'Rooflines & exterior elevations',
                'Windows & natural light',
                'Siding, brick, stone, & exterior materials',
                'Flooring & interior transitions',
                'Plumbing & electrical systems',
                'Heating, cooling, & ventilation',
                'Drainage & site conditions',
                'Zoning & setback requirements',
                'Building permits & inspections'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">✦</span>
                  <span className="text-[15px] text-forest-deep/90">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* --- POPULAR ADDITIONS (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />
          
          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Popular Additions
            </motion.div>
            
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
              Options for <span className="italic text-terracotta">Bergen County</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Primary Suite Additions', desc: 'Create a more private retreat with a new primary bedroom, bathroom, and walk-in closet designed around your routine.' },
                { title: 'Bedroom Additions', desc: 'When your family needs another bedroom, adding space can provide a comfortable guest room or flexible area.' },
                { title: 'Kitchen & Dining Additions', desc: 'Create room for a larger island, additional cabinetry, expanded dining space, and improved natural light.' },
                { title: 'Family Room Additions', desc: 'A rear or side addition can provide extra gathering space growing families need without sacrificing existing rooms.' },
                { title: 'Home Office Additions', desc: 'A dedicated office can provide separation from the household while creating a quiet, functional workspace.' },
                { title: 'Second-Story Additions', desc: 'Building upward can add bedrooms, bathrooms, office space, or a new level when the property has limited room.' },
                { title: 'Rear & Side Additions', desc: 'Expanding outward can increase usable space for sunrooms, mudrooms, or garages while maintaining your layout.' },
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

        {/* --- CONSIDERATIONS GRID --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <h3 className="font-display text-2xl text-forest mb-4">Designing an Addition That Fits</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">The best home additions look as though they were designed with the original house. That means paying attention to details such as:</p>
            <ul className="grid grid-cols-2 gap-y-2 text-[14px] text-forest-deep/90">
              <li>• Roof pitch & rooflines</li>
              <li>• Exterior siding & brick</li>
              <li>• Window styles</li>
              <li>• Door locations</li>
              <li>• Floor heights</li>
              <li>• Ceiling heights</li>
              <li>• Trim & millwork</li>
              <li>• Flooring transitions</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <h3 className="font-display text-2xl text-forest mb-4">Permits & Approvals</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light mb-6">Many additions require permits and zoning review in Bergen County. You may need:</p>
            <ul className="grid grid-cols-2 gap-y-2 text-[14px] text-forest-deep/90">
              <li>• Zoning approval</li>
              <li>• Building permits</li>
              <li>• Structural plans</li>
              <li>• Architectural drawings</li>
              <li>• Engineering</li>
              <li>• Electrical permits</li>
              <li>• HVAC & Plumbing permits</li>
              <li>• Variances</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <h3 className="font-display text-2xl text-forest mb-4">How Much Does it Cost?</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light">The cost varies significantly. Factors include the addition size, type, structural and foundation requirements, site conditions, engineering, plumbing, HVAC, exterior materials, interior finishes, and overall complexity. An accurate estimate requires evaluating your specific home and scope.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <h3 className="font-display text-2xl text-forest mb-4">Home Addition vs. Moving</h3>
            <p className="text-[15px] leading-[1.7] text-forest-deep/80 font-light">An addition makes sense when you love your neighborhood, want to stay close to schools or work, have expansion potential on your lot, and want to customize the space to your family. Moving may be better when the property cannot physically or legally accommodate the expansion.</p>
          </motion.div>
        </motion.div>

        {/* --- SERVICE AREAS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-4xl mx-auto bg-linen/50 p-12 rounded-[32px] border border-forest/5">
          <motion.h2 variants={fadeIn} className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
            Home Additions Throughout <span className="italic text-terracotta">Bergen County</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-forest-deep/80 font-light mb-6">
            We serve homeowners throughout Bergen County, New Jersey, including communities such as:
          </motion.p>
          <motion.p variants={fadeIn} className="text-[15px] leading-[2] text-forest-deep font-medium">
            Ridgewood • Paramus • Tenafly • Fort Lee • Englewood • Teaneck • Hackensack • Closter • Cresskill • Demarest • Glen Rock • Bergenfield • Fair Lawn • Oradell • Mahwah • Wyckoff • Franklin Lakes • Alpine • Saddle River • Upper Saddle River • Ramsey
          </motion.p>
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
                { q: 'What is the most popular type of home addition?', a: 'Popular projects include kitchen and family room expansions, primary suite additions, bedroom additions, rear additions, and second-story additions. The best option depends on the available property and the space your household needs.' },
                { q: 'How long does a home addition take?', a: 'Project timelines vary based on the size and complexity of the addition, design and engineering requirements, permitting, material availability, and construction scope.' },
                { q: 'Is it cheaper to build up or out?', a: 'Neither option is automatically less expensive. Building outward may require additional foundation and site work, while building upward can involve structural reinforcement, roof removal, and additional framing.' },
                { q: 'Do I need an architect for a home addition?', a: 'Many home additions require architectural plans and may also require structural engineering. The exact requirements depend on the municipality, project scope, and structural changes involved.' },
                { q: 'Can a home addition increase property value?', a: 'A well-designed addition can improve a home\'s functionality and may contribute to its market value. The potential return depends on the location, quality of construction, type of addition, and local real estate market.' },
                { q: 'Should I remodel or build an addition?', a: 'If your existing home has enough square footage but needs a better layout, remodeling may be sufficient. If you need substantially more living space, a home addition may provide a better solution.' },
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
              Plan Your Bergen County <br className="hidden sm:block" /><span className="italic text-terracotta">Home Addition</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-14 max-w-2xl mx-auto font-light">
              <p>Create more space. Improve how your home works. Stay where you belong.</p>
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
