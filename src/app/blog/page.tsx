import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  Share2,
  Quote,
  ArrowUpRight,
} from "lucide-react";
import asset4 from "../../assets/asset-4.jpeg";
import asset5 from "../../assets/asset-5.jpeg";
import asset6 from "../../assets/asset-6.jpeg";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "modern-residential-architecture",
    title:
      "Modern Residential Architecture: Finding Harmony in Custom Home Design",
    category: "Residential",
    date: "August 12, 2026",
    readTime: "5 min read",
    summary:
      "How Haven M Construction blends modern forms with traditional warmth to create timeless custom homes that feel as grounded as they are inspiring.",
    image: asset4,
    content: [
      "Modern residential architecture is more than just clean lines and large windows; it is an exploration of how light, volume, and material texture interact to create a sense of shelter and home. At Haven M Construction, we believe that a truly custom home must reflect both its geographical landscape and the daily rhythms of the people who inhabit it. This balance is what we call architectural harmony.",
      "One of the most critical aspects of modern design is site orientation. By analyzing how daylight moves across a property, we can position windows and outdoor spaces to maximize natural illumination while managing heat gain. This passive solar design not only lowers energy costs but also establishes a dynamic connection with the surrounding natural elements throughout the changing seasons.",
      "Inside, the modern custom home is defined by spatial flow rather than rigid divisions. Open-floor layouts create a sense of expansive luxury, but they also require careful craftsmanship to maintain intimate moments. We achieve this by using material transitions—such as moving from limestone flooring to warm rift-sawn oak, or incorporating custom wooden screens—which define functional zones without sacrificing openness.",
      "Ultimately, a custom home is an investment in durability. Choosing natural, sustainable materials like hand-applied lime plaster, local fieldstone, and premium cedar ensures that the home ages gracefully, developing a rich patina over decades instead of requiring frequent replacements. When these honest materials meet meticulous construction detailing, the result is a home that feels both grounded and deeply inspiring.",
    ],
  },
  {
    id: "designer-builder-synergy",
    title: "The Designer-Builder Synergy: Unlocking Seamless Craftsmanship",
    category: "Craftsmanship",
    date: "July 28, 2026",
    readTime: "4 min read",
    summary:
      "Exploring why a unified design-build approach prevents delays, reduces costs, and protects the integrity of every architectural detail.",
    image: asset5,
    content: [
      "In the world of custom home construction, a common point of friction lies in the translation from design drawings to physical structure. Traditional project delivery separates the architect and the builder into distinct entities, which can lead to communication gaps, budget overruns, and compromised details. The solution to this is the design-build model, where designers and craftspeople work in tandem from day one.",
      "When builders participate in the initial design phases, they provide invaluable insights into constructibility and material sourcing. A complex structural connection that looks beautiful on paper might require specialized tooling or have lead times that disrupt the schedule. By identifying these realities early, the design team can refine their approach without losing the original aesthetic intent.",
      "This synergy is particularly apparent in custom trim and millwork. At Haven M Construction, our carpenters collaborate closely with our designers, ensuring that flush baseboards, shadow gaps, and hidden cabinet doors align perfectly. This level of precision is impossible without constant dialogue, hands-on prototype testing, and shared responsibility for the final output.",
      "For clients, the design-build relationship offers peace of mind. Instead of mediating between an architect's vision and a contractor's cost estimates, the client is presented with a cohesive team that manages both aesthetics and execution. It streamlines the decision-making process and ensures that the finished space looks, performs, and feels exactly as intended.",
    ],
  },
  {
    id: "boutique-interiors-commercial",
    title: "Boutique Interiors: The Art of Crafting Tailored Commercial Spaces",
    category: "Commercial",
    date: "June 15, 2026",
    readTime: "6 min read",
    summary:
      "How bespoke millwork, deliberate lighting design, and premium materials redefine the modern boutique customer experience.",
    image: asset6,
    content: [
      "For boutique retail, hospitality, and workspace interiors, design is not merely decoration—it is a tangible extension of a brand's identity and values. Unlike large-scale commercial spaces that rely on standard layouts, a boutique environment requires bespoke elements that tell a story, invite exploration, and encourage patrons to linger.",
      "The journey begins with spatial choreographing. A well-designed shop or cafe guides visitors along an intuitive path, utilizing floor materials, color psychology, and physical structures to highlight products or create cozy seating nooks. For instance, in our boutique commercial designs, we often pair custom walnut shelving with soft brass accents, drawing the eye toward display areas while creating a warm, premium atmosphere.",
      "Lighting plays an equally vital role in commercial interiors. By layering ambient light with warm accent spotlights, we can emphasize architectural features, highlight specific products, and establish a welcoming mood. Avoiding harsh fluorescent glare in favor of high-CRI LED fixtures and custom brass sconces immediately elevates the perception of quality and comfort within the space.",
      "Investing in high-end, custom millwork is what truly separates a boutique establishment from the competition. Whether it is a hand-carved reception desk, integrated floating shelving, or custom banquette seating, these unique touchpoints show visitors that every detail has been thoughtfully considered. By combining brand storytelling with durable, commercial-grade craftsmanship, we help businesses build spaces that leave a lasting impression.",
    ],
  },
];

export default function BlogPage() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedPostId]);

  const activePost = blogPosts.find((p) => p.id === selectedPostId);
  const activeIdx = blogPosts.findIndex((p) => p.id === selectedPostId);
  const nextPost =
    activeIdx !== -1 ? blogPosts[(activeIdx + 1) % blogPosts.length] : null;

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
      {/* Subtle top-left glow */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />
      <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        {!activePost ? (
          /* ══ SIMPLE CLEAN CARD GRID ══ */
          <>
            {/* Page Header */}
            <div className="mb-16">
              <p className="text-[11px] uppercase tracking-[0.3em] text-clay font-semibold mb-4">
                Haven M · Studio Journal
              </p>
              <h1 className="font-display text-[clamp(2.8rem,7vw,5rem)] leading-[0.92] tracking-[-0.03em] text-forest">
                Stories of <br />
                <span className="italic text-terracotta">craft & design.</span>
              </h1>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {blogPosts.map((post, i) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPostId(post.id)}
                  className="group cursor-pointer grid grid-cols-1 sm:grid-cols-5 sm:h-[280px] overflow-hidden rounded-2xl bg-white/60 border border-forest/8 hover:border-forest/20 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Image — left on sm+ */}
                  <div
                    className={`sm:col-span-2 overflow-hidden bg-sand h-56 sm:h-auto ${i % 2 !== 0 ? "sm:order-last" : ""}`}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Content — right */}
                  <div className="sm:col-span-3 flex flex-col justify-between p-7 sm:p-10">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-clay">
                          {post.category}
                        </span>
                        <span className="h-px flex-1 bg-forest/10" />
                        <span className="text-[10px] font-mono text-forest-deep/50">
                          {post.date}
                        </span>
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl text-forest leading-snug group-hover:text-terracotta transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="mt-4 text-sm text-forest-deep/70 leading-relaxed line-clamp-2">
                        {post.summary}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-forest/8 pt-5">
                      <span className="text-xs font-mono text-forest-deep/50">
                        {post.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest group-hover:text-terracotta group-hover:translate-x-1 transition-all duration-300">
                        Read Article <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* ══ ARTICLE DETAIL VIEW ══ */
          <article className="max-w-3xl mx-auto">
            {/* Back */}
            <button
              onClick={() => setSelectedPostId(null)}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-mono font-bold text-forest/70 hover:text-terracotta transition-colors mb-10 group"
            >
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
              Back to Journal
            </button>

            {/* Article header */}
            <header className="mb-10 pb-10 border-b border-forest/10">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-clay">
                {activePost.category}
              </span>
              <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-forest">
                {activePost.title}
              </h1>
              <div className="mt-6 flex flex-wrap gap-5 text-xs font-mono text-forest-deep/60">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-clay" />
                  {activePost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-clay" />
                  {activePost.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-clay" />
                  Haven M Editorial
                </span>
              </div>
            </header>

            {/* Hero image */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-14 bg-sand shadow-sm">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Pull quote */}
            <blockquote className="my-10 pl-5 border-l-4 border-clay">
              <Quote className="h-5 w-5 text-clay/40 mb-2" />
              <p className="font-display italic text-lg text-forest leading-relaxed">
                "Craft is the ultimate expression of care. We build spaces that
                tell a story of longevity, material truth, and lasting beauty."
              </p>
              <cite className="block mt-3 text-[10px] font-mono uppercase tracking-wider text-olive not-italic">
                — Haven M Studio
              </cite>
            </blockquote>

            {/* Body text */}
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-forest-deep/80">
              <p className="text-lg sm:text-xl text-forest leading-relaxed font-medium first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-terracotta first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                {activePost.content[0]}
              </p>
              {activePost.content.slice(1).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Share + back bar */}
            <div className="mt-16 pt-8 border-t border-forest/10 flex items-center justify-between">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
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

            {/* Next article */}
            {nextPost && (
              <div className="mt-20 pt-14 border-t border-forest/10">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-clay font-bold mb-5">
                  Next in Journal
                </p>
                <div
                  onClick={() => setSelectedPostId(nextPost.id)}
                  className="group cursor-pointer flex items-center gap-6 p-6 rounded-2xl bg-white/60 border border-forest/8 hover:border-forest/20 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-sand">
                    <img
                      src={nextPost.image}
                      alt={nextPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono font-bold text-olive uppercase tracking-wider">
                      {nextPost.category}
                    </span>
                    <h4 className="mt-1 font-display text-lg text-forest group-hover:text-terracotta transition-colors leading-snug truncate">
                      {nextPost.title}
                    </h4>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-clay shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            )}
          </article>
        )}
      </div>
    </main>
  );
}
