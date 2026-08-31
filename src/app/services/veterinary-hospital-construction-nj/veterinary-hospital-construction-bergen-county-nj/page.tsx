import { Metadata } from 'next';
import VeterinaryHospitalBergenCountyPage from '../../../../pages/Services/VeterinaryHospital/BergenCounty';

export const metadata: Metadata = {
  title: 'Custom Veterinary Hospital Construction in Bergen County, NJ',
  description: 'Veterinary hospital construction in Bergen County, NJ by Haven M Construction. Expert design-build and renovation services for North Jersey practices.',
  keywords: 'veterinary hospital construction Bergen County, veterinary clinic construction Bergen County NJ, veterinary facility construction Bergen County NJ, animal hospital construction Bergen County NJ, veterinary contractors Bergen County NJ, veterinary construction company Bergen County, veterinary hospital builders Bergen County NJ, veterinary facility design-build Bergen County, veterinary clinic renovation Bergen County NJ, animal hospital renovation Bergen County, veterinary practice construction Bergen County, veterinary construction contractors North Jersey, veterinary hospital construction North Jersey, veterinary facility construction NJ, veterinary hospital contractor Bergen County, veterinary hospital construction New Jersey, veterinary facility design-build NJ, veterinary clinic renovation NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Custom Veterinary Hospital Construction in Bergen County, NJ',
    description: 'Veterinary hospital construction in Bergen County, NJ by Haven M Construction. Expert design-build and renovation services for North Jersey practices.',
    url: 'https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/veterinary-hospital-construction.jpg',
        alt: 'Custom veterinary hospital construction in Bergen County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Veterinary Hospital Construction in Bergen County, NJ',
    description: 'Veterinary hospital construction in Bergen County, NJ by Haven M Construction. Expert design-build and renovation services for North Jersey practices.',
    images: ['https://www.havenmconstruction.com/images/veterinary-hospital-construction.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj",
        "name": "Custom Veterinary Hospital Construction in Bergen County, NJ",
        "description": "Veterinary hospital construction in Bergen County, NJ by Haven M Construction. Expert veterinary facility design-build, construction and renovation services for North Jersey practices.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj#breadcrumb"
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
        "@type": "GeneralContractor",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides commercial construction, veterinary facility construction, renovations and design-build services throughout New Jersey and North Jersey.",
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
        ],
        "knowsAbout": [
          "Veterinary Hospital Construction",
          "Veterinary Clinic Construction",
          "Veterinary Facility Construction",
          "Veterinary Hospital Renovation",
          "Veterinary Facility Design-Build",
          "Animal Hospital Construction",
          "Commercial Construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj#service",
        "name": "Veterinary Hospital Construction in Bergen County, NJ",
        "serviceType": "Veterinary Hospital Construction",
        "description": "Custom veterinary hospital construction, veterinary clinic construction, facility design-build, renovations and expansion services for veterinary practices in Bergen County, New Jersey.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey",
          "sameAs": "https://en.wikipedia.org/wiki/Bergen_County,_New_Jersey"
        },
        "category": "Veterinary Facility Construction",
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Veterinary Practices and Animal Healthcare Facilities"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj#breadcrumb",
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
            "name": "Veterinary Hospital Construction Bergen County NJ",
            "item": "https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/veterinary-hospital-construction-bergen-county-nj#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who builds veterinary hospitals in Bergen County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary hospital construction and veterinary facility design-build services for practices in Bergen County, NJ and throughout North Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "What does veterinary hospital construction include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Veterinary hospital construction can include new facility construction, veterinary clinic build-outs, facility renovations, practice expansions, interior construction and project management tailored to veterinary healthcare facilities."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to build a veterinary hospital in Bergen County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of a veterinary hospital depends on factors such as facility size, site conditions, building requirements, interior finishes, equipment needs and project scope. Haven M Construction can evaluate the project requirements and develop a construction plan based on the specific facility."
            }
          },
          {
            "@type": "Question",
            "name": "How long does veterinary hospital construction take in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Project timelines vary according to the size and complexity of the veterinary facility, permitting, site conditions, design requirements and construction scope. A project-specific schedule can be established after the scope and site requirements are evaluated."
            }
          },
          {
            "@type": "Question",
            "name": "Can an existing veterinary clinic be renovated in Bergen County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Veterinary clinic renovation and expansion can include remodeling existing treatment areas, exam rooms, reception spaces, surgical areas, kennels and other operational areas while addressing the specific requirements of the practice."
            }
          },
          {
            "@type": "Question",
            "name": "Does Haven M Construction provide veterinary facility design-build services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides veterinary facility construction and design-build services for veterinary practices in Bergen County and North Jersey, depending on the project scope and requirements."
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
      <VeterinaryHospitalBergenCountyPage />
    </>
  );
}
