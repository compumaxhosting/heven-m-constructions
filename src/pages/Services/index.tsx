import { services } from '../../data/siteData';
import ProcessSection from '../../components/Home/ProcessSection';
import Link from 'next/link';

import asset2 from '../../assets/asset-2.webp';
import asset4 from '../../assets/asset-4.webp';
import asset5 from '../../assets/asset-5.webp';
import asset6 from '../../assets/asset-6.webp';
import addition4 from '../../assets/4.webp';
import addition5 from '../../assets/5.webp';

const serviceDetails = [
  {
    num: '01',
    title: 'Construct Veterinary Hospital',
    description: 'State-of-the-art animal hospitals, clinical surgical suites, and specialized veterinary care facilities.',
    img: asset6,
    tag: 'Specialty Healthcare',
    link: '/services/veterinary-hospital-construction-nj',
  },
  {
    num: '02',
    title: 'Whole-Home Additions',
    description: 'Full-scope primary residence expansions, expanding overall footprint and adding new levels to existing luxury homes.',
    img: addition4,
    tag: 'Residential',
    link: '/services/whole-home-additions',
  },
  {
    num: '03',
    title: 'Design-Build',
    description: 'Integrated architecture, engineering, and construction under one roof from concept to final walkthrough.',
    img: asset2,
    tag: 'Process',
    link: '/services/design-build',
  },
  {
    num: '04',
    title: 'Value Engineering',
    description: 'Strategic material selection, cost analysis, and structural optimization to maximize architectural impact within budget.',
    img: addition5,
    tag: 'Consulting',
    link: '/services/value-engineering',
  },
  {
    num: '05',
    title: 'Additions',
    description: 'Second stories, sunrooms, extended living spaces, and guest house units seamlessly joined to your home.',
    img: asset4,
    tag: 'Expansion',
    link: '/services/additions',
  },
  {
    num: '06',
    title: 'Boutique Offices',
    description: 'Owner-run creative studios, executive suites, and small firm headquarters built to elevate brand presence.',
    img: asset5,
    tag: 'Commercial',
    link: '/services/boutique-office-construction',
  }
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": "https://www.havenmconstruction.com/#organization",
      "name": "Haven M Construction",
      "url": "https://www.havenmconstruction.com/",
      "description": "Haven M Construction offers residential and commercial construction services, home additions, design-build, value engineering, boutique office construction, and veterinary hospital construction in Verona, NJ.",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Bergen County, New Jersey" },
        { "@type": "AdministrativeArea", "name": "Essex County, New Jersey" },
        { "@type": "AdministrativeArea", "name": "Morris County, New Jersey" },
        { "@type": "AdministrativeArea", "name": "Union County, New Jersey" },
        { "@type": "AdministrativeArea", "name": "Passaic County, New Jersey" }
      ],
      "makesOffer": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Construction", "serviceType": "Residential Construction", "areaServed": "Verona, New Jersey" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Construction", "serviceType": "Commercial Construction", "areaServed": "Verona, New Jersey" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Whole-Home Additions", "serviceType": "Whole-Home Additions", "areaServed": "Verona, New Jersey" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Design-Build Construction", "serviceType": "Design-Build Construction", "areaServed": "Verona, New Jersey" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Value Engineering", "serviceType": "Value Engineering", "areaServed": "Verona, New Jersey" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boutique Office Construction", "serviceType": "Boutique Office Construction", "areaServed": "Verona, New Jersey" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Veterinary Hospital Construction", "serviceType": "Veterinary Hospital Construction", "areaServed": "Verona, New Jersey" } }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.havenmconstruction.com/services#webpage",
      "url": "https://www.havenmconstruction.com/services",
      "name": "Construction Services in Verona, NJ | Residential & Commercial",
      "description": "Haven M Construction offers residential and commercial construction services in Verona, NJ, serving Bergen, Essex, Morris, Union and Passaic Counties.",
      "isPartOf": { "@id": "https://www.havenmconstruction.com/#website" },
      "about": { "@id": "https://www.havenmconstruction.com/#organization" }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.havenmconstruction.com/#website",
      "url": "https://www.havenmconstruction.com/",
      "name": "Haven M Construction",
      "publisher": { "@id": "https://www.havenmconstruction.com/#organization" }
    }
  ]
};

export default function ServicesPage() {
  return (
    <main>

      {/* Page Header */}
      <section
        className="relative overflow-hidden pt-44 pb-20 sm:pt-52"
        style={{
          backgroundColor: '#F6F4EE',
          backgroundImage: [
            'radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.50) 0%, rgba(210,125,85,0.18) 40%, transparent 70%)',
            'radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.45) 0%, rgba(138,168,125,0.15) 40%, transparent 70%)',
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)',
          ].join(', '),
        }}
      >
        {/* Top Left Bright Glow */}
        <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />

        {/* Top Right Bright Glow */}
        <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />

        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive mb-8">
            <span className="inline-block h-px w-10 bg-olive/60" /> What We Build
          </div>
          <h1 className="font-display text-[clamp(2.2rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] text-forest max-w-4xl">
            Six practices,<br /><span className="italic text-terracotta">one hand.</span>
          </h1>

          <div className="mt-6 sm:mt-8">
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] uppercase tracking-[0.05em] text-forest/90">
              Residential <span className="mx-2 inline-block normal-case italic text-terracotta">&</span> Commercial
            </h2>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-deep">
            Every project is led by a Haven M principal from first conversation to final walkthrough. No franchised sub-contractors. No anonymous site crews.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <span className="text-[11px] uppercase tracking-[0.24em] text-forest/70 font-medium mr-2">
              Serving:
            </span>
            {['Bergen', 'Essex', 'Morris', 'Passaic', 'Union'].map((county) => (
              <div key={county} className="flex items-center gap-2 rounded-full border border-forest/15 bg-white/40 backdrop-blur-sm px-6 py-2.5 text-[15px] font-medium text-forest">
                {county}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="bg-linen py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-16">
            {serviceDetails.map((service, i) => (
              <div key={service.num} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="col-span-1 lg:col-span-6">
                  <Link href={service.link || "/contact"} className="block overflow-hidden rounded-[24px]">
                    <figure className="aspect-[16/10] overflow-hidden">
                      <img src={(typeof service.img === 'object' && service.img !== null ? ((service.img as any).default?.src || (service.img as any).src || (service.img as any).default || service.img) : service.img)} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                    </figure>
                  </Link>
                </div>
                <div className="col-span-1 lg:col-span-6 lg:px-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="rounded-full border border-forest/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-forest-deep">{service.tag}</span>
                    <span className="font-mono text-xs text-clay">{service.num}</span>
                  </div>
                  <Link href={service.link || "/contact"} className="block group/title">
                    <h2 className="font-display text-3xl sm:text-4xl leading-tight text-forest mb-4 group-hover/title:text-clay transition-colors">{service.title}</h2>
                  </Link>
                  <p className="text-[15px] leading-relaxed text-forest-deep mb-6">{service.description}</p>
                  <Link href={service.link || "/contact"} className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-clay transition-colors">
                    {service.link ? "View service" : "Start this project"} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      {/* CTA */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-[0.95] tracking-[-0.02em] text-forest mb-6">
            Ready to <span className="italic text-terracotta">begin</span>?
          </h2>
          <p className="text-forest-deep mb-8 max-w-md mx-auto">We take on a small number of new projects each season. Reach out and let us know what you're imagining.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.02]">
            Begin a project →
          </Link>
        </div>
      </section>
    </main>
  );
}
