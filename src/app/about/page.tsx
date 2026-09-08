import AboutPage from '../../components/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential & Commercial Construction Services in Verona, NJ | Haven M Construction',
  description: 'Residential and commercial construction services in Verona, NJ, including additions and design-build, serving Bergen, Essex, Morris, Union & Passaic counties.',
  keywords: 'residential construction Verona NJ, commercial construction Verona NJ, construction contractor Verona NJ, home additions Verona NJ, whole-home additions NJ, design-build contractor NJ, value engineering NJ, boutique office construction NJ, veterinary hospital construction NJ, construction services Bergen County, construction services Essex County, construction services Morris County, construction services Union County, construction services Passaic County, general contractor Verona NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/about',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Residential & Commercial Construction Services in Verona, NJ | Haven M Construction',
    description: 'Residential and commercial construction services in Verona, NJ, including additions and design-build, serving Bergen, Essex, Morris, Union & Passaic counties.',
    url: 'https://www.havenmconstruction.com/about',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.webp',
        alt: 'Haven M Construction residential and commercial construction services in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential & Commercial Construction Services in Verona, NJ | Haven M Construction',
    description: 'Residential and commercial construction services in Verona, NJ, including additions and design-build, serving Bergen, Essex, Morris, Union & Passaic counties.',
    images: ['https://www.havenmconstruction.com/images/og-image.webp'],
  },
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides residential and commercial construction services, home additions, design-build, value engineering, boutique office construction, and veterinary hospital construction in Verona, NJ and surrounding counties.",
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
            "name": "Passaic County, NJ"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Union County, NJ"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/about#webpage",
        "url": "https://www.havenmconstruction.com/about",
        "name": "Residential & Commercial Construction Services in Verona, NJ | Haven M Construction",
        "description": "Residential and commercial construction services in Verona, NJ, including additions and design-build, serving Bergen, Essex, Morris, Union and Passaic counties.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutPage />
    </>
  );
}
