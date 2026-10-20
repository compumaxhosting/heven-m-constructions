import type { Metadata } from 'next';
import HomePage from '../components/Home';

export const metadata: Metadata = {
  title: 'Haven M Construction | Design-Build & Construction in Verona, NJ',
  description: 'Haven M Construction provides residential and commercial design-build services, additions, offices and veterinary hospitals in Verona, NJ and North Jersey.',
  alternates: {
    canonical: 'https://www.havenmconstruction.com/',
  },
  openGraph: {
    title: 'Haven M Construction | Design-Build & Construction in Verona, NJ',
    description: 'Haven M Construction provides residential and commercial design-build services, additions, offices and veterinary hospitals in Verona, NJ.',
    url: 'https://www.havenmconstruction.com/',
    siteName: 'Haven M Construction',
    images: [
      {
        url: 'https://www.havenmconstruction.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Haven M Construction design-build and construction services in Verona, NJ',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haven M Construction | Design-Build & Construction in Verona, NJ',
    description: 'Haven M Construction provides residential and commercial design-build services, additions, offices and veterinary hospitals in Verona, NJ.',
    images: ['https://www.havenmconstruction.com/images/og-image.webp'],
  },
};

export default function Page() {
  return <HomePage />;
}
