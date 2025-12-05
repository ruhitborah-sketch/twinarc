"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ProjectCard, Project } from "@/components/projects/project-card";
import { VideoModal } from "@/components/projects/video-modal";

// PORTFOLIO DATA (Cinematic)
// PORTFOLIO DATA (Cinematic)
const PROJECTS: Project[] = [
    {
        id: 1,
        title: "MILONG",
        category: "Feature Film",
        client: "TwinArc Originals",
        year: "2025",
        image: "/miling-poster.jpg",
        size: "featured"
    }
];

const CATEGORIES = ["All", "Commercial", "Narrative", "Visual FX"];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeFilter);

    // Dynamic grid classes for editorial layout
    const getGridClass = (index: number, size: string) => {
        if (size === "featured") return "col-span-1 md:col-span-2 lg:col-span-3 mb-12";
        if (index % 3 === 1) return "col-span-1 md:col-span-2"; // Asymmetric wide items
        return "col-span-1";
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
            <Navbar />

            {/* NOISE OVERLAY */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.2]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 md:pt-48 mb-40">
                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 px-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-[12vw] md:text-[8vw] font-heading font-bold text-white leading-[0.85] uppercase tracking-tighter mb-4">
                            Selected<br /><span className="text-electric-blue">Works</span>
                        </h1>
                    </motion.div>
                </div>

                {/* EDITORIAL GRID */}
                <div className="mb-32 relative">
                    {/* Atmospheric Background Glow */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full mix-blend-screen" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full relative z-10"
                    >
                        {/* FEATURED PROJECT: MILONG */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center mb-32">
                            {/* 3D TILT POSTER */}
                            <motion.div
                                className="relative w-full max-w-[340px] perspective-1000 group"
                                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
                                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                            >
                                <motion.div
                                    className="relative aspect-[9/16] w-full rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,123,255,0.15)] border border-white/10"
                                    onClick={() => setSelectedProject(PROJECTS[0])}
                                    whileHover={{ boxShadow: "0 0 80px rgba(0,123,255,0.3)" }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
                                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                        </div>
                                    </div>

                                    <img
                                        src={PROJECTS[0].image}
                                        alt={PROJECTS[0].title}
                                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* DETAILS */}
                            <div className="flex-1 space-y-8 text-center md:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                        <span className="px-3 py-1 rounded-full border border-electric-blue/30 bg-electric-blue/10 text-electric-blue text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,123,255,0.2)]">
                                            {PROJECTS[0].category}
                                        </span>
                                        <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase">
                                            {PROJECTS[0].year}
                                        </span>
                                    </div>

                                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 tracking-tight leading-[0.9]">
                                        {PROJECTS[0].title}
                                    </h2>

                                    <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                                        A journey into the heart of the Mising tribe.
                                        <span className="text-white block mt-2 font-normal">"Milong" explores the delicate balance between tradition and modernity.</span>
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="flex flex-wrap gap-4 justify-center md:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] text-white/30 uppercase tracking-widest">Year</span>
                                        <span className="text-sm text-white font-medium tracking-wider">{PROJECTS[0].year}</span>
                                    </div>
                                    <div className="w-[1px] h-10 bg-white/10 mx-2" />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] text-white/30 uppercase tracking-widest">Language</span>
                                        <span className="text-sm text-electric-blue font-medium tracking-wider">Assamese / Mising</span>
                                    </div>
                                </motion.div>

                                <motion.button
                                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105"
                                    onClick={() => setSelectedProject(PROJECTS[0])}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7, type: "spring" }}
                                >
                                    <span className="relative z-10 font-bold tracking-wider text-sm">WATCH TRAILER</span>
                                    <div className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                </motion.button>
                            </div>
                        </div>

                        {/* COMING SOON: "CLASSIFIED" STYLE */}
                        <motion.div
                            className="w-full max-w-4xl mx-auto border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
                            <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-electric-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="p-12 md:p-20 text-center relative z-10">
                                <div className="inline-flex items-center gap-2 mb-6 opacity-50">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">Production Pipeline</span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-heading font-bold text-white/20 group-hover:text-white/40 transition-colors duration-500 mb-4">
                                    MORE FILMS IN PRODUCTION
                                </h3>

                                <p className="text-electric-blue/60 font-mono text-sm tracking-[0.2em] uppercase">
                                    [ CLASSIFIED CONTENT ]
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <VideoModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />

            <Footer />
        </main>
    );
}
