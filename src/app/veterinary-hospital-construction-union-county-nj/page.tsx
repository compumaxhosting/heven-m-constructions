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

export default function VeterinaryHospitalUnionCountyPage() {
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
               <Link to="/" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Home
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Union County, NJ</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,5.5rem)] text-forest leading-[1.05] tracking-[-0.02em] mb-8">
              Veterinary Hospital Construction in <br className="hidden sm:block" />
              <span className="italic text-terracotta">Union County, NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-12 max-w-2xl mx-auto">
              Create a Veterinary Facility That Works for Staff, Patients, and Clients
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
                Plan the Facility <br /><span className="italic text-terracotta">Around Patient Flow</span>
              </h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-forest-deep/80 font-light">
                <p>A veterinary hospital must accommodate more than medical rooms. The facility also needs to support staff movement, patient handling, equipment, storage, sanitation, and client interaction.</p>
                <p>The physical arrangement of a veterinary hospital can influence daily operations.</p>
                <p className="pt-2 border-t border-forest/10 font-medium text-forest">The important point is to plan the facility around actual clinical operations.</p>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Reception',
                'Examination',
                'Treatment',
                'Diagnostics',
                'Surgery',
                'Recovery',
                'Hospitalization'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60" />
                  <span className="text-[15px] text-forest-deep">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeIn} className="mt-6 text-sm text-forest-deep/70 italic text-center">
              Not every practice requires every area, and the ideal arrangement depends on the services offered.
            </motion.p>
          </div>
        </motion.div>

        {/* --- SERVICES LIST --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />
          
          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Construction Services
            </motion.div>
            
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-3xl">
              Veterinary <br className="hidden md:block"/><span className="italic text-terracotta">Construction Services</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'New veterinary hospitals',
                'Veterinary clinic build-outs',
                'Hospital renovations',
                'Practice expansions',
                'Examination rooms',
                'Treatment areas',
                'Surgical suites',
                'Recovery spaces',
                'Diagnostic areas',
                'Client reception',
                'Waiting rooms',
                'Staff areas',
                'Storage',
                'Animal housing areas'
              ].map((step, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[20px] border border-linen/10 bg-linen/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-terracotta/50 group flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta/80" />
                  <p className="text-linen/80 text-[15px] font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- EXAM & BUILD-OUTS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div variants={fadeIn} className="bg-linen p-10 sm:p-14 rounded-[32px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col">
            <h2 className="font-display text-4xl text-forest mb-8 tracking-[-0.02em]">
              Build-Outs for <br /><span className="italic text-terracotta">Veterinary Practices</span>
            </h2>
            <div className="space-y-5 text-[16.5px] leading-[1.8] text-forest-deep/90 mb-10 flex-grow font-light">
              <p>Converting an existing commercial interior into a veterinary clinic involves more than installing partitions.</p>
              <p className="font-medium text-forest pt-2">The project may require coordination of:</p>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mt-4 text-[14.5px]">
                {[
                  'Plumbing', 'Electrical', 'Lighting', 'HVAC',
                  'Flooring', 'Wall finishes', 'Doors', 'Casework',
                  'Storage', 'Clinical equipment', 'Reception areas'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-terracotta/60 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 border-t border-forest/10">
              <p className="text-[14.5px] italic text-forest-deep/80 leading-relaxed text-center">
                Existing building conditions should be assessed before the construction scope is finalized.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-sand p-10 sm:p-14 rounded-[32px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col">
            <h2 className="font-display text-4xl text-forest mb-8 tracking-[-0.02em]">
              Creating Better <br /><span className="italic text-terracotta">Examination and Treatment Areas</span>
            </h2>
            <div className="space-y-5 text-[16.5px] leading-[1.8] text-forest-deep/90 mb-10 flex-grow font-light">
              <p>Examination and treatment rooms need to support the veterinary team without creating unnecessary movement.</p>
              <p className="font-medium text-forest pt-2">Planning can consider:</p>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mt-4 text-[14.5px]">
                {[
                  'Room accessibility', 'Equipment placement', 'Storage',
                  'Work surfaces', 'Electrical outlets', 'Lighting', 'Plumbing',
                  'Staff circulation', 'Patient movement', 'Cleanability'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-olive/80 w-1.5 h-1.5 rounded-full bg-olive/80 flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 border-t border-forest/10">
              <p className="text-[14.5px] italic text-forest-deep/80 leading-relaxed text-center">
                The exact specifications should be determined according to the practice's clinical requirements.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- FUTURE GROWTH & RENOVATION --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Renovating an Operating <br/><span className="italic text-terracotta">Veterinary Practice</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              Renovating an existing hospital can be more complicated when the practice continues seeing patients. Project planning may therefore need to consider:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-[15px] text-forest-deep/80 font-light">
              {[
                'Construction phasing', 'Temporary access', 'Separation of construction areas',
                'Material deliveries', 'Staff movement', 'Patient safety',
                'Client access', 'Scheduling'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-terracotta mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-forest font-medium pt-4 border-t border-forest/10">The appropriate approach depends on the scope and operating conditions.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-sm">
            <h2 className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
              Building for <br/><span className="italic text-terracotta">Future Growth</span>
            </h2>
            <div className="space-y-4 text-[16.5px] leading-[1.8] text-forest-deep/80 font-light mb-6">
              <p>Veterinary practices can change over time.</p>
              <p>When planning a new facility or major renovation, consider whether the space can accommodate future needs such as additional examination rooms, larger treatment capacity, expanded staff areas, or new equipment.</p>
              <p className="font-medium text-forest pt-2 border-t border-forest/10">Planning for flexibility does not mean building unnecessary space. It means understanding where future changes may affect today's construction decisions.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- COST NOTE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-4xl mx-auto bg-white/40 border border-white rounded-[32px] p-10 sm:p-14">
           <motion.h2 variants={fadeIn} className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
              Veterinary Hospital Construction Costs
            </motion.h2>
            <motion.div variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/90 font-light text-left">
              <p className="text-center mb-6">There is no fixed cost for veterinary facility construction in Union County. The investment depends on factors such as:</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 max-w-3xl mx-auto mb-6 text-[14px]">
                {[
                  'Facility size', 'Property condition', 'Construction type',
                  'Clinical requirements', 'Number of rooms', 'Mechanical systems',
                  'Electrical work', 'Plumbing', 'Finishes', 'Equipment',
                  'Accessibility', 'Permitting', 'Project complexity'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                     <span className="text-olive w-1 h-1 rounded-full bg-olive flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-center text-[15px] italic border-t border-forest/10 pt-6">A project-specific scope is necessary for accurate budgeting.</p>
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
                { q: 'Can you build a veterinary clinic in an existing building?', a: "Potentially. The building's condition, configuration, infrastructure, intended use, and applicable requirements must be evaluated." },
                { q: 'What should a veterinary hospital include?', a: "There is no universal layout. Requirements depend on services, patient volume, staffing, equipment, and clinical workflow." },
                { q: 'Can you renovate an existing animal hospital?', a: 'Yes, renovation can include reconfiguration, new rooms, updated finishes, system improvements, or additional clinical capacity.' },
                { q: 'How should a veterinary hospital be planned?', a: 'Start with services and workflow, then determine room requirements, equipment, utilities, circulation, storage, client areas, and construction needs.' },
                { q: 'Can you help with a hospital expansion?', a: 'Expansion can be considered when the existing building and property support the proposed work.' },
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
              Veterinary Hospital Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Union County, NJ</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-14 max-w-2xl mx-auto font-light">
              <p>Hevan M Constructions is based in Verona, New Jersey and serves veterinary practices in Union County and surrounding North Jersey communities.</p>
              <p>Planning a veterinary clinic, animal hospital, renovation, or expansion? Contact Hevan M Constructions to discuss your facility.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-16">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex justify-center">
               <Link to="/" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Home
               </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
