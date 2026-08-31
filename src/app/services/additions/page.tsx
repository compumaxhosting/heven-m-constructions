import { Metadata } from 'next';
import AdditionsPage from '../../../pages/Services/Additions';

export const metadata: Metadata = {
  title: 'Haven M Construction | Custom Home Additions in Verona, NJ',
  description: 'Expert home additions in Verona, NJ by Haven M Construction. Serving Bergen, Essex, Morris, Union & Passaic counties. Get a custom estimate.',
  keywords: 'home additions Verona NJ, home addition contractor Verona New Jersey, custom home additions Verona NJ, home remodeling and additions Verona NJ, house addition contractor near me, best home addition contractor in Verona NJ, home extension contractor New Jersey, second story additions Verona NJ, room additions Verona NJ, family room addition contractor NJ, kitchen addition contractor Verona NJ, bedroom addition contractor Verona NJ, home addition design and build NJ, residential construction Verona NJ, Haven M Construction home additions, home additions Bergen County NJ, home additions Essex County NJ, home additions Morris County NJ, home additions Union County NJ, home additions Passaic County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/services/additions',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Haven M Construction | Custom Home Additions in Verona, NJ',
    description: 'Expert home additions in Verona, NJ by Haven M Construction. Serving Bergen, Essex, Morris, Union & Passaic counties. Get a custom estimate.',
    url: 'https://www.havenmconstruction.com/services/additions',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/home-additions.jpg',
        alt: 'Custom home additions by Haven M Construction in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haven M Construction | Custom Home Additions in Verona, NJ',
    description: 'Expert home additions in Verona, NJ by Haven M Construction. Serving Bergen, Essex, Morris, Union & Passaic counties. Get a custom estimate.',
    images: ['https://www.havenmconstruction.com/images/home-additions.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.havenmconstruction.com/services/additions#webpage",
    "url": "https://www.havenmconstruction.com/services/additions",
    "name": "Haven M Construction | Custom Home Additions in Verona, NJ",
    "description": "Expert home additions in Verona, NJ by Haven M Construction. Serving Bergen, Essex, Morris, Union & Passaic counties. Get a custom estimate.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.havenmconstruction.com/#website",
      "url": "https://www.havenmconstruction.com/",
      "name": "Haven M Construction"
    },
    "about": {
      "@type": "Service",
      "@id": "https://www.havenmconstruction.com/services/additions#service",
      "name": "Custom Home Additions",
      "serviceType": "Home Addition Construction",
      "description": "Custom home addition design and construction services in Verona, NJ and surrounding New Jersey counties.",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Verona, New Jersey"
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
        },
        {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey"
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.havenmconstruction.com/#organization",
      "name": "Haven M Construction",
      "url": "https://www.havenmconstruction.com/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AdditionsPage />
    </>
  );
}
