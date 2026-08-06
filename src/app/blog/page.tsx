import { Link } from 'react-router-dom';
import { ArrowLeft, Wrench, ShieldAlert, Sparkles } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden pt-44 pb-24 sm:pt-52 sm:pb-32">
      {/* Background ambient radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: '#F6F4EE',
          backgroundImage: [
            'radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.40) 0%, rgba(210,125,85,0.15) 40%, transparent 70%)',
            'radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.40) 0%, rgba(138,168,125,0.12) 40%, transparent 70%)',
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.8) 0%, transparent 100%)',
          ].join(', '),
        }}
      />

      {/* Top Left Glow */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-45 blur-[130px]" />
      
      {/* Top Right Glow */}
      <div className="pointer-events-none absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-40 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Top Tagline */}
        <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive mb-6">
          <span className="inline-block h-px w-10 bg-olive/60" />
          Restricted Access · Studio Journal
          <span className="inline-block h-px w-10 bg-olive/60" />
        </div>

        {/* Maintenance Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono font-semibold mb-8 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <Wrench className="h-3.5 w-3.5 text-amber-700" />
          <span>Page Under Maintenance</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-forest max-w-3xl">
          Stories & Journals are <br />
          <span className="italic text-terracotta">under construction.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-forest-deep">
          We are currently updating our editorial journal with architectural case studies, materials research, and behind-the-scenes craft stories. Access is temporarily restricted while updates are underway.
        </p>

        {/* Maintenance Glass Card */}
        <div className="mt-8 w-full max-w-md rounded-2xl bg-white/60 border border-forest/15 p-6 backdrop-blur-md shadow-md text-left flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 border border-forest/15 text-forest">
            <ShieldAlert className="h-5 w-5 text-terracotta" />
          </div>
          <div>
            <div className="font-display text-base font-semibold text-forest">Restricted Notice</div>
            <div className="text-xs text-forest-deep/80 mt-1 leading-normal">
              Expected launch: Q3 2026. For immediate architectural inquiries or project requests, please connect directly with our studio.
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-linen shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.97]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/5 px-6 py-3.5 text-sm font-semibold text-forest hover:bg-forest hover:text-linen transition-all active:scale-[0.97]"
          >
            <Sparkles className="h-4 w-4 text-clay" />
            <span>Contact Studio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
