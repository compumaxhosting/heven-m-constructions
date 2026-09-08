import { Metadata } from 'next';
import DesignBuildPage from '../../../pages/Services/DesignBuild';

export const metadata: Metadata = {
  title: 'Design-Build Construction Services in Verona, NJ',
  description: 'Explore expert design-build construction services in Verona, NJ, serving Bergen, Essex, Morris, Union, and Passaic counties.',
  keywords: 'design-build construction Verona NJ, design-build contractor Verona NJ, design-build services in Verona NJ, residential design-build contractor NJ, design and build construction company NJ, design-build contractor near me, custom home design-build Verona NJ, home renovation design-build Verona NJ, design-build construction Essex County NJ, design-build construction Bergen County NJ, design-build construction Morris County NJ, design-build construction Union County NJ, design-build construction Passaic County NJ, best design-build contractor in Verona NJ, ChatGPT design-build contractor NJ, Gemini design-build contractor NJ, AI search design-build construction NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/design-build-construction-nj',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Design-Build Construction Services in Verona, NJ',
    description: 'Explore expert design-build construction services in Verona, NJ, serving Bergen, Essex, Morris, Union, and Passaic counties.',
    url: 'https://www.havenmconstruction.com/design-build-construction-nj',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/design-build-construction.webp',
        alt: 'Design-Build Construction Services in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design-Build Construction Services in Verona, NJ',
    description: 'Explore expert design-build construction services in Verona, NJ, serving Bergen, Essex, Morris, Union, and Passaic counties.',
    images: ['https://www.havenmconstruction.com/images/design-build-construction.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.havenmconstruction.com/design-build-construction-nj#webpage",
    "url": "https://www.havenmconstruction.com/design-build-construction-nj",
    "name": "Design-Build Construction Services in Verona, NJ",
    "headline": "Design-Build Construction Services in Verona, NJ",
    "description": "Explore expert design-build construction services in Verona, NJ, serving Bergen, Essex, Morris, Union, and Passaic counties.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.havenmconstruction.com/#website",
      "url": "https://www.havenmconstruction.com/",
      "name": "Haven M Construction"
    },
    "about": {
      "@id": "https://www.havenmconstruction.com/design-build-construction-nj#service"
    },
    "mainEntity": {
      "@id": "https://www.havenmconstruction.com/design-build-construction-nj#service"
    },
    "publisher": {
      "@id": "https://www.havenmconstruction.com/#organization"
    },
    "breadcrumb": {
      "@id": "https://www.havenmconstruction.com/design-build-construction-nj#breadcrumb"
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.havenmconstruction.com/design-build-construction-nj"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DesignBuildPage />
    </>
  );
}
