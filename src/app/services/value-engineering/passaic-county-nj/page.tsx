import { Metadata } from 'next';
import ValueEngineeringPassaicCountyPage from '../../../../pages/Services/ValueEngineering/PassaicCounty';

export const metadata: Metadata = {
  title: 'Value Engineering for Construction Projects in Passaic, NJ',
  description: 'Expert value engineering for construction projects in Passaic, NJ, helping optimize budgets, evaluate materials, improve design, and maintain project quality.',
  keywords: 'Who provides construction value engineering services in Passaic County NJ, where can I find value engineering consultants in Passaic County NJ, how can value engineering reduce construction costs in Passaic County NJ, what does a value engineering consultant do in Passaic County NJ, who can evaluate construction design and material alternatives in Passaic County NJ, best construction value engineering services in Passaic County NJ, value engineering consultants near me in Passaic County NJ, how can I optimize my construction project budget in Passaic County NJ, who can help improve project value without sacrificing quality in Passaic County NJ, professional construction cost optimization services in Passaic County NJ, what are the benefits of value engineering for construction projects in Passaic County NJ, who can help evaluate construction materials and project requirements in Passaic County NJ, value engineering for commercial construction projects in Passaic County NJ, value engineering for residential construction projects in Passaic County NJ, expert value engineering services for construction projects in Passaic County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/value-engineering-passaic-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Value Engineering for Construction Projects in Passaic, NJ',
    description: 'Expert value engineering for construction projects in Passaic, NJ, helping optimize budgets, evaluate materials, improve design, and maintain project quality.',
    url: 'https://www.havenmconstruction.com/value-engineering-passaic-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/value-engineering-passaic-county-nj.webp',
        alt: 'Value engineering for construction projects in Passaic County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Value Engineering for Construction Projects in Passaic, NJ',
    description: 'Expert value engineering for construction projects in Passaic, NJ, helping optimize budgets, evaluate materials, improve design, and maintain project quality.',
    images: ['https://www.havenmconstruction.com/images/value-engineering-passaic-county-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj",
        "name": "Value Engineering for Construction Projects in Passaic, NJ",
        "description": "Professional value engineering services for construction projects in Passaic County, NJ, focused on cost optimization, design evaluation, material alternatives, and project value.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.havenmconstruction.com/#website",
          "url": "https://www.havenmconstruction.com/",
          "name": "Haven M Construction"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj#service"
        },
        "mainEntity": {
          "@id": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj#service",
        "name": "Value Engineering for Construction Projects in Passaic County, NJ",
        "url": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj",
        "description": "Construction value engineering services that evaluate project requirements, design options, materials, building systems, and construction methods to improve project value while maintaining quality and functionality.",
        "serviceType": [
          "Construction Value Engineering",
          "Value Engineering Consulting",
          "Construction Cost Optimization",
          "Construction Cost Analysis",
          "Design Alternative Evaluation",
          "Material Alternative Evaluation",
          "Construction Budget Optimization",
          "Project Value Optimization",
          "Building System Evaluation",
          "Construction Planning",
          "Cost Reduction Analysis"
        ],
        "provider": {
          "@type": "GeneralContractor",
          "@id": "https://www.havenmconstruction.com/#business",
          "name": "Haven M Construction",
          "url": "https://www.havenmconstruction.com/"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        "audience": [
          {
            "@type": "Audience",
            "audienceType": "Residential Construction Clients"
          },
          {
            "@type": "Audience",
            "audienceType": "Commercial Construction Clients"
          },
          {
            "@type": "Audience",
            "audienceType": "Property Developers"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj#article",
        "headline": "Value Engineering for Construction Projects in Passaic, NJ",
        "description": "An informative resource explaining how value engineering can help construction projects in Passaic County, NJ optimize budgets, evaluate materials, improve designs, and maintain quality.",
        "mainEntityOfPage": {
          "@id": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj#webpage"
        },
        "author": {
          "@type": "Organization",
          "name": "Haven M Construction",
          "url": "https://www.havenmconstruction.com/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Haven M Construction",
          "url": "https://www.havenmconstruction.com/"
        },
        "about": {
          "@type": "Thing",
          "name": "Construction Value Engineering"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.havenmconstruction.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Value Engineering",
            "item": "https://www.havenmconstruction.com/services/value-engineering"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Value Engineering Passaic County, NJ",
            "item": "https://www.havenmconstruction.com/value-engineering-passaic-county-nj"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ValueEngineeringPassaicCountyPage />
    </>
  );
}
