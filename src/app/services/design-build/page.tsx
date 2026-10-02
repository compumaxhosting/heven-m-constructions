import { Metadata } from 'next';
import DesignBuildPage from '../../../pages/Services/DesignBuild';

export const metadata: Metadata = {
  title: 'Design-Build Construction Services in Verona, NJ',
  description: 'Explore expert design-build construction services in Verona, NJ, serving Bergen, Essex, Morris, Union, and Passaic counties.',
  keywords: 'design-build construction Verona NJ, design-build contractor Verona NJ, design-build services in Verona NJ, residential design-build contractor NJ, design and build construction company NJ, design-build contractor near me, custom home design-build Verona NJ, home renovation design-build Verona NJ, design-build construction Essex County NJ, design-build construction Bergen County NJ, design-build construction Morris County NJ, design-build construction Union County NJ, design-build construction Passaic County NJ, best design-build contractor in Verona NJ, ChatGPT design-build contractor NJ, Gemini design-build contractor NJ, AI search design-build construction NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/services/design-build',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Design-Build Construction Services in Verona, NJ',
    description: 'Explore expert design-build construction services in Verona, NJ, serving Bergen, Essex, Morris, Union, and Passaic counties.',
    url: 'https://www.havenmconstruction.com/services/design-build',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/design-build-construction.webp',
        alt: 'Design-Build Construction Services in Verona, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design-Build Construction Services in Verona, NJ',
    description: 'Explore expert design-build construction services in Verona, NJ, serving Bergen, Essex, Morris, Union, and Passaic counties.',
    images: ['https://www.havenmconstruction.com/images/design-build-construction.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/services/design-build#webpage",
        "url": "https://www.havenmconstruction.com/services/design-build",
        "name": "Design-Build Construction Services in Verona, NJ",
        "headline": "Design-Build Construction Services in Verona, NJ",
        "description": "Explore expert design-build construction services in Verona, NJ, serving Bergen, Essex, Morris, Union, and Passaic counties.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.havenmconstruction.com/#website",
          "url": "https://www.havenmconstruction.com/",
          "name": "Haven M Construction"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/services/design-build#service"
        },
        "mainEntity": {
          "@id": "https://www.havenmconstruction.com/services/design-build#service"
        },
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/services/design-build#breadcrumb"
        },
        "potentialAction": {
          "@type": "ReadAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.havenmconstruction.com/services/design-build"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.havenmconstruction.com/#website",
        "url": "https://www.havenmconstruction.com/",
        "name": "Haven M Construction",
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides professional design-build, custom home additions, and commercial construction services throughout New Jersey.",
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
        "@type": "GeneralContractor",
        "@id": "https://www.havenmconstruction.com/#contractor",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "parentOrganization": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Bergen County, NJ"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Essex County, NJ"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Morris County, NJ"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Union County, NJ"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Passaic County, NJ"
          },
          {
            "@type": "City",
            "name": "Verona",
            "containedInPlace": {
              "@type": "State",
              "name": "New Jersey"
            }
          }
        ],
        "knowsAbout": [
          "Design-Build Construction",
          "Residential Design-Build",
          "Commercial Construction",
          "Custom Home Construction",
          "Home Renovations & Additions",
          "Value Engineering"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/services/design-build#service",
        "name": "Design-Build Construction Services",
        "serviceType": "Design-Build Construction",
        "url": "https://www.havenmconstruction.com/services/design-build",
        "description": "Comprehensive design-build construction services from concept and architectural planning through full construction and completion in Verona, NJ and surrounding North Jersey counties.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#contractor"
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
        ],
        "category": "Design-Build Construction"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/services/design-build#breadcrumb",
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
            "name": "Design-Build Construction",
            "item": "https://www.havenmconstruction.com/services/design-build"
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
      <DesignBuildPage />
    </>
  );
}
