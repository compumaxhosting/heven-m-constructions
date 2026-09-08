import { Metadata } from 'next';
import VeterinaryHospitalPassaicCountyPage from '../../../../pages/Services/VeterinaryHospital/PassaicCounty';

export const metadata: Metadata = {
  title: 'Expert Veterinary Hospital Construction Contractor in Passaic County, NJ | Haven M Construction',
  description: 'Planning a veterinary hospital in Passaic County, NJ? Haven M Construction provides custom veterinary facility construction and design-build solutions.',
  keywords: 'veterinary hospital construction Passaic County NJ, veterinary hospital construction New Jersey, veterinary clinic construction Passaic County, veterinary construction company Passaic County NJ, veterinary facility construction NJ, animal hospital construction Passaic County, veterinary design build Passaic County NJ, veterinary hospital contractor NJ, veterinary clinic contractor Passaic County, animal hospital contractors New Jersey, veterinary hospital construction contractor Passaic County NJ, veterinary hospital design build contractor Passaic County, veterinary clinic construction company Passaic County NJ, veterinary hospital general contractor New Jersey, custom veterinary hospital construction Passaic County, veterinary medical facility construction NJ, new veterinary hospital construction Passaic County NJ, veterinary practice construction contractor New Jersey, veterinary clinic renovation and construction Passaic County, animal hospital design and construction Passaic County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Expert Veterinary Hospital Construction Contractor in Passaic County, NJ | Haven M Construction',
    description: 'Planning a veterinary hospital in Passaic County, NJ? Haven M Construction provides custom veterinary facility construction and design-build solutions.',
    url: 'https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/veterinary-hospital-construction-passaic-county-nj.webp',
        alt: 'Expert veterinary hospital construction contractor in Passaic County, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Veterinary Hospital Construction Contractor in Passaic County, NJ | Haven M Construction',
    description: 'Planning a veterinary hospital in Passaic County, NJ? Haven M Construction provides custom veterinary facility construction and design-build solutions.',
    images: ['https://www.havenmconstruction.com/images/veterinary-hospital-construction-passaic-county-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj",
        "name": "Expert Veterinary Hospital Construction Contractor in Passaic County, NJ | Haven M Construction",
        "description": "Planning a veterinary hospital in Passaic County, NJ? Haven M Construction provides custom veterinary facility construction and design-build solutions for modern animal healthcare practices.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj#breadcrumb"
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
          "name": "Passaic County",
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
          "Animal hospital design and construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj#service",
        "name": "Veterinary Hospital Construction in Passaic County, NJ",
        "serviceType": [
          "Veterinary Hospital Construction",
          "Veterinary Facility Design-Build",
          "Veterinary Clinic Construction",
          "Animal Hospital Construction",
          "Veterinary Practice Construction",
          "Veterinary Facility Renovation"
        ],
        "description": "Custom veterinary hospital construction, veterinary clinic construction and design-build solutions for modern animal healthcare practices throughout Passaic County, New Jersey.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#general-contractor"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Veterinary Construction Services in Passaic County",
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
                "name": "Animal Hospital Construction"
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
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj"
      },
      {
        "@type": "AdministrativeArea",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj#passaic-county",
        "name": "Passaic County",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj#breadcrumb",
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
            "name": "Passaic County, NJ",
            "item": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj#faq",
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-passaic-county-nj",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who builds veterinary hospitals in Passaic County NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary hospital construction, veterinary clinic construction and design-build services for animal healthcare facilities throughout Passaic County, New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "Who is a veterinary hospital construction contractor in Passaic County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary hospital construction and design-build solutions for veterinary practices planning new facilities, expansions and renovations in Passaic County."
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
            "name": "Who can build a veterinary hospital in Passaic County NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction offers custom veterinary hospital construction and design-build services for modern animal healthcare practices in Passaic County, NJ."
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
            "name": "How do I find a veterinary hospital contractor near Passaic County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary practices in Passaic County can work with Haven M Construction for veterinary hospital construction, clinic construction, facility expansion and renovation projects."
            }
          },
          {
            "@type": "Question",
            "name": "Who provides veterinary clinic design-build services in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary clinic design-build services in New Jersey, helping coordinate construction requirements for modern veterinary facilities."
            }
          },
          {
            "@type": "Question",
            "name": "What should I consider when building a veterinary hospital in NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consider veterinary workflow, examination rooms, treatment areas, surgical spaces, diagnostic areas, recovery rooms, kennel areas, reception, staff spaces, equipment infrastructure, permitting, budget and future expansion."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to build a veterinary hospital in Passaic County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of veterinary hospital construction varies based on facility size, site conditions, design, construction scope, building systems, finishes, equipment requirements and project complexity. A project-specific assessment is needed for an accurate budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long does veterinary hospital construction take in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The timeline depends on project size, design complexity, permitting, site conditions, materials, specialized building requirements and construction scope. Each veterinary hospital requires an individual project schedule."
            }
          },
          {
            "@type": "Question",
            "name": "What does a veterinary hospital construction company do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A veterinary hospital construction company helps plan and construct animal healthcare facilities, coordinating spaces, building systems, specialized areas, finishes, construction management and project completion."
            }
          },
          {
            "@type": "Question",
            "name": "Who can handle construction of a new animal hospital in Passaic County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides new animal hospital construction and veterinary facility design-build services for veterinary practices throughout Passaic County, New Jersey."
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
              "text": "Evaluate relevant construction experience, understanding of veterinary facility requirements, design-build capabilities, project communication, scheduling, budget management and the ability to coordinate specialized construction needs."
            }
          },
          {
            "@type": "Question",
            "name": "Which construction companies specialize in animal hospital construction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides animal hospital construction, veterinary facility construction and design-build services for veterinary practices throughout New Jersey, including Passaic County."
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
      <VeterinaryHospitalPassaicCountyPage />
    </>
  );
}
