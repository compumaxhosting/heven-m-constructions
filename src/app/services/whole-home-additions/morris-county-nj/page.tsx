import { Metadata } from 'next';
import WholeHomeAdditionsMorrisCountyPage from '../../../../pages/Services/WholeHomeAdditions/MorrisCounty';

export const metadata: Metadata = {
  title: 'Whole-Home Additions in Morris County, NJ | Haven M',
  description: 'Planning a whole-home addition in Morris County, NJ? Haven M Construction provides custom design-build solutions for more space, comfort, and lasting value.',
  keywords: 'whole-home additions Morris County NJ, whole-home addition contractor Morris County NJ, best whole-home addition contractor near me, who builds whole-home additions in Morris County, how much does a whole-home addition cost in NJ, whole-home addition ideas for Morris County homes, how to plan a whole-home addition in Morris County NJ, custom home additions Morris County NJ, residential addition contractor Morris County NJ, home expansion contractor Morris County NJ, design-build home addition contractor Morris County, whole-house renovation and addition NJ, second-story addition contractor Morris County NJ, home addition construction near me, residential construction contractor Morris County NJ, general contractor for home additions in Morris County, home addition contractor serving Morris County NJ, whole-home remodeling and additions Morris County, construction company for home additions near me, custom residential construction Morris County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/whole-home-additions-morris-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Whole-Home Additions in Morris County, NJ | Haven M',
    description: 'Planning a whole-home addition in Morris County, NJ? Haven M Construction provides custom design-build solutions for more space, comfort, and lasting value.',
    url: 'https://www.havenmconstruction.com/whole-home-additions-morris-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.jpg',
        alt: 'Whole-home additions in Morris County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whole-Home Additions in Morris County, NJ | Haven M',
    description: 'Planning a whole-home addition in Morris County, NJ? Haven M Construction provides custom design-build solutions for more space, comfort, and lasting value.',
    images: ['https://www.havenmconstruction.com/images/og-image.jpg'],
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
        "description": "Haven M Construction provides custom whole-home additions and residential design-build construction for homeowners throughout Morris County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County, New Jersey"
        },
        "knowsAbout": [
          "Whole-Home Additions",
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
        "@id": "https://www.havenmconstruction.com/whole-home-additions-morris-county-nj#service",
        "name": "Whole-Home Additions in Morris County, NJ",
        "serviceType": "Whole-Home Additions",
        "description": "Custom whole-home addition and design-build solutions for Morris County homeowners seeking more space, comfort, functionality and lasting value.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County, New Jersey"
        },
        "url": "https://www.havenmconstruction.com/whole-home-additions-morris-county-nj"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/whole-home-additions-morris-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/whole-home-additions-morris-county-nj",
        "name": "Whole-Home Additions in Morris County, NJ | Haven M",
        "description": "Planning a whole-home addition in Morris County, NJ? Haven M Construction provides custom design-build solutions for more space, comfort and lasting value.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/whole-home-additions-morris-county-nj#service"
        },
        "mainEntity": {
          "@id": "https://www.havenmconstruction.com/whole-home-additions-morris-county-nj#service"
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
        "@id": "https://www.havenmconstruction.com/whole-home-additions-morris-county-nj#breadcrumb",
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
            "name": "Morris County, NJ",
            "item": "https://www.havenmconstruction.com/whole-home-additions-morris-county-nj"
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
      <WholeHomeAdditionsMorrisCountyPage />
    </>
  );
}
