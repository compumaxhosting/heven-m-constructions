"use client";
import { motion } from "framer-motion";
import { Play, Image as ImageIcon } from "lucide-react";
import { ShowcaseItem } from "./showcaseData";

interface ShowcaseGridProps {
  filteredData: ShowcaseItem[];
  setActiveMedia: (item: ShowcaseItem) => void;
}

export default function ShowcaseGrid({ filteredData, setActiveMedia }: ShowcaseGridProps) {
  return (
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
                src={(typeof item.src === 'object' && item.src !== null ? ((item.src as any).default?.src || (item.src as any).src || (item.src as any).default || item.src) : item.src)}
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
  );
}
