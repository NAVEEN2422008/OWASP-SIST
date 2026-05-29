"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                >
                    {/* Subtle radial vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />

                    {/* Center content */}
                    <div className="relative z-10 flex flex-col items-center justify-center gap-10">
                        {/* Animated logo */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="relative"
                        >
                            {/* Subtle white pulse ring */}
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 0 0 rgba(255, 255, 255, 0.15)",
                                        "0 0 0 40px rgba(255, 255, 255, 0)",
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full"
                            />

                            {/* Logo image */}
                            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                                <Image
                                    src="/owasp_full_logo.png"
                                    alt="OWASP SIST Loading"
                                    fill
                                    sizes="112px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Loading text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-center"
                        >
                            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono">
                                OWASP SIST
                            </p>
                        </motion.div>

                        {/* Minimal progress line */}
                        <motion.div className="w-24 h-px bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full h-full bg-white/60"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
