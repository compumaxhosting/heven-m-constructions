import { Metadata } from 'next';
import EssexCountyOfficePage from '../../../../pages/Services/BoutiqueOffice/EssexCounty';

export const metadata: Metadata = {
  title: 'Boutique Office Construction in Essex County, NJ | Haven M Construction',
  description: 'Transform your workspace with boutique office design, construction & build-out services in Essex County, NJ. Custom commercial spaces built to your vision.',
  keywords: 'boutique office design Essex County NJ, boutique office construction Essex County NJ, boutique office build-out Essex County NJ, custom office construction Essex County, office design and construction Essex County NJ, commercial office build-out Essex County NJ, custom office interiors Essex County, office renovation Essex County NJ, commercial interior construction Essex County, design-build contractor Essex County NJ, custom workplace design Essex County, modern office construction Essex County, premium office build-outs NJ, commercial construction contractor Essex County, who provides boutique office design and construction in Essex County NJ, who can design and build a custom office in Essex County, where can I find boutique office build-out services in Essex County NJ, who specializes in custom commercial office construction in Essex County, who offers complete office design construction and build-out services, how do I choose an office construction contractor in Essex County, how much does a boutique office build-out cost in Essex County NJ, how long does a custom office construction project take in Essex County, who builds high-end and modern office spaces in Essex County, can one contractor handle office design and construction from start to finish, what is included in a boutique office build-out, who can transform an existing office into a custom workspace in Essex County, who provides design-build office construction near Essex County, how can I create a distinctive and functional office space in Essex County, what contractor can manage my entire office construction project',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Boutique Office Construction in Essex County, NJ | Haven M Construction',
    description: 'Transform your workspace with boutique office design, construction & build-out services in Essex County, NJ. Custom commercial spaces built to your vision.',
    url: 'https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/boutique-office-construction-essex-county-nj.webp',
        alt: 'Boutique office construction in Essex County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boutique Office Construction in Essex County, NJ | Haven M Construction',
    description: 'Custom boutique office design, construction and build-out services in Essex County, NJ by Haven M Construction.',
    images: ['https://www.havenmconstruction.com/images/boutique-office-construction-essex-county-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj",
        "name": "Boutique Office Construction in Essex County, NJ | Haven M Construction",
        "description": "Transform your workspace with boutique office design, construction and build-out services in Essex County, NJ. Custom commercial spaces built to your vision.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj#breadcrumb"
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
        "description": "Haven M Construction provides boutique office design, construction, commercial build-out and workplace construction services in Essex County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Essex County, New Jersey",
          "sameAs": "https://en.wikipedia.org/wiki/Essex_County,_New_Jersey"
        },
        "knowsAbout": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Commercial Office Build-Out",
          "Custom Office Construction",
          "Commercial Interior Construction",
          "Design-Build Construction",
          "Office Renovation",
          "Custom Workplace Design",
          "Modern Office Construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj#service",
        "name": "Boutique Office Design, Construction & Build-Out in Essex County, NJ",
        "serviceType": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Office Build-Out",
          "Commercial Interior Construction"
        ],
        "url": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj",
        "description": "Custom boutique office design, construction and build-out services for businesses in Essex County, NJ, creating distinctive, professional and functional commercial workspaces.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Essex County, New Jersey"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Businesses seeking custom office design, construction and build-out services"
        },
        "category": "Commercial Office Construction"
      },
      {
        "@type": "Offer",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj#offer",
        "name": "Boutique Office Construction Services in Essex County, NJ",
        "itemOffered": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj#service"
        },
        "seller": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Essex County, New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj#breadcrumb",
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
            "name": "Essex County, NJ",
            "item": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-essex-county-nj#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who provides boutique office design and construction in Essex County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides boutique office design, construction and build-out services for businesses throughout Essex County, NJ."
            }
          },
          {
            "@type": "Question",
            "name": "Who can design and build a custom office in Essex County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides custom office design and construction services tailored to the business requirements, workplace functionality and design goals of each project."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find boutique office build-out services in Essex County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses in Essex County can work with Haven M Construction for boutique office build-outs and custom commercial workplace construction."
            }
          },
          {
            "@type": "Question",
            "name": "Can one contractor handle office design and construction from start to finish?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A design-build approach can coordinate office design and construction through one project team, helping simplify communication, planning and project execution."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in a boutique office build-out?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A boutique office build-out may include space planning, interior construction, finishes, lighting, architectural details and other improvements needed to create a finished commercial workspace."
            }
          },
          {
            "@type": "Question",
            "name": "Who builds high-end and modern office spaces in Essex County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides custom commercial construction and boutique office services for businesses seeking modern, distinctive and functional workspaces in Essex County."
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
      <EssexCountyOfficePage />
    </>
  );
}
