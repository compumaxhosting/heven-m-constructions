import { services } from '../data/siteData';

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-sand py-28 sm:py-40">
      <div className="pointer-events-none absolute -top-40 right-[-6%] h-[380px] w-[380px] rounded-full bg-sage/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <header className="mb-14 grid grid-cols-1 lg:grid-cols-12 items-end gap-6">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
            <span className="inline-block h-px w-10 bg-olive/60" />
            04 — What we build
          </div>
          
          <div className="col-span-12 lg:col-span-8 overflow-hidden py-2 -my-2">
            <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em] text-forest origin-left">
              Six practices, <span className="italic text-terracotta">one hand</span>.
            </h2>
          </div>

          <p className="col-span-12 text-forest-deep lg:col-span-4">
            Every project is led by a Haven M principal — no franchised subs, no anonymous site crews.
          </p>
        </header>

        <div className="grid gap-px overflow-hidden rounded-[28px] bg-forest/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.num}
              className="group relative min-h-[260px] bg-linen p-8 transition-colors duration-300 hover:bg-pale-sage"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-forest/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-forest-deep">
                  {service.category}
                </span>
                <span className="font-mono text-xs text-clay">{service.num}</span>
              </div>
              <div className="font-display mt-10 text-3xl leading-tight text-forest">{service.title}</div>
              <p className="mt-4 text-sm leading-relaxed text-forest-deep">{service.description}</p>
              <div className="pointer-events-none absolute right-6 bottom-6 translate-y-2 text-forest opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
