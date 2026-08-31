import { Metadata } from 'next';
import WholeHomeAdditionsPage from '../../../pages/Services/WholeHomeAdditions';

export const metadata: Metadata = {
  title: 'Whole-Home Additions in Verona, NJ | Design-Build Experts',
  description: 'Planning a whole-home addition in Verona, NJ? Haven M Construction creates thoughtful, functional additions across Bergen, Essex, Morris, Union & Passaic.',
  keywords: 'whole-home additions in Verona NJ, whole-home addition contractor near me, how much does a whole-home addition cost in New Jersey, who builds whole-home additions in NJ, best whole-home addition contractor near Verona NJ, home addition ideas for New Jersey homes, how to plan a whole-home addition in NJ, whole-home addition design-build contractor NJ, residential addition contractor in Verona NJ, custom home additions in New Jersey, home expansion contractor near me, second-story and home addition contractor NJ, whole-house renovation and addition NJ, residential construction contractor Verona NJ, addition contractor serving Bergen County NJ, addition contractor serving Essex County NJ, addition contractor serving Morris County NJ, addition contractor serving Union County NJ, addition contractor serving Passaic County NJ, design-build home addition contractor NJ, construction company for home additions near Verona NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/services/whole-home-additions',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Whole-Home Additions in Verona, NJ | Design-Build Experts',
    description: 'Planning a whole-home addition in Verona, NJ? Haven M Construction creates thoughtful, functional additions across Bergen, Essex, Morris, Union & Passaic.',
    url: 'https://www.havenmconstruction.com/services/whole-home-additions',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.jpg',
        alt: 'Whole-home additions by Haven M Construction in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whole-Home Additions in Verona, NJ | Design-Build Experts',
    description: 'Planning a whole-home addition in Verona, NJ? Haven M Construction creates thoughtful, functional additions across Bergen, Essex, Morris, Union & Passaic.',
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
        "description": "Haven M Construction provides residential and commercial construction, whole-home additions, design-build, value engineering, boutique office construction, and veterinary hospital construction in Verona, NJ and surrounding counties.",
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
        "@id": "https://www.havenmconstruction.com/services/whole-home-additions#service",
        "name": "Whole-Home Additions",
        "serviceType": "Whole-Home Additions",
        "description": "Haven M Construction designs and builds thoughtful, functional whole-home additions for homeowners in Verona, NJ and surrounding New Jersey counties.",
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
        ],
        "url": "https://www.havenmconstruction.com/services/whole-home-additions"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/services/whole-home-additions#webpage",
        "url": "https://www.havenmconstruction.com/services/whole-home-additions",
        "name": "Whole-Home Additions in Verona, NJ | Design-Build Experts",
        "description": "Planning a whole-home addition in Verona, NJ? Haven M Construction creates thoughtful, functional additions across Bergen, Essex, Morris, Union and Passaic Counties.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/services/whole-home-additions#service"
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
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WholeHomeAdditionsPage />
    </>
  );
}
