"use client";
import { ArrowLeft, Calendar, Clock, BookOpen, Share2, Quote, ArrowUpRight } from "lucide-react";
import { BlogPost } from "./blogData";

interface BlogArticleProps {
  activePost: BlogPost;
  nextPost: BlogPost | null;
  setSelectedPostId: (id: string | null) => void;
}

export default function BlogArticle({ activePost, nextPost, setSelectedPostId }: BlogArticleProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <button
        onClick={() => setSelectedPostId(null)}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-mono font-bold text-forest/70 hover:text-terracotta transition-colors mb-10 group"
      >
        <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
        Back to Journal
      </button>

      <header className="mb-10 pb-10 border-b border-forest/10">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-clay">{activePost.category}</span>
        <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-forest">{activePost.title}</h1>
        <div className="mt-6 flex flex-wrap gap-5 text-xs font-mono text-forest-deep/60">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-clay" />{activePost.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-clay" />{activePost.readTime}</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-clay" />Haven M Editorial</span>
        </div>
      </header>

      <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-14 bg-sand shadow-sm">
        <img
          src={(typeof activePost.image === 'object' && activePost.image !== null ? ((activePost.image as any).default?.src || (activePost.image as any).src || (activePost.image as any).default || activePost.image) : activePost.image)}
          alt={activePost.title}
          className="w-full h-full object-cover"
        />
      </div>

      <blockquote className="my-10 pl-5 border-l-4 border-clay">
        <Quote className="h-5 w-5 text-clay/40 mb-2" />
        <p className="font-display italic text-lg text-forest leading-relaxed">
          "Craft is the ultimate expression of care. We build spaces that tell a story of longevity, material truth, and lasting beauty."
        </p>
        <cite className="block mt-3 text-[10px] font-mono uppercase tracking-wider text-olive not-italic">— Haven M Studio</cite>
      </blockquote>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-forest-deep/80">
        <p className="text-lg sm:text-xl text-forest leading-relaxed font-medium first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-terracotta first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
          {activePost.content[0]}
        </p>
        {activePost.content.slice(1).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-forest/10 flex items-center justify-between">
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-forest/70 hover:text-terracotta transition-colors"
        >
          <Share2 className="h-4 w-4 text-clay" /> Share
        </button>
        <button
          onClick={() => setSelectedPostId(null)}
          className="text-xs font-mono uppercase tracking-wider text-forest/70 hover:text-terracotta transition-colors"
        >
          ← Return to Journal
        </button>
      </div>

      {nextPost && (
        <div className="mt-20 pt-14 border-t border-forest/10">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-clay font-bold mb-5">Next in Journal</p>
          <div
            onClick={() => setSelectedPostId(nextPost.id)}
            className="group cursor-pointer flex items-center gap-6 p-6 rounded-2xl bg-white/60 border border-forest/8 hover:border-forest/20 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-sand">
              <img src={(typeof nextPost.image === 'object' && nextPost.image !== null ? ((nextPost.image as any).default?.src || (nextPost.image as any).src || (nextPost.image as any).default || nextPost.image) : nextPost.image)} alt={nextPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono font-bold text-olive uppercase tracking-wider">{nextPost.category}</span>
              <h4 className="mt-1 font-display text-lg text-forest group-hover:text-terracotta transition-colors leading-snug truncate">{nextPost.title}</h4>
            </div>
            <ArrowUpRight className="h-5 w-5 text-clay shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      )}
    </article>
  );
}
