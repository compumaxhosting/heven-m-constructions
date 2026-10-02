"use client";
import { motion } from "framer-motion";

interface ShowcaseHeaderProps {
  categories: string[];
  filter: string;
  setFilter: (f: string) => void;
}

export default function ShowcaseHeader({ categories, filter, setFilter }: ShowcaseHeaderProps) {
  return (
    <>
      <section className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-forest/70 mb-8">
            <span className="inline-block h-px w-10 bg-forest/40" />
            <b>Our Showcase</b>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,8.5vw,7.5rem)] leading-[0.93] tracking-[-0.03em] text-forest mb-8">
            A portfolio measured in{" "}
            <span className="italic text-clay">rooms</span>,<br />
            not square feet.
          </h1>
          <p className="text-lg sm:text-xl text-forest/70 font-light max-w-2xl leading-relaxed">
            <b>Recent projects demonstrating our commitment to craft, material, and purposeful design across all our practices.</b>
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 ${filter === cat
                ? "bg-forest text-linen shadow-lg scale-105"
                : "bg-forest/5 text-forest hover:bg-forest/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
