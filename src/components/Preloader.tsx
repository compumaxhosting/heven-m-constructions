import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide after animation sequence (e.g., 2.5s)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Allow time for exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-forest flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23F6F4EE' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative w-32 h-32 flex items-end justify-between px-2">
        {/* Left Pillar */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '100%', opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          className="w-6 bg-linen origin-bottom"
        />

        {/* Middle Crossbar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '48px', opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 h-6 bg-clay"
        />

        {/* Right Pillar */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '100%', opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          className="w-6 bg-sage origin-bottom"
        />

        {/* Floating Roof / Accent */}
        <motion.div
          initial={{ y: -50, opacity: 0, rotate: -10 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
          className="absolute -top-10 -left-4 w-40 h-2 bg-linen"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="mt-12 text-linen font-light tracking-[0.3em] uppercase text-sm"
      >
        Building Vision
      </motion.div>
    </motion.div>
  );
}
