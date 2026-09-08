import { Metadata } from 'next';
import WholeHomeAdditionsBergenCountyPage from '../../../../pages/Services/WholeHomeAdditions/BergenCounty';

export const metadata: Metadata = {
  title: 'Whole-Home Additions in Bergen County, NJ | Haven M',
  description: 'Planning a whole-home addition in Bergen County, NJ? Haven M Construction provides custom design-build solutions for more space, comfort and value.',
  keywords: 'whole-home additions Bergen County NJ, whole-home addition contractor Bergen County NJ, best whole-home addition contractor near me, who builds whole-home additions in Bergen County, how much does a whole-home addition cost in NJ, whole-home addition ideas for Bergen County homes, how to plan a whole-home addition in Bergen County NJ, custom home additions Bergen County NJ, residential addition contractor near Bergen County, home expansion contractor Bergen County NJ, design-build home addition contractor Bergen County, whole-house renovation and addition NJ, second-story addition contractor Bergen County NJ, home addition construction near me, residential construction contractor Bergen County NJ, general contractor for home additions in Bergen County, home addition contractor serving Bergen County NJ, whole-home remodeling and additions Bergen County, construction company for home additions near me, custom residential construction Bergen County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Whole-Home Additions in Bergen County, NJ | Haven M',
    description: 'Planning a whole-home addition in Bergen County, NJ? Haven M Construction provides custom design-build solutions for more space, comfort and value.',
    url: 'https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.webp',
        alt: 'Whole-home additions in Bergen County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whole-Home Additions in Bergen County, NJ | Haven M',
    description: 'Planning a whole-home addition in Bergen County, NJ? Haven M Construction provides custom design-build solutions for more space, comfort and value.',
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
        "description": "Haven M Construction provides custom whole-home additions and residential design-build construction for homeowners in Bergen County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey"
        },
        "knowsAbout": [
          "Whole-Home Additions",
          "Home Additions",
          "Residential Design-Build",
          "Home Expansion",
          "Second-Story Additions",
          "Whole-House Remodeling"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj#service",
        "name": "Whole-Home Additions in Bergen County, NJ",
        "serviceType": "Whole-Home Additions",
        "description": "Custom whole-home addition and design-build solutions for Bergen County homeowners seeking additional space, comfort, functionality and long-term value.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey"
        },
        "url": "https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj",
        "name": "Whole-Home Additions in Bergen County, NJ | Haven M",
        "description": "Planning a whole-home addition in Bergen County, NJ? Haven M Construction provides custom design-build solutions for more space, comfort and value.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj#service"
        },
        "mainEntity": {
          "@id": "https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj#service"
        },
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "inLanguage": "en-US"
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
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj#breadcrumb",
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
            "name": "Bergen County, NJ",
            "item": "https://www.havenmconstruction.com/whole-home-additions-bergen-county-nj"
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
      <WholeHomeAdditionsBergenCountyPage />
    </>
  );
}

