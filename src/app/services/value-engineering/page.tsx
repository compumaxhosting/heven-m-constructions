import { Metadata } from 'next';
import ValueEngineeringPage from '../../../pages/Services/ValueEngineering';

export const metadata: Metadata = {
  title: 'Professional Value Engineering Services in Verona, NJ | Haven M Construction',
  description: 'Professional value engineering services in Verona, NJ by Haven M Construction, helping optimize construction costs, materials, design, and project performance.',
  keywords: 'Who provides value engineering services in Verona NJ, what is value engineering for construction projects in Verona NJ, where can I find a professional value engineering consultant in Verona NJ, how can value engineering reduce construction costs in Verona NJ, who can help evaluate construction materials and design costs in Verona NJ, best value engineering services for construction projects in Verona NJ, value engineering consultants near me in Verona NJ, how can I optimize construction project costs in Verona NJ, professional construction cost evaluation services in Verona NJ, value engineering for commercial and residential construction in Verona NJ;value engineering services Verona NJ, value engineering Verona NJ, construction value engineering Verona NJ, value engineering contractor Verona NJ, construction cost optimization Verona NJ, building value engineering NJ, construction consulting Verona NJ, project cost reduction NJ, construction cost management Verona NJ, value engineering consultant NJ, construction planning Verona NJ, design optimization NJ, construction budget optimization NJ, Haven M Construction value engineering',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/services/value-engineering',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Professional Value Engineering Services in Verona, NJ | Haven M Construction',
    description: 'Professional value engineering services in Verona, NJ by Haven M Construction, helping optimize construction costs, materials, design, and project performance.',
    url: 'https://www.havenmconstruction.com/services/value-engineering',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/value-engineering-verona-nj.webp',
        alt: 'Professional value engineering services in Verona, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Value Engineering Services in Verona, NJ | Haven M Construction',
    description: 'Professional value engineering services in Verona, NJ by Haven M Construction, helping optimize construction costs, materials, design, and project performance.',
    images: ['https://www.havenmconstruction.com/images/value-engineering-verona-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/services/value-engineering#webpage",
        "url": "https://www.havenmconstruction.com/services/value-engineering",
        "name": "Professional Value Engineering Services in Verona, NJ | Haven M Construction",
        "description": "Professional value engineering services in Verona, NJ by Haven M Construction, helping optimize construction costs, materials, design, and project performance.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.havenmconstruction.com/#website",
          "url": "https://www.havenmconstruction.com/",
          "name": "Haven M Construction"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/services/value-engineering#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/services/value-engineering#breadcrumb"
        },
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.havenmconstruction.com/#website",
        "url": "https://www.havenmconstruction.com/",
        "name": "Haven M Construction",
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      },
      {
        "@type": "GeneralContractor",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides value engineering and construction optimization services.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Bergen County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Essex County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Morris County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Union County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Passaic County, New Jersey"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/services/value-engineering#service",
        "name": "Value Engineering Services",
        "serviceType": "Value Engineering",
        "url": "https://www.havenmconstruction.com/services/value-engineering",
        "description": "Professional value engineering services helping owners and developers optimize construction costs, materials, and project performance.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Bergen County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Essex County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Morris County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Union County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Passaic County, New Jersey"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/services/value-engineering#breadcrumb",
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
            "name": "Services",
            "item": "https://www.havenmconstruction.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Value Engineering",
            "item": "https://www.havenmconstruction.com/services/value-engineering"
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
      <ValueEngineeringPage />
    </>
  );
}
