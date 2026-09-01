import React from 'react';

export const links = [
  { num: "01", label: "Home", to: "/" },
  { num: "02", label: "About", to: "/about" },
  { num: "03", label: "Services", to: "/services", hasDropdown: true },
  { num: "04", label: "Portfolio", to: "/portfolio" },
  { num: "05", label: "Showcase", to: "/showcase" },
  { num: "06", label: "Blog", to: "/blog" },
  { num: "07", label: "Contact", to: "/contact" },
];

export interface MainServiceItem {
  num: string;
  title: string;
  category: string;
  description: string;
  href: string;
  badge?: string;
}

export const mainServices: MainServiceItem[] = [
  {
    num: "01",
    title: "Construct Veterinary Hospital",
    category: "Specialty Healthcare",
    description: "Custom clinical workflows, surgery suites & animal hospitals.",
    href: "/services/veterinary-hospital-construction-nj",
    badge: "Featured",
  },
  {
    num: "02",
    title: "Whole-Home Additions",
    category: "Residential",
    description: "Full-scope residence expansions & new architectural levels.",
    href: "/services/whole-home-additions",
  },
  {
    num: "03",
    title: "Design-Build",
    category: "Process",
    description: "Unified architecture, engineering, and turnkey construction.",
    href: "/services/design-build",
  },
  {
    num: "04",
    title: "Value Engineering",
    category: "Consulting",
    description: "Strategic cost and structural optimization without compromise.",
    href: "/services/value-engineering",
  },
  {
    num: "05",
    title: "Additions",
    category: "Expansion",
    description: "Second stories, wings, and custom living space extensions.",
    href: "/services/additions",
  },
  {
    num: "06",
    title: "Boutique Offices",
    category: "Commercial",
    description: "Executive commercial suites and high-end creative studios.",
    href: "/services/boutique-office-construction",
  },
];

export const socialLinks = [
  {
    href: "https://www.instagram.com/havenmconstruction/",
    label: "Instagram",
    bgClass: "",
    whileHover: { scale: 1.18, y: -2, rotate: -6 },
    icon: (
      <React.Fragment>
        <svg width="0" height="0" className="absolute">
          <linearGradient id="ig-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop stopColor="#833ab4" offset="0%" />
            <stop stopColor="#e1306c" offset="50%" />
            <stop stopColor="#f9ce3f" offset="100%" />
          </linearGradient>
        </svg>
        <svg className="h-4 w-4" fill="none" stroke="url(#ig-grad)" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
        </svg>
      </React.Fragment>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61592782718700",
    label: "Facebook",
    bgClass: "",
    whileHover: { scale: 1.15, y: -2, rotate: 3 },
    icon: (
      <svg className="h-4 w-4 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/HavenMconst",
    label: "X",
    bgClass: "",
    whileHover: { scale: 1.15, y: -2, rotate: -3 },
    icon: (
      <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@havenmconstruction?lang=en",
    label: "TikTok",
    bgClass: "",
    whileHover: { scale: 1.18, y: -2, rotate: 8 },
    icon: (
      <svg className="h-3.5 w-3.5 overflow-visible" viewBox="0 0 24 24">
        <path d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z" fill="#25F4EE" transform="translate(-0.4, -0.3)" />
        <path d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z" fill="#FE2C55" transform="translate(0.4, 0.3)" />
        <path d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    href: "https://g.page/r/havenmconstruction/review",
    label: "Google Review",
    bgClass: "",
    whileHover: { scale: 1.18, y: -2, rotate: 6 },
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
      </svg>
    ),
  },
];
