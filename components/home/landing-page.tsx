"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowDown, Play, Sparkles, Film, Clapperboard, X, Calendar, Clock, Users, MapPin } from "lucide-react";
import Image from "next/image";

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
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
                    <source src="/intro.mp4" type="video/mp4" />
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
                            Est. 2025 • Dibrugarh, Assam
                        </span>
                    </motion.div>

                    <motion.div
                        className="mb-2"
                        initial={{ overflow: "hidden" }}
                        animate={{ overflow: "visible" }}
                        transition={{ delay: 4, duration: 0 }}
                    >
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.6 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-conthrax font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 leading-[0.9] tracking-wider"
                            style={{
                                filter: "drop-shadow(0 0 10px rgba(255, 0, 150, 0.5)) drop-shadow(0 0 20px rgba(255, 0, 180, 0.3))",
                                textShadow: "0 0 15px rgba(255, 0, 150, 0.4)"
                            }}
                        >
                            TwinArc
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
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-conthrax font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-700 leading-[0.9] tracking-wider"
                            style={{
                                filter: "drop-shadow(0 0 10px rgba(0, 150, 255, 0.5)) drop-shadow(0 0 20px rgba(0, 100, 255, 0.3))",
                                textShadow: "0 0 15px rgba(0, 150, 255, 0.4)"
                            }}
                        >
                            Motion
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

// ============================================
// TICKER SECTION
// ============================================
function TickerSection() {
    return (
        <div className="w-full bg-electric-blue py-4 overflow-hidden flex items-center">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 mx-4">
                        <span className="text-black font-heading font-bold text-xl md:text-2xl uppercase tracking-widest">
                            LATEST UPDATE: 'MILONG' ENTERING POST-PRODUCTION
                        </span>
                        <span className="text-black/50 text-xl">•</span>
                        <span className="text-black font-heading font-bold text-xl md:text-2xl uppercase tracking-widest">
                            CASTING CALL OPEN FOR NEXT FEATURE
                        </span>
                        <span className="text-black/50 text-xl">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

// ============================================
// INTRO VIDEO SECTION
// ============================================
function IntroVideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(textRef, { once: false, amount: 0.3 });
    const [isPlaying, setIsPlaying] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const titleY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -20]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
    const subtitleY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -15]);
    const subtitleOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
    const descriptionY = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -10]);
    const descriptionOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [0, 1, 1, 0]);
    const buttonY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -8]);
    const buttonOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
    const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
    const videoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);



    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { type: "spring" as const, stiffness: 100, damping: 15 },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1, y: 0,
            transition: { delay: i * 0.05, type: "spring" as const, stiffness: 120, damping: 12 },
        }),
    };

    const craftingLetters = "CRAFTING".split("");
    const legendsLetters = "LEGENDS".split("");

    return (
        <section ref={containerRef} className="min-h-screen md:min-h-[150vh] bg-black relative overflow-hidden mt-16 md:mt-24">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[90%] h-[50%] md:h-[60%] rounded-full pointer-events-none"
                animate={{
                    background: [
                        "radial-gradient(circle, rgba(0,180,255,0.12) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(0,180,255,0.18) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(0,180,255,0.12) 0%, transparent 70%)",
                    ],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />




            {/* Optimized Floating Particles (CSS only) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden">
                <div className="absolute w-1 h-1 bg-electric-blue/40 rounded-full left-[15%] top-[40%] animate-float" style={{ animationDelay: '0s' }} />
                <div className="absolute w-1 h-1 bg-electric-blue/40 rounded-full left-[33%] top-[48%] animate-float" style={{ animationDelay: '2s', animationDuration: '12s' }} />
                <div className="absolute w-1 h-1 bg-electric-blue/40 rounded-full left-[51%] top-[42%] animate-float" style={{ animationDelay: '4s', animationDuration: '9s' }} />
                <div className="absolute w-1 h-1 bg-electric-blue/40 rounded-full left-[69%] top-[45%] animate-float" style={{ animationDelay: '1s', animationDuration: '11s' }} />
                <div className="absolute w-1 h-1 bg-electric-blue/40 rounded-full left-[87%] top-[38%] animate-float" style={{ animationDelay: '3s', animationDuration: '13s' }} />
            </div>

            <div className="absolute left-0 top-1/4 w-[2px] h-32 md:hidden overflow-hidden">
                <motion.div className="w-full h-full bg-gradient-to-b from-transparent via-electric-blue/50 to-transparent" animate={{ y: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
            </div>
            <div className="absolute right-0 top-1/3 w-[2px] h-32 md:hidden overflow-hidden">
                <motion.div className="w-full h-full bg-gradient-to-b from-transparent via-electric-blue/50 to-transparent" animate={{ y: ["100%", "-100%"] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }} />
            </div>

            <div className="sticky top-0 h-screen flex flex-col items-center justify-start px-4 sm:px-6 pt-24 md:pt-32 pb-4 md:pb-8">
                <motion.div ref={textRef} className="text-center mb-4 md:mb-8 space-y-2 md:space-y-4 max-w-4xl w-full" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div style={{ y: titleY, opacity: titleOpacity }} variants={itemVariants} className="flex items-center justify-center gap-2 md:gap-3">
                        <motion.span className="w-6 md:w-8 h-[1px] bg-electric-blue origin-right" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : { scaleX: 0 }} transition={{ duration: 0.6, delay: 0.2 }} />
                        <motion.div className="flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-electric-blue animate-pulse" />
                            <span className="text-electric-blue text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">The Vision</span>
                            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-electric-blue animate-pulse" />
                        </motion.div>
                        <motion.span className="w-6 md:w-8 h-[1px] bg-electric-blue origin-left" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : { scaleX: 0 }} transition={{ duration: 0.6, delay: 0.2 }} />
                    </motion.div>

                    <motion.h2 style={{ y: subtitleY, opacity: subtitleOpacity }} className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] md:leading-[0.95] px-2">
                        <span className="block md:inline">
                            {craftingLetters.map((letter, i) => (
                                <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block">{letter}</motion.span>
                            ))}
                        </span>
                        <span className="block md:inline md:ml-4">
                            {legendsLetters.map((letter, i) => (
                                <motion.span key={i} custom={i + craftingLetters.length} variants={letterVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-blue/80 to-white/30">{letter}</motion.span>
                            ))}
                        </span>
                    </motion.h2>

                    <motion.p style={{ y: descriptionY, opacity: descriptionOpacity }} variants={itemVariants} className="text-white/50 text-xs sm:text-sm md:text-xl font-light leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
                        Every frame is a painting, every cut a heartbeat. We engineer emotions that resonate across borders.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-1.5 md:hidden px-4">
                        {[{ icon: Film, label: "Cinematic" }, { icon: Sparkles, label: "Premium" }, { icon: Clapperboard, label: "Creative" }].map((item, i) => (
                            <motion.div key={item.label} className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ delay: 0.5 + i * 0.1 }} whileTap={{ scale: 0.95 }}>
                                <item.icon className="w-2.5 h-2.5 text-electric-blue" />
                                <span className="text-white/60 text-[10px]">{item.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div style={{ scale: videoScale, opacity: videoOpacity }} className="relative w-full max-w-5xl px-2 md:px-0">
                    <motion.div className="absolute -inset-[2px] md:-inset-1 rounded-xl md:rounded-2xl opacity-60 md:opacity-40" animate={{ background: ["linear-gradient(0deg, rgba(0,180,255,0.3), transparent, rgba(0,180,255,0.3))", "linear-gradient(180deg, rgba(0,180,255,0.3), transparent, rgba(0,180,255,0.3))", "linear-gradient(360deg, rgba(0,180,255,0.3), transparent, rgba(0,180,255,0.3))"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />

                    <div className="relative aspect-video w-full max-h-[35vh] md:max-h-none rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,180,255,0.2)] md:shadow-[0_0_100px_rgba(0,180,255,0.15)] border border-white/10 group">
                        <div className="absolute inset-0 z-20 bg-transparent" />
                        <div className="absolute inset-[-20%] w-[140%] h-[140%]">
                            <iframe className="w-full h-full object-cover opacity-90 transition-opacity duration-700" src="https://www.youtube.com/embed/vJKv-MZ5fmc?autoplay=1&mute=1&controls=0&loop=1&playlist=vJKv-MZ5fmc&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{ pointerEvents: 'none' }} />
                        </div>
                        <div className="absolute inset-0 z-10 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] md:shadow-[inset_0_0_120px_rgba(0,0,0,0.8)] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-30 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                        <motion.div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-l-2 border-t-2 border-electric-blue/50 md:border-electric-blue/30 rounded-tl-xl md:rounded-tl-2xl pointer-events-none z-10" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                        <motion.div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-r-2 border-b-2 border-electric-blue/50 md:border-electric-blue/30 rounded-br-xl md:rounded-br-2xl pointer-events-none z-10" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                        <motion.div className="absolute inset-0 z-15 flex items-center justify-center md:hidden pointer-events-none" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 2, delay: 1 }}>
                            <motion.div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: 2 }}>
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div className="md:hidden mt-3 px-4" initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ delay: 0.8 }}>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-electric-blue to-electric-blue/50 w-full animate-pulse" />
                            </div>
                            <span className="text-white/30 text-[10px] font-mono">LIVE</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div style={{ y: buttonY, opacity: buttonOpacity }} className="mt-6 md:mt-12">
                    <motion.button className="group relative flex items-center gap-3 md:gap-4 px-5 md:px-8 py-3 md:py-4 rounded-full border border-white/20 bg-white/5 overflow-hidden" whileTap={{ scale: 0.97 }} whileHover={{ borderColor: "rgba(0,180,255,0.5)", backgroundColor: "rgba(255,255,255,0.1)" }} transition={{ duration: 0.3 }}>
                        <motion.div className="absolute inset-0 bg-electric-blue/10 md:hidden" initial={{ scale: 0, opacity: 0 }} whileTap={{ scale: 2, opacity: [0, 0.3, 0] }} transition={{ duration: 0.6 }} style={{ borderRadius: "9999px" }} />
                        <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-electric-blue/20 flex items-center justify-center group-hover:bg-electric-blue/40 transition-all duration-300">
                            <Play className="w-3.5 h-3.5 md:w-4 md:h-4 text-electric-blue fill-current ml-0.5" />
                            <div className="absolute inset-0 rounded-full border border-electric-blue/50 animate-ping opacity-20" />
                            <div className="absolute inset-0 rounded-full border border-electric-blue/30 md:hidden animate-pulse" />
                        </div>
                        <div className="text-left">
                            <span className="block text-white/80 text-xs md:text-sm font-medium tracking-wider uppercase group-hover:text-white transition-colors">Showreel 2024</span>
                            <span className="block text-white/40 text-[10px] md:text-xs">Watch in Full</span>
                        </div>
                        <div className="ml-1 md:hidden animate-pulse">
                            <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                    </motion.button>
                </motion.div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden animate-bounce opacity-60">
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-white/30 text-[9px] tracking-widest uppercase">Scroll</span>
                        <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// SPOTLIGHT SECTION
// ============================================
function SpotlightSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <section ref={containerRef} className="relative min-h-screen py-20 bg-black overflow-hidden flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ y, scale }} className="relative aspect-[2/3] w-full max-w-md mx-auto lg:mx-0 group">
                        <motion.div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" initial={{ opacity: 0.8 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} />
                        <motion.div initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}>
                            <Image src="/miling-poster.jpg" alt="MILING - A death messenger Bird" fill className="object-cover rounded-sm shadow-2xl shadow-electric-blue/20" />
                        </motion.div>
                        <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                            <span className="text-xs font-bold tracking-widest text-white">IN POST-PRODUCTION</span>
                        </div>
                    </motion.div>

                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <motion.h2 className="text-electric-blue font-bold tracking-widest text-xs sm:text-sm mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>SPOTLIGHT PROJECT</motion.h2>
                            <motion.h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-4 sm:mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>MILONG</motion.h3>
                            <motion.p className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-6 sm:mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
                                A journey into the heart of the Mising tribe. "Milong" explores the delicate balance between tradition and modernity, told through the eyes of a young woman returning to her roots.
                            </motion.p>
                            <motion.div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                                <div className="px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 rounded-full text-xs sm:text-sm text-white/60">DRAMA</div>
                                <div className="px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 rounded-full text-xs sm:text-sm text-white/60">120 MIN</div>
                                <div className="px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 rounded-full text-xs sm:text-sm text-white/60">ASSAMESE / MISING</div>
                            </motion.div>
                            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
                                <Button size="lg" className="w-full sm:w-auto bg-electric-blue hover:bg-electric-blue/90 text-white rounded-full px-6 sm:px-8 text-sm sm:text-base">WATCH TRAILER</Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-6 sm:px-8 text-sm sm:text-base" onClick={() => setShowDetails(true)}>VIEW DETAILS</Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />

            {/* Film Details Modal */}
            <AnimatePresence>
                {showDetails && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowDetails(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 rounded-2xl border border-white/10 shadow-2xl scrollbar-hide"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowDetails(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            {/* Modal Content */}
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Poster Side */}
                                <div className="relative aspect-[2/3] md:aspect-auto md:min-h-[500px]">
                                    <Image
                                        src="/miling-poster.jpg"
                                        alt="MILONG Poster"
                                        fill
                                        className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-neutral-900 via-transparent to-transparent" />
                                </div>

                                {/* Details Side */}
                                <div className="p-6 md:p-8 space-y-6">
                                    <div>
                                        <span className="text-electric-blue text-xs font-bold tracking-widest">FEATURE FILM</span>
                                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2">MILONG</h2>
                                        <p className="text-white/50 text-sm mt-1">A Death Messenger Bird</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue text-xs rounded-full">IN POST-PRODUCTION</span>
                                        <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">DRAMA</span>
                                        <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">CULTURAL</span>
                                    </div>

                                    <p className="text-white/70 leading-relaxed">
                                        A journey into the heart of the Mising tribe. "Milong" explores the delicate balance between tradition and modernity, told through the eyes of a young woman returning to her roots after years in the city. The film delves deep into the mystical beliefs surrounding the Milong bird, considered a messenger of death in Mising folklore.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                <Clock className="w-5 h-5 text-electric-blue" />
                                            </div>
                                            <div>
                                                <p className="text-white/40 text-xs">Duration</p>
                                                <p className="text-white font-medium">120 Minutes</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                <Calendar className="w-5 h-5 text-electric-blue" />
                                            </div>
                                            <div>
                                                <p className="text-white/40 text-xs">Release</p>
                                                <p className="text-white font-medium">2025</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                <MapPin className="w-5 h-5 text-electric-blue" />
                                            </div>
                                            <div>
                                                <p className="text-white/40 text-xs">Location</p>
                                                <p className="text-white font-medium">Assam, India</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                <Film className="w-5 h-5 text-electric-blue" />
                                            </div>
                                            <div>
                                                <p className="text-white/40 text-xs">Language</p>
                                                <p className="text-white font-medium">Assamese / Mising</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/10">
                                        <p className="text-white/40 text-xs mb-3">CAST & CREW</p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-white/40" />
                                                <span className="text-white/70 text-sm">Director: TwinArc Motion</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-2">
                                        <Button className="flex-1 bg-electric-blue hover:bg-electric-blue/90 text-white rounded-full">
                                            <Play className="w-4 h-4 mr-2" /> Watch Trailer
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// ============================================
// ABOUT PREVIEW SECTION
// ============================================
function AboutPreviewSection() {
    return (
        <section className="py-32 bg-neutral-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                            BRIDGING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#B026FF]">REGIONAL STORIES</span> WITH GLOBAL AESTHETICS.
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-white/60 font-light leading-relaxed">
                            TwinArc Motion is a film production house based in Dibrugarh, Assam. We are dedicated to bringing the untold stories of the Mising tribe and Northeast India to the world stage, wrapped in premium cinematic experiences.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                            <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 hover:bg-white text-white hover:text-black transition-all duration-300">OUR STORY</Button>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative aspect-[3/4] mt-12">
                                <Image src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" alt="Filmmaking in Assam" fill className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="relative aspect-[3/4]">
                                <Image src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" alt="Cinematic Lighting" fill className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// MAIN LANDING PAGE EXPORT
// ============================================
export function LandingPage() {
    return (
        <>
            <HeroSection />
            <TickerSection />
            <IntroVideoSection />
            <SpotlightSection />
            <AboutPreviewSection />
        </>
    );
}
