import ServicesPage from '../../pages/Services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Services in Verona, NJ | Residential & Commercial',
  description: 'Haven M Construction offers residential and commercial construction services in Verona, NJ, serving Bergen, Essex, Morris, Union & Passaic Counties.',
  keywords: 'construction services Verona NJ, residential construction Verona NJ, commercial construction Verona NJ, general contractor Verona NJ, whole-home additions NJ, home additions Verona NJ, design-build contractor NJ, value engineering NJ, boutique office construction NJ, veterinary hospital construction NJ, construction contractor Bergen County NJ, construction contractor Essex County NJ, construction contractor Morris County NJ, construction contractor Union County NJ, construction contractor Passaic County NJ, construction company Verona New Jersey, construction services Bergen County NJ, construction services Essex County NJ, construction services Morris County NJ, construction services Union County NJ, construction services Passaic County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/services',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Construction Services in Verona, NJ | Residential & Commercial',
    description: 'Haven M Construction offers residential and commercial construction services in Verona, NJ, serving Bergen, Essex, Morris, Union & Passaic Counties.',
    url: 'https://www.havenmconstruction.com/services',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.jpg',
        alt: 'Haven M Construction construction services in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Services in Verona, NJ | Residential & Commercial',
    description: 'Haven M Construction offers residential and commercial construction services in Verona, NJ, serving Bergen, Essex, Morris, Union & Passaic Counties.',
    images: ['https://www.havenmconstruction.com/images/og-image.jpg'],
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
        "description": "Haven M Construction offers residential and commercial construction services, home additions, design-build, value engineering, boutique office construction, and veterinary hospital construction in Verona, NJ.",
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
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Construction",
              "serviceType": "Residential Construction",
              "areaServed": "Verona, New Jersey"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Construction",
              "serviceType": "Commercial Construction",
              "areaServed": "Verona, New Jersey"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Whole-Home Additions",
              "serviceType": "Whole-Home Additions",
              "areaServed": "Verona, New Jersey"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Design-Build Construction",
              "serviceType": "Design-Build Construction",
              "areaServed": "Verona, New Jersey"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Value Engineering",
              "serviceType": "Value Engineering",
              "areaServed": "Verona, New Jersey"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Boutique Office Construction",
              "serviceType": "Boutique Office Construction",
              "areaServed": "Verona, New Jersey"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Veterinary Hospital Construction",
              "serviceType": "Veterinary Hospital Construction",
              "areaServed": "Verona, New Jersey"
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/services#webpage",
        "url": "https://www.havenmconstruction.com/services",
        "name": "Construction Services in Verona, NJ | Residential & Commercial",
        "description": "Haven M Construction offers residential and commercial construction services in Verona, NJ, serving Bergen, Essex, Morris, Union and Passaic Counties.",
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
      <ServicesPage />
    </>
  );
}
