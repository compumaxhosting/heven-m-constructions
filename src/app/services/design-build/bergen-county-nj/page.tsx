import { Metadata } from 'next';
import DesignBuildBergenCountyPage from '../../../../pages/Services/DesignBuild/BergenCounty';

export const metadata: Metadata = {
  title: 'Design-Build Construction Contractors in Bergen County, NJ',
  description: 'Work with experienced design-build construction contractors in Bergen County, NJ for a seamless process from planning to final completion.',
  keywords: 'design-build construction Bergen County NJ, design-build contractor Bergen County NJ, design-build construction contractors Bergen County, design-build services Bergen County NJ, residential design-build contractor Bergen County NJ, design and build contractor NJ, design-build construction company Bergen County, custom home design-build Bergen County NJ, home renovation design-build Bergen County NJ, residential construction Bergen County NJ, design-build contractor near me, best design-build contractor Bergen County NJ, design-build construction company near Bergen County, home remodeling design-build Bergen County NJ, custom home builder Bergen County NJ, ChatGPT design-build contractor Bergen County NJ, Gemini design-build contractor Bergen County NJ, AI search design-build contractor NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/design-build-bergen-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Design-Build Construction Contractors in Bergen County, NJ',
    description: 'Work with experienced design-build construction contractors in Bergen County, NJ for a seamless process from planning to final completion.',
    url: 'https://www.havenmconstruction.com/design-build-bergen-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/design-build-construction.webp',
        alt: 'Design-Build Construction Contractors in Bergen County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design-Build Construction Contractors in Bergen County, NJ',
    description: 'Work with experienced design-build construction contractors in Bergen County, NJ for a seamless process from planning to final completion.',
    images: ['https://www.havenmconstruction.com/images/design-build-construction.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides professional design-build construction services for residential projects throughout Bergen County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        "knowsAbout": [
          "Design-Build Construction",
          "Residential Construction",
          "Home Remodeling",
          "Home Renovation",
          "Custom Home Construction",
          "Residential Design and Build"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/design-build-bergen-county-nj#service",
        "name": "Design-Build Construction Services in Bergen County, NJ",
        "serviceType": "Design-Build Construction",
        "description": "Experienced design-build construction services in Bergen County, NJ, providing a seamless process from initial planning and design through construction and final completion.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        "url": "https://www.havenmconstruction.com/design-build-bergen-county-nj"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/design-build-bergen-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/design-build-bergen-county-nj",
        "name": "Design-Build Construction Contractors in Bergen County, NJ",
        "headline": "Design-Build Construction Contractors in Bergen County, NJ",
        "description": "Work with experienced design-build construction contractors in Bergen County, NJ for a seamless process from initial planning to final completion.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.havenmconstruction.com/#website",
          "name": "Haven M Construction",
          "url": "https://www.havenmconstruction.com/"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/design-build-bergen-county-nj#service"
        },
        "mainEntity": {
          "@id": "https://www.havenmconstruction.com/design-build-bergen-county-nj#service"
        },
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/design-build-bergen-county-nj#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/design-build-bergen-county-nj#breadcrumb",
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
            "name": "Design-Build Construction",
            "item": "https://www.havenmconstruction.com/design-build-construction-nj"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bergen County, NJ",
            "item": "https://www.havenmconstruction.com/design-build-bergen-county-nj"
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
      <DesignBuildBergenCountyPage />
    </>
  );
}
