import { Metadata } from 'next';
import WholeHomeAdditionsPassaicCountyPage from '../../../../pages/Services/WholeHomeAdditions/PassaicCounty';

export const metadata: Metadata = {
  title: 'Whole-Home Additions & Remodeling | Passaic County, NJ',
  description: 'Planning a whole-home addition in Passaic County, NJ? Haven M Construction designs and builds custom additions for more space, comfort, and value.',
  keywords: 'whole home additions Passaic County NJ, whole house additions Passaic County NJ, home additions Passaic County NJ, custom home additions NJ, home addition contractor Passaic County, whole home addition contractor near me, best home addition contractor Passaic County NJ, custom home additions near me, whole home addition cost NJ, how to add space to my home in Passaic County, home addition design and build NJ, residential addition contractor Passaic County, second story additions Passaic County NJ, home expansion contractor NJ, full home renovation and addition NJ, home addition contractor near Passaic County NJ, design-build home addition contractor NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Whole-Home Additions & Remodeling | Passaic County, NJ',
    description: 'Planning a whole-home addition in Passaic County, NJ? Haven M Construction designs and builds custom additions for more space, comfort, and value.',
    url: 'https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.webp',
        alt: 'Whole-Home Additions & Remodeling in Passaic County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whole-Home Additions & Remodeling | Passaic County, NJ',
    description: 'Planning a whole-home addition in Passaic County, NJ? Haven M Construction designs and builds custom additions for more space, comfort, and value.',
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
        "description": "Haven M Construction specializes in whole-home additions, remodeling, residential construction, and design-build services in Passaic County and throughout Northern New Jersey.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Passaic County, New Jersey"
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
            "name": "Union County, New Jersey"
          }
        ],
        "knowsAbout": [
          "Whole-Home Additions",
          "Home Remodeling",
          "Custom Home Additions",
          "Residential Design-Build",
          "Second-Story Additions",
          "Home Expansion",
          "Whole-House Renovation",
          "Residential Construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj#service",
        "name": "Whole-Home Additions & Remodeling | Passaic County, NJ",
        "serviceType": "Whole-Home Additions and Remodeling",
        "description": "Custom whole-home additions and remodeling services designed to expand living space, improve comfort, enhance functionality, and add lasting value to homes in Passaic County, New Jersey.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey"
        },
        "url": "https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj",
        "name": "Whole-Home Additions & Remodeling | Passaic County, NJ",
        "description": "Planning a whole-home addition in Passaic County, NJ? Haven M Construction designs and builds custom additions for more space, comfort, and value.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj#service"
        },
        "mainEntity": {
          "@id": "https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj#service"
        },
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj#breadcrumb",
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
            "name": "Passaic County, NJ",
            "item": "https://www.havenmconstruction.com/whole-home-additions-passaic-county-nj"
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
      <WholeHomeAdditionsPassaicCountyPage />
    </>
  );
}
