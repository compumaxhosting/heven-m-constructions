import { Metadata } from 'next';
import ValueEngineeringUnionCountyPage from '../../../../pages/Services/ValueEngineering/UnionCounty';

export const metadata: Metadata = {
  title: 'Value Engineering Solutions in Union County, NJ',
  description: 'Professional value engineering solutions in Union County, NJ to optimize construction costs, evaluate design and materials, and improve project value without compromising quality.',
  keywords: 'Who provides value engineering services in Union County NJ, best construction value engineering consultant in Union County NJ, how can value engineering reduce construction costs in Union County NJ, where can I find a value engineering expert near me in Union County NJ, what does value engineering include for construction projects in Union County NJ, how can I find cost-effective alternatives for my construction project in Union County NJ, who can evaluate construction materials and design options in Union County NJ, how does value engineering improve construction project value in Union County NJ, professional construction cost optimization services in Union County NJ, value engineering for commercial construction projects in Union County NJ, value engineering for residential construction projects in Union County NJ, who can help control construction costs without compromising quality in Union County NJ, construction design and material evaluation services in Union County NJ, expert value engineering services for builders and property owners in Union County NJ, affordable value engineering consulting services in Union County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/value-engineering-union-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Value Engineering Solutions in Union County, NJ',
    description: 'Professional value engineering solutions in Union County, NJ to optimize construction costs, evaluate design and materials, and improve project value without compromising quality.',
    url: 'https://www.havenmconstruction.com/value-engineering-union-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/value-engineering-union-county-nj.webp',
        alt: 'Value engineering solutions for construction projects in Union County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Value Engineering Solutions in Union County, NJ',
    description: 'Professional value engineering solutions in Union County, NJ to optimize construction costs, evaluate design and materials, and improve project value without compromising quality.',
    images: ['https://www.havenmconstruction.com/images/value-engineering-union-county-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/value-engineering-union-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/value-engineering-union-county-nj",
        "name": "Value Engineering Solutions in Union County, NJ",
        "description": "Professional value engineering solutions in Union County, NJ for construction cost optimization, design evaluation, material alternatives, and project value improvement.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.havenmconstruction.com/#website",
          "url": "https://www.havenmconstruction.com/",
          "name": "Haven M Construction"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/value-engineering-union-county-nj#service"
        },
        "mainEntity": {
          "@id": "https://www.havenmconstruction.com/value-engineering-union-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/value-engineering-union-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/value-engineering-union-county-nj#service",
        "name": "Value Engineering Solutions in Union County, NJ",
        "url": "https://www.havenmconstruction.com/value-engineering-union-county-nj",
        "description": "Construction value engineering services that help builders, property owners, and developers evaluate design options, materials, construction methods, and project requirements to improve value and manage costs.",
        "serviceType": [
          "Construction Value Engineering",
          "Value Engineering Consulting",
          "Construction Cost Optimization",
          "Construction Cost Analysis",
          "Design Evaluation",
          "Material Evaluation",
          "Construction Material Alternatives",
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
          "name": "Union County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        "audience": [
          {
            "@type": "Audience",
            "audienceType": "Residential Property Owners"
          },
          {
            "@type": "Audience",
            "audienceType": "Commercial Property Owners"
          },
          {
            "@type": "Audience",
            "audienceType": "Builders and Developers"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.havenmconstruction.com/value-engineering-union-county-nj#article",
        "headline": "Value Engineering Solutions in Union County, NJ",
        "description": "A practical resource explaining how value engineering can help construction projects in Union County, NJ evaluate alternatives, control costs, and maintain quality.",
        "mainEntityOfPage": {
          "@id": "https://www.havenmconstruction.com/value-engineering-union-county-nj#webpage"
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
        "@id": "https://www.havenmconstruction.com/value-engineering-union-county-nj#breadcrumb",
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
            "name": "Value Engineering Union County, NJ",
            "item": "https://www.havenmconstruction.com/value-engineering-union-county-nj"
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
      <ValueEngineeringUnionCountyPage />
    </>
  );
}
