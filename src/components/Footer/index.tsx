import Link from 'next/link';
import { footerLinks, socials } from './footerData';

export default function Footer() {
  return (
    <footer
      id="studio"
      className="mesh-forest relative text-linen"
      style={{ overflow: "clip" }}
    >
      <div className="pointer-events-none absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-clay/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 lg:pt-12 pb-24 sm:pb-8 lg:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-4">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-clay">
              <span className="inline-block h-px w-10 bg-clay/70" />
              Haven M · Est. 2000
            </div>
            <div
              className="font-display mt-6 leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
            >
              Let&apos;s
              <br />
              build
              <br />
              <span className="italic text-clay">a haven.</span>
            </div>

            <div className="mt-8">
              <a
                href="https://g.page/r/CbQEE19GUtZAEBI/review"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-5 py-2.5 text-xs font-medium text-linen transition-all hover:bg-white hover:text-forest shadow-md group"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 shadow">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                </span>
                <span>Review us on Google</span>
                <span className="text-terracotta group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 min-w-0 lg:col-span-8">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div
                key={title}
                className="min-w-0"
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
                        <Link href={item.href} className="hover:text-linen transition-colors">
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

        <div aria-hidden="true" className="mt-12 lg:mt-6 select-none w-full overflow-hidden">
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

        <div className="mt-6 lg:mt-4 border-t border-linen/15 pt-6 lg:pt-4 text-xs text-linen/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>
              © 2026 Haven M Construction, LLC. All rights reserved.
            </span>
            <div className="flex items-center gap-2.5 shrink-0 pr-14 sm:pr-0">
              {socials.map(({ label, href, svg, bgClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:brightness-110 ${bgClass}`}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

