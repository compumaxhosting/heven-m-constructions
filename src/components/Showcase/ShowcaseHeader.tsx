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
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-forest/30" />
            <span className="font-mono text-sm tracking-[0.2em] uppercase text-forest/70">
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl text-forest pt-12 sm:pt-16 mb-10 leading-tight">
            Our Showcase
          </h1>
          <p className="text-xl text-forest/70 font-light">
            Explore our curated collection of images and cinematic videos showcasing the finest details of our construction and design projects.
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
