"use client";
import { useState } from 'react';
import Image from 'next/image';
import qrImage from '../../assets/qr.jpeg';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="col-span-1 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch h-full">
      {submitted ? (
        <div className="md:col-span-2 rounded-[24px] border border-forest/15 bg-white/70 backdrop-blur-sm p-12 text-center min-h-[420px] flex flex-col items-center justify-center gap-6 w-full shadow-[0_8px_30px_rgba(35,53,40,0.04)] h-full">
          <div className="font-display text-6xl text-terracotta">&ldquo;</div>
          <h2 className="font-display text-4xl text-forest">Thank you.</h2>
          <p className="text-forest-deep max-w-sm">We&apos;ve received your inquiry and will reply personally within two business days.</p>
          <div className="font-mono text-xs text-olive uppercase tracking-[0.28em]">Haven M Construction</div>
        </div>
      ) : (
        <>
          {/* Main Inquiry Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[24px] border border-forest/15 bg-white/70 backdrop-blur-sm p-6 sm:p-7 shadow-[0_8px_30px_rgba(35,53,40,0.04)] flex flex-col justify-between h-full space-y-4 sm:space-y-4.5"
          >
            <div className="space-y-4 flex-1 flex flex-col">
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  { label: 'Your name', name: 'name', type: 'text', placeholder: 'Ada Lovelace' },
                  { label: 'Email address', name: 'email', type: 'email', placeholder: 'ada@studio.com' },
                ].map((f) => (
                  <div key={f.label}>
                    <label htmlFor={`cf-${f.name}`} className="text-[10px] uppercase tracking-[0.24em] text-forest/75 font-medium block mb-1">
                      {f.label}
                    </label>
                    <input
                      id={`cf-${f.name}`}
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      className="w-full rounded-full border border-forest/15 bg-linen/60 px-4 py-2.5 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="cf-location" className="text-[10px] uppercase tracking-[0.24em] text-forest/75 font-medium block mb-1">
                  Project location
                </label>
                <input
                  id="cf-location"
                  type="text"
                  placeholder="City, state"
                  className="w-full rounded-full border border-forest/15 bg-linen/60 px-4 py-2.5 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors"
                />
              </div>

              <div className="flex-1 flex flex-col min-h-[140px]">
                <label htmlFor="cf-message" className="text-[10px] uppercase tracking-[0.24em] text-forest/75 font-medium block mb-1">
                  Tell us about the space
                </label>
                <textarea
                  id="cf-message"
                  placeholder="The timeline, the feeling you want, anything that feels important."
                  className="w-full flex-1 resize-none rounded-2xl border border-forest/15 bg-linen/60 p-3.5 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors min-h-[130px]"
                />
              </div>
            </div>

            <div className="pt-2 mt-auto">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-linen transition-all hover:bg-forest-deep hover:scale-[1.01] active:scale-[0.99] shadow-sm cursor-pointer"
              >
                Send inquiry <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </form>

          {/* Review QR Code Card - Wide & Big Image */}
          <div className="rounded-[28px] border border-forest/15 bg-white/80 backdrop-blur-sm p-4 sm:p-6 shadow-[0_12px_40px_rgba(35,53,40,0.06)] flex flex-col justify-between items-center text-center h-full">
            <div className="w-full flex items-center justify-between px-2 pb-2.5 border-b border-forest/10 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] bg-terracotta/10 text-terracotta px-3 py-1 rounded-full font-semibold">
                Google Review
              </span>
              <span className="text-amber-500 text-sm font-semibold flex items-center gap-1">
                ★★★★★ <span className="text-xs text-forest/75 font-sans font-medium">5.0</span>
              </span>
            </div>

            <a
              href="https://g.page/r/CbQEE19GUtZAEBI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-1 flex items-center justify-center p-2 sm:p-4 bg-white rounded-[24px] border border-forest/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(35,53,40,0.12)] transition-all duration-300 hover:scale-[1.02] group my-auto overflow-hidden"
              title="Click or scan to leave a review on Google"
            >
              <Image
                src={qrImage}
                alt="Scan or click QR code to leave a review for Haven M Construction"
                width={500}
                height={560}
                priority
                className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] h-auto object-contain rounded-xl"
              />
            </a>

            <div className="w-full pt-3 mt-auto">
              <a
                href="https://g.page/r/CbQEE19GUtZAEBI/review"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 bg-forest/5 px-4 py-3.5 text-xs font-semibold text-forest hover:bg-forest hover:text-linen transition-all duration-200 group shadow-sm"
              >
                <span>Tap or scan to review on Google</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
