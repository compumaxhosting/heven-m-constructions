"use client";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "./blogData";

interface BlogGridProps {
  setSelectedPostId: (id: string) => void;
}

export default function BlogGrid({ setSelectedPostId }: BlogGridProps) {
  return (
    <>
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.3em] text-clay font-semibold mb-4">
          Haven M · Studio Journal
        </p>
        <h1 className="font-display text-[clamp(2.8rem,7vw,5rem)] leading-[0.92] tracking-[-0.03em] text-forest">
          Stories of <br />
          <span className="italic text-terracotta">craft & design.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {blogPosts.map((post, i) => (
          <div
            key={post.id}
            onClick={() => setSelectedPostId(post.id)}
            className="group cursor-pointer grid grid-cols-1 sm:grid-cols-5 sm:h-[280px] overflow-hidden rounded-2xl bg-white/60 border border-forest/8 hover:border-forest/20 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className={`sm:col-span-2 overflow-hidden bg-sand h-56 sm:h-auto ${i % 2 !== 0 ? "sm:order-last" : ""}`}>
              <img
                src={(typeof post.image === 'object' && post.image !== null ? ((post.image as any).default?.src || (post.image as any).src || (post.image as any).default || post.image) : post.image)}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />
            </div>
            <div className="sm:col-span-3 flex flex-col justify-between p-7 sm:p-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-clay">{post.category}</span>
                  <span className="h-px flex-1 bg-forest/10" />
                  <span className="text-[10px] font-mono text-forest-deep/50">{post.date}</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl text-forest leading-snug group-hover:text-terracotta transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm text-forest-deep/70 leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-forest/8 pt-5">
                <span className="text-xs font-mono text-forest-deep/50">{post.readTime}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest group-hover:text-terracotta group-hover:translate-x-1 transition-all duration-300">
                  Read Article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
