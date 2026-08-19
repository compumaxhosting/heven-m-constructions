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

export default function VeterinaryHospitalConstructionPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <main className="bg-[#F6F4EE] min-h-screen selection:bg-terracotta/20 selection:text-forest-deep">

      {/* --- HERO SECTION (Additions Style) --- */}
      <section className="relative overflow-hidden pt-40 pb-24 sm:pt-64 sm:pb-40 bg-[#F6F4EE]">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-[10%] -left-[10%] w-[60vw] h-[100%] bg-gradient-to-r from-[#d27d55]/60 via-[#e58a5b]/20 to-transparent blur-[100px]" />
        <div className="pointer-events-none absolute -top-[10%] -right-[10%] w-[60vw] h-[100%] bg-gradient-to-l from-[#8aa87d]/60 via-[#9dbd90]/20 to-transparent blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">

            <motion.div variants={fadeIn} className="mb-6 flex justify-start">
              <Link to="/services" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] hover:bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                Back to Services
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Verona, NJ & North Jersey</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-display text-[clamp(2.8rem,9vw,7.5rem)] text-forest leading-[0.95] tracking-[-0.04em] mb-8">
              Veterinary Hospital <br />
              <span className="italic text-terracotta">Construction in NJ</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-6">
              Specialized Construction for Modern Veterinary Facilities.
            </motion.p>

            <motion.p variants={fadeIn} className="text-[16px] sm:text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-10">
              Hevan M Constructions provides veterinary hospital and veterinary facility construction services from Verona, New Jersey, serving Bergen, Essex, Morris, Union, and Passaic Counties. We help develop veterinary spaces around the needs of veterinarians, staff, patients, and pet owners—from initial planning through construction and final completion.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.2em] text-forest/50 font-medium mr-2">Serving:</span>
              {[
                { name: 'Bergen', path: '/veterinary-hospital-construction-bergen-county-nj' },
                { name: 'Essex', path: '/veterinary-hospital-construction-essex-county-nj' },
                { name: 'Morris', path: '/veterinary-hospital-construction-morris-county-nj' },
                { name: 'Passaic', path: '/veterinary-hospital-construction-passaic-county-nj' },
                { name: 'Union', path: '/veterinary-hospital-construction-union-county-nj' },
              ].map((county) => (
                <Link
                  key={county.name}
                  to={county.path}
                  className="group flex items-center gap-2 rounded-full border border-forest/15 bg-white/40 backdrop-blur-sm px-5 py-2.5 text-[14px] font-medium text-forest transition-all hover:bg-forest hover:text-linen hover:border-forest shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(35,53,40,0.15)]"
                >
                  {county.name}
                  <span className="text-terracotta group-hover:text-terracotta transition-transform duration-300 -rotate-45 group-hover:rotate-0 inline-block">→</span>
                </Link>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">

        {/* --- BUILD AROUND CLINICAL WORKFLOW --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Clinical Workflow
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-linen mb-8 tracking-[-0.02em]">
                Build Around <br /><span className="italic text-terracotta">Clinical Workflow</span>
              </motion.h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-linen/70 font-light">
                <motion.p variants={fadeIn}>
                  A veterinary hospital requires more than a conventional commercial interior. Treatment areas, surgical suites, diagnostic spaces, animal recovery, staff areas, client circulation, plumbing, electrical systems, ventilation, and durable finishes all need to work together.
                </motion.p>
                <motion.p variants={fadeIn} className="text-[16px] leading-[1.8] text-linen/90 font-medium border-t border-white/10 pt-6">
                  The exact requirements depend on the veterinary services offered and the facility's operational plan.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm p-8 rounded-[24px] sm:rounded-[32px] border border-white/10 shadow-sm">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta mb-6">Facility areas may include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Reception and client waiting areas',
                    'Examination rooms',
                    'Treatment areas',
                    'Surgical suites',
                    'Pre-operative and recovery areas',
                    'Diagnostic spaces',
                    'Laboratory areas',
                    'Pharmacy and medication storage',
                    'Animal hospitalization areas',
                    'Isolation areas',
                    'Staff workspaces',
                    'Kennels and animal holding areas',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 flex-shrink-0" />
                      <span className="text-[15px] text-linen/90 leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- SERVICES (3-Col Cards) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Construction Services
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {[
                { num: '01', title: 'New Veterinary Hospitals', desc: 'Develop a purpose-built facility around your practice model, clinical services, workflow, and future needs.' },
                { num: '02', title: 'Veterinary Clinic Build-Outs', desc: 'Transform an existing commercial space into a veterinary practice with appropriately planned treatment, examination, client, and support areas.' },
                { num: '03', title: 'Veterinary Hospital Renovations', desc: 'Improve an existing facility through reconfiguration, expansion, updated finishes, or targeted improvements.' },
                { num: '04', title: 'Surgical Suite Construction', desc: 'Create dedicated surgical environments with construction requirements appropriate to the planned veterinary procedures and equipment.' },
                { num: '05', title: 'Veterinary Treatment Areas', desc: 'Plan durable, functional spaces for examinations, treatments, diagnostics, and patient care.' },
                { num: '06', title: 'Hospital Expansion', desc: 'Add rooms, treatment areas, staff spaces, or other capacity as an established veterinary practice grows.' },
              ].map((item, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group flex flex-col">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Service {item.num}</div>
                  <h3 className="font-display text-[26px] text-linen mb-4">{item.title}</h3>
                  <div className="h-px w-10 bg-linen/20 mb-6" />
                  <p className="text-linen/70 text-[15px] leading-[1.7] font-light flex-grow">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- WHY VETERINARY CONSTRUCTION IS SPECIALIZED (Light bg-linen) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
                A Construction Approach <span className="italic text-terracotta">Built Around Your Facility</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light mb-8">
                <p className="font-medium text-forest-deep">Good construction planning considers:</p>
                <p>How animals, clients, veterinarians, technicians, equipment, supplies, and waste move through the facility. The goal is a facility that supports the way your veterinary team actually works.</p>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white shadow-sm">
                <div className="grid grid-cols-1 gap-y-3 gap-x-6">
                  {[
                    'Patient and client circulation',
                    'Examination room placement',
                    'Treatment workflow',
                    'Surgical access and recovery areas',
                    'Animal separation requirements',
                    'Staff circulation and storage',
                    'Plumbing, electrical, and HVAC',
                    'Durable, cleanable surfaces',
                    'Cleaning and sanitation systems',
                    'Equipment locations and capacity',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[14px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                      <span className="text-terracotta mt-1">✦</span> <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- SURGICAL SUITE & DURABLE MATERIALS (Dark forest cards) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Specialized Areas
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeIn} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group flex flex-col">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Area 01</div>
                <h3 className="font-display text-[26px] text-linen mb-4">Veterinary Surgical Suite</h3>
                <div className="h-px w-10 bg-linen/20 mb-6" />
                <p className="text-linen/70 text-[15px] leading-[1.7] font-light mb-8 flex-grow">
                  Surgical areas require careful planning because the space must support the clinical workflow surrounding procedures. The appropriate specifications should be developed with the veterinary practice's clinical, architectural, engineering, and regulatory requirements.
                </p>
                <div className="border-t border-linen/10 pt-6">
                  <p className="text-[12px] text-terracotta font-medium tracking-[0.1em] uppercase mb-4">Planning Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Surgical room configuration', 'Pre-operative areas', 'Recovery areas', 'Equipment placement', 'HVAC & ventilation'].map(item => (
                      <span key={item} className="px-3 py-1 bg-linen/5 border border-linen/10 rounded-full text-[13px] text-linen/80">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group flex flex-col">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Area 02</div>
                <h3 className="font-display text-[26px] text-linen mb-4">Durable Construction for Animal Care</h3>
                <div className="h-px w-10 bg-linen/20 mb-6" />
                <p className="text-linen/70 text-[15px] leading-[1.7] font-light mb-8 flex-grow">
                  Veterinary facilities experience demanding daily use. Floors, walls, counters, doors, fixtures, and other finishes may be exposed to moisture, cleaning chemicals, animal activity, and frequent traffic. Material selection should consider the long-term durability of each area.
                </p>
                <div className="border-t border-linen/10 pt-6">
                  <p className="text-[12px] text-terracotta font-medium tracking-[0.1em] uppercase mb-4">Material Considerations:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Durability', 'Cleanability', 'Moisture resistance', 'Safety', 'Long-term use'].map(item => (
                      <span key={item} className="px-3 py-1 bg-linen/5 border border-linen/10 rounded-full text-[13px] text-linen/80">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- FAQ --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="sticky top-32 lg:pr-8">
              <h2 className="font-display text-4xl sm:text-[3.5rem] leading-[1.05] text-forest mb-6 tracking-[-0.02em]">
                Frequently Asked <br className="hidden lg:block" /><span className="italic text-terracotta">Questions</span>
              </h2>
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
              <p className="text-[17px] sm:text-[19px] leading-[1.7] text-forest-deep/80 font-light mb-8">
                Learn more about our veterinary hospital construction process and requirements.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-forest/15">
              {[
                { q: 'What is veterinary hospital construction?', a: 'Veterinary hospital construction involves planning and building facilities specifically designed for animal healthcare, including examination, treatment, surgery, diagnostics, recovery, hospitalization, client, and staff areas.' },
                { q: 'Can you build a clinic inside an existing commercial building?', a: 'Potentially. An existing commercial property can sometimes be converted into a veterinary facility, depending on the building, zoning, infrastructure, layout, and applicable requirements.' },
                { q: 'Can you construct a veterinary surgical suite?', a: 'Yes, construction can include dedicated surgical areas. The design and specifications should be developed around the procedures, equipment, clinical workflow, and applicable requirements of the veterinary practice.' },
                { q: 'How much does it cost to build a veterinary hospital in NJ?', a: 'There is no reliable single price. Size, location, building conditions, clinical services, equipment, mechanical systems, finishes, and project complexity all influence cost.' },
                { q: 'How long does it take?', a: 'The timeline depends on the size and complexity of the project, design and engineering requirements, permitting, materials, existing conditions, and construction scope.' },
                { q: 'Does a veterinary hospital need special construction considerations?', a: 'Yes. Veterinary facilities can require specialized planning for clinical workflow, animal handling, sanitation, ventilation, plumbing, electrical systems, equipment, durable finishes, accessibility, and other facility requirements.' },
                { q: 'Can an existing veterinary hospital be expanded?', a: 'Often, expansion can be considered when the property and existing building allow it. The feasibility depends on the site, structure, zoning, building systems, and proposed scope.' },
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
                          <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

        {/* --- SERVICE AREAS LINKS (Additions County Grid Style) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-[#F6F4EE] rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 lg:p-20 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-forest/5">
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, #233528 1px, transparent 1px), linear-gradient(to bottom, #233528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="pointer-events-none absolute top-0 left-0 w-[50%] h-[100%] bg-gradient-to-r from-[#d27d55]/40 via-[#e58a5b]/10 to-transparent blur-[80px]" />
          <div className="pointer-events-none absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#8aa87d]/40 via-[#9dbd90]/10 to-transparent blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-6">
                <span className="inline-block h-px w-10 bg-terracotta/60" /> Service Areas
              </motion.div>
              <motion.h2 variants={fadeIn} className="font-display text-[2.5rem] sm:text-5xl text-forest mb-6 tracking-[-0.02em] leading-[1.05]">
                Serving New Jersey's <br /><span className="italic text-terracotta">Premier Communities</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-6">
                Hevan M Constructions provides veterinary hospital construction services throughout Northern New Jersey:
              </motion.p>
            </div>

            <div className="lg:col-span-7 lg:mt-6">
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Bergen County', link: '/veterinary-hospital-construction-bergen-county-nj' },
                  { title: 'Essex County', link: '/veterinary-hospital-construction-essex-county-nj' },
                  { title: 'Morris County', link: '/veterinary-hospital-construction-morris-county-nj' },
                  { title: 'Passaic County', link: '/veterinary-hospital-construction-passaic-county-nj' },
                  { title: 'Union County', link: '/veterinary-hospital-construction-union-county-nj' },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="group relative overflow-hidden rounded-[24px] border border-forest/10 bg-[#F6F4EE]/50 backdrop-blur-sm p-6 sm:p-7 transition-all hover:bg-white hover:border-terracotta/30 hover:shadow-[0_8px_30px_rgba(210,125,85,0.08)] flex items-center justify-between"
                  >
                    <span className="relative z-10 text-[18px] sm:text-[19px] font-display text-forest group-hover:text-terracotta transition-colors">
                      {item.title}
                    </span>
                    <span className="relative z-10 w-10 h-10 rounded-full border border-forest/15 flex items-center justify-center text-forest/50 group-hover:bg-terracotta group-hover:text-white group-hover:border-terracotta transition-all duration-500 ease-out -rotate-45 group-hover:rotate-0">
                      →
                    </span>
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* --- CTA SECTION (Additions Style) --- */}
      <section className="bg-forest py-16 sm:py-24 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeIn} className="flex justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/20 text-[12px] uppercase tracking-[0.2em] text-terracotta font-medium">
                Planning a Veterinary Project?
              </span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-6 leading-[1.05] tracking-[-0.02em]">
              Start Your Veterinary <br className="hidden sm:block" /><span className="italic text-terracotta">Hospital Project</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-10 max-w-2xl mx-auto font-light">
              <p>Whether you are planning a new veterinary hospital, clinic build-out, surgical facility, renovation, or expansion, the construction should begin with a clear understanding of how your practice will operate.</p>
              <p>Contact Hevan M Constructions to discuss your facility, location, and construction goals.</p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex flex-col items-center gap-4 text-linen/40 text-[14px]">
              <p className="font-medium text-linen/80">Hevan M Constructions</p>
              <p>Verona, New Jersey</p>
              <p className="italic">Serving Bergen, Essex, Morris, Union & Passaic Counties</p>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
