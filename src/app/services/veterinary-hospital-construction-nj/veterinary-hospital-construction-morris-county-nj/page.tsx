import { Metadata } from 'next';
import VeterinaryHospitalMorrisCountyPage from '../../../../pages/Services/VeterinaryHospital/MorrisCounty';

export const metadata: Metadata = {
  title: 'Veterinary Hospital Construction Contractor in Morris County, NJ | Haven M Construction',
  description: 'Looking to build a veterinary hospital in Morris County, NJ? Haven M Construction delivers custom veterinary facility construction and design-build solutions.',
  keywords: 'veterinary hospital construction Morris County NJ, veterinary hospital construction New Jersey, veterinary clinic construction Morris County, veterinary construction company Morris County NJ, veterinary facility construction NJ, animal hospital construction Morris County, veterinary design build Morris County NJ, veterinary hospital contractor NJ, veterinary clinic contractor Morris County, animal hospital contractors New Jersey, veterinary hospital construction contractor Morris County NJ, veterinary hospital design build contractor Morris County, veterinary clinic construction company Morris County NJ, veterinary hospital general contractor New Jersey, custom veterinary hospital construction Morris County, veterinary medical facility construction NJ, new veterinary hospital construction Morris County NJ, veterinary practice construction contractor New Jersey, veterinary clinic renovation and construction Morris County, animal hospital design and construction Morris County NJ, veterinary facility design, veterinary practice construction, animal hospital design, veterinary medical construction, animal healthcare facilities, veterinary exam rooms, veterinary surgical suites, diagnostic imaging areas, veterinary treatment rooms, recovery areas, kennel areas, veterinary reception areas, modern veterinary facilities, veterinary practice expansion, healthcare construction, commercial construction, design-build construction, construction management, New Jersey general contractor, Morris County construction',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Veterinary Hospital Construction Contractor in Morris County, NJ | Haven M Construction',
    description: 'Looking to build a veterinary hospital in Morris County, NJ? Haven M Construction delivers custom veterinary facility construction and design-build solutions.',
    url: 'https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/veterinary-hospital-construction-morris-county-nj.jpg',
        alt: 'Veterinary hospital construction contractor in Morris County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veterinary Hospital Construction Contractor in Morris County, NJ | Haven M Construction',
    description: 'Looking to build a veterinary hospital in Morris County, NJ? Haven M Construction delivers custom veterinary facility construction and design-build solutions.',
    images: ['https://www.havenmconstruction.com/images/veterinary-hospital-construction-morris-county-nj.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj",
        "name": "Veterinary Hospital Construction Contractor in Morris County, NJ | Haven M Construction",
        "description": "Looking to build a veterinary hospital in Morris County, NJ? Haven M Construction delivers custom veterinary facility construction and design-build solutions for modern animal healthcare practices.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj#breadcrumb"
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
          "name": "Morris County",
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
          "Veterinary medical construction",
          "Veterinary hospital renovation",
          "Veterinary practice expansion",
          "Healthcare construction",
          "Commercial construction",
          "Construction management"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj#service",
        "name": "Veterinary Hospital Construction in Morris County, NJ",
        "serviceType": [
          "Veterinary Hospital Construction",
          "Veterinary Facility Design-Build",
          "Veterinary Clinic Construction",
          "Animal Hospital Construction",
          "Veterinary Practice Construction",
          "Veterinary Facility Renovation"
        ],
        "description": "Custom veterinary hospital construction, veterinary clinic construction and design-build services for modern animal healthcare facilities throughout Morris County, New Jersey.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#general-contractor"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County, New Jersey"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Veterinary Construction Services",
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
            }
          ]
        },
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj"
      },
      {
        "@type": "AdministrativeArea",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj#morris-county",
        "name": "Morris County",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj#breadcrumb",
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
            "name": "Morris County, NJ",
            "item": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj#faq",
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-morris-county-nj",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who builds veterinary hospitals in Morris County NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary hospital construction, veterinary clinic construction and design-build services for animal healthcare facilities throughout Morris County, New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "Who is a veterinary hospital construction contractor in Morris County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary hospital construction and design-build services for veterinary practices planning new facilities, expansions or renovations in Morris County."
            }
          },
          {
            "@type": "Question",
            "name": "What construction company builds veterinary clinics in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides construction and design-build services for veterinary clinics, veterinary hospitals and animal healthcare facilities throughout New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "Who can build a veterinary hospital in Morris County NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction offers custom veterinary hospital construction and design-build solutions for modern veterinary practices in Morris County, NJ."
            }
          },
          {
            "@type": "Question",
            "name": "What company specializes in veterinary facility construction in NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides specialized construction and design-build services for veterinary facilities, animal hospitals and veterinary practices in New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find a veterinary hospital contractor near Morris County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary practices in Morris County can work with Haven M Construction for veterinary hospital construction, clinic construction, facility expansion and renovation projects."
            }
          },
          {
            "@type": "Question",
            "name": "Who provides veterinary clinic design-build services in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary clinic design-build services in New Jersey, coordinating construction requirements for modern animal healthcare facilities."
            }
          },
          {
            "@type": "Question",
            "name": "What should I consider when building a veterinary hospital in NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key considerations include veterinary workflow, exam rooms, treatment areas, surgical suites, diagnostic imaging areas, recovery spaces, kennel areas, reception, staff areas, equipment infrastructure, permitting, budget and future expansion."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to build a veterinary hospital in Morris County NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary hospital construction costs vary according to the project's size, site conditions, design, building systems, finishes, equipment requirements and overall scope. A project-specific assessment is needed for an accurate budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long does veterinary hospital construction take in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The construction timeline depends on facility size, project complexity, design coordination, permitting, site conditions, materials and specialized veterinary requirements. Each project requires an individual construction schedule."
            }
          },
          {
            "@type": "Question",
            "name": "What does a veterinary hospital construction company do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A veterinary hospital construction company helps coordinate the construction of animal healthcare facilities, including space planning, building systems, specialized areas, finishes, construction management and project completion."
            }
          },
          {
            "@type": "Question",
            "name": "Who can handle the construction of a new animal hospital in Morris County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides new animal hospital construction and veterinary facility design-build services for practices throughout Morris County, New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "What contractor can build a modern veterinary clinic in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides custom construction and design-build services for modern veterinary clinics and animal healthcare facilities in New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "How do I choose a veterinary construction contractor in NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consider the contractor's relevant construction experience, understanding of veterinary facility requirements, design-build capabilities, communication, project management, scheduling, budget control and ability to coordinate specialized construction needs."
            }
          },
          {
            "@type": "Question",
            "name": "Which construction companies specialize in animal hospital construction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides animal hospital construction, veterinary facility construction and design-build services for veterinary practices in New Jersey, including Morris County."
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
      <VeterinaryHospitalMorrisCountyPage />
    </>
  );
}
