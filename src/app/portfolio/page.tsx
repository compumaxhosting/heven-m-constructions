import PortfolioPage from '../../components/Portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Portfolio in Verona, NJ | Haven M Construction',
  description: "Explore Haven M Construction's portfolio of residential and commercial projects, including additions, design-build, offices and specialty construction in NJ.",
  keywords: 'construction portfolio Verona NJ, construction projects Verona NJ, residential construction portfolio NJ, commercial construction portfolio NJ, construction company portfolio NJ, home addition projects NJ, whole-home addition projects NJ, design-build projects NJ, boutique office projects NJ, veterinary hospital construction projects NJ, construction contractor Verona NJ, residential construction NJ, commercial construction NJ, general contractor Verona NJ, construction projects Bergen County NJ, construction projects Essex County NJ, construction projects Morris County NJ, construction projects Union County NJ, construction projects Passaic County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/portfolio',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Construction Portfolio in Verona, NJ | Haven M Construction',
    description: "Explore Haven M Construction's portfolio of residential and commercial projects, including additions, design-build, offices and specialty construction in NJ.",
    url: 'https://www.havenmconstruction.com/portfolio',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.webp',
        alt: 'Haven M Construction residential and commercial construction portfolio in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Portfolio in Verona, NJ | Haven M Construction',
    description: "Explore Haven M Construction's portfolio of residential and commercial projects, including additions, design-build, offices and specialty construction in NJ.",
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
        "description": "Haven M Construction provides residential and commercial construction, additions, design-build, boutique office construction, value engineering, and veterinary hospital construction in Verona, NJ and surrounding counties.",
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
        "@type": "CollectionPage",
        "@id": "https://www.havenmconstruction.com/portfolio#webpage",
        "url": "https://www.havenmconstruction.com/portfolio",
        "name": "Construction Portfolio in Verona, NJ | Haven M Construction",
        "description": "Explore Haven M Construction's portfolio of residential and commercial projects, including additions, design-build, boutique offices, and specialty construction in New Jersey.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "publisher": {
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
      <PortfolioPage />
    </>
  );
}
