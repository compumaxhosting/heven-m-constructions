"use client";
import { useState, useRef } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="mesh-warm relative py-16 sm:py-28 lg:py-40" style={{ overflow: 'clip' }}>
      {/* Glows — kept inside but clipped so they never cause horizontal scroll */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#9dbd90] to-[#c7e3bb] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[#e58a5b] to-[#f3cbab] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute -top-20 left-0 h-[380px] w-[380px] rounded-full bg-terracotta/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Left: copy & review QR ── */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
              <span className="inline-block h-px w-10 bg-olive/60" /> 06 — Begin
            </div>

            <h2
              className="font-display leading-[1.1] tracking-[-0.02em] text-forest"
              style={{
                fontSize: 'clamp(2rem, 6vw, 5.5rem)',
              }}
            >
              Tell us about the{' '}
              <span className="italic text-terracotta">Project</span>{' '}
              you&apos;re imagining.
            </h2>

            <p className="mt-5 sm:mt-7 text-sm sm:text-base leading-relaxed text-forest-deep">
              We take on a small number of new projects each season. Share a
              few details — we reply personally within two business days.
            </p>

            <dl className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-olive">Studio</dt>
                <dd className="font-display mt-1 text-base sm:text-lg text-forest">Verona, NJ 07044</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-olive">Direct</dt>
                <dd
                  className="font-display mt-1 text-base sm:text-lg text-forest"
                  style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                >
                  gus@havenmconstruction.com
                </dd>
              </div>
            </dl>

            {/* Review QR Code Badge */}
            <div className="mt-8 rounded-[24px] border border-forest/15 bg-white/60 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-[0_8px_30px_rgba(35,53,40,0.06)]">
              <a 
                href="https://g.page/r/CbQEE19GUtZAEBI/review"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-[20px] border border-forest/10 shadow-sm shrink-0 block hover:scale-105 transition-transform"
                title="Click to leave a review"
              >
                <img
                  src="/images/review-qr.png"
                  alt="Scan or click QR code to leave a review for Haven M Construction"
                  className="w-36 h-36 sm:w-44 sm:h-44 object-contain rounded-xl"
                  loading="lazy"
                />
              </a>
              <div className="min-w-0 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] bg-terracotta/10 text-terracotta px-3 py-1 rounded-full font-semibold">
                    Client Review
                  </span>
                  <span className="text-amber-500 text-sm">★★★★★</span>
                </div>
                <div className="font-display text-xl sm:text-2xl text-forest leading-tight mb-2">
                  Worked with Haven M?
                </div>
                <p className="text-sm text-forest-deep mt-1 leading-relaxed max-w-sm">
                  Scan with your smartphone camera to share your review and project experience.
                </p>
                <div className="mt-4 flex items-center justify-center sm:justify-start gap-2.5 pt-3 border-t border-forest/10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-olive font-medium mr-1">Follow us:</span>
                  <a
                    href="https://www.instagram.com/havenmconstruction/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white shadow-sm transition-transform hover:scale-110"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61592782718700"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm transition-transform hover:scale-110"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/HavenMconst"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-sm transition-transform hover:scale-110"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@havenmconstruction?lang=en"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-sm transition-transform hover:scale-110"
                  >
                    <svg className="h-4 w-4 overflow-visible" viewBox="0 0 24 24">
                      <path d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z" fill="#25F4EE" transform="translate(-0.4, -0.3)" />
                      <path d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z" fill="#FE2C55" transform="translate(0.4, 0.3)" />
                      <path d="M12.525 0h3.08c0 3.32 2.5 5.86 5.86 5.86v3.2a8.88 8.88 0 0 1-5.86-2.14v8.52a6.44 6.44 0 1 1-6.44-6.44c.48 0 .94.06 1.38.16V12.4a3.22 3.22 0 1 0 1.98 2.98V0z" fill="#FFFFFF" />
                    </svg>
                  </a>
                  <a
                    href="https://g.page/r/havenmconstruction/review"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Google Review"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-forest/20 shadow-xs transition-transform hover:scale-110"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <form
            onSubmit={handleSubmit}
            className="glass min-w-0 rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 lg:p-10"
          >
            {submitted ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 text-center">
                <div className="font-display text-4xl text-forest">Thank you.</div>
                <p className="text-forest-deep">We&apos;ll be in touch within two business days.</p>
              </div>
            ) : (
              <div className="grid gap-5">
                {[
                  { label: 'Your name', name: 'name', type: 'text', placeholder: 'Ada Lovelace', required: true },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'ada@studio.com', required: true },
                  { label: 'Project location', name: 'location', type: 'text', placeholder: 'City, state', required: false },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-[10px] uppercase tracking-[0.28em] text-olive">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="mt-3 w-full rounded-full border border-forest/15 bg-linen/60 px-5 py-3.5 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.28em] text-olive">A few words</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Tell us about the space, the timeline, the feeling you want."
                    className="mt-3 w-full resize-none rounded-2xl border border-forest/15 bg-linen/60 p-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.01]"
                >
                  Send inquiry <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
