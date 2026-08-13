import { Link } from "react-router-dom";

const footerLinks = {
  Studio: [
    { label: "Verona, NJ", href: "#" },
    { label: "07044", href: "#" },
    { label: "By appointment only", href: "#" },
  ],
  Contact: [
    {
      label: "gus@havenmconstruction.com",
      href: "mailto:gus@havenmconstruction.com",
    },
    { label: "201 264-3506", href: "tel:+12012643506" },
  ],
  Practice: [
    { label: "Residential", href: "/services" },
    { label: "Commercial", href: "/services" },
    { label: "Veterinary", href: "/services" },
    { label: "Boutique interiors", href: "/services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/havenmconstruction/",
    bgClass:
      "bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white",
    svg: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592782718700",
    bgClass: "bg-[#1877f2] text-white",
    svg: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    bgClass: "bg-black text-white",
    svg: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@havenmconstruction?lang=en",
    bgClass: "bg-[#000000] text-white",
    svg: (
      <svg className="h-6 w-6 overflow-visible" viewBox="0 0 24 24">
        {/* Cyan Offset Layer */}
        <path
          d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z"
          fill="#25F4EE"
          transform="translate(-0.4, -0.3)"
        />
        {/* Red/Magenta Offset Layer */}
        <path
          d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z"
          fill="#FE2C55"
          transform="translate(0.4, 0.3)"
        />
        {/* White Core Layer */}
        <path
          d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="studio"
      className="mesh-forest relative text-linen"
      style={{ overflow: "clip" }}
    >
      {/* Glows — clipped so they never cause horizontal scroll */}
      <div className="pointer-events-none absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-clay/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 lg:pt-12 pb-8 lg:pb-6">
        {/* ── Top grid: tagline + link columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Tagline */}
          <div className="min-w-0">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-clay">
              <span className="inline-block h-px w-10 bg-clay/70" />
              Haven M · Est. 2000
            </div>
            <div
              className="font-display mt-6 leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}
            >
              Let&apos;s
              <br />
              build
              <br />
              <span className="italic text-clay">a haven.</span>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 min-w-0">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div
                key={title}
                className={`min-w-0 ${title === "Contact" ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-clay">
                  {title}
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-linen/80">
                  {items.map((item) => (
                    <li key={item.label}>
                      {item.href === "#" ? (
                        item.label
                      ) : item.href.startsWith("mailto:") ||
                        item.href.startsWith("tel:") ? (
                        <a
                          href={item.href}
                          className="hover:text-linen transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="hover:text-linen transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Watermark ── constrained so it never scrolls horizontally */}
        <div
          aria-hidden="true"
          className="mt-12 lg:mt-6 select-none w-full overflow-hidden"
        >
          <div
            className="font-display leading-[0.85] tracking-[0.35em] text-linen/10 whitespace-nowrap"
            style={{ fontSize: "clamp(2.5rem, 12vw, 12rem)" }}
          >
            HAVEN <span className="text-clay">M</span>
          </div>
          <div
            className="mt-1.5 font-display leading-[0.85] text-linen/10 uppercase whitespace-nowrap flex justify-between w-full"
            style={{ fontSize: "clamp(1.2rem, 6.5vw, 6.5rem)" }}
          >
            {"CONSTRUCTION".split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-6 lg:mt-4 border-t border-linen/15 pt-6 lg:pt-4 text-xs text-linen/60">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright + socials */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <span>
                © 2026 Haven M Construction, LLC. All rights reserved.
              </span>
              <div className="flex gap-3">
                {socials.map(({ label, href, svg, bgClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:brightness-110 ${bgClass}`}
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
