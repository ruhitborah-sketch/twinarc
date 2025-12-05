"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        category: string;
        videoUrl?: string; // Optional for now
    } | null;
}

export function VideoModal({ isOpen, onClose, project }: VideoModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-6 right-6 md:top-10 md:right-10 z-50 text-white/50 hover:text-white transition-colors"
                        onClick={onClose}
                    >
                        <X className="w-8 h-8 md:w-12 md:h-12" />
                    </motion.button>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-7xl aspect-video bg-black shadow-2xl overflow-hidden rounded-sm border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Placeholder Video Player */}
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 group">
                            {/* In a real app, this would be a URL or ID passed from the project */}
                            <div className="text-center">
                                <p className="text-electric-blue font-conthrax text-sm tracking-widest uppercase mb-4">Now Playing</p>
                                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">{project.title}</h2>
                                <p className="text-white/40 mt-2">Video playback demo</p>
                            </div>

                            {/* Fake Playhead */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                                <div className="h-full bg-electric-blue w-1/3" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Info Footer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white pointer-events-none"
                    >
                        <span className="text-xs font-bold text-electric-blue uppercase tracking-widest border border-electric-blue/30 px-3 py-1 rounded-full mb-2 inline-block">
                            {project.category}
                        </span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
