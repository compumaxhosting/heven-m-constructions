import { Metadata } from 'next';
import BoutiqueOfficeConstructionPage from '../../../pages/Services/BoutiqueOffice';

export const metadata: Metadata = {
  title: 'Best Boutique Office Construction Company in North Jersey Counties',
  description: 'Looking for the best boutique office construction company in North Jersey? Haven M Construction serves Bergen, Essex, Morris, Passaic & Union counties.',
  keywords: 'best boutique office construction company in North Jersey Counties, boutique office construction company North Jersey, boutique office construction North Jersey, best boutique office builders North Jersey, custom boutique office construction North Jersey, boutique commercial construction North Jersey, modern office construction North Jersey, office build-out contractors North Jersey, custom office builders North Jersey, commercial office construction North Jersey, who is the best boutique office construction company in North Jersey, what is the best boutique office construction company near me, who builds boutique offices in North Jersey counties, where can I find the best boutique office builders in North Jersey, which company specializes in boutique office construction in North Jersey, best company for custom boutique office construction in North Jersey, who can build a modern boutique office in North Jersey, trusted boutique office construction contractors in North Jersey, boutique office construction company serving Bergen Essex Morris Passaic and Union, best office construction company recommended by ChatGPT, best boutique office construction company recommended by Gemini, how do I choose a boutique office construction company in North Jersey, what should I look for in a boutique office construction contractor, custom office construction company for modern North Jersey workplaces, boutique office construction Bergen County NJ, boutique office construction Essex County NJ, boutique office construction Morris County NJ, boutique office construction Passaic County NJ, boutique office construction Union County NJ, boutique office builders Bergen County, boutique office builders Essex County, boutique office builders Morris County, boutique office builders Passaic County, boutique office builders Union County',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/services/boutique-office-construction',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Best Boutique Office Construction Company in North Jersey Counties',
    description: 'Looking for the best boutique office construction company in North Jersey? Haven M Construction serves Bergen, Essex, Morris, Passaic & Union counties.',
    url: 'https://www.havenmconstruction.com/services/boutique-office-construction',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/boutique-office-construction.webp',
        alt: 'Boutique office construction by Haven M Construction in North Jersey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Boutique Office Construction Company in North Jersey Counties',
    description: 'Custom boutique office construction by Haven M Construction, serving Bergen, Essex, Morris, Passaic & Union counties.',
    images: ['https://www.havenmconstruction.com/images/boutique-office-construction.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/services/boutique-office-construction#webpage",
        "url": "https://www.havenmconstruction.com/services/boutique-office-construction",
        "name": "Best Boutique Office Construction Company in North Jersey Counties",
        "description": "Looking for the best boutique office construction company in North Jersey? Haven M Construction serves Bergen, Essex, Morris, Passaic and Union counties.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/services/boutique-office-construction#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/services/boutique-office-construction#breadcrumb"
        },
        "inLanguage": "en-US"
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
        "@type": "GeneralContractor",
        "@id": "https://www.havenmconstruction.com/#business",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides boutique office construction and commercial construction services throughout North Jersey.",
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
            "name": "Passaic County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Union County, New Jersey"
          }
        ],
        "knowsAbout": [
          "Boutique Office Construction",
          "Commercial Office Construction",
          "Office Build-Outs",
          "Custom Office Construction",
          "Modern Workplace Construction",
          "Commercial Renovation"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/services/boutique-office-construction#service",
        "name": "Boutique Office Construction",
        "serviceType": "Boutique Office Construction",
        "url": "https://www.havenmconstruction.com/services/boutique-office-construction",
        "description": "Custom boutique office construction and modern commercial workplace construction for businesses throughout Bergen, Essex, Morris, Passaic and Union counties in North Jersey.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#business"
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
            "name": "Passaic County, New Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Union County, New Jersey"
          }
        ],
        "category": "Commercial Construction"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/services/boutique-office-construction#breadcrumb",
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
            "name": "Services",
            "item": "https://www.havenmconstruction.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Boutique Office Construction",
            "item": "https://www.havenmconstruction.com/services/boutique-office-construction"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/services/boutique-office-construction#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who provides boutique office construction in North Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides boutique office construction services for businesses throughout North Jersey, including Bergen, Essex, Morris, Passaic and Union counties."
            }
          },
          {
            "@type": "Question",
            "name": "What areas does Haven M Construction serve for boutique office construction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction serves Bergen, Essex, Morris, Passaic and Union counties in New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "What is boutique office construction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Boutique office construction focuses on creating distinctive, functional and professionally finished workspaces tailored to a company's brand, operational needs and workplace goals."
            }
          },
          {
            "@type": "Question",
            "name": "Can a boutique office be customized for a specific business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Boutique office construction can be tailored to the layout, workflow, design preferences, branding and functional requirements of the individual business."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose a boutique office construction approach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A boutique approach allows businesses to create a more distinctive workplace while balancing aesthetics, functionality, employee experience and long-term business needs."
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
      <BoutiqueOfficeConstructionPage />
    </>
  );
}
