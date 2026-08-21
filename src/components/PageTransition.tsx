import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import havenLogo from "../assets/haven-logo.png";

// Snappy cubic bezier curve optimized for 0.6s
const EASE_IN_OUT = [0.22, 1, 0.36, 1];

const DURATION = 0.6;       // 0.6s main reveal
const EXIT_DURATION = 0.4;  // 0.4s curtain close

export function PageTransition({ children }: { children: ReactNode }) {
    const location = useLocation();

    return (
        <div className="relative min-h-screen overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={location.pathname}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                >
                    {/* Main Page Content Animation */}
                    <motion.div
                        variants={{
                            initial: {
                                opacity: 0,
                                y: 14,
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: DURATION,
                                    delay: 0.1,
                                    ease: EASE_IN_OUT,
                                },
                            },
                            exit: {
                                opacity: 0,
                                y: -10,
                                transition: {
                                    duration: EXIT_DURATION,
                                    ease: EASE_IN_OUT,
                                },
                            },
                        }}
                        className="will-change-transform transform-gpu"
                    >
                        {children}
                    </motion.div>

                    {/* Architectural Top Panel Wipe */}
                    <motion.div
                        variants={{
                            initial: { y: "0%" },
                            animate: {
                                y: "-100%",
                                transition: {
                                    duration: DURATION,
                                    ease: EASE_IN_OUT,
                                },
                            },
                            exit: {
                                y: "0%",
                                transition: {
                                    duration: EXIT_DURATION,
                                    ease: EASE_IN_OUT,
                                },
                            },
                        }}
                        className="fixed inset-x-0 top-0 z-[100] h-[50vh] bg-[#091512] shadow-2xl overflow-hidden pointer-events-none border-b border-[#D4B886]/20 transform-gpu will-change-transform"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,184,134,0.12),transparent_60%)]" />
                    </motion.div>

                    {/* Architectural Bottom Panel Wipe */}
                    <motion.div
                        variants={{
                            initial: { y: "0%" },
                            animate: {
                                y: "100%",
                                transition: {
                                    duration: DURATION,
                                    ease: EASE_IN_OUT,
                                },
                            },
                            exit: {
                                y: "0%",
                                transition: {
                                    duration: EXIT_DURATION,
                                    ease: EASE_IN_OUT,
                                },
                            },
                        }}
                        className="fixed inset-x-0 bottom-0 z-[100] h-[50vh] bg-[#091512] shadow-2xl overflow-hidden pointer-events-none border-t border-[#D4B886]/20 transform-gpu will-change-transform"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,184,134,0.12),transparent_60%)]" />
                    </motion.div>

                    {/* Center Logo Fade & Scale */}
                    <motion.div
                        variants={{
                            initial: { opacity: 1, scale: 1 },
                            animate: {
                                opacity: 0,
                                scale: 1.03,
                                transition: {
                                    duration: DURATION * 0.7,
                                    ease: EASE_IN_OUT,
                                },
                            },
                            exit: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: EXIT_DURATION,
                                    ease: EASE_IN_OUT,
                                },
                            },
                        }}
                        className="fixed inset-0 z-[102] flex items-center justify-center pointer-events-none p-4 transform-gpu"
                    >
                        <img
                            src={havenLogo}
                            alt="Haven M Logo"
                            className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain brightness-200 drop-shadow-[0_10px_35px_rgba(212,184,134,0.3)]"
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}