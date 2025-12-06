"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export interface Project {
    id: number;
    title: string;
    category: string;
    client: string;
    year: string;
    image: string;
    size: "small" | "medium" | "large" | "featured";
}

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: (project: Project) => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    const isFeatured = project.size === "featured";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative group cursor-pointer block w-full ${isFeatured ? "h-[80vh]" : "h-[40vh] md:h-[50vh]"}`}
            onClick={() => onClick(project)}
        >
            {/* Image Container */}
            <div className="absolute inset-0 overflow-hidden rounded-sm">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            </div>

            {/* Hover Overlay - Cinematic Grain & Gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            {/* Content info */}
            <div className="absolute top-0 left-0 w-full h-full p-6 md:p-10 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-white/60 text-sm font-conthrax tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full">{project.category}</span>
                    <ArrowUpRight className="text-white w-6 h-6" />
                </div>

                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className={`font-heading font-bold text-white mb-2 leading-none uppercase mix-blend-difference ${isFeatured ? "text-6xl md:text-8xl" : "text-4xl md:text-5xl"}`}>
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-6 text-white/70 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span>{project.client}</span>
                        <span className="w-1 h-1 bg-electric-blue rounded-full" />
                        <span>{project.year}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
