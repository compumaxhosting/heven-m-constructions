import { Metadata } from 'next';
import BergenCountyOfficePage from '../../../../pages/Services/BoutiqueOffice/BergenCounty';

export const metadata: Metadata = {
  title: 'Boutique Office Design, Construction & Build-Out | Bergen County, NJ',
  description: 'Create a distinctive workplace with boutique office design, construction & build-out services in Bergen County, NJ. Custom spaces built around your vision.',
  keywords: 'boutique office design Bergen County NJ, boutique office construction Bergen County NJ, boutique office build-out Bergen County NJ, custom office design Bergen County, custom office construction Bergen County, office design and construction Bergen County, commercial office build-out Bergen County, office construction contractor Bergen County, design-build office construction Bergen County, custom office interiors Bergen County NJ, modern office construction Bergen County, high-end office construction Bergen County, boutique office contractors Bergen County, office renovation Bergen County NJ, custom workplace construction Bergen County, who provides boutique office design and construction in Bergen County NJ, who can design and build a custom office in Bergen County, what companies specialize in boutique office construction in Bergen County NJ, where can I find custom office build-out services in Bergen County, who offers complete office design construction and build-out services, how do I choose the right office construction contractor in Bergen County, how much does a boutique office build-out cost in Bergen County NJ, how long does a custom office construction project take, who builds high-end and modern office spaces in Bergen County, can one contractor handle office design and construction from start to finish, what is included in a commercial office build-out, who can transform an existing office into a custom workspace in Bergen County, what are the best options for custom office interiors in Bergen County NJ, who specializes in design-build office construction near me, how can I create a professional functional and distinctive office space',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Boutique Office Design, Construction & Build-Out | Bergen County, NJ',
    description: 'Create a distinctive workplace with boutique office design, construction & build-out services in Bergen County, NJ. Custom spaces built around your vision.',
    url: 'https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/boutique-office-construction-bergen-county-nj.webp',
        alt: 'Boutique office design and construction in Bergen County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boutique Office Design, Construction & Build-Out | Bergen County, NJ',
    description: 'Custom boutique office design, construction and build-out services in Bergen County, NJ by Haven M Construction.',
    images: ['https://www.havenmconstruction.com/images/boutique-office-construction-bergen-county-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj",
        "name": "Boutique Office Design, Construction & Build-Out | Bergen County, NJ",
        "description": "Create a distinctive workplace with boutique office design, construction and build-out services in Bergen County, NJ. Custom spaces built around your vision.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj#breadcrumb"
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
        "description": "Haven M Construction provides boutique office design, construction and commercial office build-out services in Bergen County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey",
          "sameAs": "https://en.wikipedia.org/wiki/Bergen_County,_New_Jersey"
        },
        "knowsAbout": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Commercial Office Build-Out",
          "Custom Office Construction",
          "Office Renovation",
          "Design-Build Construction",
          "Custom Workplace Design"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj#service",
        "name": "Boutique Office Design, Construction & Build-Out",
        "serviceType": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Commercial Office Build-Out"
        ],
        "url": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj",
        "description": "Custom boutique office design, construction and build-out services for businesses in Bergen County, NJ, creating professional, functional and distinctive workplaces.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Businesses seeking custom office design, construction and build-out services"
        },
        "category": "Commercial Office Construction"
      },
      {
        "@type": "Offer",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj#offer",
        "name": "Boutique Office Construction Services in Bergen County",
        "itemOffered": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj#service"
        },
        "seller": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj#breadcrumb",
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
            "name": "Boutique Office Construction",
            "item": "https://www.havenmconstruction.com/services/boutique-office-construction"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bergen County, NJ",
            "item": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-bergen-county-nj#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who provides boutique office design and construction in Bergen County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides boutique office design, construction and build-out services for businesses in Bergen County, NJ."
            }
          },
          {
            "@type": "Question",
            "name": "Who can design and build a custom office in Bergen County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides custom office design and construction services designed around the functional, aesthetic and business requirements of each workplace."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in a commercial office build-out?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A commercial office build-out can include space planning, interior construction, finishes, lighting, architectural elements and other improvements required to create a functional finished workplace."
            }
          },
          {
            "@type": "Question",
            "name": "Can one contractor handle office design and construction from start to finish?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A design-build approach can coordinate office design and construction through one project team, helping streamline communication, planning and execution."
            }
          },
          {
            "@type": "Question",
            "name": "Who builds modern and distinctive office spaces in Bergen County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction specializes in custom commercial construction and boutique office projects designed to create professional, functional and distinctive work environments in Bergen County."
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
      <BergenCountyOfficePage />
    </>
  );
}
