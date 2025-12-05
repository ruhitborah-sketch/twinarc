"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Pink glow behind TwinArc */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-pink-500/30 blur-2xl rounded-full" />

                        {/* Blue glow behind Motion */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-blue-500/30 blur-2xl rounded-full" />

                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                            className="text-4xl md:text-6xl font-conthrax font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 tracking-wider relative z-10"
                        >
                            TwinArc
                        </motion.h1>
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                            className="text-4xl md:text-6xl font-conthrax font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-700 tracking-wider relative z-10"
                        >
                            Motion
                        </motion.h1>
                    </div>

                    {/* Full page shine effect */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}


