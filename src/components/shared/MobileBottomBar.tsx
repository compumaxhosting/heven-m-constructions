"use client";
import Link from 'next/link';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] sm:hidden">
      {/* Subtle backdrop shadow */}
      <div className="h-4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div
        className="grid grid-cols-3 border-t border-forest/15 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.15)]"
        style={{
          background: 'linear-gradient(135deg, #1C3A2A 0%, #2D4C3A 50%, #C8714A 100%)',
        }}
      >
        {/* Contact / Call button */}
        <a
          href="tel:9732070689"
          className="flex flex-col items-center justify-center py-3 px-1 text-linen hover:text-white transition-all active:scale-95 border-r border-white/10"
        >
          <svg className="w-5 h-5 mb-1 text-linen/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[11px] font-medium tracking-wider uppercase">Contact</span>
        </a>

        {/* Services button */}
        <Link
          href="/services"
          className="flex flex-col items-center justify-center py-3 px-1 text-linen hover:text-white transition-all active:scale-95 border-r border-white/10"
        >
          <svg className="w-5 h-5 mb-1 text-linen/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-[11px] font-medium tracking-wider uppercase">Services</span>
        </Link>

        {/* Location button */}
        <Link
          href="/contact#location"
          className="flex flex-col items-center justify-center py-3 px-1 text-linen hover:text-white transition-all active:scale-95"
        >
          <svg className="w-5 h-5 mb-1 text-linen/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[11px] font-medium tracking-wider uppercase">Location</span>
        </Link>
      </div>
    </div>
  );
}
