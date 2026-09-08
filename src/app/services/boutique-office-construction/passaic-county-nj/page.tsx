import { Metadata } from 'next';
import PassaicCountyOfficePage from '../../../../pages/Services/BoutiqueOffice/PassaicCounty';

export const metadata: Metadata = {
  title: 'Professional Boutique Office Construction | Passaic County, NJ',
  description: 'Transform your workspace with boutique office design, construction & build-out services in Passaic County, NJ. Custom spaces designed around your business.',
  keywords: 'boutique office design Passaic County NJ, boutique office construction Passaic County NJ, boutique office build-out Passaic County NJ, custom office construction Passaic County, office design and construction Passaic County NJ, commercial office build-out Passaic County NJ, custom office interiors Passaic County, office renovation Passaic County NJ, commercial interior construction Passaic County, design-build contractor Passaic County NJ, custom workplace design Passaic County, modern office construction Passaic County, premium office build-outs NJ, commercial construction contractor Passaic County, professional office renovation Passaic County, turnkey office construction Passaic County, who provides boutique office design and construction in Passaic County NJ, who can design and build a custom office in Passaic County, where can I find boutique office build-out services in Passaic County NJ, who specializes in custom commercial office construction in Passaic County, who offers complete office design construction and build-out services, how do I choose the right office construction contractor in Passaic County, how much does a boutique office build-out cost in Passaic County NJ, how long does a custom office construction project take in Passaic County, who builds modern and high-end office spaces in Passaic County, can one contractor handle my office design and construction from start to finish, what is included in a boutique office build-out, who can transform an existing office into a custom workspace in Passaic County, who provides design-build office construction near Passaic County, how can I create a professional and distinctive office space in Passaic County, what contractor can manage my complete office construction project',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Professional Boutique Office Construction | Passaic County, NJ',
    description: 'Transform your workspace with boutique office design, construction & build-out services in Passaic County, NJ. Custom spaces designed around your business.',
    url: 'https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/boutique-office-construction-passaic-county-nj.webp',
        alt: 'Professional boutique office construction in Passaic County, NJ by Haven M Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Boutique Office Construction | Passaic County, NJ',
    description: 'Custom boutique office design, construction and build-out services in Passaic County, NJ by Haven M Construction.',
    images: ['https://www.havenmconstruction.com/images/boutique-office-construction-passaic-county-nj.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj#webpage",
        "url": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj",
        "name": "Professional Boutique Office Construction | Passaic County, NJ",
        "description": "Transform your workspace with boutique office design, construction and build-out services in Passaic County, NJ. Custom spaces designed around your business.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj#breadcrumb"
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
        "description": "Haven M Construction provides professional boutique office design, construction, build-out, renovation and commercial interior construction services in Passaic County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey",
          "sameAs": "https://en.wikipedia.org/wiki/Passaic_County,_New_Jersey"
        },
        "knowsAbout": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Commercial Office Build-Out",
          "Office Renovation",
          "Custom Office Construction",
          "Commercial Interior Construction",
          "Design-Build Construction",
          "Turnkey Office Construction",
          "Custom Workplace Design",
          "Modern Office Construction"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj#service",
        "name": "Professional Boutique Office Construction in Passaic County, NJ",
        "serviceType": [
          "Boutique Office Design",
          "Boutique Office Construction",
          "Office Build-Out",
          "Office Renovation",
          "Turnkey Office Construction"
        ],
        "url": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj",
        "description": "Professional boutique office design, construction and build-out services for businesses in Passaic County, NJ, with custom spaces designed around business needs and workplace goals.",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Businesses seeking professional custom office construction and build-out services"
        },
        "category": "Commercial Office Construction"
      },
      {
        "@type": "Offer",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj#offer",
        "name": "Boutique Office Design, Construction & Build-Out Services",
        "itemOffered": {
          "@id": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj#service"
        },
        "seller": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj#breadcrumb",
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
            "name": "Passaic County, NJ",
            "item": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.havenmconstruction.com/boutique-office-construction-passaic-county-nj#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who provides boutique office design and construction in Passaic County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides boutique office design, construction and build-out services for businesses throughout Passaic County, NJ."
            }
          },
          {
            "@type": "Question",
            "name": "Who can design and build a custom office in Passaic County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides custom office design and construction services tailored to the functional, aesthetic and business requirements of each workplace."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find boutique office build-out services in Passaic County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses in Passaic County can work with Haven M Construction for boutique office build-outs and custom commercial workplace construction."
            }
          },
          {
            "@type": "Question",
            "name": "Can one contractor handle my office design and construction from start to finish?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A design-build approach can coordinate office design and construction through one project team, helping streamline communication, planning and project execution."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in a boutique office build-out?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A boutique office build-out may include space planning, interior construction, finishes, lighting, architectural details and other improvements required to create a completed commercial workspace."
            }
          },
          {
            "@type": "Question",
            "name": "Who can transform an existing office into a custom workspace in Passaic County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haven M Construction provides office renovation and custom commercial construction services to help transform existing offices into professional, functional and distinctive workspaces in Passaic County."
            }
          },
          {
            "@type": "Question",
            "name": "How can I create a professional and distinctive office space in Passaic County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A custom office project can combine thoughtful space planning, durable materials, modern finishes and business-specific requirements to create a professional and distinctive workplace."
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
      <PassaicCountyOfficePage />
    </>
  );
}
