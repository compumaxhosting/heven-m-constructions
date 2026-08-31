import { Metadata } from 'next';
import DesignBuildMorrisCountyPage from '../../../../pages/Services/DesignBuild/MorrisCounty';

export const metadata: Metadata = {
  title: 'Design-Build Construction Services in Morris County, NJ',
  description: 'Explore design-build construction services in Morris County, NJ, from planning and design through construction for a seamless project from start to finish.',
  keywords: 'design-build construction Morris County NJ, design-build services Morris County NJ, design-build contractors Morris County NJ, construction services Morris County NJ, design-build company Morris County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/design-build-morris-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Design-Build Construction Services in Morris County, NJ',
    description: 'Explore design-build construction services in Morris County, NJ, from planning and design through construction for a seamless project from start to finish.',
    url: 'https://www.havenmconstruction.com/design-build-morris-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/wp-content/uploads/og-image.jpg',
        alt: 'Haven M Construction design-build construction services in Morris County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design-Build Construction Services in Morris County, NJ',
    description: 'Explore design-build construction services in Morris County, NJ, from planning and design through construction for a seamless project from start to finish.',
    images: ['https://www.havenmconstruction.com/wp-content/uploads/og-image.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/design-build-morris-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/design-build-morris-county-nj",
        "name": "Design-Build Construction Services in Morris County, NJ",
        "description": "Explore design-build construction services in Morris County, NJ, from planning and design through construction for a seamless project from start to finish.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/design-build-morris-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/design-build-morris-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/design-build-morris-county-nj#service",
        "name": "Design-Build Construction Services in Morris County, NJ",
        "serviceType": "Design-Build Construction",
        "description": "Design-build construction services in Morris County, New Jersey, providing an integrated process that brings planning, design, construction, and project completion together.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#business"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
            "containedInPlace": {
              "@type": "Country",
              "name": "United States"
            }
          }
        },
        "url": "https://www.havenmconstruction.com/design-build-morris-county-nj"
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.havenmconstruction.com/#business",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides design-build and construction services.",
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
        "@id": "https://www.havenmconstruction.com/design-build-morris-county-nj#breadcrumb",
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
            "item": "https://www.havenmconstruction.com/design-build-morris-county-nj"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Morris County, NJ"
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
      <DesignBuildMorrisCountyPage />
    </>
  );
}
