import ShowcasePage from '../../components/Showcase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Project Showcase in NJ | Haven M Construction',
  description: 'Explore residential and commercial construction projects by Haven M Construction in Verona, NJ, serving Bergen, Essex, Morris, Union & Passaic Counties.',
  keywords: 'best construction projects in New Jersey, construction project showcase in NJ, residential construction projects near Verona NJ, commercial construction projects in New Jersey, what construction projects does Haven M Construction complete, examples of home additions in New Jersey, whole-home addition projects in NJ, design-build construction projects near me, commercial office construction projects in NJ, boutique office construction examples, veterinary hospital construction projects in NJ, residential and commercial construction contractor in Verona NJ, construction company serving Bergen County NJ, construction company serving Essex County NJ, construction company serving Morris County NJ, construction company serving Union County NJ, construction company serving Passaic County NJ, construction projects near me, trusted construction contractor in New Jersey, custom construction projects in NJ, home renovation and addition projects NJ, commercial building projects in NJ, design-build contractor near Verona NJ, construction portfolio New Jersey',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/showcase',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Construction Project Showcase in NJ | Haven M Construction',
    description: 'Explore residential and commercial construction projects by Haven M Construction in Verona, NJ, serving Bergen, Essex, Morris, Union & Passaic Counties.',
    url: 'https://www.havenmconstruction.com/showcase',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.webp',
        alt: 'Haven M Construction construction project showcase in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Project Showcase in NJ | Haven M Construction',
    description: 'Explore residential and commercial construction projects by Haven M Construction in Verona, NJ, serving Bergen, Essex, Morris, Union & Passaic Counties.',
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
        "description": "Haven M Construction provides residential and commercial construction, home additions, design-build, boutique office construction, value engineering, and veterinary hospital construction in Verona, NJ and surrounding counties.",
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
        "@id": "https://www.havenmconstruction.com/showcase#webpage",
        "url": "https://www.havenmconstruction.com/showcase",
        "name": "Construction Project Showcase in NJ | Haven M Construction",
        "description": "Explore residential and commercial construction projects by Haven M Construction in Verona, NJ, serving Bergen, Essex, Morris, Union and Passaic Counties.",
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
      <ShowcasePage />
    </>
  );
}
