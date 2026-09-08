import { Metadata } from 'next';
import MorrisCountyOfficePage from '../../../../pages/Services/BoutiqueOffice/MorrisCounty';

export const metadata: Metadata = {
  title: 'Boutique Office Design, Build-Out & Renovation | Morris County, NJ',
  description: 'Transform your workspace with boutique office design, construction & build-out services in Morris County, NJ. Create a custom space built for your business.',
  keywords: 'boutique office design Morris County NJ, boutique office construction Morris County NJ, boutique office build-out Morris County NJ, custom office construction Morris County, office design and construction Morris County NJ, commercial office build-out Morris County NJ, custom office interiors Morris County, office renovation Morris County NJ, commercial interior construction Morris County, design-build contractor Morris County NJ, custom workplace design Morris County, modern office construction Morris County, premium office build-outs NJ, commercial construction contractor Morris County, who provides boutique office design and construction in Morris County NJ, who can design and build a custom office in Morris County, where can I find boutique office build-out services in Morris County NJ, who specializes in custom commercial office construction in Morris County, who offers complete office design construction and build-out services, how do I choose an office construction contractor in Morris County, how much does a boutique office build-out cost in Morris County NJ, how long does a custom office construction project take in Morris County, who builds high-end and modern office spaces in Morris County, can one contractor handle office design and construction from start to finish, what is included in a boutique office build-out, who can transform an existing office into a custom workspace in Morris County, who provides design-build office construction near Morris County, how can I create a distinctive and functional office space in Morris County, what contractor can manage my entire office construction project',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Boutique Office Design, Build-Out & Renovation | Morris County, NJ',
    description: 'Transform your workspace with boutique office design, construction & build-out services in Morris County, NJ. Create a custom space built for your business.',
    url: 'https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/boutique-office-construction-morris-county-nj.webp',
        alt: 'Boutique office design, construction and build-out in Morris County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boutique Office Design, Build-Out & Renovation | Morris County, NJ',
    description: 'Custom boutique office design, construction and build-out services in Morris County, NJ by Haven M Construction.',
    images: ['https://www.havenmconstruction.com/images/boutique-office-construction-morris-county-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj",
        "name": "Boutique Office Design, Build-Out & Renovation | Morris County, NJ",
        "description": "Transform your workspace with boutique office design, construction and build-out services in Morris County, NJ. Create a custom space built for your business.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj#breadcrumb"
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
        "description": "Haven M Construction provides boutique office design, construction, build-out and renovation services for businesses in Morris County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County, New Jersey",
          "sameAs": "https://en.wikipedia.org/wiki/Morris_County,_New_Jersey"
        },
        "knowsAbout": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Office Build-Out",
          "Office Renovation",
          "Custom Office Construction",
          "Commercial Interior Construction",
          "Design-Build Construction",
          "Custom Workplace Design",
          "Modern Office Construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj#service",
        "name": "Boutique Office Design, Build-Out & Renovation in Morris County, NJ",
        "serviceType": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Commercial Office Build-Out",
          "Office Renovation"
        ],
        "url": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj",
        "description": "Custom boutique office design, construction, build-out and renovation services for businesses in Morris County, NJ.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County, New Jersey"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Businesses seeking custom office design, construction, build-out or renovation services"
        },
        "category": "Commercial Office Construction"
      },
      {
        "@type": "Offer",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj#offer",
        "name": "Boutique Office Construction & Renovation Services in Morris County",
        "itemOffered": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj#service"
        },
        "seller": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County, New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj#breadcrumb",
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
            "name": "Morris County, NJ",
            "item": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-morris-county-nj#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who provides boutique office design and construction in Morris County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides boutique office design, construction and build-out services for businesses throughout Morris County, NJ."
            }
          },
          {
            "@type": "Question",
            "name": "Who can design and build a custom office in Morris County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides custom office design and construction services tailored to the business needs, workplace functionality and design goals of each project."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find boutique office build-out services in Morris County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses in Morris County can work with Haven M Construction for boutique office build-outs and custom commercial workplace construction."
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
              "text": "A boutique office build-out may include space planning, interior construction, finishes, lighting, architectural details and other improvements needed to create a finished commercial workplace."
            }
          },
          {
            "@type": "Question",
            "name": "Who can transform an existing office into a custom workspace in Morris County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides office renovation and custom commercial construction services designed to transform existing spaces into distinctive, functional workplaces in Morris County."
            }
          },
          {
            "@type": "Question",
            "name": "How can I create a distinctive and functional office space in Morris County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A custom office project can combine thoughtful space planning, durable materials, modern finishes and business-specific design requirements to create a distinctive and functional workplace."
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
      <MorrisCountyOfficePage />
    </>
  );
}
