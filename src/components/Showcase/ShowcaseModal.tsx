"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import { ShowcaseItem } from "./showcaseData";

interface ShowcaseModalProps {
  activeMedia: ShowcaseItem | null;
  filteredData: ShowcaseItem[];
  setActiveMedia: (item: ShowcaseItem | null) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

export default function ShowcaseModal({
  activeMedia,
  filteredData,
  setActiveMedia,
  handlePrev,
  handleNext,
}: ShowcaseModalProps) {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {activeMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-forest-deep/95 via-forest/80 to-forest-deep/95 backdrop-blur-3xl overflow-hidden"
        >
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
                src={(typeof activeMedia.src === 'object' && activeMedia.src !== null ? ((activeMedia.src as any).default?.src || (activeMedia.src as any).src || (activeMedia.src as any).default || activeMedia.src) : activeMedia.src)}
                alt={activeMedia.title}
                className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
