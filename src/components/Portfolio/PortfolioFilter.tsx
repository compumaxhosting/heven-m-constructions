"use client";
import { categories, type Category } from '../../data/projectsData';

interface PortfolioFilterProps {
  filterRef: React.RefObject<HTMLElement | null>;
  filterFixed: boolean;
  navHeight: number;
  active: Category;
  handleTabClick: (cat: Category) => void;
}

export default function PortfolioFilter({ filterRef, filterFixed, navHeight, active, handleTabClick }: PortfolioFilterProps) {
  return (
    <section
      ref={filterRef}
      style={filterFixed ? { top: navHeight } : undefined}
      className={`bg-linen/95 py-4 border-b border-forest/10 z-40 backdrop-blur-sm transition-shadow duration-300 ${
        filterFixed ? "left-0 right-0 shadow-md fixed" : "relative"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex gap-2 overflow-x-auto pb-0.5 sm:flex-wrap sm:overflow-visible scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabClick(cat)}
              className={`flex-shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "border-forest bg-forest text-linen"
                  : "border-forest/20 text-forest hover:border-forest/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
