"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Spotlight() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

    return (
        <section ref={containerRef} className="relative min-h-screen py-20 bg-black overflow-hidden flex items-center">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Poster Column */}
                    <motion.div
                        style={{ y, scale }}
                        className="relative aspect-[2/3] w-full max-w-md mx-auto lg:mx-0 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        <Image
                            src="/miling-poster.jpg"
                            alt="MILING - A death messenger Bird"
                            fill
                            className="object-cover rounded-sm shadow-2xl shadow-electric-blue/20"
                        />

                        {/* Floating Badge */}
                        <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                            <span className="text-xs font-bold tracking-widest text-white">IN POST-PRODUCTION</span>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-electric-blue font-bold tracking-widest text-xs sm:text-sm mb-2">SPOTLIGHT PROJECT</h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-4 sm:mb-6">MILONG</h3>
                            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-6 sm:mb-8">
                                A journey into the heart of the Mising tribe. "Milong" explores the delicate balance between tradition and modernity, told through the eyes of a young woman returning to her roots.
                            </p>

                            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                                <div className="px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 rounded-full text-xs sm:text-sm text-white/60">DRAMA</div>
                                <div className="px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 rounded-full text-xs sm:text-sm text-white/60">120 MIN</div>
                                <div className="px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 rounded-full text-xs sm:text-sm text-white/60">ASSAMESE / MISING</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="w-full sm:w-auto bg-electric-blue hover:bg-electric-blue/90 text-white rounded-full px-6 sm:px-8 text-sm sm:text-base">
                                    WATCH TRAILER
                                </Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-6 sm:px-8 text-sm sm:text-base">
                                    VIEW DETAILS
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
}
