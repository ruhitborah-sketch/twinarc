"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export function IntroVideo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Scroll-based animations for text elements
    const titleY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const subtitleY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
    const subtitleOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [0, 1, 1, 0]);

    const descriptionY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
    const descriptionOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [0, 1, 1, 0]);

    const buttonY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
    const buttonOpacity = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [0, 1, 1, 0]);

    const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.95]);
    const videoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

    return (
        <section ref={containerRef} className="min-h-[150vh] bg-black relative overflow-hidden">
            {/* Cinematic Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] bg-electric-blue/8 blur-[200px] rounded-full pointer-events-none" />

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 md:pt-32">

                {/* Top Text Content with Scroll Animation */}
                <div className="text-center mb-8 md:mb-12 space-y-4 md:space-y-6 max-w-4xl">
                    {/* Label */}
                    <motion.div
                        style={{ y: titleY, opacity: titleOpacity }}
                        className="flex items-center justify-center gap-3"
                    >
                        <span className="w-8 h-[1px] bg-electric-blue"></span>
                        <span className="text-electric-blue text-xs font-bold tracking-[0.4em] uppercase">
                            The Vision
                        </span>
                        <span className="w-8 h-[1px] bg-electric-blue"></span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        style={{ y: subtitleY, opacity: subtitleOpacity }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[0.95]"
                    >
                        CRAFTING{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">
                            LEGENDS
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        style={{ y: descriptionY, opacity: descriptionOpacity }}
                        className="text-white/50 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Every frame is a painting, every cut a heartbeat. We don't just produce films; we engineer emotions that resonate across borders.
                    </motion.p>
                </div>

                {/* Centered Video */}
                <motion.div
                    style={{ scale: videoScale, opacity: videoOpacity }}
                    className="relative w-full max-w-5xl"
                >
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,180,255,0.15)] border border-white/10 group">
                        {/* Overlay to prevent interaction and hide YT UI */}
                        <div className="absolute inset-0 z-20 bg-transparent" />

                        {/* YouTube Embed - Scaled to hide controls */}
                        <div className="absolute inset-[-20%] w-[140%] h-[140%]">
                            <iframe
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                src="https://www.youtube.com/embed/vJKv-MZ5fmc?autoplay=1&mute=1&controls=0&loop=1&playlist=vJKv-MZ5fmc&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                style={{ pointerEvents: 'none' }}
                            />
                        </div>

                        {/* Cinematic Vignette */}
                        <div className="absolute inset-0 z-10 shadow-[inset_0_0_120px_rgba(0,0,0,0.8)] pointer-events-none" />

                        {/* Glass Reflection Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-electric-blue/30 rounded-tl-2xl pointer-events-none z-10" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-electric-blue/30 rounded-br-2xl pointer-events-none z-10" />
                    </div>
                </motion.div>

                {/* Bottom CTA with Scroll Animation */}
                <motion.div
                    style={{ y: buttonY, opacity: buttonOpacity }}
                    className="mt-8 md:mt-12"
                >
                    <button className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 hover:border-electric-blue/50 bg-white/5 hover:bg-white/10 transition-all duration-500">
                        <div className="relative w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center group-hover:bg-electric-blue/40 transition-all duration-300">
                            <Play className="w-4 h-4 text-electric-blue fill-current ml-0.5" />
                            {/* Pulse Ring */}
                            <div className="absolute inset-0 rounded-full border border-electric-blue/50 animate-ping opacity-50" />
                        </div>
                        <div className="text-left">
                            <span className="block text-white/80 text-sm font-medium tracking-wider uppercase group-hover:text-white transition-colors">
                                Showreel 2024
                            </span>
                            <span className="block text-white/40 text-xs">
                                Watch in Full
                            </span>
                        </div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
