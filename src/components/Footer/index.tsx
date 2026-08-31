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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 lg:pt-12 pb-8 lg:pb-6">
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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

