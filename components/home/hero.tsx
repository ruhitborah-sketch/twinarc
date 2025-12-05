"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=1920"
                >
                    {/* Filmmaking Stock Video (Film Set/Camera) */}
                    <source src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
            </motion.div>

            <div className="relative z-20 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center sm:items-start pt-24 sm:pt-32">
                <div className="max-w-4xl text-center sm:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2.5 }}
                        className="flex items-center justify-center sm:justify-start gap-3 mb-8 sm:mb-12"
                    >
                        <div className="h-[1px] w-8 sm:w-12 bg-electric-blue" />
                        <span className="text-electric-blue font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base">
                            Est. 2024 • Dibrugarh, Assam
                        </span>
                    </motion.div>

                    <motion.div
                        className="mb-4"
                        initial={{ overflow: "hidden" }}
                        animate={{ overflow: "visible" }}
                        transition={{ delay: 4, duration: 0 }}
                    >
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.6 }}
                            className="text-4xl md:text-6xl lg:text-[6rem] font-clonoid font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-300 leading-[0.85] tracking-wide drop-shadow-[0_0_50px_rgba(168,85,247,0.8)]"
                        >
                            TWINARC
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        className="mb-8"
                        initial={{ overflow: "hidden" }}
                        animate={{ overflow: "visible" }}
                        transition={{ delay: 4, duration: 0 }}
                    >
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.7 }}
                            className="text-4xl md:text-6xl lg:text-[6rem] font-clonoid font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-cyan-400 to-cyan-600 leading-[0.85] tracking-wide drop-shadow-[0_0_60px_rgba(6,182,212,0.9)]"
                        >
                            MOTION
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 3 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-xl mx-auto sm:mx-0 font-light leading-relaxed mb-8 sm:mb-12"
                    >
                        We craft cinematic universes that bridge the gap between regional stories and global aesthetics.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3.2 }}
                        className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6"
                    >
                        <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-full px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg font-bold tracking-wider transition-transform hover:scale-105">
                            VIEW PROJECTS
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 rounded-full px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg font-bold tracking-wider backdrop-blur-sm">
                            GET IN TOUCH
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
            >
                <ArrowDown className="w-6 h-6 text-white/50" />
            </motion.div>
        </section>
    );
}
