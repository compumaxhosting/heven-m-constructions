"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { staggerContainer, fadeInUp, scaleIn } from './animationVariants';
import asset4 from '../../assets/asset-4.webp'; // Actually it's asset4 for TEAM_IMG

export default function AboutStory() {
  const TEAM_IMG = asset4; // Just reusing the image as per the original file. Wait, in original TEAM_IMG is asset4.

  return (
    <>
      <section className="bg-linen py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="col-span-1 lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <figure className="aspect-[4/5] overflow-hidden rounded-[24px] shadow-xl shadow-forest/5">
              <img src={(typeof TEAM_IMG === 'object' && TEAM_IMG !== null ? ((TEAM_IMG as any).default?.src || (TEAM_IMG as any).src || (TEAM_IMG as any).default || TEAM_IMG) : TEAM_IMG)} alt="Haven M craftspeople at work" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
            </figure>
          </motion.div>
          <motion.div 
            className="col-span-1 lg:col-span-7 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
              <span className="inline-block h-px w-10 bg-olive/60" /> Our Story
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl text-forest mb-8 leading-tight">
              Reclaiming the <span className="italic text-terracotta">master builder</span> tradition.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[17px] leading-relaxed text-forest-deep mb-6">
              Gus Martino started Haven M after a decade working for a large general contractor where he watched good design get lost in sub-contractor hand-offs. His answer was a <Link href="/services/design-build" className="text-forest font-semibold underline decoration-terracotta/40 hover:decoration-terracotta underline-offset-4 transition-colors">design-build studio</Link> that keeps every trade in-house — carpenters, tile setters, finishers, and painters who share a singular standard of excellence.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[17px] leading-relaxed text-forest-deep mb-10">
              Today Haven M works on fewer than fifteen <Link href="/portfolio" className="text-forest font-semibold underline decoration-terracotta/40 hover:decoration-terracotta underline-offset-4 transition-colors">curated projects</Link> a year. Each is led by a principal from the very first sketch to the final polish of the hardware. We move intentionally, ensuring that every detail reflects our commitment to enduring quality.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-sm font-medium text-linen transition-all hover:bg-forest-deep hover:shadow-lg hover:shadow-forest/20 group">
                Start a conversation <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-4 text-sm font-medium text-forest hover:bg-forest/5 transition-colors">
                View our capabilities
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-sand py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mesh-sage opacity-30 pointer-events-none rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16">
             <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
               <span className="inline-block h-px w-10 bg-olive/60" /> The Workshop
             </div>
             <h2 className="font-display text-4xl sm:text-5xl text-forest max-w-3xl">Where ideas become <span className="italic text-terracotta">tangible</span>.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl text-forest mb-4">In-House Expertise</h3>
              <p className="text-[17px] leading-relaxed text-forest-deep mb-6">
                Unlike traditional firms that outsource to disparate contractors, our studio houses 42 dedicated craftspeople under one roof. From master carpenters and tile setters to metalworkers and finishing painters, our team operates with a shared language of precision.
              </p>
              <div className="h-px w-full bg-forest/10 my-8" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-4xl text-clay mb-2">42</div>
                  <div className="text-sm font-medium text-forest-deep uppercase tracking-widest">Artisans</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-clay mb-2">25+</div>
                  <div className="text-sm font-medium text-forest-deep uppercase tracking-widest">Years Avg Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-card/50 backdrop-blur-sm border border-forest/10 p-8 sm:p-12 rounded-3xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <svg className="w-12 h-12 text-terracotta mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M14.017 21v-7.391c0-5.714-4.956-10.423-10.908-10.423H2.017v-1.169h1.092c6.598 0 11.956 5.253 11.956 11.75v7.233h-1.048zM21.983 21v-7.391c0-5.714-4.956-10.423-10.908-10.423H9.983v-1.169h1.092c6.598 0 11.956 5.253 11.956 11.75v7.233h-1.048z" />
              </svg>
              <blockquote className="font-display text-2xl sm:text-3xl leading-snug text-forest relative z-10 mb-6">
                "We don't just build spaces; we craft environments that breathe, age, and adapt with the people who inhabit them."
              </blockquote>
              <cite className="text-sm font-medium uppercase tracking-[0.2em] text-olive not-italic">
                — Gus Martino, Founder
              </cite>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
