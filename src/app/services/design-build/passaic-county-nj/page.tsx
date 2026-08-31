import { Metadata } from 'next';
import DesignBuildPassaicCountyPage from '../../../../pages/Services/DesignBuild/PassaicCounty';

export const metadata: Metadata = {
  title: 'Expert Design Build Construction in Passaic County, NJ',
  description: 'Trusted design-build contractors in Passaic County, NJ, providing custom home design, planning, and construction from concept through completion.',
  keywords: 'design-build contractors Passaic County NJ, design-build construction Passaic County NJ, design-build services Passaic County NJ, custom home design Passaic County NJ, construction contractors Passaic County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/design-build-passaic-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Expert Design Build Construction in Passaic County, NJ',
    description: 'Trusted design-build contractors in Passaic County, NJ, providing custom home design, planning, and construction from concept through completion.',
    url: 'https://www.havenmconstruction.com/design-build-passaic-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/wp-content/uploads/og-image.jpg',
        alt: 'Haven M Construction design-build services in Passaic County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Design Build Construction in Passaic County, NJ',
    description: 'Trusted design-build contractors in Passaic County, NJ, providing custom home design, planning, and construction from concept through completion.',
    images: ['https://www.havenmconstruction.com/wp-content/uploads/og-image.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/design-build-passaic-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/design-build-passaic-county-nj",
        "name": "Design-Build Contractors in Passaic County, NJ | Haven M",
        "description": "Trusted design-build contractors in Passaic County, NJ, providing custom home design, planning, and construction from concept through completion.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/design-build-passaic-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/design-build-passaic-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/design-build-passaic-county-nj#service",
        "name": "Design-Build Construction Services in Passaic County, NJ",
        "serviceType": "Design-Build Construction",
        "description": "Design-build construction services in Passaic County, New Jersey, combining custom home design, planning, construction, and project completion through an integrated process.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#business"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
            "containedInPlace": {
              "@type": "Country",
              "name": "United States"
            }
          }
        },
        "url": "https://www.havenmconstruction.com/design-build-passaic-county-nj"
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.havenmconstruction.com/#business",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides design-build and construction services.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
            "containedInPlace": {
              "@type": "Country",
              "name": "United States"
            }
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
        "@id": "https://www.havenmconstruction.com/design-build-passaic-county-nj#breadcrumb",
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
            "item": "https://www.havenmconstruction.com/design-build-passaic-county-nj"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Passaic County, NJ"
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
      <DesignBuildPassaicCountyPage />
    </>
  );
}
