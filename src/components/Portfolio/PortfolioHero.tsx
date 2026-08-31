"use client";

export default function PortfolioHero() {
  return (
    <section
      className="relative overflow-hidden pt-44 pb-20 sm:pt-52"
      style={{
        backgroundColor: "#F6F4EE",
        backgroundImage: [
          "radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.50) 0%, rgba(210,125,85,0.18) 40%, transparent 70%)",
          "radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.45) 0%, rgba(138,168,125,0.15) 40%, transparent 70%)",
          "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)",
        ].join(", "),
      }}
    >
      <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />
      <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive mb-8">
          <span className="inline-block h-px w-10 bg-olive/60" /> Selected
          Work
        </div>
        <h1 className="font-display text-[clamp(2.2rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] text-forest">
          A portfolio measured in{" "}
          <span className="italic text-clay">rooms</span>,<br />
          not square feet.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest-deep">
          Recent projects demonstrating our commitment to craft, material, and purposeful design across all our practices.
        </p>
      </div>
    </section>
  );
}
