import { useRef } from 'react';
import { testimonials } from '../data/siteData';

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative overflow-hidden bg-linen py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <header className="mb-16 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
          <span className="inline-block h-px w-10 bg-olive/60" />
          05 — Voices
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`relative rounded-[24px] p-8 ${t.dark ? 'bg-forest text-linen' : 'bg-card text-forest'}`}
            >
              <div className={`font-display text-6xl leading-none ${t.dark ? 'text-clay' : 'text-terracotta'}`}>
                &ldquo;
              </div>
              <blockquote className="font-display mt-4 text-2xl leading-snug tracking-tight">
                {t.quote}
              </blockquote>
              <figcaption className={`mt-8 border-t pt-4 text-sm ${t.dark ? 'border-linen/20 text-linen/80' : 'border-forest/15 text-forest-deep'}`}>
                <div className="font-medium">{t.author}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] opacity-80">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
