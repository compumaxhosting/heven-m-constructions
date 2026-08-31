import { Metadata } from 'next';
import ValueEngineeringBergenCountyPage from '../../../../pages/Services/ValueEngineering/BergenCounty';

export const metadata: Metadata = {
  title: 'Construction Value Engineering Services in Bergen County, NJ | Haven M Construction',
  description: 'Expert construction value engineering services in Bergen County, NJ to optimize costs, materials, design, and project performance without compromising quality.',
  keywords: 'Who provides construction value engineering services in Bergen County NJ, where can I find value engineering consultants in Bergen County NJ, how can value engineering reduce construction project costs in Bergen County NJ, what does a value engineering consultant do in Bergen County NJ, how can I optimize construction design and material costs in Bergen County NJ, who can evaluate cost-effective alternatives for my construction project in Bergen County NJ, what are the benefits of value engineering for construction projects in Bergen County NJ, best value engineering services for construction projects in Bergen County NJ, value engineering consultants near me in Bergen County NJ, how can I improve construction project value without reducing performance in Bergen County NJ, professional construction cost optimization services in Bergen County NJ, who can help review construction materials and design alternatives in Bergen County NJ, value engineering for commercial construction projects in Bergen County NJ, value engineering for residential construction projects in Bergen County NJ, expert construction value engineering consultants in Bergen County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/value-engineering-bergen-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Construction Value Engineering Services in Bergen County, NJ | Haven M Construction',
    description: 'Expert construction value engineering services in Bergen County, NJ to optimize costs, materials, design, and project performance without compromising quality.',
    url: 'https://www.havenmconstruction.com/value-engineering-bergen-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/value-engineering-bergen-county-nj.jpg',
        alt: 'Construction value engineering services in Bergen County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Value Engineering Services in Bergen County, NJ | Haven M Construction',
    description: 'Expert construction value engineering services in Bergen County, NJ to optimize costs, materials, design, and project performance without compromising quality.',
    images: ['https://www.havenmconstruction.com/images/value-engineering-bergen-county-nj.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/value-engineering-bergen-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/value-engineering-bergen-county-nj",
        "name": "Construction Value Engineering Services in Bergen County, NJ | Haven M Construction",
        "description": "Construction value engineering services in Bergen County, NJ focused on improving project value, evaluating design alternatives, controlling costs, and optimizing materials and building systems.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.havenmconstruction.com/#website",
          "url": "https://www.havenmconstruction.com/",
          "name": "Haven M Construction"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/value-engineering-bergen-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/value-engineering-bergen-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/value-engineering-bergen-county-nj#service",
        "name": "Construction Value Engineering Services in Bergen County, NJ",
        "url": "https://www.havenmconstruction.com/value-engineering-bergen-county-nj",
        "description": "Professional construction value engineering services that help identify cost-effective design, material, and construction alternatives while maintaining project functionality, quality, durability, and performance.",
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
          "name": "Bergen County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        }
      },
      {
        "@type": "AdministrativeArea",
        "@id": "https://www.havenmconstruction.com/value-engineering-bergen-county-nj#bergen-county",
        "name": "Bergen County",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/value-engineering-bergen-county-nj#breadcrumb",
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
            "name": "Value Engineering Bergen County, NJ",
            "item": "https://www.havenmconstruction.com/value-engineering-bergen-county-nj"
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
      <ValueEngineeringBergenCountyPage />
    </>
  );
}
