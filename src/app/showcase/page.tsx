import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import asset1 from "../../assets/asset-1.webp";
import asset3 from "../../assets/31.webp";
import asset4 from "../../assets/asset-4.webp";
import asset5 from "../../assets/asset-5.webp";
import asset6 from "../../assets/asset-6.webp";
import video1 from "../../assets/video 1.mp4";
import addition1 from "../../assets/1.webp";
import addition2 from "../../assets/2.webp";
import addition3 from "../../assets/3.webp";
import addition4 from "../../assets/4.webp";
import addition5 from "../../assets/5.webp";
import addition6 from "../../assets/6.webp";
import addition7 from "../../assets/7.webp";
import beforeImage from "../../assets/before.webp";
import afterImage from "../../assets/after.webp";
import int1 from "../../assets/int 1.webp";
import int2 from "../../assets/int 2.webp";
import int3 from "../../assets/int 3.webp";
import int4 from "../../assets/int 4.webp";
import int5 from "../../assets/int 5.webp";
import int6 from "../../assets/int 6.webp";
import int7 from "../../assets/int 7.webp";

const showcaseData = [
  {
    id: 3,
    title: "Urban Commercial Complex",
    category: "Commercial",
    type: "image",
    src: asset3,
  },
  {
    id: 4,
    title: "Sustainable Eco-Home",
    category: "Architecture",
    type: "image",
    src: asset4,
  },
  {
    id: 5,
    title: "Luxury Interior Design",
    category: "Interior Design",
    type: "image",
    src: asset5,
  },
  {
    id: 6,
    title: "Open Concept Office",
    category: "Residential Additions",
    type: "image",
    src: asset6,
  },
  {
    id: 7,
    title: "Addition Foundation",
    category: "Residential Additions",
    type: "image",
    src: addition1,
  },
  {
    id: 8,
    title: "Masonry and Waterproofing",
    category: "Residential Additions",
    type: "image",
    src: addition2,
  },
  {
    id: 9,
    title: "Second-Story Framing",
    category: "Residential Additions",
    type: "image",
    src: addition3,
  },
  {
    id: 10,
    title: "Timber Frame Construction",
    category: "Residential Additions",
    type: "image",
    src: addition4,
  },
  {
    id: 11,
    title: "Completed Home Addition",
    category: "Residential Additions",
    type: "image",
    src: addition5,
  },
  {
    id: 12,
    title: "Completed Residential Addition",
    category: "Residential Additions",
    type: "image",
    src: addition6,
  },
  {
    id: 13,
    title: "Residential Addition Detail",
    category: "Residential Additions",
    type: "image",
    src: addition7,
  },
  {
    id: 14,
    title: "Home Before Construction",
    category: "Before & After",
    type: "image",
    src: beforeImage,
  },
  {
    id: 15,
    title: "Home After Construction",
    category: "Before & After",
    type: "image",
    src: afterImage,
  },
  {
    id: 1,
    title: "Cinematic Walkthrough",
    category: "Commercial",
    type: "video",
    src: asset1,
    videoUrl: video1,
  },
  { id: 20, title: "Modern Interior Details", category: "Interior Design", type: "image", src: int1 },
  { id: 21, title: "Contemporary Living", category: "Interior Design", type: "image", src: int2 },
  { id: 22, title: "Refined Joinery", category: "Interior Design", type: "image", src: int3 },
  { id: 23, title: "Elegant Workspace", category: "Interior Design", type: "image", src: int4 },
  { id: 24, title: "Minimalist Sanctuary", category: "Interior Design", type: "image", src: int5 },
  { id: 25, title: "Warm Textural Space", category: "Interior Design", type: "image", src: int6 },
  { id: 26, title: "Bespoke Interior Craft", category: "Interior Design", type: "image", src: int7 },
];

const showcaseOrder = [14, 3, 12, 5, 20, 21, 22, 15, 7, 23, 24, 4, 10, 25, 26, 6, 13, 8, 11, 9, 1];

export default function ShowcasePage() {
  const [filter, setFilter] = useState("All");
  const [activeMedia, setActiveMedia] = useState<any>(null);

  const categories = [
    "All",
    "Residential Additions",
    "Before & After",
    "Architecture",
    "Interior Design",
    "Commercial",
  ];

  const filteredData = showcaseData
    .filter(item => filter === "All" || item.category === filter)
    .sort((first, second) => showcaseOrder.indexOf(first.id) - showcaseOrder.indexOf(second.id));

  const activeIndex = filteredData.findIndex(item => item.id === activeMedia?.id);

  const handleNext = () => {
    if (filteredData.length <= 1) return;
    if (activeIndex < filteredData.length - 1) {
      setActiveMedia(filteredData[activeIndex + 1]);
    } else {
      setActiveMedia(filteredData[0]);
    }
  };

  const handlePrev = () => {
    if (filteredData.length <= 1) return;
    if (activeIndex > 0) {
      setActiveMedia(filteredData[activeIndex - 1]);
    } else {
      setActiveMedia(filteredData[filteredData.length - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeMedia) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setActiveMedia(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMedia, activeIndex, filteredData]);

  useEffect(() => {
    if (activeMedia) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [activeMedia]);

  return (
    <main
      className="relative min-h-screen overflow-hidden pt-32 pb-24"
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
      {/* Header Section */}
      <section className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-forest/30" />
            <span className="font-mono text-sm tracking-[0.2em] uppercase text-forest/70">

            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl text-forest pt-12 sm:pt-16 mb-10 leading-tight">
            Our Showcase
          </h1>
          <p className="text-xl text-forest/70 font-light">
            Explore our curated collection of images and cinematic videos showcasing the finest details of our construction and design projects.
          </p>
        </motion.div>
      </section>

      {/* Filter Options */}
      <section className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 ${filter === cat
                ? "bg-forest text-linen shadow-lg scale-105"
                : "bg-forest/5 text-forest hover:bg-forest/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer transform-gpu"
              onClick={() => setActiveMedia(item)}
            >
              {item.type === 'video' ? (
                <video
                  src={item.videoUrl}
                  muted
                  loop
                  playsInline
                     preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                    {item.type === 'video' ? <Play className="w-4 h-4 ml-0.5" /> : <ImageIcon className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Media Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-forest-deep/95 via-forest/80 to-forest-deep/95 backdrop-blur-3xl overflow-hidden"
            >
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,39,28,0.7)_100%)] pointer-events-none" />

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={() => setActiveMedia(null)}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 z-[100000] h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 backdrop-blur-md border border-white/20"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {filteredData.length > 1 && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[100000] h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 backdrop-blur-md border border-white/20"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[100000] h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 backdrop-blur-md border border-white/20"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </motion.button>
                </>
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                className="relative flex items-center justify-center w-full max-w-7xl h-[85vh] z-[99999] mx-4"
              >
                {activeMedia.type === 'video' ? (
                  <video
                    src={activeMedia.videoUrl}
                    controls
                     preload="metadata"
                    className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                  />
                ) : (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </main>
  );
}

