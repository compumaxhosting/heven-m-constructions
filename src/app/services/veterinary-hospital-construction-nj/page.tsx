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

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-44 pb-32 sm:pt-52"
        style={{
          backgroundImage: [
            'radial-gradient(circle at 15% 50%, rgba(210,125,85,0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 85% 30%, rgba(138,168,125,0.12) 0%, transparent 50%)',
          ].join(', ')
        }}
      >
        <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-40 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/4 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-40 blur-[130px]" />

        {/* Subtle grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: 'linear-gradient(#2c402c 1px, transparent 1px), linear-gradient(90deg, #2c402c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive mb-8">
              <span className="inline-block h-px w-10 bg-olive/60" /> Veterinary Services
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-forest mb-8">
              Veterinary Hospital <br className="hidden md:block" />
              <span className="italic text-terracotta font-normal">Construction</span> in NJ
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl sm:text-[22px] text-forest-deep/90 max-w-2xl leading-[1.6] font-light">
              Specialized Construction for Modern Veterinary Facilities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO TEXT BLOCK --- */}
      <section className="py-24 bg-white/40 border-y border-forest/5 relative">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.p variants={fadeIn} className="text-[20px] sm:text-[24px] leading-[1.7] text-forest-deep mb-8 font-light">
              A veterinary hospital requires more than a conventional commercial interior. Treatment areas, surgical suites, diagnostic spaces, animal recovery, staff areas, client circulation, plumbing, electrical systems, ventilation, and durable finishes all need to work together.
            </motion.p>
            <motion.div variants={fadeIn} className="h-px w-24 bg-terracotta/30 mx-auto mb-8" />
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80">
              Hevan M Constructions provides veterinary hospital and veterinary facility construction services from Verona, New Jersey, serving Bergen, Essex, Morris, Union, and Passaic Counties. We help develop veterinary spaces around the needs of veterinarians, staff, patients, and pet owners—from initial planning through construction and final completion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-24 sm:py-32 space-y-32">

        {/* --- WORKFLOW / ROOMS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div variants={fadeIn} className="bg-linen p-10 sm:p-14 rounded-[32px] flex flex-col justify-center border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-8 leading-[1.1] tracking-[-0.02em]">
              Build Around <br /><span className="italic text-terracotta">Clinical Workflow</span>
            </h2>
            <div className="space-y-6 text-forest-deep/90 text-[17px] leading-[1.7] font-light">
              <p>A well-planned veterinary hospital should allow staff to move efficiently between the areas they use throughout the day.</p>
              <p>Depending on the facility and scope, construction may include specialized rooms to serve all facets of veterinary care.</p>
              <p className="italic text-forest/70 text-[15px] pt-4 border-t border-forest/10">The exact requirements depend on the veterinary services offered and the facility's operational plan.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-sand p-10 sm:p-14 rounded-[32px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="49" stroke="currentColor" strokeWidth="2" />
                <path d="M50 0V100M0 50H100" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-forest mb-8 leading-[1.1] tracking-[-0.02em] relative z-10">
              Facility Areas
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10 relative z-10">
              {[
                'Reception and client waiting areas', 'Examination rooms', 'Treatment areas',
                'Surgical suites', 'Pre-operative and recovery areas', 'Diagnostic spaces',
                'Laboratory areas', 'Pharmacy and medication storage', 'Animal hospitalization areas',
                'Isolation areas', 'Staff workspaces', 'Administrative offices',
                'Kennels and animal holding areas', 'Grooming or specialty treatment areas', 'Storage and utility spaces'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-forest-deep/90 text-[14.5px]">
                  <span className="text-olive mt-1.5 w-1.5 h-1.5 rounded-full bg-olive flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
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
              Veterinary Hospital <br className="hidden md:block"/><span className="italic text-terracotta">Construction Services</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'New Veterinary Hospitals', desc: 'Develop a purpose-built facility around your practice model, clinical services, workflow, and future needs.' },
                { title: 'Veterinary Clinic Build-Outs', desc: 'Transform an existing commercial space into a veterinary practice with appropriately planned treatment, examination, client, and support areas.' },
                { title: 'Veterinary Hospital Renovations', desc: 'Improve an existing facility through reconfiguration, expansion, updated finishes, or targeted improvements.' },
                { title: 'Surgical Suite Construction', desc: 'Create dedicated surgical environments with construction requirements appropriate to the planned veterinary procedures and equipment.' },
                { title: 'Veterinary Treatment Areas', desc: 'Plan durable, functional spaces for examinations, treatments, diagnostics, and patient care.' },
                { title: 'Hospital Expansion', desc: 'Add rooms, treatment areas, staff spaces, or other capacity as an established veterinary practice grows.' },
              ].map((step, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                  <h3 className="font-display text-[26px] text-linen mb-4">{step.title}</h3>
                  <div className="h-px w-10 bg-linen/20 mb-4" />
                  <p className="text-linen/70 text-[15px] leading-[1.7] font-light">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- DESIGN AROUND WORKFLOW --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-5xl mx-auto">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Design Around <span className="italic text-terracotta">Veterinary Workflow</span>
            </h2>
            <p className="text-[18px] text-forest-deep/80 max-w-2xl mx-auto">Veterinary facilities have different operational requirements from ordinary offices.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/60 backdrop-blur-md rounded-[32px] p-10 sm:p-16 border border-white shadow-[0_10px_40px_rgb(0,0,0,0.03)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-[16.5px] leading-[1.8] text-forest-deep/90 font-light pr-4">
                <p>A good construction plan should consider how animals, clients, veterinarians, technicians, equipment, supplies, and waste move through the facility.</p>
                <p>The goal is to create a facility that supports the way your veterinary team actually works. Important planning considerations may include:</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                {[
                  'Patient and client circulation', 'Examination room placement', 'Treatment workflow',
                  'Surgical access', 'Recovery areas', 'Animal separation',
                  'Staff circulation', 'Equipment locations', 'Storage',
                  'Cleaning and sanitation', 'Plumbing', 'Electrical capacity',
                  'HVAC and ventilation', 'Durable, cleanable surfaces'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-forest-deep text-[15px]">
                    <span className="text-terracotta/70 w-1.5 h-1.5 rounded-full bg-terracotta/70 flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* --- SURGICAL SUITE & DURABLE MATERIALS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-10 sm:p-14 rounded-[32px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col">
            <h2 className="font-display text-4xl text-forest mb-8 tracking-[-0.02em]">
              Veterinary <span className="italic text-terracotta">Surgical Suite</span>
            </h2>
            <div className="space-y-5 text-[16.5px] leading-[1.8] text-forest-deep/90 mb-10 flex-grow font-light">
              <p>Surgical areas require careful planning because the space must support the clinical workflow surrounding procedures.</p>
              <p>The appropriate specifications should be developed with the veterinary practice's clinical, architectural, engineering, and regulatory requirements.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-4">
                {[
                  'Surgical room configuration', 'Pre-operative areas', 'Recovery areas',
                  'Equipment placement', 'Staff circulation', 'Storage',
                  'Cleaning requirements', 'Lighting', 'Electrical requirements',
                  'HVAC and ventilation', 'Access between surgical and support areas'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14.5px]">
                    <span className="text-olive/80 w-1.5 h-1.5 rounded-full bg-olive/80 flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-sand p-10 sm:p-14 rounded-[32px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col">
            <h2 className="font-display text-4xl text-forest mb-8 tracking-[-0.02em]">
              Durable Construction <br /><span className="italic text-terracotta">for Animal Care</span>
            </h2>
            <div className="space-y-5 text-[16.5px] leading-[1.8] text-forest-deep/90 mb-10 flex-grow font-light">
              <p>Veterinary facilities experience demanding daily use.</p>
              <p>Floors, walls, counters, doors, fixtures, and other finishes may be exposed to moisture, cleaning chemicals, animal activity, and frequent traffic.</p>
              <p className="font-medium text-forest pt-2">Material selection should therefore consider:</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 text-[15px]">
                {[
                  'Durability', 'Cleanability', 'Moisture resistance', 'Maintenance',
                  'Safety', 'Long-term use', 'Compatibility with clinical environment'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-terracotta/50 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 border-t border-forest/10">
              <p className="text-[14.5px] italic text-forest-deep/80 leading-relaxed text-center">
                The right materials depend on the location and function of each area.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- PLANNING QUESTIONS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[32px] overflow-hidden border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 sm:p-16 lg:p-20">
          <motion.div variants={fadeIn} className="mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Construction Planning <span className="italic text-terracotta">Questions</span>
            </h2>
            <p className="text-[18px] text-forest-deep/80 max-w-3xl font-light">
              Veterinary construction requires coordination between the practice's operational goals and the physical requirements of the facility. Before construction begins, consider:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: 'What services will the hospital provide?', a: 'The facility requirements for general practice may differ from those for surgery, emergency care, imaging, hospitalization, or specialty medicine.' },
              { q: 'How many patients will the facility handle?', a: 'Expected patient volume can influence room count, circulation, treatment capacity, and support areas.' },
              { q: 'What equipment will be installed?', a: 'Equipment requirements can affect electrical, plumbing, structural, ventilation, and space planning decisions.' },
              { q: 'How should staff and patients move?', a: 'Efficient circulation can help reduce unnecessary movement and improve daily workflow.' },
              { q: 'What needs to happen during construction?', a: 'For an operating veterinary practice, phasing and access may need to be considered to minimize disruption.' },
            ].map((qa, i) => (
              <motion.div variants={fadeIn} key={i} className="border-t border-forest/15 pt-8">
                <h3 className="font-display text-[22px] text-forest mb-3">{qa.q}</h3>
                <p className="text-forest-deep/80 text-[16px] leading-[1.7] font-light">{qa.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- COST & TIMELINE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div variants={fadeIn} className="bg-white/40 p-10 sm:p-14 rounded-[32px] flex flex-col relative overflow-hidden border border-white">
            <h2 className="font-display text-4xl text-forest mb-8 leading-[1.1] tracking-[-0.02em] relative z-10">
              Hospital Construction <br /><span className="italic text-terracotta">Cost in NJ</span>
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.8] text-forest-deep/90 mb-10 flex-grow relative z-10 font-light">
              <p>There is no standard price for building a veterinary hospital.</p>
              <p>Project costs can vary significantly depending on:</p>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mt-4">
                {[
                  'New construction vs renovation', 'Facility size', 'Existing building conditions',
                  'Number of exam rooms', 'Surgical requirements', 'Diagnostic equipment',
                  'Plumbing & Electrical', 'HVAC and ventilation', 'Flooring & wall finishes',
                  'Millwork & Kennel areas', 'Specialized equipment', 'Permits & complex elements'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[13.5px]">
                    <span className="text-terracotta/60 w-1 h-1 rounded-full bg-terracotta flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto pt-8 border-t border-forest/10 relative z-10">
              <p className="text-[14px] italic text-forest-deep/80 leading-relaxed text-center">
                A detailed scope and evaluation of the property are necessary before a meaningful construction estimate can be prepared.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-sand p-10 sm:p-14 rounded-[32px] flex flex-col relative overflow-hidden border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <h2 className="font-display text-4xl text-forest mb-8 tracking-[-0.02em] relative z-10">
              How Long Does it <span className="italic text-terracotta">Take?</span>
            </h2>
            <div className="space-y-6 text-[16px] leading-[1.8] text-forest-deep/90 mb-10 flex-grow relative z-10 font-light">
              <p>The timeline depends on the project.</p>
              <p>A veterinary clinic build-out may have a different schedule from a ground-up animal hospital or major renovation.</p>
              <p className="font-medium text-forest">Factors can include:</p>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mt-2">
                {[
                  'Design development', 'Engineering & Permitting', 'Existing building conditions',
                  'Project size', 'Material availability', 'Equipment coordination',
                  'Construction complexity', 'Inspections'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px]">
                    <span className="text-olive w-1.5 h-1.5 rounded-full bg-olive flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto pt-8 border-t border-forest/10 relative z-10">
              <p className="text-[14px] italic text-forest-deep/80 leading-relaxed text-center">
                A project-specific schedule should be established during planning.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- WHY CHOOSE US --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[32px] p-10 sm:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-terracotta opacity-20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-olive opacity-20 blur-[100px]" />

          <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-[3.5rem] text-linen mb-8 leading-[1.1] tracking-[-0.02em] relative z-10">
            A Construction Approach <br className="hidden sm:block" /><span className="italic text-terracotta">Built Around Your Facility</span>
          </motion.h2>
          <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-linen/80 max-w-3xl mx-auto relative z-10 font-light">
            <p>A veterinary hospital is a working clinical environment.</p>
            <p>Construction decisions can affect how veterinarians, technicians, administrative staff, patients, and clients interact with the facility every day.</p>
            <p>That is why the project should be considered as a complete system rather than a collection of rooms.</p>
            <div className="pt-10 mt-10 border-t border-linen/10">
              <p className="text-[16px] text-linen/90 mb-4">The objective is a facility that is:</p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {[
                  'Functional', 'Durable', 'Efficient', 'Easy to maintain',
                  'Appropriate for veterinary operations', 'Comfortable for clients', 'Practical for staff'
                ].map((item, i) => (
                  <span key={i} className="px-5 py-2 rounded-full border border-linen/20 text-linen/90 text-[14px]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
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
                { q: 'Clinic vs. Animal Hospital?', a: 'The terminology can vary by practice. An animal hospital generally provides a broader range of veterinary services and may include treatment, surgery, diagnostics, hospitalization, and recovery areas.' },
                { q: 'How much does it cost to build a veterinary hospital in NJ?', a: 'There is no reliable single price. Size, location, building conditions, clinical services, equipment, mechanical systems, finishes, and project complexity all influence cost.' },
                { q: 'How long does it take?', a: 'The timeline depends on the size and complexity of the project, design and engineering requirements, permitting, materials, existing conditions, and construction scope.' },
                { q: 'Does a veterinary hospital need special construction considerations?', a: 'Yes. Veterinary facilities can require specialized planning for clinical workflow, animal handling, sanitation, ventilation, plumbing, electrical systems, equipment, durable finishes, accessibility, and other facility requirements.' },
                { q: 'Can an existing veterinary hospital be expanded?', a: 'Often, expansion can be considered when the property and existing building allow it. The feasibility depends on the site, structure, zoning, building systems, and proposed scope.' },
                { q: 'What should I consider before starting a project?', a: 'Define your veterinary services, patient volume, equipment needs, desired rooms, workflow, staffing requirements, budget, property constraints, and future growth plans before finalizing the construction scope.' },
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

        {/* --- SERVICE AREAS LINKS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto mt-16 pt-16 border-t border-forest/10">
          <motion.div variants={fadeIn} className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-forest tracking-[-0.02em]">
              Explore by <span className="italic text-terracotta">County</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Bergen County', path: '/veterinary-hospital-construction-bergen-county-nj' },
              { name: 'Essex County', path: '/veterinary-hospital-construction-essex-county-nj' },
              { name: 'Morris County', path: '/veterinary-hospital-construction-morris-county-nj' },
              { name: 'Passaic County', path: '/veterinary-hospital-construction-passaic-county-nj' },
              { name: 'Union County', path: '/veterinary-hospital-construction-union-county-nj' },
            ].map((county) => (
              <Link 
                key={county.name} 
                to={county.path}
                className="px-6 py-3 rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-linen hover:border-forest transition-all duration-300 text-[15px]"
              >
                {county.name}
              </Link>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-forest py-24 sm:py-32 rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden">
        {/* Subtle background glow in CTA */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-terracotta opacity-[0.07] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-linen mb-8 leading-[1.05] tracking-[-0.02em]">
              Start Your Veterinary <br className="hidden sm:block" /><span className="italic text-terracotta">Hospital Project</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-14 max-w-2xl mx-auto font-light">
              <p>Whether you are planning a new veterinary hospital, clinic build-out, surgical facility, renovation, or expansion, the construction should begin with a clear understanding of how your practice will operate.</p>
              <p>Planning a veterinary hospital or veterinary clinic project? Contact Hevan M Constructions to discuss your facility, location, and construction goals.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-16">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex justify-center">
               <Link to="/services" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to All Services
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-10 border-t border-linen/10">
              <p className="text-[12px] sm:text-[13px] text-linen/50 uppercase tracking-[0.2em] leading-loose">
                Based in Verona, NJ <span className="mx-2 opacity-50">|</span> Serving Bergen, Essex, Morris, Union & Passaic Counties
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
