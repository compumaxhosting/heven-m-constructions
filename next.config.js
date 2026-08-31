/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/veterinary-hospital-construction-:county-county-nj',
        destination: '/services/veterinary-hospital-construction-nj/veterinary-hospital-construction-:county-county-nj',
      },
      {
        source: '/whole-home-additions-:county-county-nj',
        destination: '/services/whole-home-additions/:county-county-nj',
      },
      {
        source: '/design-build-:county-county-nj',
        destination: '/services/design-build/:county-county-nj',
      },
      {
        source: '/value-engineering-:county-county-nj',
        destination: '/services/value-engineering/:county-county-nj',
      },
      {
        source: '/home-additions-:county-county-nj',
        destination: '/services/additions/:county-county-nj',
      },
      {
        source: '/boutique-office-construction-:county-county-nj',
        destination: '/services/boutique-office-construction/:county-county-nj',
      },
    ];
  },
};

module.exports = nextConfig;
