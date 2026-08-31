import ContactPage from '../../components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact a Construction Contractor in Verona, NJ | Haven M',
  description: 'Contact Haven M Construction in Verona, NJ for residential and commercial construction, additions, design-build, and project inquiries across five NJ counties.',
  keywords: 'how to contact a construction contractor in Verona NJ, construction contractor near Verona New Jersey, how can I get a construction quote in NJ, request a construction consultation in Verona NJ, where can I find a construction company in New Jersey, residential construction contractor near me, commercial construction contractor near me, home addition contractor in Verona NJ, whole-home addition contractor in NJ, design-build contractor near Verona NJ, value engineering contractor in NJ, boutique office construction contractor NJ, veterinary hospital construction contractor NJ, construction company serving Bergen County NJ, construction company serving Essex County NJ, construction company serving Morris County NJ, construction company serving Union County NJ, construction company serving Passaic County NJ, contact a general contractor in New Jersey, get a construction project estimate in NJ, construction consultation near Verona NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/contact',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Contact a Construction Contractor in Verona, NJ | Haven M',
    description: 'Contact Haven M Construction in Verona, NJ for residential and commercial construction, additions, design-build, and project inquiries across five NJ counties.',
    url: 'https://www.havenmconstruction.com/contact',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.jpg',
        alt: 'Contact Haven M Construction in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact a Construction Contractor in Verona, NJ | Haven M',
    description: 'Contact Haven M Construction in Verona, NJ for residential and commercial construction, additions, design-build, and project inquiries across five NJ counties.',
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
        "description": "Haven M Construction provides residential and commercial construction, home additions, design-build, value engineering, boutique office construction, and veterinary hospital construction in Verona, NJ and surrounding counties.",
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
        "@type": "ContactPage",
        "@id": "https://www.havenmconstruction.com/contact#webpage",
        "url": "https://www.havenmconstruction.com/contact",
        "name": "Contact a Construction Contractor in Verona, NJ | Haven M",
        "description": "Contact Haven M Construction in Verona, NJ for residential and commercial construction, additions, design-build, and project inquiries across five NJ counties.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/#organization"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactPage />
    </>
  );
}
