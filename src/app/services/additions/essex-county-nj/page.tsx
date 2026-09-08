import { Metadata } from 'next';
import HomeAdditionsEssexCountyPage from '../../../../pages/Services/Additions/EssexCounty';

export const metadata: Metadata = {
  title: 'Home Addition & Extension Contractors in Essex County, NJ',
  description: 'Looking for a home addition contractor in Essex County, NJ? Create more space with custom home additions and extensions designed around your home, needs, and lifestyle.',
  keywords: 'home addition contractor Essex County NJ, home additions Essex County NJ, home extension contractors Essex County NJ, home remodeling contractor Essex County NJ, custom home additions Essex County NJ, house additions Essex County NJ, room additions Essex County NJ, residential remodeling Essex County NJ, home renovation Essex County NJ, custom home extensions Essex County NJ, home addition design Essex County NJ, home improvement contractor Essex County NJ, best home addition contractors Essex County NJ, home addition cost Essex County NJ, home addition planning Essex County NJ, home addition permits Essex County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/home-additions-essex-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Home Addition & Extension Contractors in Essex County, NJ',
    description: 'Looking for a home addition contractor in Essex County, NJ? Create more space with custom home additions and extensions designed around your home, needs, and lifestyle.',
    url: 'https://www.havenmconstruction.com/home-additions-essex-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/home-additions.webp',
        alt: 'Home additions and extensions in Essex County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Addition & Extension Contractors in Essex County, NJ',
    description: 'Looking for a home addition contractor in Essex County, NJ? Create more space with custom home additions and extensions designed around your home, needs, and lifestyle.',
    images: ['https://www.havenmconstruction.com/images/home-additions.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.havenmconstruction.com/home-additions-essex-county-nj#webpage",
    "url": "https://www.havenmconstruction.com/home-additions-essex-county-nj",
    "name": "Home Addition & Extension Contractors in Essex County, NJ",
    "description": "Looking for a home addition contractor in Essex County, NJ? Create more space with custom home additions and extensions designed around your home, needs, and lifestyle.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.havenmconstruction.com/#website",
      "url": "https://www.havenmconstruction.com/",
      "name": "Haven M Construction"
    },
    "mainEntity": {
      "@type": "Service",
      "@id": "https://www.havenmconstruction.com/home-additions-essex-county-nj#service",
      "name": "Home Addition & Extension Services in Essex County, NJ",
      "serviceType": [
        "Home Additions",
        "Home Extensions",
        "Custom Home Additions",
        "Home Addition Design",
        "Residential Remodeling"
      ],
      "description": "Custom home additions and extensions designed to create additional living space while complementing the existing home, needs, and lifestyle of homeowners in Essex County, New Jersey.",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Essex County, New Jersey"
      }
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
      <HomeAdditionsEssexCountyPage />
    </>
  );
}
