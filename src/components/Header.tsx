import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Phone, Mail, Check, Copy } from "lucide-react";
import havenLogo from "../assets/haven-logo.png";

const links = [
  { num: "01", label: "Home", to: "/" },
  { num: "02", label: "About", to: "/about" },
  { num: "03", label: "Services", to: "/services" },
  { num: "04", label: "Portfolio", to: "/portfolio" },
  { num: "05", label: "Showcase", to: "/showcase" },
  { num: "06", label: "Blog", to: "/blog" },
  { num: "07", label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61592782718700",
    label: "Facebook",
    bgClass: "",
    whileHover: { scale: 1.15, y: -2, rotate: 3 },
    icon: (
      <svg
        className="h-4 w-4 text-[#1877f2]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/havenmconstruction/",
    label: "Instagram",
    bgClass: "",
    whileHover: { scale: 1.18, y: -2, rotate: -6 },
    icon: (
      <>
        <svg width="0" height="0" className="absolute">
          <linearGradient id="ig-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop stopColor="#833ab4" offset="0%" />
            <stop stopColor="#e1306c" offset="50%" />
            <stop stopColor="#f9ce3f" offset="100%" />
          </linearGradient>
        </svg>
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="url(#ig-grad)"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
        </svg>
      </>
    ),
  },
  {
    href: "https://x.com",
    label: "X",
    bgClass: "",
    whileHover: { scale: 1.15, y: -2, rotate: -3 },
    icon: (
      <svg
        className="h-3.5 w-3.5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
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
        {/* Cyan Offset Layer */}

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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prevPathname = useRef(location.pathname);

  // Show a solid background in the header during the entire page transition wipe (exit + enter)
  useEffect(() => {
    if (prevPathname.current === location.pathname) {
      return;
    }
    prevPathname.current = location.pathname;

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Pause Lenis smooth scroll if it exists
    if ((window as any).lenis) {
      (window as any).lenis.stop();
    }

    const blockTouch = (e: TouchEvent) => {
      const drawer = document.getElementById("mobile-menu-drawer");
      if (drawer && drawer.contains(e.target as Node)) return;
      e.preventDefault();
    };
    document.addEventListener("touchmove", blockTouch, { passive: false });

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      // Resume Lenis smooth scroll if it exists
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }

      document.removeEventListener("touchmove", blockTouch);
    };
  }, [open]);

  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("gus@havenmconstruction.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const isProjectDetail =
    location.pathname.startsWith("/portfolio/") &&
    location.pathname !== "/portfolio";
  const showSolidBackground = scrolled || isTransitioning || isProjectDetail;

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] pointer-events-none">
      {/* Pixel-Perfect Ultra-Luxury Dark Top Bar */}
      <div className="pointer-events-auto relative w-full bg-[linear-gradient(to_right,#9e462a,#1c3c2b,#0d1f16)] sm:bg-[linear-gradient(to_right,#0d1f16,#1c3c2b,#9e462a,#1c3c2b,#0d1f16)] text-linen px-3 sm:px-8 py-2.5 shadow-md backdrop-blur-xl border-b border-white/15 overflow-hidden">
        {/* Ambient warm color gradient sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-amber-400/15 to-emerald-400/10 pointer-events-none mix-blend-screen" />

        {/* Metallic gold & terracotta hairline border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-200/70 to-transparent pointer-events-none" />

        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center sm:justify-between gap-y-2.5 gap-x-3 text-xs">
          {/* Left side: Contact Pills */}
          <div className="flex items-center gap-2 sm:gap-3.5 flex-wrap">
            {/* Direct Phone Pill Button */}
            <a
              href="tel:+12012643506"
              className="group flex sm:inline-flex items-center justify-center sm:gap-2 h-10 w-10 sm:h-auto sm:w-auto rounded-full bg-gradient-to-tr from-terracotta to-amber-600 sm:bg-none sm:bg-white/[0.1] hover:bg-white/[0.2] shadow-[0_4px_12px_rgba(0,0,0,0.4)] sm:shadow-xs border border-white/40 sm:border sm:border-white/20 sm:pl-1.5 sm:pr-3 sm:py-1 text-xs font-sans text-linen transition-all duration-300 hover:border-forest active:scale-95 hover:shadow-[0_0_16px_rgba(42,75,60,0.5)]"
              title="Call Haven M Construction: (201) 264-3506"
            >
              <div className="flex sm:h-6 sm:w-6 items-center justify-center rounded-full text-white sm:bg-terracotta sm:text-white sm:shadow-xs group-hover:bg-forest group-hover:text-white transition-all duration-300 shrink-0 animate-[pulse_2s_ease-in-out_infinite] sm:animate-none">
                <Phone className="h-5 w-5 sm:h-3.5 sm:w-3.5 group-hover:rotate-12 transition-transform shrink-0" />
              </div>
              <span className="hidden sm:inline font-semibold tracking-tight text-linen group-hover:text-white">
                (201) 264-3506
              </span>
            </a>

            {/* Direct Email Pill Button with One-Click Copy */}
            <div className="relative hidden sm:inline-flex items-center">
              <a
                href="mailto:gus@havenmconstruction.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white/[0.1] hover:bg-white/[0.2] border border-white/20 pl-1.5 pr-1.5 py-1 text-xs font-sans text-linen transition-all duration-300 hover:border-forest active:scale-95 shadow-xs hover:shadow-[0_0_16px_rgba(42,75,60,0.5)]"
                title="Email Haven M Construction: gus@havenmconstruction.com"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-terracotta text-white shadow-xs group-hover:bg-forest group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </div>
                <span className="font-semibold tracking-tight text-linen group-hover:text-white">
                  gus@havenmconstruction.com
                </span>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="ml-1 px-1.5 py-0.5 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-colors flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <span className="inline-flex items-center gap-1 text-[10px] text-sage font-medium">
                      <Check className="h-3 w-3 text-sage" />
                      <span>Copied</span>
                    </span>
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </a>
            </div>
          </div>

          {/* Right side: Social Media Icons (Clean Row without Box) */}
          <div className="flex items-center gap-3 sm:gap-3">
            {socialLinks.map(({ href, label, icon, bgClass, whileHover }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full hover:bg-white/10 transition-colors [&>svg]:scale-[1.5] sm:[&>svg]:scale-[1.25] ${bgClass}`}
                whileHover={whileHover}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 600, damping: 25 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Luxury Floating Header Bar */}
      <div
        className={`relative z-50 transition-all duration-500 ${showSolidBackground ? "px-2 sm:px-4 pt-0" : "px-3 sm:px-6 pt-2.5 sm:pt-3"}`}
      >
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between gap-3 max-w-7xl px-4 py-2 sm:px-7 transition-all duration-500 ${
                showSolidBackground
                  ? "rounded-t-none rounded-b-[2.5rem] bg-white/30 border border-transparent border-t-0 text-forest shadow-[0_8px_32px_-8px_rgba(35,67,58,0.12)] backdrop-blur-xl"
                  : "rounded-[2.5rem] bg-transparent border-transparent text-forest shadow-none backdrop-blur-none"
          }`}
        >
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3 shrink-0 py-0.5"
          >
            <img
              src={havenLogo}
              alt="Haven M Construction"
              className="h-16 w-auto sm:h-20 lg:h-24 object-contain filter drop-shadow-xs transition-all hover:scale-105"
            />
          </Link>

          {/* Right section: Desktop nav + Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Links */}
            <nav className="hidden items-center gap-1.5 lg:flex">
              {links.map((l) => {
                const isActive = location.pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                            isActive
                              ? "text-forest font-bold"
                              : "text-forest/75 hover:text-forest"
                          }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full bg-forest/10 border border-forest/15 shadow-xs"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
              className={`pointer-events-auto relative flex items-center justify-center h-10 w-10 rounded-full border transition-all duration-500 overflow-hidden active:scale-95 lg:hidden shrink-0 ${
                open
                  ? "bg-forest border-forest text-linen"
                  : "bg-forest/10 border-forest/20 text-forest"
              }`}
            >
              <div className="flex flex-col gap-[6px] items-center justify-center w-full h-full">
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
                    open
                      ? "translate-y-[8px] rotate-[225deg] bg-linen"
                      : "bg-forest"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 ease-out ${
                    open ? "opacity-0 scale-x-0 bg-linen" : "bg-forest"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
                    open
                      ? "-translate-y-[8px] -rotate-[225deg] bg-linen"
                      : "bg-forest"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto mx-auto mt-3 max-w-7xl max-h-[calc(100dvh-160px)] overflow-y-auto rounded-3xl bg-[#F5F2EC] border border-forest/20 p-6 text-forest shadow-[0_25px_60px_-15px_rgba(35,67,58,0.25)] lg:hidden"
            id="mobile-menu-drawer"
            data-lenis-prevent
          >
            {/* Top Bar inside Mobile Modal */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-forest/10">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-forest-deep">
                NAVIGATION MENU
              </span>
              <span className="font-mono text-xs text-forest-deep">
                HAVEN M
              </span>
            </div>

            {/* Mobile Nav Links */}
            <nav className="grid gap-2">
              {links.map((l, index) => {
                const isActive = location.pathname === l.to;
                return (
                  <div key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all ${
                        isActive
                          ? "bg-forest/10 text-forest border border-forest/20 font-semibold"
                          : "hover:bg-forest/5 text-forest hover:text-forest"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-forest/60 group-hover:text-forest">
                          {l.num}
                        </span>
                        <span className="font-display text-2xl tracking-wide">
                          {l.label}
                        </span>
                      </div>
                      <ArrowRight
                        className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                          isActive ? "text-forest" : "opacity-40"
                        }`}
                      />
                    </Link>
                  </div>
                );
              })}
            </nav>

            <div className="mt-4 border-t border-forest/10 pt-4">
              <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-forest/60">
                <span className="h-px w-8 bg-forest/20" />
                Follow along
              </div>
              <div className="flex flex-wrap gap-2.5">
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
                            : "";
                  return (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 shadow-sm ${mobileBgClass}`}
                      whileHover={whileHover}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 16,
                      }}
                    >
                      {label === "Facebook" ? (
                        <svg
                          className="h-4 w-4 text-white animate-none"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      ) : label === "X" ? (
                        <svg
                          className="h-3.5 w-3.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ) : label === "Instagram" ? (
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                        </svg>
                      ) : (
                        icon
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA inside Mobile Menu */}
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
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-forest px-5 py-3 font-medium text-linen shadow-md transition-transform active:scale-[0.98]"
              >
                <span>Begin a Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
