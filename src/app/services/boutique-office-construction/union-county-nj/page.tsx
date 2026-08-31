import { Metadata } from 'next';
import UnionCountyOfficePage from '../../../../pages/Services/BoutiqueOffice/UnionCounty';

export const metadata: Metadata = {
  title: 'Boutique Office Design & Construction Services | Union County, NJ',
  description: 'Transform your workspace with boutique office design, construction & build-out services in Union County, NJ. Create a custom space tailored to your business.',
  keywords: 'boutique office design Union County NJ, boutique office construction Union County NJ, boutique office build-out Union County NJ, custom office construction Union County, office design and construction Union County NJ, commercial office build-out Union County NJ, custom office interiors Union County, office renovation Union County NJ, commercial interior construction Union County, design-build contractor Union County NJ, custom workplace design Union County, modern office construction Union County, premium office build-outs NJ, commercial construction contractor Union County, professional office renovation Union County, turnkey office construction Union County, who provides boutique office design and construction in Union County NJ, who can design and build a custom office in Union County, where can I find boutique office build-out services in Union County NJ, who specializes in custom commercial office construction in Union County, who offers complete office design construction and build-out services, how do I choose the right office construction contractor in Union County, how much does a boutique office build-out cost in Union County NJ, how long does a custom office construction project take in Union County, who builds modern and high-end office spaces in Union County, can one contractor handle office design and construction from start to finish, what is included in a boutique office build-out, who can transform an existing office into a custom workspace in Union County, who provides design-build office construction near Union County, how can I create a professional and distinctive office space in Union County, what contractor can manage my complete office construction project',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/boutique-office-construction-union-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Boutique Office Design & Construction Services | Union County, NJ',
    description: 'Transform your workspace with boutique office design, construction & build-out services in Union County, NJ. Create a custom space tailored to your business.',
    url: 'https://www.havenmconstruction.com/boutique-office-construction-union-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/boutique-office-construction-union-county-nj.jpg',
        alt: 'Boutique office design and construction in Union County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boutique Office Design & Construction Services | Union County, NJ',
    description: 'Custom boutique office design, construction and build-out services in Union County, NJ by Haven M Construction.',
    images: ['https://www.havenmconstruction.com/images/boutique-office-construction-union-county-nj.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj",
        "name": "Boutique Office Design & Construction Services | Union County, NJ",
        "description": "Transform your workspace with boutique office design, construction and build-out services in Union County, NJ. Create a custom space tailored to your business.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj#breadcrumb"
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
        "description": "Haven M Construction provides boutique office design, construction, build-out, renovation and commercial interior construction services for businesses in Union County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Union County, New Jersey",
          "sameAs": "https://en.wikipedia.org/wiki/Union_County,_New_Jersey"
        },
        "knowsAbout": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Commercial Office Build-Out",
          "Custom Office Construction",
          "Office Renovation",
          "Commercial Interior Construction",
          "Design-Build Construction",
          "Turnkey Office Construction",
          "Custom Workplace Design",
          "Modern Office Construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj#service",
        "name": "Boutique Office Design & Construction Services in Union County, NJ",
        "serviceType": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Office Build-Out",
          "Office Renovation",
          "Commercial Interior Construction",
          "Turnkey Office Construction"
        ],
        "url": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj",
        "description": "Custom boutique office design, construction and build-out services for businesses in Union County, NJ, creating professional, functional and distinctive commercial workspaces.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Union County, New Jersey"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Businesses seeking custom office design, construction, renovation and build-out services"
        },
        "category": "Commercial Office Construction"
      },
      {
        "@type": "Offer",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj#offer",
        "name": "Boutique Office Design & Construction Services in Union County",
        "itemOffered": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj#service"
        },
        "seller": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Union County, New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj#breadcrumb",
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
            "name": "Union County, NJ",
            "item": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-union-county-nj#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who provides boutique office design and construction in Union County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides boutique office design, construction and build-out services for businesses throughout Union County, NJ."
            }
          },
          {
            "@type": "Question",
            "name": "Who can design and build a custom office in Union County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides custom office design and construction services tailored to the business requirements, workplace functionality and design goals of each project."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find boutique office build-out services in Union County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses in Union County can work with Haven M Construction for boutique office build-outs and custom commercial workplace construction."
            }
          },
          {
            "@type": "Question",
            "name": "Who specializes in custom commercial office construction in Union County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides custom commercial office construction services focused on creating functional, professional and distinctive workspaces in Union County."
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
            "name": "What is included in a boutique office build-out?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A boutique office build-out may include space planning, interior construction, finishes, lighting, architectural details and other improvements needed to create a completed commercial workspace."
            }
          },
          {
            "@type": "Question",
            "name": "Who can transform an existing office into a custom workspace in Union County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides office renovation and custom commercial construction services to help transform existing offices into professional, functional and distinctive workspaces in Union County."
            }
          },
          {
            "@type": "Question",
            "name": "What contractor can manage my complete office construction project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction can provide coordinated boutique office design, construction and build-out services for businesses planning custom workplace projects in Union County, NJ."
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
      <UnionCountyOfficePage />
    </>
  );
}
