"use client";
import { useState, useEffect } from "react";
import BlogGrid from "./BlogGrid";
import BlogArticle from "./BlogArticle";
import { blogPosts } from "./blogData";

export default function BlogPage() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedPostId]);

  const activePost = blogPosts.find((p) => p.id === selectedPostId);
  const activeIdx = blogPosts.findIndex((p) => p.id === selectedPostId);
  const nextPost = activeIdx !== -1 ? blogPosts[(activeIdx + 1) % blogPosts.length] : null;

  return (
    <main
      className="relative min-h-screen overflow-hidden pt-48 pb-32 sm:pt-56"
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

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        {!activePost ? (
          <BlogGrid setSelectedPostId={setSelectedPostId} />
        ) : (
          <BlogArticle activePost={activePost} nextPost={nextPost} setSelectedPostId={setSelectedPostId} />
        )}
      </div>
    </main>
  );
}


