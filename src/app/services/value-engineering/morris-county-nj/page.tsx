import { Metadata } from 'next';
import ValueEngineeringMorrisCountyPage from '../../../../pages/Services/ValueEngineering/MorrisCounty';

export const metadata: Metadata = {
  title: 'How Can Value Engineering Improve Construction Projects in Morris County, NJ?',
  description: 'Learn how value engineering improves construction projects in Morris County, NJ through cost optimization, smarter design, materials, and efficient planning.',
  keywords: 'Who provides construction value engineering services in Morris County NJ, where can I find value engineering consultants in Morris County NJ, how can value engineering reduce construction costs in Morris County NJ, what does a value engineering consultant do in Morris County NJ, who can evaluate construction design and material alternatives in Morris County NJ, best construction value engineering services in Morris County NJ, value engineering consultants near me in Morris County NJ, how can I optimize my construction project budget in Morris County NJ, who can help improve project value without sacrificing quality in Morris County NJ, professional construction cost optimization services in Morris County NJ, what are the benefits of value engineering for construction projects in Morris County NJ, who can help evaluate construction materials and project requirements in Morris County NJ, value engineering for commercial construction projects in Morris County NJ, value engineering for residential construction projects in Morris County NJ, expert value engineering services for construction projects in Morris County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/value-engineering-morris-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'How Can Value Engineering Improve Construction Projects in Morris County, NJ?',
    description: 'Learn how value engineering improves construction projects in Morris County, NJ through cost optimization, smarter design, materials, and efficient planning.',
    url: 'https://www.havenmconstruction.com/value-engineering-morris-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/value-engineering-morris-county-nj.webp',
        alt: 'Construction value engineering services in Morris County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Can Value Engineering Improve Construction Projects in Morris County, NJ?',
    description: 'Learn how value engineering improves construction projects in Morris County, NJ through cost optimization, smarter design, materials, and efficient planning.',
    images: ['https://www.havenmconstruction.com/images/value-engineering-morris-county-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/value-engineering-morris-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/value-engineering-morris-county-nj",
        "name": "How Can Value Engineering Improve Construction Projects in Morris County, NJ?",
        "description": "Learn how construction value engineering can improve project efficiency, control costs, optimize materials, and enhance design decisions in Morris County, NJ.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.havenmconstruction.com/#website",
          "url": "https://www.havenmconstruction.com/",
          "name": "Haven M Construction"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/value-engineering-morris-county-nj#service"
        },
        "mainEntity": {
          "@id": "https://www.havenmconstruction.com/value-engineering-morris-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/value-engineering-morris-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/value-engineering-morris-county-nj#service",
        "name": "Construction Value Engineering Services in Morris County, NJ",
        "url": "https://www.havenmconstruction.com/value-engineering-morris-county-nj",
        "description": "Professional construction value engineering services that evaluate design choices, materials, building systems, construction methods, and project costs to improve overall value and performance.",
        "serviceType": [
          "Construction Value Engineering",
          "Value Engineering Consulting",
          "Construction Cost Optimization",
          "Construction Cost Analysis",
          "Design Optimization",
          "Material Evaluation",
          "Building System Evaluation",
          "Construction Budget Optimization",
          "Project Cost Management",
          "Construction Planning"
        ],
        "provider": {
          "@type": "GeneralContractor",
          "@id": "https://www.havenmconstruction.com/#business",
          "name": "Haven M Construction",
          "url": "https://www.havenmconstruction.com/"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.havenmconstruction.com/value-engineering-morris-county-nj#article",
        "headline": "How Can Value Engineering Improve Construction Projects in Morris County, NJ?",
        "description": "An informative guide explaining how value engineering can help construction projects in Morris County, NJ improve cost efficiency, functionality, material selection, and long-term performance.",
        "mainEntityOfPage": {
          "@id": "https://www.havenmconstruction.com/value-engineering-morris-county-nj#webpage"
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
        "@id": "https://www.havenmconstruction.com/value-engineering-morris-county-nj#breadcrumb",
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
            "name": "Value Engineering Morris County, NJ",
            "item": "https://www.havenmconstruction.com/value-engineering-morris-county-nj"
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
      <ValueEngineeringMorrisCountyPage />
    </>
  );
}
