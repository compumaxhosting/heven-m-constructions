"use client";
import { motion } from 'framer-motion';
import { pillars } from '../../data/siteData';
import { staggerContainer, fadeInUp, scaleIn } from './animationVariants';
import asset5 from '../../assets/asset-5.webp';

export default function AboutValues() {
  const MATERIAL_IMG = asset5;

  return (
    <>
      <section className="bg-linen py-24 sm:py-32">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16 text-center flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive justify-center">
              <span className="inline-block h-px w-10 bg-olive/60" /> What we stand for <span className="inline-block h-px w-10 bg-olive/60" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-forest max-w-2xl">The principles that guide our <span className="italic text-terracotta">hands</span>.</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <motion.div 
                key={p.num} 
                variants={fadeInUp}
                className="rounded-3xl border border-forest/10 bg-card p-8 hover:border-clay/40 transition-all duration-500 hover:shadow-xl hover:shadow-clay/5 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-mesh-warm opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-bl-full" />
                <div className="relative z-10">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-clay mb-4 font-semibold">{p.num}</div>
                  <div className="font-display text-2xl text-forest mb-4 group-hover:text-terracotta transition-colors">{p.title}</div>
                  <p className="text-[15px] leading-relaxed text-forest-deep/80">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-forest text-sand py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal/20 via-forest to-forest opacity-50" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div 
            className="col-span-1 lg:col-span-6 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-sage">
              <span className="inline-block h-px w-10 bg-sage/60" /> Materials
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-linen mb-8">
              Things that <span className="italic text-clay">age with grace</span>.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-sand/80 mb-6">
              We specify natural stone, rift-sawn white oak, handmade clay tile, patinated unlacquered brass, and hand-troweled lime plaster because they gather character over time. They look better at ten years than they do on day one.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-sand/80">
              Every material is chosen with the understanding that a room is occupied daily. It should feel honest, grounded, and deeply human — a backdrop for life to unfold.
            </motion.p>
          </motion.div>
          <motion.div 
            className="col-span-1 lg:col-span-6 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <figure className="aspect-[4/3] overflow-hidden rounded-[24px] shadow-2xl shadow-black/40 relative group">
              <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img src={(typeof MATERIAL_IMG === 'object' && MATERIAL_IMG !== null ? ((MATERIAL_IMG as any).default?.src || (MATERIAL_IMG as any).src || (MATERIAL_IMG as any).default || MATERIAL_IMG) : MATERIAL_IMG)} alt="Natural stone and wood materials" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
            </figure>
          </motion.div>
        </div>
      </section>
    </>
  );
}
