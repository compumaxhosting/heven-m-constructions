"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MobileBottomBar() {
  const navItems = [
    {
      label: 'Call',
      title: 'Contact Us',
      href: 'tel:9732070689',
      isExternal: true,
      btnClass: 'bg-white/95 text-slate-950 font-extrabold shadow-[0_0_16px_rgba(255,255,255,0.45)] border border-white/60 hover:bg-white',
      icon: (
        <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: 'Services',
      title: 'Our Services',
      href: '/services',
      isExternal: false,
      btnClass: 'bg-indigo-900 text-white font-extrabold shadow-[0_0_16px_rgba(49,46,129,0.55)] border border-indigo-400/30',
      icon: (
        <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      label: 'Location',
      title: 'Our Location',
      href: '/contact#location',
      isExternal: false,
      btnClass: 'bg-rose-900 text-white font-extrabold shadow-[0_0_16px_rgba(159,18,57,0.55)] border border-rose-400/30',
      icon: (
        <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <nav aria-label="Mobile Quick Actions" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] sm:hidden w-[calc(100%-1.5rem)] max-w-sm">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="relative grid grid-cols-3 gap-1.5 p-1.5 rounded-full bg-slate-950/95 backdrop-blur-2xl border border-white/20 shadow-[0_15px_45px_rgba(0,0,0,0.5)]"
      >
        {/* Glow ambient background mesh */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-indigo-500/20 to-rose-500/20 blur-md pointer-events-none -z-10" />

        {navItems.map((item, idx) => {
          const content = (
            <motion.div
              whileTap={{ scale: 0.93 }}
              whileHover={{ scale: 1.04 }}
              className={`w-full flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 py-2.5 rounded-full transition-all duration-200 ${item.btnClass}`}
            >
              <span className="shrink-0">{item.icon}</span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase drop-shadow-sm whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          );

          return item.isExternal ? (
            <a key={idx} href={item.href} title={item.title} aria-label={item.title} className="w-full flex">
              {content}
            </a>
          ) : (
            <Link key={idx} href={item.href} title={item.title} aria-label={item.title} className="w-full flex">
              {content}
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
}


