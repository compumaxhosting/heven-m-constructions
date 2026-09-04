"use client";
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Studio', value: 'Verona, NJ 07044', sub: 'By appointment only' },
  { icon: Mail, label: 'Email', value: 'gus@havenmconstruction.com', href: 'mailto:gus@havenmconstruction.com', sub: 'We reply within 2 business days' },
  { icon: Phone, label: 'Phone', value: '201 264-3506', href: 'tel:+12012643506' },
  { icon: Clock, label: 'Season', value: 'Now booking for 2026', sub: 'Limited availability' },
];

export default function ContactInfo() {
  return (
    <div className="col-span-1 lg:col-span-4 space-y-6">
      <div className="space-y-6">
        {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
          <div key={label} className="flex gap-4 group">
            {href ? (
              <a
                href={href}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/5 border border-forest/10 group-hover:bg-forest transition-colors duration-300"
                title={`Connect via ${label}`}
              >
                <Icon size={16} className="text-clay group-hover:text-linen transition-colors duration-300" />
              </a>
            ) : (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/5 border border-forest/10">
                <Icon size={16} className="text-clay" />
              </div>
            )}
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-olive mb-1">{label}</div>
              {href ? (
                <a
                  href={href}
                  className="font-display text-lg text-forest hover:text-clay transition-colors hover:underline underline-offset-4 break-all block"
                >
                  {value}
                </a>
              ) : (
                <div className="font-display text-lg text-forest break-all">{value}</div>
              )}
              {sub && <div className="text-xs text-forest/60 mt-0.5">{sub}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* What to expect */}
      <div className="rounded-2xl bg-sand p-6">
        <div className="font-display text-xl text-forest mb-3">What to expect</div>
        <ol className="space-y-2 text-sm text-forest-deep list-none">
          {[
            'We review your inquiry within 48 hours',
            'A principal schedules a 30-min discovery call',
            'We visit the space and provide a detailed proposal',
            'We begin when you are ready',
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-mono text-[10px] text-clay mt-0.5">0{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Social Media & Google Review */}
      <div className="rounded-2xl border border-forest/10 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
        <div className="text-[10px] uppercase tracking-[0.28em] text-olive mb-3">Connect With Us</div>
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <a
            href="https://www.instagram.com/havenmconstruction/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white shadow-sm transition-transform hover:scale-110"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61592782718700"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm transition-transform hover:scale-110"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href="https://x.com/HavenMconst"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-sm transition-transform hover:scale-110"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@havenmconstruction?lang=en"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-sm transition-transform hover:scale-110"
          >
            <svg className="h-5 w-5 overflow-visible" viewBox="0 0 24 24">
              <path d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z" fill="#25F4EE" transform="translate(-0.4, -0.3)" />
              <path d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z" fill="#FE2C55" transform="translate(0.4, 0.3)" />
              <path d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z" fill="#FFFFFF" />
            </svg>
          </a>
          <a
            href="https://g.page/r/CbQEE19GUtZAEBI/review"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Review"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-forest/20 shadow-sm transition-transform hover:scale-110"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
          </a>
        </div>
        <a
          href="https://g.page/r/CbQEE19GUtZAEBI/review"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-forest hover:text-terracotta transition-colors group"
        >
          <span>Rate & review on Google</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}
