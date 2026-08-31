"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="col-span-1 lg:col-span-8">
      {submitted ? (
        <div className="glass flex-1 rounded-[28px] p-12 text-center min-h-[400px] flex flex-col items-center justify-center gap-6 w-full">
          <div className="font-display text-6xl text-terracotta">"</div>
          <h2 className="font-display text-4xl text-forest">Thank you.</h2>
          <p className="text-forest-deep max-w-sm">We've received your inquiry and will reply personally within two business days.</p>
          <div className="font-mono text-xs text-olive uppercase tracking-[0.28em]">Haven M Construction</div>
        </div>
      ) : (
        <div className="flex flex-col xl:flex-row gap-8 items-start w-full">
          <form onSubmit={handleSubmit} className="flex-1 glass w-full rounded-[28px] p-6 sm:p-12 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: 'Your name', type: 'text', placeholder: 'Ada Lovelace' },
                { label: 'Email address', type: 'email', placeholder: 'ada@studio.com' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-[10px] uppercase tracking-[0.28em] text-olive">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} required className="mt-3 w-full rounded-full border border-forest/15 bg-linen/60 px-5 py-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors" />
                </div>
              ))}
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.28em] text-olive">Project location</label>
              <input type="text" placeholder="City, state" className="mt-3 w-full rounded-full border border-forest/15 bg-linen/60 px-5 py-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.28em] text-olive">Tell us about the space</label>
              <textarea rows={5} placeholder="The timeline, the feeling you want, anything that feels important." className="mt-3 w-full resize-none rounded-2xl border border-forest/15 bg-linen/60 p-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors" />
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.01]">
              Send inquiry <span aria-hidden="true">→</span>
            </button>
          </form>

          {/* Review QR Code Card */}
          <div className="xl:w-[320px] shrink-0 rounded-[24px] border border-forest/15 bg-white/70 backdrop-blur-sm p-6 shadow-[0_8px_30px_rgba(35,53,40,0.06)] flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-terracotta/10 text-terracotta px-2.5 py-0.5 rounded-full font-semibold">
                Client Review
              </span>
            </div>
            <div className="font-display text-xl text-forest mb-2">Review Haven M</div>
            <p className="text-sm text-forest-deep leading-relaxed mb-6">
              Point your smartphone camera at the code to share your project experience.
            </p>
            
            <a 
              href="https://g.page/r/CbQEE19GUtZAEBI/review"
              target="_blank" 
              rel="noopener noreferrer"
              className="relative p-3 bg-white rounded-[20px] border border-forest/15 shadow-sm block hover:scale-105 transition-transform"
              title="Click to leave a review"
            >
              <img
                src="/images/review-qr.png"
                alt="Scan or click QR code to review Haven M Construction"
                className="w-44 h-44 object-contain rounded-xl"
                loading="lazy"
              />
            </a>
            
            <div className="mt-6 flex items-center gap-1 text-amber-500 text-sm">
              ★★★★★
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
