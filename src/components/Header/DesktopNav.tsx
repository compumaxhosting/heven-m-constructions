"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { links, mainServices } from './navData';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function DesktopNav({ pathname }: { pathname: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (hasDropdown?: boolean) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hasDropdown) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <nav className="hidden items-center gap-1 lg:flex relative">
      {links.map((l) => {
        const isServices = l.hasDropdown;
        const isActive =
          pathname === l.to ||
          (isServices && (pathname.startsWith('/services') || pathname.includes('construction') || pathname.includes('additions') || pathname.includes('engineering')));

        return (
          <div
            key={l.to}
            className="relative"
            onMouseEnter={() => handleMouseEnter(l.hasDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={l.to}
              onClick={() => setDropdownOpen(false)}
              className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
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
              {isServices && (
                <ChevronDown
                  className={`relative z-10 h-3.5 w-3.5 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180 text-terracotta" : "opacity-60"
                  }`}
                />
              )}
            </Link>

            {/* Clean, Minimal Services Dropdown Menu */}
            {isServices && (
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-2 w-[270px] z-[1000] pointer-events-auto"
                    onMouseEnter={() => handleMouseEnter(true)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="overflow-hidden rounded-2xl bg-[#F6F4EE]/95 backdrop-blur-xl border border-forest/15 shadow-[0_15px_35px_rgba(35,53,40,0.12)] p-2">
                      <div className="space-y-0.5">
                        {mainServices.map((service) => {
                          const isCurrent = pathname === service.href;
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setDropdownOpen(false)}
                              className={`group flex items-center justify-between rounded-xl px-3 py-2 text-[13px] font-medium transition-all ${
                                isCurrent
                                  ? "bg-forest text-linen font-semibold"
                                  : "text-forest/85 hover:text-forest hover:bg-white/80"
                              }`}
                            >
                              <span className="truncate">{service.title}</span>
                              <ArrowRight
                                className={`h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
                                  isCurrent ? "text-linen opacity-100 translate-x-0" : "text-terracotta"
                                }`}
                              />
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-1.5 pt-1.5 border-t border-forest/10">
                        <Link
                          href="/services"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-[12px] font-semibold text-terracotta hover:bg-terracotta/10 transition-colors uppercase tracking-wider font-mono"
                        >
                          <span>All Services</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </nav>
  );
}
