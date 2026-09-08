"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { ArrowRight, ChevronDown } from "lucide-react";
import { links, mainServices } from "./navData";
import MobileMenuCTA from "./MobileMenuCTA";

interface MobileMenuProps {
  pathname: string;
  setOpen: (val: boolean) => void;
}

export default function MobileMenu({ pathname, setOpen }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="pointer-events-auto mx-auto mt-3 mb-16 max-w-7xl max-h-[calc(100dvh-200px)] overflow-y-auto rounded-3xl bg-[#F5F2EC] border border-forest/20 p-6 pb-20 text-forest shadow-[0_25px_60px_-15px_rgba(35,67,58,0.25)] lg:hidden"
      id="mobile-menu-drawer"
      data-lenis-prevent
    >
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-forest/10">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-forest-deep">
          NAVIGATION MENU
        </span>
        <span className="font-mono text-xs text-forest-deep">
          HAVEN M
        </span>
      </div>

      <nav className="grid gap-2">
        {links.map((l) => {
          const isServices = l.hasDropdown;
          const isBlog = l.to === '/blog';
          const isActive =
            (isBlog && pathname.startsWith('/blog')) ||
            (isServices && !pathname.startsWith('/blog') && (pathname.startsWith('/services') || pathname.includes('additions') || pathname.includes('engineering') || (pathname.includes('construction') && !pathname.startsWith('/blog')))) ||
            (!isBlog && !isServices && pathname === l.to);

          if (isServices) {
            return (
              <div key={l.to} className="rounded-2xl border border-forest/10 bg-white/40 overflow-hidden">
                <div
                  className={`group flex items-center justify-between px-4 py-3.5 transition-all cursor-pointer ${
                    isActive
                      ? "bg-forest/10 text-forest font-semibold"
                      : "hover:bg-forest/5 text-forest hover:text-forest"
                  }`}
                  onClick={() => setServicesExpanded((prev) => !prev)}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-forest/60 group-hover:text-forest">
                      {l.num}
                    </span>
                    <span className="font-display text-2xl tracking-wide">
                      {l.label}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-forest transition-transform duration-300 ${
                      servicesExpanded ? "rotate-180 text-terracotta" : "opacity-60"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {servicesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden bg-[#EFECE5]/60 border-t border-forest/10 px-3 py-2 space-y-1"
                    >
                      <Link
                        href="/services"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-2 px-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold text-terracotta hover:bg-white/60 transition-colors"
                      >
                        <span>All Services Overview</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      {mainServices.map((svc) => {
                        const isCurrent = pathname === svc.href;
                        return (
                          <Link
                            key={svc.href}
                            href={svc.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between py-2 px-3 rounded-xl text-[14px] transition-all ${
                              isCurrent
                                ? "bg-forest text-linen font-semibold shadow-xs"
                                : "text-forest/85 hover:text-forest hover:bg-white/80"
                            }`}
                          >
                            <span>{svc.title}</span>
                            <ArrowRight
                              className={`h-3.5 w-3.5 transition-transform ${
                                isCurrent ? "text-linen" : "text-forest/40"
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <div key={l.to}>
              <Link
                href={l.to}
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

      <MobileMenuCTA setOpen={setOpen} />
    </motion.div>
  );
}
