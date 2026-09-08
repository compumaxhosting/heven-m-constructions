import { Metadata } from 'next';
import HomeAdditionsBergenCountyPage from '../../../../pages/Services/Additions/BergenCounty';

export const metadata: Metadata = {
  title: 'Home Additions & Remodeling Contractor in Bergen County, NJ',
  description: 'Plan a seamless home addition or remodel with an experienced Bergen County, NJ contractor. Create more space, improve function, and complement your home.',
  keywords: 'home addition contractor Bergen County NJ, home remodeling contractor Bergen County NJ, custom home additions Bergen County NJ, home additions contractor Bergen County, house additions Bergen County NJ, home renovation Bergen County NJ, residential remodeling Bergen County NJ, custom home remodeling Bergen County NJ, home addition design Bergen County NJ, second story additions Bergen County NJ, room additions Bergen County NJ, seamless home additions NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/home-additions-bergen-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Home Additions & Remodeling Contractor in Bergen County, NJ',
    description: 'Plan a seamless home addition or remodel with an experienced Bergen County, NJ contractor. Create more space, improve function, and complement your home.',
    url: 'https://www.havenmconstruction.com/home-additions-bergen-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/home-additions.webp',
        alt: 'Home additions and remodeling in Bergen County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Additions & Remodeling Contractor in Bergen County, NJ',
    description: 'Plan a seamless home addition or remodel with an experienced Bergen County, NJ contractor. Create more space, improve function, and complement your home.',
    images: ['https://www.havenmconstruction.com/images/home-additions.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.havenmconstruction.com/home-additions-bergen-county-nj#webpage",
    "url": "https://www.havenmconstruction.com/home-additions-bergen-county-nj",
    "name": "Home Additions & Remodeling Contractor in Bergen County, NJ",
    "description": "Plan a seamless home addition or remodel with an experienced Bergen County, NJ contractor. Create more space, improve function, and complement your existing home.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.havenmconstruction.com/#website",
      "url": "https://www.havenmconstruction.com/",
      "name": "Haven M Construction"
    },
    "mainEntity": {
      "@type": "Service",
      "@id": "https://www.havenmconstruction.com/home-additions-bergen-county-nj#service",
      "name": "Home Additions & Remodeling in Bergen County, NJ",
      "serviceType": [
        "Home Additions",
        "Home Remodeling",
        "Residential Remodeling",
        "Custom Home Additions",
        "Home Addition Design"
      ],
      "description": "Custom home additions and remodeling services designed to create more living space, improve functionality, and complement the existing style of homes in Bergen County, New Jersey.",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Bergen County, New Jersey"
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
      <HomeAdditionsBergenCountyPage />
    </>
  );
}
