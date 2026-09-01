"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight, Phone } from "lucide-react";
import { socialLinks } from "./navData";

interface MobileMenuCTAProps {
  setOpen: (val: boolean) => void;
}

export default function MobileMenuCTA({ setOpen }: MobileMenuCTAProps) {
  return (
    <>
      <div className="mt-4 border-t border-forest/10 pt-4">
        <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-forest/60">
          <span className="h-px w-8 bg-forest/20" />
          Follow along
        </div>
        <div className="flex flex-nowrap items-center justify-between sm:justify-start gap-3">
          {socialLinks.map(({ href, label, icon, whileHover }) => {
            const mobileBgClass =
              label === "Instagram"
                ? "bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white shadow-[#e1306c]/10"
                : label === "Facebook"
                  ? "bg-[#1877f2] text-white shadow-[#1877f2]/10"
                  : label === "X"
                    ? "bg-black text-white shadow-black/10"
                    : label === "TikTok"
                      ? "bg-black text-white shadow-black/10"
                      : label === "Google Review"
                        ? "bg-white border border-forest/20 shadow-xs"
                        : "";
            return (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 shadow-sm shrink-0 ${mobileBgClass}`}
                whileHover={whileHover}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
              >
                {label === "Facebook" ? (
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                ) : label === "X" ? (
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ) : label === "Instagram" ? (
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                  </svg>
                ) : label === "Google Review" ? (
                  <svg className="h-6 w-6" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                ) : (
                  icon
                )}
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="mt-4 border-t border-forest/10 pt-4 flex flex-col gap-2.5">
        <a
          href="tel:+12012643506"
          className="flex items-center justify-between rounded-2xl bg-forest/10 border border-forest/20 p-3 sm:p-3.5 text-forest transition-all hover:bg-forest hover:text-linen group gap-2"
        >
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-forest text-linen group-hover:bg-linen group-hover:text-forest transition-colors">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold opacity-70 truncate">
                Call Us Directly
              </span>
              <span className="font-mono text-[11px] sm:text-sm font-bold tracking-tight whitespace-nowrap">
                (201) 264-3506
              </span>
            </div>
          </div>
          <span className="shrink-0 text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-forest text-linen group-hover:bg-linen group-hover:text-forest transition-colors">
            Call Now
          </span>
        </a>

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="flex items-center justify-center gap-2 rounded-2xl bg-forest px-5 py-3 font-medium text-linen shadow-md transition-transform active:scale-[0.98]"
        >
          <span>Begin a Project</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
