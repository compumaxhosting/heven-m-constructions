import { Metadata } from 'next';
import WholeHomeAdditionsUnionCountyPage from '../../../../pages/Services/WholeHomeAdditions/UnionCounty';

export const metadata: Metadata = {
  title: 'Whole-Home Additions & Remodeling in Union County, NJ',
  description: 'Looking for a whole-home addition in Union County, NJ? Haven M Construction creates custom additions to expand your space, comfort, and lifestyle.',
  keywords: 'whole home additions Union County NJ, whole house additions Union County NJ, home additions Union County NJ, custom home additions Union County NJ, home addition contractor Union County NJ, whole home addition contractor near me, home addition company Union County NJ, custom home expansion Union County NJ, residential additions Union County NJ, home addition design and build NJ, best home addition contractor in Union County NJ, whole home addition cost NJ, how to add more living space to my Union County home, home expansion contractor near me, full home addition and renovation NJ, AI home addition ideas for Union County NJ, whole home addition ideas for NJ homes, custom house addition near me, home remodeling and additions Union County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/whole-home-additions-union-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Whole-Home Additions & Remodeling in Union County, NJ',
    description: 'Looking for a whole-home addition in Union County, NJ? Haven M Construction creates custom additions to expand your space, comfort, and lifestyle.',
    url: 'https://www.havenmconstruction.com/whole-home-additions-union-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.webp',
        alt: 'Whole-Home Additions & Remodeling in Union County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whole-Home Additions & Remodeling in Union County, NJ',
    description: 'Looking for a whole-home addition in Union County, NJ? Haven M Construction creates custom additions to expand your space, comfort, and lifestyle.',
    images: ['https://www.havenmconstruction.com/images/og-image.webp'],
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
        "description": "Haven M Construction provides custom whole-home additions, remodeling, residential construction, and design-build services for homeowners in Union County and throughout Northern New Jersey.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Union County, New Jersey"
          },
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
            "name": "Passaic County, New Jersey"
          }
        ],
        "knowsAbout": [
          "Whole-Home Additions",
          "Home Remodeling",
          "Custom Home Additions",
          "Residential Design-Build",
          "Home Expansion",
          "Second-Story Additions",
          "Whole-House Renovation",
          "Residential Construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-union-county-nj#service",
        "name": "Whole-Home Additions & Remodeling in Union County, NJ",
        "serviceType": "Whole-Home Additions and Remodeling",
        "description": "Custom whole-home additions and remodeling solutions designed to expand living space, improve comfort, enhance functionality, and support the lifestyle of Union County homeowners.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Union County, New Jersey"
        },
        "url": "https://www.havenmconstruction.com/whole-home-additions-union-county-nj"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-union-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/whole-home-additions-union-county-nj",
        "name": "Whole-Home Additions & Remodeling in Union County, NJ",
        "description": "Looking for a whole-home addition in Union County, NJ? Haven M Construction creates custom home additions designed to expand your space, comfort, and lifestyle.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/whole-home-additions-union-county-nj#service"
        },
        "mainEntity": {
          "@id": "https://www.havenmconstruction.com/whole-home-additions-union-county-nj#service"
        },
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-union-county-nj#breadcrumb",
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
            "name": "Whole-Home Additions",
            "item": "https://www.havenmconstruction.com/services/whole-home-additions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Union County, NJ",
            "item": "https://www.havenmconstruction.com/whole-home-additions-union-county-nj"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.havenmconstruction.com/#website",
        "url": "https://www.havenmconstruction.com/",
        "name": "Haven M Construction",
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WholeHomeAdditionsUnionCountyPage />
    </>
  );
}
