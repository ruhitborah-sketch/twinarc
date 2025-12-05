"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: "/projects", label: "PROJECTS" },
        { href: "/about", label: "ABOUT" },
        { href: "/services", label: "SERVICES" },
        { href: "/careers", label: "CAREERS" },
        { href: "/contact", label: "CONTACT" },
    ];

    const menuLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: (custom: number) => ({
            rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
            y: custom === 1 ? 8 : custom === 3 ? -8 : 0,
            opacity: custom === 2 ? 0 : 1,
        }),
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                    scrolled
                        ? "bg-black/80 backdrop-blur-xl border-white/5 py-4"
                        : "bg-transparent border-transparent py-6"
                )}
            >
                {/* Global Grain Texture for Nav */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

                <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
                    {/* Logo */}
                    <Link href="/" className="relative h-12 w-48 transition-all duration-300 hover:opacity-80">
                        <img
                            src="/logo-final.png"
                            alt="TwinArc Motion"
                            className="h-full w-full object-contain object-left"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 group tracking-widest"
                            >
                                {link.label}
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-electric-blue opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                className="hidden lg:inline-flex border-white/10 bg-white/5 text-white hover:bg-electric-blue hover:border-electric-blue hover:text-black transition-all duration-300 rounded-full px-6 tracking-wide text-xs"
                            >
                                START A PROJECT
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle - Custom Hamburger */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-[6px] z-[60] group"
                            aria-label="Toggle menu"
                        >
                            {[1, 2, 3].map((line) => (
                                <motion.span
                                    key={line}
                                    custom={line}
                                    variants={menuLineVariants}
                                    animate={mobileMenuOpen ? "open" : "closed"}
                                    transition={{ duration: 0.3 }}
                                    className="block w-8 h-[2px] bg-white group-hover:bg-electric-blue transition-colors duration-300 origin-center"
                                />
                            ))}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu - Full Screen Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[55] lg:hidden"
                    >
                        {/* Backdrop with blur and grain */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-neutral-950/95 backdrop-blur-3xl"
                        >
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                        </motion.div>

                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                            aria-label="Close menu"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </motion.button>

                        {/* Menu Content */}
                        <div className="relative h-full flex flex-col justify-center items-center px-6">
                            <nav className="flex flex-col items-center gap-6">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.1,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="group relative block"
                                        >
                                            <span className="text-5xl md:text-7xl font-heading font-bold text-white/50 group-hover:text-white transition-colors duration-300 uppercase tracking-tighter">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className="mt-16"
                            >
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                    <Button
                                        className="bg-white text-black hover:bg-electric-blue hover:text-black transition-all duration-300 text-lg px-10 py-6 rounded-full font-bold uppercase tracking-wider"
                                    >
                                        Start a Project
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
