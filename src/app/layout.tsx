import Script from 'next/script';
import type { Metadata } from 'next';
import '../index.css'; // Make sure this path points to your global css
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/shared/ScrollUpButton';
import MobileBottomBar from '../components/shared/MobileBottomBar';
import { PageTransition } from '../components/shared/PageTransition';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.havenmconstruction.com'),
  title: 'Haven M Construction | Design-Build & Construction in Verona, NJ',
  description: 'Haven M Construction provides residential and commercial design-build services, additions, offices and veterinary hospitals in Verona, NJ.',
  keywords: 'Haven M Construction, design-build contractor, residential construction, commercial construction, home additions, value engineering, boutique office construction, veterinary hospital construction, Bergen County NJ, Essex County NJ, Morris County NJ, Passaic County NJ, Union County NJ',
  authors: [{ name: 'Haven M Construction' }],
  alternates: {
    canonical: 'https://www.havenmconstruction.com/',
  },
  robots: 'index,follow',
  referrer: 'strict-origin-when-cross-origin',
  verification: {
    google: '7QyE5LMZVOUGOqUcQnlwSnUCq037KwLSC-1hux2Tnvs',
  },
  openGraph: {
    type: 'website',
    title: 'Haven M Construction | Design-Build & Construction in Verona, NJ',
    description: 'Haven M Construction provides residential and commercial design-build services, additions, offices and veterinary hospitals in Verona, NJ.',
    url: 'https://www.havenmconstruction.com/',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.webp',
        alt: 'Haven M Construction design-build and construction services in Verona, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haven M Construction | Design-Build & Construction in Verona, NJ',
    description: 'Haven M Construction provides residential and commercial design-build services, additions, offices and veterinary hospitals in Verona, NJ.',
    images: ['https://www.havenmconstruction.com/images/og-image.webp'],
  },
};

export const viewport = {
  themeColor: '#ffffff',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://www.havenmconstruction.com/#organization",
  "name": "Haven M Construction",
  "url": "https://www.havenmconstruction.com/",
  "description": "Haven M Construction designs and builds residential and commercial spaces, specializing in additions, design-build, boutique offices, value engineering, and veterinary hospitals in Verona, NJ and surrounding counties.",
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
      "name": "Passaic County, NJ"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Union County, NJ"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Design-Build Construction",
        "serviceType": "Design-Build Construction",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Residential Construction",
        "serviceType": "Residential Construction",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Commercial Construction",
        "serviceType": "Commercial Construction",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Home Additions",
        "serviceType": "Home Additions",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Whole-Home Additions",
        "serviceType": "Whole-Home Additions",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Value Engineering",
        "serviceType": "Value Engineering",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Boutique Office Construction",
        "serviceType": "Boutique Office Construction",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Veterinary Hospital Construction",
        "serviceType": "Veterinary Hospital Construction",
        "provider": {
          "@id": "https://www.havenmconstruction.com/#organization"
        }
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="p:domain_verify" content="3428d9b7d31d903253d085a215d9bbc2" />
        <meta name="google-site-verification" content="7QyE5LMZVOUGOqUcQnlwSnUCq037KwLSC-1hux2Tnvs" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZKF8ZPZ226"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZKF8ZPZ226');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <div className="relative min-h-screen bg-background text-foreground">
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <ScrollUpButton />
          <MobileBottomBar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
