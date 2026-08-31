"use client";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import havenLogo from "../../assets/haven-logo.png";
import {
  mainContentVariants,
  topPanelVariants,
  bottomPanelVariants,
  logoVariants,
} from "./transitionVariants";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {/* Main Page Content Animation */}
          <motion.div
            variants={mainContentVariants}
            className="will-change-transform transform-gpu"
          >
            {children}
          </motion.div>

          {/* Architectural Top Panel Wipe */}
          <motion.div
            variants={topPanelVariants}
            className="fixed inset-x-0 top-0 z-[100] h-[50vh] bg-[#091512] shadow-2xl overflow-hidden pointer-events-none border-b border-[#D4B886]/20 transform-gpu will-change-transform"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,184,134,0.12),transparent_60%)]" />
          </motion.div>

          {/* Architectural Bottom Panel Wipe */}
          <motion.div
            variants={bottomPanelVariants}
            className="fixed inset-x-0 bottom-0 z-[100] h-[50vh] bg-[#091512] shadow-2xl overflow-hidden pointer-events-none border-t border-[#D4B886]/20 transform-gpu will-change-transform"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,184,134,0.12),transparent_60%)]" />
          </motion.div>

          {/* Center Logo Fade & Scale */}
          <motion.div
            variants={logoVariants}
            className="fixed inset-0 z-[102] flex items-center justify-center pointer-events-none p-4 transform-gpu"
          >
            <img
              src={(typeof havenLogo === 'object' && havenLogo !== null ? ((havenLogo as any).default?.src || (havenLogo as any).src || (havenLogo as any).default || havenLogo) : havenLogo)}
              alt="Haven M Logo"
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain brightness-200 drop-shadow-[0_10px_35px_rgba(212,184,134,0.3)]"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}