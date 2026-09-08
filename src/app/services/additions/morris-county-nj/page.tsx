import { Metadata } from 'next';
import HomeAdditionsMorrisCountyPage from '../../../../pages/Services/Additions/MorrisCounty';

export const metadata: Metadata = {
  title: 'Home Addition Contractor & Design-Build Experts in Morris County, NJ',
  description: 'Looking for a home addition contractor in Morris County, NJ? Our design-build experts create custom additions that expand space, enhance function, and complement your home.',
  keywords: 'home addition contractor Morris County NJ, home additions Morris County NJ, home addition contractors Morris County NJ, home addition design Morris County NJ, design-build contractor Morris County NJ, custom home additions Morris County NJ, home addition builder Morris County NJ, home extension contractor Morris County NJ, house additions Morris County NJ, room additions Morris County NJ, home remodeling contractor Morris County NJ, residential remodeling Morris County NJ, home renovation Morris County NJ, second story additions Morris County NJ, primary suite additions Morris County NJ, family room additions Morris County NJ, kitchen additions Morris County NJ, garage additions Morris County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/home-additions-morris-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Home Addition Contractor & Design-Build Experts in Morris County, NJ',
    description: 'Looking for a home addition contractor in Morris County, NJ? Our design-build experts create custom additions that expand space, enhance function, and complement your home.',
    url: 'https://www.havenmconstruction.com/home-additions-morris-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/home-additions.webp',
        alt: 'Custom home additions and design-build services in Morris County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Addition Contractor & Design-Build Experts in Morris County, NJ',
    description: 'Looking for a home addition contractor in Morris County, NJ? Our design-build experts create custom additions that expand space, enhance function, and complement your home.',
    images: ['https://www.havenmconstruction.com/images/home-additions.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.havenmconstruction.com/home-additions-morris-county-nj#webpage",
    "url": "https://www.havenmconstruction.com/home-additions-morris-county-nj",
    "name": "Home Addition Contractor & Design-Build Experts in Morris County, NJ",
    "description": "Looking for a home addition contractor in Morris County, NJ? Our design-build experts create custom home additions that seamlessly expand your space, enhance functionality, and complement your home.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.havenmconstruction.com/#website",
      "url": "https://www.havenmconstruction.com/",
      "name": "Haven M Construction"
    },
    "mainEntity": {
      "@type": "Service",
      "@id": "https://www.havenmconstruction.com/home-additions-morris-county-nj#service",
      "name": "Home Addition Design-Build Services in Morris County, NJ",
      "serviceType": [
        "Home Additions",
        "Home Addition Design",
        "Design-Build Construction",
        "Home Extensions",
        "Residential Remodeling",
        "Second Story Additions",
        "Primary Suite Additions",
        "Family Room Additions",
        "Kitchen Additions",
        "Garage Additions"
      ],
      "description": "Custom home addition and design-build services that expand living space, improve functionality, and complement existing homes throughout Morris County, New Jersey.",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Morris County, New Jersey"
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
      <HomeAdditionsMorrisCountyPage />
    </>
  );
}
