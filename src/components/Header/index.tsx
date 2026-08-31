"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Link from 'next/link';
import havenLogo from "../../assets/haven-logo.png";
import TopContactBar from "./TopContactBar";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if ((window as any).lenis) (window as any).lenis.stop();

    const blockTouch = (e: TouchEvent) => {
      const drawer = document.getElementById("mobile-menu-drawer");
      if (drawer && drawer.contains(e.target as Node)) return;
      e.preventDefault();
    };
    document.addEventListener("touchmove", blockTouch, { passive: false });

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if ((window as any).lenis) (window as any).lenis.start();
      document.removeEventListener("touchmove", blockTouch);
    };
  }, [open]);

  const isProjectDetail = pathname?.startsWith("/portfolio/") && pathname !== "/portfolio";
  const showSolidBackground = scrolled || isTransitioning || isProjectDetail;

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] pointer-events-none">
      <TopContactBar />

      <div className={`relative z-50 transition-all duration-500 ${showSolidBackground ? "px-2 sm:px-4 pt-0" : "px-3 sm:px-6 pt-2.5 sm:pt-3"}`}>
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between gap-3 max-w-7xl px-4 py-2 sm:px-7 transition-all duration-500 ${
            showSolidBackground
              ? "rounded-t-none rounded-b-[2.5rem] bg-white/30 border border-transparent border-t-0 text-forest shadow-[0_8px_32px_-8px_rgba(35,67,58,0.12)] backdrop-blur-xl"
              : "rounded-[2.5rem] bg-transparent border-transparent text-forest shadow-none backdrop-blur-none"
          }`}
        >
          <Link href="/" className="flex min-w-0 items-center gap-3 shrink-0 py-0.5">
            <img
              src={(typeof havenLogo === 'object' && havenLogo !== null ? ((havenLogo as any).default?.src || (havenLogo as any).src || (havenLogo as any).default || havenLogo) : havenLogo)}
              alt="Haven M Construction"
              className="h-16 w-auto sm:h-20 lg:h-24 object-contain filter drop-shadow-xs transition-all hover:scale-105"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <DesktopNav pathname={pathname || ""} />

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
              className={`pointer-events-auto relative flex items-center justify-center h-10 w-10 rounded-full border transition-all duration-500 overflow-hidden active:scale-95 lg:hidden shrink-0 ${
                open ? "bg-forest border-forest text-linen" : "bg-forest/10 border-forest/20 text-forest"
              }`}
            >
              <div className="flex flex-col gap-[6px] items-center justify-center w-full h-full">
                <span className={`block h-[2px] w-5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${open ? "translate-y-[8px] rotate-[225deg] bg-linen" : "bg-forest"}`} />
                <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ease-out ${open ? "opacity-0 scale-x-0 bg-linen" : "bg-forest"}`} />
                <span className={`block h-[2px] w-5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${open ? "-translate-y-[8px] -rotate-[225deg] bg-linen" : "bg-forest"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && <MobileMenu pathname={pathname || ""} setOpen={setOpen} />}
      </AnimatePresence>
    </header>
  );
}

