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

export default function BergenCountyOfficePage() {
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
               <Link to="/services/boutique-office-construction" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-forest/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to Main Service
               </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/15 bg-white/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-forest-deep font-medium">Bergen County, NJ</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-[clamp(2.5rem,6vw,5.5rem)] text-forest leading-[1.05] tracking-[-0.02em] mb-8">
              Boutique Office Construction in <br className="hidden sm:block" />
              <span className="italic text-terracotta">Bergen County</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[18px] sm:text-[22px] leading-[1.6] text-forest-deep/80 font-light mb-12 max-w-2xl mx-auto">
              Professional Workspaces With Character and Purpose. Your office should reflect the quality of your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-20 space-y-32">

        {/* --- INTRO / MORE THAN A BUILD OUT --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div variants={fadeIn} className="relative">
              <div className="w-16 h-px bg-terracotta/30 mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-forest mb-8 leading-[1.1] tracking-[-0.02em]">
                More Than a <br /><span className="italic text-terracotta">Standard Build-Out</span>
              </h2>
              <div className="space-y-6 text-[17px] leading-[1.8] text-forest-deep/80 font-light">
                <p>Haven M Construction provides boutique office construction and renovation services in Bergen County, NJ, for business owners who want a workspace that feels professional, functional, and distinctive.</p>
                <p>A successful boutique office balances appearance with everyday function. The layout should make it easy for employees to work, clients to navigate, and meetings to happen comfortably.</p>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Reception & waiting areas',
                'Private offices',
                'Executive suites',
                'Conference rooms',
                'Flexible workspaces',
                'Client consultation rooms',
                'Creative studios',
                'Custom built-in features'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 border border-white backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60" />
                  <span className="text-[15px] text-forest-deep">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* --- DESIGN THAT SUPPORTS WORKFLOW --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-linen rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-sm border border-white">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl text-forest mb-8 tracking-[-0.02em]">
              Design That Supports <span className="italic text-terracotta">Your Workflow</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] leading-[1.8] text-forest-deep/80 font-light">
              <p>Before construction begins, consider how people actually use the space. Do employees need quiet areas for focused work? Do clients regularly visit? Do you need private conversations, team meetings, or presentation areas?</p>
              <p>These questions can influence the layout, partitions, lighting, acoustics, storage, and technology requirements. The best office is not necessarily the most elaborate. It is the one that makes daily work easier.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- RENOVATION DETAILS --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-4xl sm:text-5xl text-forest mb-6 tracking-[-0.02em]">
              Renovating an Existing <span className="italic text-terracotta">Office</span>
            </h2>
            <p className="text-[17px] leading-[1.8] text-forest-deep/80 font-light mb-8">
              A complete relocation is not always necessary. If your current location works for your business, an interior renovation may allow you to improve the space around your changing needs. The existing building conditions determine what changes are practical.
            </p>
            <h3 className="font-display text-2xl text-forest mb-6">When Should You Renovate?</h3>
            <ul className="space-y-4 text-[16px] text-forest-deep/80 font-light">
              <li className="flex items-start gap-3"><span className="text-terracotta mt-1">✦</span> Your team has outgrown the existing layout</li>
              <li className="flex items-start gap-3"><span className="text-terracotta mt-1">✦</span> Clients need a better meeting environment</li>
              <li className="flex items-start gap-3"><span className="text-terracotta mt-1">✦</span> Your workspace no longer reflects your brand</li>
              <li className="flex items-start gap-3"><span className="text-terracotta mt-1">✦</span> Employees need more functional work areas</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/50 backdrop-blur-sm p-10 rounded-[32px] border border-white shadow-sm">
            <h3 className="font-display text-2xl text-forest mb-8">Possible Improvements Include:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'Reconfiguring offices',
                'New private rooms',
                'Updating reception',
                'Improving lighting',
                'Replacing flooring',
                'New partitions',
                'Updating finishes',
                'Efficient work zones'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[15px] text-forest-deep/90 py-2 border-b border-forest/5 last:border-0">
                  <span className="w-1.5 h-px bg-terracotta/50" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- PROCESS (CINEMATIC) --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-forest rounded-[40px] p-10 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-olive/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-[100px]" />
          
          <div className="relative z-10">
            <motion.div variants={fadeIn} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="inline-block h-px w-10 bg-terracotta/60" /> Our Process
            </motion.div>
            
            <motion.h2 variants={fadeIn} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-linen mb-16 tracking-[-0.02em] max-w-2xl">
              A practical <span className="italic text-terracotta">construction process</span> for your business.
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Understand the Business', desc: 'We start by learning how your company operates and what you want the office to accomplish.' },
                { title: 'Review the Space', desc: 'The existing property is considered before developing the proposed improvements.' },
                { title: 'Develop the Scope', desc: 'Layout changes, materials, finishes, systems, and construction requirements are defined.' },
                { title: 'Prepare for Construction', desc: 'Scheduling, materials, permits, inspections, and other applicable requirements are coordinated.' },
                { title: 'Complete the Build-Out', desc: 'The planned work is constructed and managed through completion.' },
                { title: 'Review Finished Space', desc: 'The completed office is reviewed before the project is turned over for use.' },
              ].map((step, i) => (
                <motion.div variants={fadeIn} key={i} className="relative rounded-[24px] border border-linen/10 bg-linen/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-terracotta/50 group">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta/80 mb-6 group-hover:text-terracotta transition-colors">Step 0{i + 1}</div>
                  <h3 className="font-display text-[24px] text-linen mb-4">{step.title}</h3>
                  <div className="h-px w-10 bg-linen/20 mb-4" />
                  <p className="text-linen/70 text-[14px] leading-[1.7] font-light">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- COST NOTE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-3xl mx-auto">
           <motion.h2 variants={fadeIn} className="font-display text-3xl sm:text-4xl text-forest mb-6 tracking-[-0.02em]">
              Office Construction Cost in <span className="italic text-terracotta">Bergen County</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[17px] leading-[1.8] text-forest-deep/80 font-light">
              Office construction pricing depends on the project rather than the county alone. Factors can include the size of the office, existing conditions, demolition, partitions, electrical systems, lighting, HVAC, plumbing, flooring, millwork, finishes, and required approvals. A site-specific scope and estimate provide a more useful basis for decision-making.
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
                { q: 'What businesses are a good fit for boutique offices?', a: 'Professional practices, consultants, creative businesses, small firms, executive teams, and owner-operated companies can all benefit from a customized office environment.' },
                { q: 'Can a small office still have a premium feel?', a: 'Yes. Good space planning, lighting, materials, finishes, and detailing can make a smaller office feel polished without unnecessary complexity.' },
                { q: 'Can you renovate an occupied office?', a: 'Possibly. The approach depends on the scope and areas affected. Construction planning can take business operations into account.' },
                { q: 'Do office renovations require permits?', a: 'Some commercial improvements require permits and approvals, depending on the work and property. Requirements should be evaluated before construction.' },
                { q: 'How do I start?', a: 'Contact Haven M Construction with your property location, approximate office size, and goals for the space.' },
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
              Boutique Office Construction in <br className="hidden sm:block" /><span className="italic text-terracotta">Bergen County</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-[18px] sm:text-[20px] leading-[1.7] text-linen/70 mb-14 max-w-2xl mx-auto font-light">
              <p>Haven M Construction provides boutique office construction and renovation services to Bergen County businesses from our base in Verona, New Jersey.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-16">
              <p className="text-[17px] text-linen font-medium mb-8">Planning a new office or renovating your current workspace?</p>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-10 py-5 text-[16px] font-medium text-white transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(210,125,85,0.3)]">
                Contact Us to Discuss Your Project →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 mt-12 border-t border-linen/10 flex justify-center">
               <Link to="/services/boutique-office-construction" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-forest hover:text-terracotta transition-colors font-medium bg-[#F6F4EE] px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)]">
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
