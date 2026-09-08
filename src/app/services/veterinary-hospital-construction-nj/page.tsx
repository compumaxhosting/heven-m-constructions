import { Metadata } from 'next';
import VeterinaryHospitalConstructionPage from '../../../pages/Services/VeterinaryHospital';

export const metadata: Metadata = {
  title: 'Veterinary Hospital Construction in New Jersey | Haven M Construction',
  description: 'Veterinary hospital construction in New Jersey for Bergen, Essex, Morris, Union & Passaic counties. Expert North Jersey design-build services.',
  keywords: 'veterinary hospital construction in New Jersey, veterinary clinic construction NJ, veterinary facility construction NJ, veterinary practice construction NJ, animal hospital construction NJ, veterinary hospital design and construction, veterinary hospital contractors NJ, veterinary construction company NJ, veterinary clinic contractors in New Jersey, veterinary facility design-build NJ, veterinary hospital renovation NJ, veterinary clinic renovation NJ, veterinary construction services North Jersey, veterinary hospital builders North Jersey, veterinary construction contractors North Jersey, veterinary hospital construction Verona NJ, veterinary construction Verona NJ, veterinary hospital construction Bergen County NJ, veterinary hospital construction Essex County NJ, veterinary hospital construction Morris County NJ, veterinary hospital construction Union County NJ, veterinary hospital construction Passaic County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Veterinary Hospital Construction in New Jersey | Haven M Construction',
    description: 'Veterinary hospital construction in New Jersey for Bergen, Essex, Morris, Union & Passaic counties. Expert North Jersey design-build services.',
    url: 'https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/veterinary-hospital-construction-nj.webp',
        alt: 'Veterinary hospital construction services in New Jersey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veterinary Hospital Construction in New Jersey | Haven M Construction',
    description: 'Veterinary hospital construction in New Jersey for Bergen, Essex, Morris, Union & Passaic counties. Expert North Jersey design-build services.',
    images: ['https://www.havenmconstruction.com/images/veterinary-hospital-construction-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj#webpage",
        "url": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj",
        "name": "Veterinary Hospital Construction in New Jersey | Haven M Construction",
        "description": "Veterinary hospital construction in New Jersey for Bergen, Essex, Morris, Union and Passaic counties. Haven M Construction provides veterinary facility design-build and renovation services throughout North Jersey.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj#breadcrumb"
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
        "description": "Construction company providing commercial construction, design-build and renovation services in New Jersey.",
        "areaServed": [
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
      {
        "@type": "GeneralContractor",
        "@id": "https://www.havenmconstruction.com/#contractor",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "parentOrganization": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Bergen County, NJ"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Essex County, NJ"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Morris County, NJ"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Union County, NJ"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Passaic County, NJ"
          },
          {
            "@type": "City",
            "name": "Verona",
            "containedInPlace": {
              "@type": "State",
              "name": "New Jersey"
            }
          }
        ],
        "knowsAbout": [
          "Veterinary hospital construction",
          "Veterinary clinic construction",
          "Veterinary facility construction",
          "Veterinary practice construction",
          "Animal hospital construction",
          "Veterinary hospital design and construction",
          "Veterinary facility design-build",
          "Veterinary hospital renovation",
          "Veterinary clinic renovation",
          "Commercial construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj#service",
        "name": "Veterinary Hospital Construction in New Jersey",
        "serviceType": "Veterinary Hospital Construction",
        "description": "Veterinary hospital and veterinary clinic construction, design-build and renovation services for veterinary practices throughout North Jersey.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#contractor"
        },
        "areaServed": [
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
          },
          {
            "@type": "City",
            "name": "Verona, New Jersey"
          }
        ],
        "category": [
          "Veterinary Hospital Construction",
          "Veterinary Clinic Construction",
          "Veterinary Facility Construction",
          "Veterinary Hospital Renovation",
          "Veterinary Clinic Renovation",
          "Veterinary Facility Design-Build"
        ],
        "url": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj#breadcrumb",
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
            "name": "Veterinary Hospital Construction NJ",
            "item": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj#faq",
        "url": "https://www.havenmconstruction.com/services/veterinary-hospital-construction-nj",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who builds veterinary hospitals in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary hospital construction, design-build and renovation services in New Jersey, serving veterinary practices throughout North Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "Who is a veterinary hospital contractor in North Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction is a New Jersey construction company providing veterinary hospital construction and veterinary facility design-build services throughout North Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find veterinary hospital construction services in NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary hospital construction services from Haven M Construction are available throughout North Jersey, including Bergen, Essex, Morris, Union and Passaic counties."
            }
          },
          {
            "@type": "Question",
            "name": "What does veterinary hospital construction include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary hospital construction can include facility planning, design-build coordination, interior construction, treatment and examination areas, surgical spaces, client areas, staff spaces, specialized veterinary infrastructure and renovation work."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to build a veterinary hospital in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary hospital construction costs vary based on facility size, location, site conditions, project scope, specialized equipment, finishes and infrastructure requirements. A project-specific assessment is needed to determine an accurate construction budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long does veterinary hospital construction take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The construction timeline for a veterinary hospital depends on the project's size, complexity, permitting, design requirements, site conditions and material availability. A detailed schedule can be developed based on the specific project."
            }
          },
          {
            "@type": "Question",
            "name": "Who can design and build a veterinary clinic in NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides construction and design-build services for veterinary clinics and animal healthcare facilities in New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "What should I consider when planning a new veterinary hospital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Planning a new veterinary hospital should consider workflow, patient and client circulation, treatment and surgical areas, equipment requirements, staff spaces, storage, infection-control considerations, building systems, permitting, budget and future expansion."
            }
          },
          {
            "@type": "Question",
            "name": "Who provides veterinary facility construction in Bergen, Essex, Morris, Union and Passaic counties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary facility construction and renovation services throughout Bergen, Essex, Morris, Union and Passaic counties in New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "What is involved in renovating an existing veterinary hospital in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary hospital renovation can involve space reconfiguration, updated treatment and examination areas, improvements to staff and client spaces, infrastructure upgrades, finishes, specialized veterinary requirements and construction planning that helps minimize disruption to ongoing operations."
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
      <VeterinaryHospitalConstructionPage />
    </>
  );
}
