import { Metadata } from 'next';
import DesignBuildEssexCountyPage from '../../../../pages/Services/DesignBuild/EssexCounty';

export const metadata: Metadata = {
  title: 'Design-Build Contractors in Essex County, NJ | Haven M Construction',
  description: 'Plan, design, and build with experienced design-build contractors in Essex County, NJ. Haven M Construction delivers a streamlined process from concept to completion.',
  keywords: 'design-build contractors Essex County NJ, design-build construction Essex County NJ, design-build construction contractors Essex County NJ, design-build company Essex County NJ, construction contractors Essex County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/design-build-essex-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Design-Build Contractors in Essex County, NJ | Haven M Construction',
    description: 'Plan, design, and build with experienced design-build contractors in Essex County, NJ. Haven M Construction delivers a streamlined process from concept to completion.',
    url: 'https://www.havenmconstruction.com/design-build-essex-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/wp-content/uploads/og-image.jpg',
        alt: 'Haven M Construction design-build services in Essex County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design-Build Contractors in Essex County, NJ | Haven M Construction',
    description: 'Plan, design, and build with experienced design-build contractors in Essex County, NJ. Haven M Construction delivers a streamlined process from concept to completion.',
    images: ['https://www.havenmconstruction.com/wp-content/uploads/og-image.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/design-build-essex-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/design-build-essex-county-nj",
        "name": "Design-Build Contractors in Essex County, NJ | Haven M Construction",
        "description": "Plan, design, and build with experienced design-build contractors in Essex County, NJ. Haven M Construction delivers a streamlined process from concept to completion.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/design-build-essex-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/design-build-essex-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/design-build-essex-county-nj#service",
        "name": "Design-Build Construction Services in Essex County, NJ",
        "serviceType": "Design-Build Construction",
        "description": "Design-build construction services for residential and construction projects in Essex County, New Jersey, providing an integrated approach from planning and design through construction and completion.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Essex County, New Jersey",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
            "containedInPlace": {
              "@type": "Country",
              "name": "United States"
            }
          }
        },
        "provider": {
          "@id": "https://www.havenmconstruction.com/#business"
        },
        "url": "https://www.havenmconstruction.com/design-build-essex-county-nj"
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.havenmconstruction.com/#business",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides construction and design-build services.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Essex County, New Jersey"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.havenmconstruction.com/#website",
        "url": "https://www.havenmconstruction.com/",
        "name": "Haven M Construction",
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#business"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/design-build-essex-county-nj#breadcrumb",
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
            "item": "https://www.havenmconstruction.com/design-build-essex-county-nj"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Essex County, NJ"
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
      <DesignBuildEssexCountyPage />
    </>
  );
}
