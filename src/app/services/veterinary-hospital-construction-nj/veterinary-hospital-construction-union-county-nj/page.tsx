import { Metadata } from 'next';
import VeterinaryHospitalUnionCountyPage from '../../../../pages/Services/VeterinaryHospital/UnionCounty';

export const metadata: Metadata = {
  title: 'Professional Veterinary Hospital Construction Services in Union County, NJ | Haven M Construction',
  description: 'Planning a veterinary hospital in Union County, NJ? Haven M Construction provides custom veterinary facility construction and design-build solutions.',
  keywords: 'veterinary hospital construction Union County NJ, veterinary hospital construction New Jersey, veterinary clinic construction Union County, veterinary construction company Union County NJ, veterinary facility construction NJ, animal hospital construction Union County, veterinary design build Union County NJ, veterinary hospital contractor NJ, veterinary clinic contractor Union County, animal hospital contractors New Jersey, veterinary hospital construction contractor Union County NJ, veterinary hospital design build contractor Union County, veterinary clinic construction company Union County NJ, veterinary hospital general contractor New Jersey, custom veterinary hospital construction Union County, veterinary medical facility construction NJ, new veterinary hospital construction Union County NJ, veterinary practice construction contractor New Jersey, veterinary clinic renovation and construction Union County, animal hospital design and construction Union County NJ, veterinary facility contractor Union County NJ, veterinary practice build-out contractor New Jersey',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Professional Veterinary Hospital Construction Services in Union County, NJ | Haven M Construction',
    description: 'Planning a veterinary hospital in Union County, NJ? Haven M Construction provides custom veterinary facility construction and design-build solutions.',
    url: 'https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/veterinary-hospital-construction-union-county-nj.jpg',
        alt: 'Professional veterinary hospital construction services in Union County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Veterinary Hospital Construction Services in Union County, NJ | Haven M Construction',
    description: 'Planning a veterinary hospital in Union County, NJ? Haven M Construction provides custom veterinary facility construction and design-build solutions.',
    images: ['https://www.havenmconstruction.com/images/veterinary-hospital-construction-union-county-nj.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj",
        "name": "Professional Veterinary Hospital Construction Services in Union County, NJ | Haven M Construction",
        "description": "Planning a veterinary hospital in Union County, NJ? Haven M Construction provides custom veterinary facility construction and design-build solutions for modern animal healthcare practices.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj#breadcrumb"
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
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides commercial construction, design-build, construction management and renovation services in New Jersey."
      },
      {
        "@type": "GeneralContractor",
        "@id": "https://www.havenmconstruction.com/#general-contractor",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "parentOrganization": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Union County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        "knowsAbout": [
          "Veterinary hospital construction",
          "Veterinary clinic construction",
          "Veterinary facility construction",
          "Animal hospital construction",
          "Veterinary design-build",
          "Veterinary practice construction",
          "Veterinary medical facility construction",
          "Veterinary hospital renovation",
          "Veterinary clinic renovation",
          "Veterinary practice build-out",
          "Turnkey veterinary hospital construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj#service",
        "name": "Veterinary Hospital Construction in Union County, NJ",
        "serviceType": [
          "Veterinary Hospital Construction",
          "Veterinary Facility Design-Build",
          "Veterinary Clinic Construction",
          "Animal Hospital Construction",
          "Veterinary Practice Construction",
          "Veterinary Facility Renovation",
          "Veterinary Practice Build-Out"
        ],
        "description": "Custom veterinary hospital construction, veterinary clinic construction and design-build solutions for modern animal healthcare practices throughout Union County, New Jersey.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#general-contractor"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Union County, New Jersey"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Veterinary Construction Services in Union County",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "New Veterinary Hospital Construction"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Veterinary Clinic Construction"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Veterinary Facility Design-Build"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Veterinary Hospital Renovation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Veterinary Practice Build-Out"
              }
            }
          ]
        },
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj"
      },
      {
        "@type": "AdministrativeArea",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj#union-county",
        "name": "Union County",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj#breadcrumb",
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
            "name": "Veterinary Hospital Construction",
            "item": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Union County, NJ",
            "item": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj#faq",
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-union-county-nj",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who builds veterinary hospitals in Union County NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary hospital construction, veterinary clinic construction and design-build services for animal healthcare facilities throughout Union County, New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "Who is a veterinary hospital construction contractor in Union County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary hospital construction and design-build solutions for veterinary practices planning new facilities, expansions and renovations in Union County."
            }
          },
          {
            "@type": "Question",
            "name": "What construction company builds veterinary clinics in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides construction and design-build services for veterinary clinics, animal hospitals and veterinary healthcare facilities throughout New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "Who can build a veterinary hospital in Union County NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction offers custom veterinary hospital construction and design-build services for modern animal healthcare practices in Union County, NJ."
            }
          },
          {
            "@type": "Question",
            "name": "What company specializes in veterinary facility construction in NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary facility construction, design-build and renovation services for animal healthcare practices throughout New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find a veterinary hospital contractor near Union County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary practices in Union County can work with Haven M Construction for veterinary hospital construction, clinic construction, facility expansion, renovation and build-out projects."
            }
          },
          {
            "@type": "Question",
            "name": "Who provides veterinary clinic design-build services in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary clinic design-build services in New Jersey, coordinating construction requirements for modern veterinary facilities."
            }
          },
          {
            "@type": "Question",
            "name": "What should I consider when building a veterinary hospital in Union County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Important considerations include veterinary workflow, examination rooms, treatment areas, surgical suites, diagnostic spaces, recovery areas, kennel areas, reception, staff spaces, equipment infrastructure, permitting, budget and future expansion."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to build a veterinary hospital in Union County NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary hospital construction costs vary according to facility size, site conditions, design, construction scope, building systems, finishes, equipment requirements and project complexity. A project-specific evaluation is needed for an accurate budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long does veterinary hospital construction take in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The construction timeline depends on project size, design complexity, permitting, site conditions, materials, specialized building requirements and construction scope. Each veterinary hospital requires an individual project schedule." 
            }
          },
          {
            "@type": "Question",
            "name": "Who can handle construction of a new animal hospital in Union County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides new animal hospital construction and veterinary facility design-build services for veterinary practices throughout Union County, New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "What contractor can build a modern veterinary clinic in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides custom construction and design-build solutions for modern veterinary clinics and animal healthcare facilities throughout New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "How do I choose a veterinary construction contractor in NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consider relevant construction experience, understanding of veterinary facility requirements, design-build capabilities, project communication, scheduling, budget management and the ability to coordinate specialized construction needs."
            }
          },
          {
            "@type": "Question",
            "name": "Which construction companies specialize in animal hospital construction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides animal hospital construction, veterinary facility construction and design-build services for veterinary practices throughout New Jersey, including Union County."
            }
          },
          {
            "@type": "Question",
            "name": "Who provides turnkey veterinary hospital construction in Union County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides coordinated veterinary facility construction and design-build services for practices planning new or expanded veterinary hospitals in Union County, NJ."
            }
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
      <VeterinaryHospitalUnionCountyPage />
    </>
  );
}
