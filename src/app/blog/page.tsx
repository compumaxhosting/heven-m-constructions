import BlogPage from '../../components/Blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Blog & Insights in Verona, NJ | Haven M Construction',
  description: "Explore Haven M Construction's blog for residential and commercial construction insights, home additions, design-build, and project ideas in New Jersey.",
  keywords: 'construction blog Verona NJ, construction insights New Jersey, residential construction blog NJ, commercial construction blog NJ, home additions Verona NJ, whole-home additions NJ, design-build contractor NJ, construction projects NJ, value engineering NJ, boutique office construction NJ, veterinary hospital construction NJ, construction contractor Verona NJ, general contractor Verona NJ, construction tips New Jersey, construction trends NJ, home renovation insights NJ, construction services Bergen County NJ, construction services Essex County NJ, construction services Morris County NJ, construction services Union County NJ, construction services Passaic County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/blog',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Construction Blog & Insights in Verona, NJ | Haven M Construction',
    description: "Explore Haven M Construction's blog for residential and commercial construction insights, home additions, design-build, and project ideas in New Jersey.",
    url: 'https://www.havenmconstruction.com/blog',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.jpg',
        alt: 'Haven M Construction construction blog and insights in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Blog & Insights in Verona, NJ | Haven M Construction',
    description: "Explore Haven M Construction's blog for residential and commercial construction insights, home additions, design-build, and project ideas in New Jersey.",
    images: ['https://www.havenmconstruction.com/images/og-image.jpg'],
  },
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": "https://www.havenmconstruction.com/#organization",
        "name": "Haven M Construction",
        "url": "https://www.havenmconstruction.com/",
        "description": "Haven M Construction provides residential and commercial construction, home additions, design-build, value engineering, boutique office construction, and veterinary hospital construction in Verona, NJ and surrounding counties.",
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
        "@type": "Blog",
        "@id": "https://www.havenmconstruction.com/blog#blog",
        "url": "https://www.havenmconstruction.com/blog",
        "name": "Construction Blog & Insights in Verona, NJ | Haven M Construction",
        "description": "Construction insights, home addition ideas, design-build guidance, project information, and commercial construction topics from Haven M Construction in New Jersey.",
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.havenmconstruction.com/blog#webpage",
        "url": "https://www.havenmconstruction.com/blog",
        "name": "Construction Blog & Insights in Verona, NJ | Haven M Construction",
        "description": "Explore construction insights, home additions, design-build, commercial construction, and project ideas from Haven M Construction in New Jersey.",
        "isPartOf": {
          "@id": "https://www.havenmconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.havenmconstruction.com/#blog"
        },
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.havenmconstruction.com/#website",
        "url": "https://www.havenmconstruction.com/",
        "name": "Haven M Construction",
        "publisher": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogPage />
    </>
  );
}
