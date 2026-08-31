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
    </div>
  );
}
