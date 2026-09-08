import { Metadata } from 'next';
import HomeAdditionsPassaicCountyPage from '../../../../pages/Services/Additions/PassaicCounty';

export const metadata: Metadata = {
  title: 'Home Additions & Remodeling Contractor in Passaic County, NJ',
  description: 'Planning a home addition or remodel in Passaic County, NJ? Our experienced contractors create thoughtfully designed spaces for your home, lifestyle, and needs.',
  keywords: 'home addition contractor Passaic County NJ, home remodeling contractor Passaic County NJ, home additions contractor Passaic County NJ, custom home additions Passaic County NJ, home addition builder Passaic County NJ, home remodeling Passaic County NJ, home renovation contractor Passaic County NJ, residential remodeling Passaic County NJ, custom home remodeling Passaic County NJ, house additions Passaic County NJ, room additions Passaic County NJ, home extension contractor Passaic County NJ, design-build contractor Passaic County NJ, second story addition Passaic County NJ, kitchen addition Passaic County NJ, primary suite addition Passaic County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/home-additions-passaic-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Home Additions & Remodeling Contractor in Passaic County, NJ',
    description: 'Planning a home addition or remodel in Passaic County, NJ? Our experienced contractors create thoughtfully designed spaces for your home, lifestyle, and needs.',
    url: 'https://www.havenmconstruction.com/home-additions-passaic-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/home-additions.webp',
        alt: 'Home additions and remodeling in Passaic County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Additions & Remodeling Contractor in Passaic County, NJ',
    description: 'Planning a home addition or remodel in Passaic County, NJ? Our experienced contractors create thoughtfully designed spaces for your home, lifestyle, and needs.',
    images: ['https://www.havenmconstruction.com/images/home-additions.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.havenmconstruction.com/home-additions-passaic-county-nj#webpage",
    "url": "https://www.havenmconstruction.com/home-additions-passaic-county-nj",
    "name": "Home Additions & Remodeling Contractor in Passaic County, NJ",
    "description": "Planning a home addition or remodel in Passaic County, NJ? Our experienced contractors create thoughtfully designed spaces that complement your home, lifestyle, and long-term needs.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.havenmconstruction.com/#website",
      "url": "https://www.havenmconstruction.com/",
      "name": "Haven M Construction"
    },
    "mainEntity": {
      "@type": "Service",
      "@id": "https://www.havenmconstruction.com/home-additions-passaic-county-nj#service",
      "name": "Home Additions & Remodeling Services in Passaic County, NJ",
      "serviceType": [
        "Home Additions",
        "Home Remodeling",
        "Custom Home Additions",
        "Home Renovation",
        "Home Extensions",
        "Design-Build Construction",
        "Second Story Additions",
        "Kitchen Additions",
        "Primary Suite Additions",
        "Residential Remodeling"
      ],
      "description": "Thoughtfully designed home additions and remodeling services that create more living space, improve functionality, and complement existing homes throughout Passaic County, New Jersey.",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Passaic County, New Jersey"
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
      <HomeAdditionsPassaicCountyPage />
    </>
  );
}
