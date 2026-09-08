"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { blogPosts } from "./blogData";

interface BlogGridProps {
  setSelectedPostId?: (id: string) => void;
}

export default function BlogGrid({ setSelectedPostId }: BlogGridProps) {
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Clean Studio Blog Header */}
      <div className="text-center sm:text-left pb-8 border-b border-forest/10 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/20 text-[10px] uppercase tracking-[0.25em] text-terracotta font-mono font-bold mb-4">
          <Sparkles className="h-3 w-3 text-terracotta" /> Haven M Blog
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-forest leading-tight">
          Our Latest Insights & Articles
        </h1>
        <p className="mt-3 text-sm sm:text-base text-forest-deep/70 max-w-xl leading-relaxed">
          Explore our latest articles on custom home building, architectural design, and 2026 homebuilding trends across Northern New Jersey.
        </p>
      </div>

      {/* Empty State */}
      {blogPosts.length === 0 ? (
        <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-forest/10 p-12 text-center space-y-3">
          <Compass className="h-8 w-8 text-terracotta mx-auto opacity-70" />
          <h3 className="font-display text-xl text-forest font-semibold">No articles published yet</h3>
          <p className="text-xs text-forest-deep/60 max-w-sm mx-auto">
            New architectural stories are coming soon. Stay tuned!
          </p>
        </div>
      ) : (
        /* Exact Reference Card Grid Layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              onClick={() => setSelectedPostId?.(post.id)}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-forest/10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-terracotta/30 transition-all duration-300 relative cursor-pointer"
            >
              {/* Top Image Container (Clean Widescreen Landscape Photo) */}
              <div className="relative overflow-hidden bg-sand aspect-[16/10] w-full">
                <img
                  src={
                    typeof post.image === "object" && post.image !== null
                      ? (post.image as any).default?.src ||
                        (post.image as any).src ||
                        (post.image as any).default ||
                        post.image
                      : post.image
                  }
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Content (Title, Last Updated Date, Summary, Read More Text Link) */}
              <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 space-y-4">
                <div className="space-y-2.5">
                  {/* Article Title */}
                  <h2 className="font-display text-lg sm:text-xl font-bold text-forest leading-snug group-hover:text-terracotta transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Last Updated Date Line */}
                  <p className="text-xs sm:text-sm font-medium text-terracotta">
                    Last updated: {post.date || "September 8, 2026"}
                  </p>

                  {/* Summary Paragraph */}
                  <p className="text-xs sm:text-sm text-forest-deep/75 leading-relaxed line-clamp-3 font-normal">
                    {post.summary}
                  </p>
                </div>

                {/* Clean 'Read More →' Text Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-terracotta group-hover:text-forest transition-colors">
                    Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Sleek Studio Consultation Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-forest-deep to-forest text-sand shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-terracotta">
            Haven M Construction · Verona, NJ
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-white font-semibold">
            Planning a custom residential build or addition?
          </h3>
          <p className="text-xs text-sand/80 max-w-lg">
            Connect with our team for design-build, whole-home additions, and value engineering.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-xl bg-terracotta text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-clay transition-all shrink-0 shadow-md"
        >
          Get in Touch →
        </Link>
      </div>
    </div>
  );
}



