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

export default function VeterinaryHospitalBergenCountyPage() {
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
               <Link to="/veterinary-hospital-construction-nj" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Bergen County, NJ</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,5.5rem)] text-forest leading-[1.05] tracking-[-0.02em] mb-8">
              Veterinary Hospital Construction in <br className="hidden sm:block" />
              <span className="italic text-terracotta">Bergen County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-12 max-w-2xl mx-auto">
              Build a Veterinary Facility Around Your Practice
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-32">

        {/* --- INTRO --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="relative">
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-forest mb-8 leading-[1.1] tracking-[-0.02em]">
                Designed for <br /><span className="italic text-terracotta">Real-World Workflow</span>
              </h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-forest-deep/80 font-light">
                <p>A veterinary hospital needs to support clinical care, staff workflow, animal handling, client interaction, and the equipment used every day.</p>
                <p>Hevan M Constructions provides veterinary hospital construction and renovation services in Bergen County, NJ, from our base in Verona, New Jersey.</p>
                <p>Whether you are planning a new veterinary clinic, expanding an existing practice, or converting a suitable commercial space, we help coordinate construction around the intended use of the facility.</p>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Reception and waiting areas',
                'Examination rooms',
                'Treatment areas',
                'Surgical rooms',
                'Pre-op and recovery areas',
                'Diagnostic spaces',
                'Laboratory areas',
                'Patient hospitalization',
                'Animal holding areas',
                'Pharmacy and storage',
                'Staff areas',
                'Administrative offices'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60" />
                  <span className="text-[15px] text-forest-deep">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeIn} className="mt-6 text-sm text-forest-deep/70 italic text-center">
              The appropriate spaces depend on the services and operating model of the veterinary practice.
            </motion.p>
          </div>
        </motion.div>

        {/* --- CLINIC BUILD-OUTS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
              Veterinary Clinic <span className="italic text-terracotta">Build-Outs</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light">
              <p>An existing commercial property may provide an opportunity to create a veterinary practice without starting with a completely new building.</p>
              <p>A build-out can involve interior reconfiguration, new examination rooms, treatment areas, plumbing, electrical work, lighting, HVAC modifications, durable flooring and wall finishes, reception improvements, storage, and specialized clinical areas.</p>
              <p className="font-medium text-forest/90">The existing building should be evaluated before determining whether it is suitable for the intended use.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- SURGICAL AREAS & RENOVATING --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Construction for <br/><span className="italic text-terracotta">Surgical Areas</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              Surgical environments require careful coordination between the room layout, equipment, utilities, staff movement, and adjacent clinical spaces.
            </p>
            <h3 className="font-display text-2xl text-forest mb-6">Planning may address:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-[15px] text-forest-deep/80 font-light">
              {[
                'Surgical room configuration', 'Equipment locations', 'Electrical requirements',
                'Lighting', 'Storage', 'Pre-operative areas', 'Recovery areas',
                'Staff circulation', 'Cleaning/maintenance', 'Mechanical/ventilation'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-terracotta mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-forest-deep/70 italic">Clinical specifications should be established with the veterinary practice and appropriate design professionals.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-sm">
            <h2 className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
              Renovating an <br/><span className="italic text-terracotta">Existing Hospital</span>
            </h2>
            <div className="space-y-4 text-[16.5px] leading-[1.8] text-forest-deep/80 font-light">
              <p>An established veterinary practice may need more examination rooms, improved treatment space, updated finishes, or a better patient and staff flow.</p>
              <p>Renovation can provide an opportunity to improve the facility while retaining an existing location.</p>
              <p className="font-medium text-forest pt-2 border-t border-forest/10">The project may require careful sequencing when the practice remains operational.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- COST NOTE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-4xl mx-auto bg-sand rounded-[32px] p-10 sm:p-14">
           <motion.h2 variants={fadeIn} className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
              What Affects Construction Cost?
            </motion.h2>
            <motion.div variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/90 font-light text-left">
              <p className="text-center mb-6">There is no standard price for veterinary construction. Costs can depend on:</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 max-w-3xl mx-auto mb-6">
                {[
                  'Facility size', 'New construction or renovation', 'Existing building conditions',
                  'Number of clinical rooms', 'Surgical requirements', 'Plumbing and electrical needs',
                  'HVAC', 'Equipment requirements', 'Finishes', 'Millwork', 'Accessibility', 'Permits and inspections', 'Overall project complexity'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px]">
                     <span className="text-olive w-1 h-1 rounded-full bg-olive flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-center text-[15px] italic border-t border-forest/10 pt-6">A property-specific scope is necessary for meaningful budgeting.</p>
            </motion.div>
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
                { q: 'How much does it cost to build a veterinary hospital in Bergen County?', a: 'The cost varies substantially according to the building, size, clinical services, equipment, finishes, mechanical systems, and construction scope. A project-specific estimate is needed.' },
                { q: 'Can you convert an existing building into a veterinary clinic?', a: "Potentially. The property's physical condition, layout, infrastructure, intended use, and applicable requirements all need to be evaluated." },
                { q: 'Can you construct veterinary surgical areas?', a: 'Yes. Construction can include dedicated surgical spaces when they are part of the project\'s scope and appropriately planned.' },
                { q: 'What should be planned before construction?', a: 'Define your veterinary services, room requirements, equipment, patient volume, staff workflow, storage needs, budget, and future expansion goals.' },
                { q: 'Do veterinary facilities require special planning?', a: 'Yes. Animal care facilities can have specialized requirements involving clinical workflow, sanitation, ventilation, utilities, equipment, accessibility, and other building considerations.' },
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
              Veterinary Hospital Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Bergen County</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-14 max-w-2xl mx-auto font-light">
              <p>Hevan M Constructions is based in Verona, NJ and serves Bergen County as part of our North Jersey service area.</p>
              <p>Planning a veterinary clinic, animal hospital, renovation, or expansion? Contact Hevan M Constructions to discuss your project.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-16">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex justify-center">
               <Link to="/veterinary-hospital-construction-nj" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
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
