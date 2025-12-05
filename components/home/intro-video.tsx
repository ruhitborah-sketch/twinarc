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

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-40 bg-black relative overflow-hidden">
            {/* Cinematic Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

                    {/* Text Content - Left Side */}
                    <motion.div
                        style={{ opacity, x: useTransform(scrollYProgress, [0, 0.5], [-50, 0]) }}
                        className="lg:col-span-4 space-y-6 sm:space-y-8 text-left"
                    >
                        <div className="space-y-2">
                            <h2 className="text-electric-blue text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase flex items-center gap-3">
                                <span className="w-6 sm:w-8 h-[1px] bg-electric-blue"></span>
                                The Vision
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[0.9]">
                                CRAFTING <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">LEGENDS</span>
                            </h3>
                        </div>

                        <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-md">
                            Every frame is a painting, every cut a heartbeat. We don't just produce films; we engineer emotions that resonate across borders.
                        </p>

                        <div className="flex items-center gap-4 text-sm font-medium text-white/40 tracking-widest uppercase">
                            <Play className="w-4 h-4 fill-current" />
                            <span>Showreel 2024</span>
                        </div>
                    </motion.div>

                    {/* Video Content - Right Side (Larger) */}
                    <motion.div
                        style={{ scale, y }}
                        className="lg:col-span-8 relative"
                    >
                        <div className="relative aspect-[21/9] w-full rounded-lg overflow-hidden shadow-2xl shadow-black/50 border border-white/5 group">
                            {/* Overlay to prevent interaction and hide YT UI */}
                            <div className="absolute inset-0 z-20 bg-transparent" />

                            {/* YouTube Embed - Scaled to hide controls */}
                            <div className="absolute inset-[-20%] w-[140%] h-[140%]">
                                <iframe
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                    src="https://www.youtube.com/embed/vJKv-MZ5fmc?autoplay=1&mute=1&controls=0&loop=1&playlist=vJKv-MZ5fmc&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    style={{ pointerEvents: 'none' }}
                                />
                            </div>

                            {/* Cinematic Vignette */}
                            <div className="absolute inset-0 z-10 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none" />

                            {/* Glass Reflection Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
