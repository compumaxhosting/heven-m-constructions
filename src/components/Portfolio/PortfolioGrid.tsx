"use client";
import Link from 'next/link';
import { Project } from '../../data/projectsData';

interface PortfolioGridProps {
  filtered: Project[];
  gridRef: React.RefObject<HTMLElement | null>;
}

export default function PortfolioGrid({ filtered, gridRef }: PortfolioGridProps) {
  return (
    <section ref={gridRef} className="bg-linen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link key={project.id}
              href={`/portfolio/${project.id}`}
              className="group relative overflow-hidden rounded-[24px] bg-card"
            >
              <figure className="aspect-[4/3] overflow-hidden">
                <img
                  src={(typeof project.heroImage === 'object' && project.heroImage !== null ? ((project.heroImage as any).default?.src || (project.heroImage as any).src || (project.heroImage as any).default || project.heroImage) : project.heroImage)}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </figure>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-full border border-forest/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-forest-deep">
                    {project.tag}
                  </span>
                </div>
                <h2 className="font-display text-2xl text-forest leading-tight mb-1">
                  {project.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.24em] text-olive mb-3">
                  {project.location}
                </p>
                <p className="text-sm leading-relaxed text-forest-deep line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-forest font-medium opacity-0 transition-opacity group-hover:opacity-100">
                  View case study →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-forest/50">
            <p className="font-display text-2xl">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
