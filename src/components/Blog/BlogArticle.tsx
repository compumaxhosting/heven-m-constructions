"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Share2,
  Quote,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  ListOrdered,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { BlogPost } from "./blogData";

interface BlogArticleProps {
  activePost: BlogPost;
  nextPost: BlogPost | null;
  setSelectedPostId?: (id: string | null) => void;
}

export default function BlogArticle({ activePost, nextPost, setSelectedPostId }: BlogArticleProps) {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showToc, setShowToc] = useState(false);
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Helper function to render text with markdown links [Text](URL)
  const renderTextWithLinks = (text: string) => {
    if (!text) return "";
    const parts = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const linkText = match[1];
      const linkUrl = match[2];
      const isInternal = linkUrl.startsWith("/") || linkUrl.includes("havenmconstruction.com");
      const href = linkUrl.replace(/^https?:\/\/(www\.)?havenmconstruction\.com/, "") || "/";

      if (isInternal) {
        parts.push(
          <Link
            key={match.index}
            href={href}
            className="text-terracotta underline font-semibold hover:text-forest transition-colors"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta underline font-semibold hover:text-forest transition-colors"
          >
            {linkText}
          </a>
        );
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Extract headings for Table of Contents
  const headings = activePost.content
    ? activePost.content
      .filter((para) =>
        /^\d+\.\s+/.test(para) ||
        para.startsWith("##") ||
        (para.length < 90 && (
          para.endsWith("?") ||
          para.startsWith("What ") ||
          para.startsWith("How ") ||
          para.startsWith("Why ") ||
          para.startsWith("Best ") ||
          para.startsWith("Frequently ") ||
          para.startsWith("Build ") ||
          para.startsWith("Conclusion")
        ))
      )
      .map((para) => para.replace(/^##\s*/, ""))
    : [];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-terracotta via-clay to-forest z-50 transition-all duration-150 ease-out shadow-md"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Reader Action Rail (Desktop only) */}
      <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-forest/15 shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]">
        <Link
          href="/blog"
          onClick={() => setSelectedPostId?.(null)}
          className="p-2.5 rounded-xl hover:bg-forest/10 text-forest hover:text-terracotta transition-all group relative"
          title="Back to Journal"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-forest-deep text-sand text-[11px] font-mono font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-xl pointer-events-none">
            Back to Journal
          </span>
        </Link>

        <span className="w-4 h-px bg-forest/10" />

        <button
          onClick={handleCopyLink}
          className="p-2.5 rounded-xl hover:bg-forest/10 text-forest/70 hover:text-terracotta transition-all group relative"
          title="Share Article"
        >
          {copied ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <Share2 className="h-4 w-4" />}
          <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-forest-deep text-sand text-[11px] font-mono font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-xl pointer-events-none">
            {copied ? "Link Copied!" : "Copy Link"}
          </span>
        </button>

        {headings.length > 0 && (
          <button
            onClick={() => setShowToc(!showToc)}
            className={`p-2.5 rounded-xl transition-all group relative ${showToc ? "bg-terracotta text-white shadow-md" : "hover:bg-forest/10 text-forest/70 hover:text-terracotta"}`}
            title="Toggle Index"
          >
            <ListOrdered className="h-4 w-4" />
            <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-forest-deep text-sand text-[11px] font-mono font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-xl pointer-events-none">
              Article Index ({headings.length})
            </span>
          </button>
        )}

        {/* Desktop Side Article Index Popover */}
        {showToc && headings.length > 0 && (
          <div className="absolute left-24 top-1/2 -translate-y-1/2 w-80 p-6 rounded-3xl bg-gradient-to-br from-forest-deep via-forest to-[#0d1b11] text-sand shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/20 space-y-4 animate-in fade-in slide-in-from-left-4 duration-300 z-50">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <div className="flex items-center gap-2">
                <ListOrdered className="h-4 w-4 text-terracotta" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sand">Article Index</span>
              </div>
              <button
                onClick={() => setShowToc(false)}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-terracotta transition-colors flex items-center justify-center text-[11px] text-sand font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
              {headings.map((heading, idx) => (
                <a
                  key={idx}
                  href={`#section-${idx}`}
                  onClick={() => setShowToc(false)}
                  className="group flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-xs font-mono text-sand/80 hover:text-white transition-all"
                >
                  <span className="w-5 h-5 rounded-md bg-terracotta/20 text-terracotta font-bold text-[10px] flex items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5 line-clamp-2 leading-relaxed">{heading.replace(/^\d+\.\s*/, "")}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Centered Premium Article Container */}
      <div className="mx-auto max-w-5xl space-y-10 sm:space-y-12 relative">

        {/* 1. Feature Widescreen Hero Image */}
        <div className="relative rounded-3xl overflow-hidden bg-sand shadow-2xl border border-forest/15 aspect-[16/9] sm:aspect-[2.2/1] max-h-[500px]">
          <img
            src={
              typeof activePost.image === "object" && activePost.image !== null
                ? (activePost.image as any).default?.src ||
                (activePost.image as any).src ||
                (activePost.image as any).default ||
                activePost.image
                : activePost.image
            }
            alt={activePost.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. Blog Title / Heading */}
        <header className="space-y-4 text-center sm:text-left">
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.03em] text-forest font-semibold">
            {activePost.title}
          </h1>
        </header>

        {/* 3. Inline Table of Contents Card (Luxury Architectural Redesign) */}
        {headings.length > 0 && (
          <nav className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/95 via-sand/60 to-terracotta/5 backdrop-blur-xl border border-forest/15 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-5">
            <div className="flex items-center justify-between border-b border-forest/15 pb-3.5">
              <span className="font-display text-sm sm:text-base font-semibold tracking-wide text-forest flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center">
                  <ListOrdered className="h-3.5 w-3.5" />
                </span>
                Table of Contents
              </span>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {headings.map((heading, idx) => (
                <a
                  key={idx}
                  href={`#section-${idx}`}
                  className="group flex items-start gap-3 p-3 rounded-2xl bg-white/70 hover:bg-forest text-forest hover:text-sand border border-forest/10 hover:border-forest transition-all duration-300 shadow-2xl"
                >
                  <span className="w-6 h-6 rounded-xl bg-terracotta/15 text-terracotta font-mono font-bold text-[11px] flex items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:text-white transition-colors mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="font-sans text-xs font-medium leading-relaxed group-hover:text-sand transition-colors">
                    {heading.replace(/^\d+\.\s*/, "")}
                  </span>
                </a>
              ))}
            </div>
          </nav>
        )}

        {/* 4. Key Takeaways Glass Card */}
        {activePost.summary && (
          <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-forest/15 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-terracotta via-clay to-forest" />
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-terracotta mb-4">
              <Sparkles className="h-4 w-4 text-terracotta" /> Executive Briefing & Key Insights
            </div>
            <p className="font-display text-xl sm:text-2xl text-forest leading-relaxed italic font-normal">
              "{activePost.summary}"
            </p>
          </div>
        )}

        {/* Main Article Content Column */}
        <article className="space-y-8 text-forest-deep/90 leading-relaxed text-base sm:text-lg">

          {/* First Paragraph with Drop Cap */}
          {activePost.content && activePost.content.length > 0 && (
            <p className="text-lg sm:text-xl text-forest leading-relaxed font-medium first-letter:text-6xl sm:first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-terracotta first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-none">
              {renderTextWithLinks(activePost.content[0])}
            </p>
          )}

          {/* Inline Quote Block */}
          <blockquote className="my-10 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-terracotta/10 via-clay/10 to-transparent border-l-4 border-terracotta shadow-sm">
            <Quote className="h-8 w-8 text-terracotta/40 mb-3" />
            <p className="font-display italic text-xl sm:text-2xl text-forest leading-relaxed font-medium">
              "Great architecture is the synthesis of material honesty, light, and flawless structural execution. We build residences designed to outlast generations."
            </p>
            <cite className="block mt-4 text-xs font-mono uppercase tracking-widest text-terracotta font-bold not-italic">
              — Haven M Design & Engineering Studio
            </cite>
          </blockquote>

          {/* Remaining Paragraphs & Sections */}
          {activePost.content &&
            activePost.content.slice(1).map((para, i) => {
              const isHeading =
                /^\d+\.\s+/.test(para) ||
                para.startsWith("##") ||
                (para.length < 90 && (
                  para.endsWith("?") ||
                  para.startsWith("What ") ||
                  para.startsWith("How ") ||
                  para.startsWith("Why ") ||
                  para.startsWith("Best ") ||
                  para.startsWith("Frequently ") ||
                  para.startsWith("Build ") ||
                  para.startsWith("Conclusion")
                ));

              if (isHeading) {
                const cleanHeading = para.replace(/^##\s*/, "");
                const headingIndex = headings.indexOf(cleanHeading);
                const isFaqHeading = cleanHeading.toLowerCase().includes("frequently asked questions") || cleanHeading.toLowerCase().includes("faq");

                if (isFaqHeading) {
                  return (
                    <div key={i} id={`section-${headingIndex}`} className="pt-12 pb-2 scroll-mt-36">
                      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-forest-deep via-forest to-[#0b1911] text-sand shadow-2xl border border-white/15 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-terracotta/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 space-y-3">
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta/20 border border-terracotta/40 text-terracotta text-xs font-mono font-bold uppercase tracking-wider">
                            <HelpCircle className="h-4 w-4" /> Frequently Asked Questions
                          </div>
                          <h2 className="font-display text-2xl sm:text-4xl text-white font-semibold tracking-tight">
                            Got Questions? We Have Answers.
                          </h2>
                          <p className="text-sm sm:text-base text-sand/85 max-w-2xl font-sans font-normal leading-relaxed">
                            Clear, transparent insights to help you navigate residential construction, budgeting, permits, and design-build decisions in Northern New Jersey.
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={i} id={`section-${headingIndex}`} className="pt-10 scroll-mt-36">
                    <div className="flex items-center gap-3.5 mb-3">
                      <span className="w-8 h-8 rounded-xl bg-terracotta/15 text-terracotta font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                        {headingIndex !== -1 ? headingIndex + 1 : i}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl text-forest font-semibold leading-tight tracking-tight">
                        {cleanHeading.replace(/^\d+\.\s*/, "")}
                      </h2>
                    </div>
                    <div className="h-0.5 w-full bg-gradient-to-r from-terracotta/40 via-forest/20 to-transparent mb-6" />
                  </div>
                );
              }

              if (para.startsWith("Quick Answer:")) {
                return (
                  <div key={i} className="my-6 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-terracotta/10 to-sand/60 border-l-4 border-terracotta space-y-2 shadow-sm">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-terracotta">Quick Answer & Key Insight</span>
                    <p className="text-forest text-base leading-relaxed font-medium">{renderTextWithLinks(para.replace(/^Quick Answer:\s*/, ""))}</p>
                  </div>
                );
              }

              if (para.startsWith("Q:")) {
                const parts = para.split("\nA:");
                const question = parts[0]?.replace(/^Q:\s*/, "");
                const answer = parts[1]?.trim();
                const faqItemIndex = i;
                const isOpen = openFaqIndices.includes(faqItemIndex);

                const toggleFaq = () => {
                  setOpenFaqIndices((prev) =>
                    prev.includes(faqItemIndex)
                      ? prev.filter((idx) => idx !== faqItemIndex)
                      : [...prev, faqItemIndex]
                  );
                };

                return (
                  <div
                    key={i}
                    className={`my-3.5 rounded-2xl transition-all duration-300 overflow-hidden border ${isOpen
                        ? "bg-white/95 border-terracotta/50 shadow-lg ring-1 ring-terracotta/20"
                        : "bg-white/80 border-forest/15 hover:border-terracotta/40 hover:bg-white shadow-xs"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={toggleFaq}
                      className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-mono font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 transition-colors ${isOpen
                              ? "bg-terracotta text-white shadow-sm"
                              : "bg-terracotta/15 text-terracotta group-hover:bg-terracotta group-hover:text-white"
                            }`}
                        >
                          Q
                        </span>
                        <h3 className="font-display text-base sm:text-lg font-semibold text-forest group-hover:text-terracotta transition-colors leading-snug">
                          {question}
                        </h3>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                            ? "bg-terracotta/15 text-terracotta rotate-180"
                            : "bg-forest/5 text-forest/70 group-hover:bg-terracotta/15 group-hover:text-terracotta"
                          }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    {isOpen && answer && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-forest/10 bg-gradient-to-b from-transparent via-sand/20 to-transparent">
                        <div className="pl-4 sm:pl-10 border-l-2 border-terracotta/60 pt-2 space-y-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-terracotta block">
                            Expert Answer
                          </span>
                          <div className="text-sm sm:text-base text-forest-deep/85 leading-relaxed font-normal">
                            {renderTextWithLinks(answer)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (para.startsWith("- ")) {
                return (
                  <div key={i} className="flex items-start gap-3 pl-2 py-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-terracotta mt-2 shrink-0" />
                    <span className="leading-relaxed text-forest-deep/90 font-normal">
                      {renderTextWithLinks(para.replace(/^- \s*/, ""))}
                    </span>
                  </div>
                );
              }

              return (
                <p key={i} className="leading-relaxed font-normal">
                  {renderTextWithLinks(para)}
                </p>
              );
            })}
        </article>

        {/* Consultation Call to Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-forest-deep via-forest to-[#0c1810] text-sand shadow-2xl relative overflow-hidden border border-white/15 text-center sm:text-left">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-terracotta/25 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-terracotta bg-terracotta/15 px-4 py-1.5 rounded-full border border-terracotta/30 inline-block">
              Start Your Project
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-white leading-tight font-medium">
              Planning a Custom Build or Addition in NJ?
            </h3>
            <p className="text-sm sm:text-base text-sand/85 max-w-2xl leading-relaxed">
              Consult with our architectural specialists and general contractors in Verona, NJ for custom designs, value engineering, and transparent pricing.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-terracotta text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-clay transition-all duration-300 shadow-2xl hover:scale-[1.02]"
              >
                <PhoneCall className="h-4 w-4" /> Book Architectural Consultation →
              </Link>
            </div>
          </div>
        </div>

        {/* Up Next / Recommended Read */}
        {nextPost && (
          <div className="pt-10 border-t border-forest/15 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-clay font-bold">Up Next in Journal</span>
              <Link href="/blog" className="text-xs font-mono text-forest/70 hover:text-terracotta font-bold">View All Articles →</Link>
            </div>

            <Link
              href={`/blog/${nextPost.id}`}
              onClick={() => setSelectedPostId?.(nextPost.id)}
              className="group flex items-center gap-6 p-6 sm:p-7 rounded-3xl bg-white/80 backdrop-blur-md border border-forest/15 hover:border-terracotta/40 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-sand relative shadow-inner">
                <img
                  src={
                    typeof nextPost.image === "object" && nextPost.image !== null
                      ? (nextPost.image as any).default?.src ||
                      (nextPost.image as any).src ||
                      (nextPost.image as any).default ||
                      nextPost.image
                      : nextPost.image
                  }
                  alt={nextPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <span className="text-[10px] font-mono font-bold text-terracotta uppercase tracking-wider">{nextPost.category}</span>
                <h4 className="font-display text-xl text-forest group-hover:text-terracotta transition-colors leading-snug font-semibold">
                  {nextPost.title}
                </h4>
                <p className="text-xs text-forest-deep/60 line-clamp-1 hidden sm:block">{nextPost.summary}</p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-terracotta shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        )}

      </div>
    </>
  );
}


