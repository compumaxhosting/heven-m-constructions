import { Metadata } from 'next';
import DesignBuildUnionCountyPage from '../../../../pages/Services/DesignBuild/UnionCounty';

export const metadata: Metadata = {
  title: 'Design-Build Construction Services in Union County, New Jersey',
  description: 'Explore custom design-build construction in Union County, NJ, with expert planning, design, and construction services tailored to your vision.',
  keywords: 'Who are the best design-build contractors in Union County, NJ?, What is a design-build contractor?, How does the design-build process work in Union County, NJ?, How much does design-build construction cost in Union County, NJ?, What does a design-build construction company handle?, Can a design-build company handle both design and construction?, What are the benefits of choosing a design-build contractor?, Is design-build better than hiring an architect and general contractor separately?, How long does a design-build project take in Union County, NJ?, How do I choose a design-build contractor in Union County, NJ?, Who can design and build a custom home in Union County, NJ?, What is included in a custom design-build project?, Can design-build contractors help with home additions and renovations?, How do I get started with a design-build project in Union County, NJ?, What should I expect during the design-build construction process?, Are there local design-build contractors near me in Union County, NJ?, What is the difference between design-build and traditional construction?, How can I plan a custom home construction project in Union County, NJ?, What questions should I ask a design-build contractor before hiring them?, Where can I find professional custom home design and construction in Union County, NJ?',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/design-build-union-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Design-Build Construction Services in Union County, New Jersey',
    description: 'Explore custom design-build construction in Union County, NJ, with expert planning, design, and construction services tailored to your vision.',
    url: 'https://www.havenmconstruction.com/design-build-union-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/wp-content/uploads/og-image.webp',
        alt: 'Haven M Construction design-build construction services in Union County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design-Build Construction Services in Union County, New Jersey',
    description: 'Explore custom design-build construction in Union County, NJ, with expert planning, design, and construction services tailored to your vision.',
    images: ['https://www.havenmconstruction.com/wp-content/uploads/og-image.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/design-build-union-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/design-build-union-county-nj",
        "name": "Design-Build Construction Services in Union County, New Jersey",
        "description": "Explore custom design-build construction in Union County, NJ, with expert planning, design, and construction services tailored to your vision.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/design-build-union-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/design-build-union-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/design-build-union-county-nj#service",
        "name": "Design-Build Construction Services in Union County, New Jersey",
        "serviceType": "Design-Build Construction",
        "description": "Custom design-build construction services in Union County, NJ, integrating planning, design, and construction into a coordinated process tailored to each project.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#business"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Union County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
            "containedInPlace": {
              "@type": "Country",
              "name": "United States"
            }
          }
        },
        "url": "https://www.havenmconstruction.com/design-build-union-county-nj"
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.havenmconstruction.com/#business",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides design-build and construction services.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Union County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
            "containedInPlace": {
              "@type": "Country",
              "name": "United States"
            }
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.havenmconstruction.com/#website",
        "url": "https://www.havenmconstruction.com/",
        "name": "Haven M Construction",
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#business"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/design-build-union-county-nj#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.havenmconstruction.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Design-Build Construction",
            "item": "https://www.havenmconstruction.com/design-build-union-county-nj"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Union County, New Jersey"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DesignBuildUnionCountyPage />
    </>
  );
}
