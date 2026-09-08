import { Metadata } from 'next';
import HomeAdditionsUnionCountyPage from '../../../../pages/Services/Additions/UnionCounty';

export const metadata: Metadata = {
  title: 'Home Additions & Remodeling Contractor in Union County, NJ',
  description: 'Planning a home addition or remodel in Union County, NJ? Our experienced contractors create custom spaces that complement your home, improve function, and fit your lifestyle.',
  keywords: 'home additions Union County NJ, home addition contractor Union County NJ, home additions contractor Union County NJ, home remodeling contractor Union County NJ, custom home additions Union County NJ, home addition builder Union County NJ, home remodeling Union County NJ, home renovation contractor Union County NJ, residential remodeling Union County NJ, custom home remodeling Union County NJ, house additions Union County NJ, room additions Union County NJ, home extension contractor Union County NJ, design-build contractor Union County NJ, second story addition Union County NJ, kitchen addition Union County NJ, primary suite addition Union County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/home-additions-union-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Home Additions & Remodeling Contractor in Union County, NJ',
    description: 'Planning a home addition or remodel in Union County, NJ? Our experienced contractors create custom spaces that complement your home, improve function, and fit your lifestyle.',
    url: 'https://www.havenmconstruction.com/home-additions-union-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/home-additions.webp',
        alt: 'Home additions and remodeling in Union County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Additions & Remodeling Contractor in Union County, NJ',
    description: 'Planning a home addition or remodel in Union County, NJ? Our experienced contractors create custom spaces that complement your home, improve function, and fit your lifestyle.',
    images: ['https://www.havenmconstruction.com/images/home-additions.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.havenmconstruction.com/home-additions-union-county-nj#webpage",
    "url": "https://www.havenmconstruction.com/home-additions-union-county-nj",
    "name": "Home Additions & Remodeling Contractor in Union County, NJ",
    "description": "Planning a home addition or remodel in Union County, NJ? Our experienced contractors create custom spaces designed to complement your home, improve functionality, and fit your lifestyle.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.havenmconstruction.com/#website",
      "url": "https://www.havenmconstruction.com/",
      "name": "Haven M Construction"
    },
    "mainEntity": {
      "@type": "Service",
      "@id": "https://www.havenmconstruction.com/home-additions-union-county-nj#service",
      "name": "Home Additions & Remodeling Services in Union County, NJ",
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
      "description": "Custom home additions and remodeling services designed to create functional living spaces that complement existing homes and fit the lifestyle of homeowners throughout Union County, New Jersey.",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Union County, New Jersey"
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
      <HomeAdditionsUnionCountyPage />
    </>
  );
}
