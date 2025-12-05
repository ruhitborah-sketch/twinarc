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
                        ? "bg-black/70 backdrop-blur-2xl border-white/10 py-3"
                        : "bg-transparent border-transparent py-5"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative h-16 w-56 transition-all duration-300 hover:opacity-80">
                        <img
                            src="/logo-final.png"
                            alt="TwinArc Motion"
                            className="h-full w-full object-contain object-left"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-electric-blue to-purple-500 group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            className="hidden lg:inline-flex border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300"
                        >
                            GET IN TOUCH
                        </Button>

                        {/* Mobile Menu Toggle - Custom Hamburger */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] z-[60]"
                            aria-label="Toggle menu"
                        >
                            {[1, 2, 3].map((line) => (
                                <motion.span
                                    key={line}
                                    custom={line}
                                    variants={menuLineVariants}
                                    animate={mobileMenuOpen ? "open" : "closed"}
                                    transition={{ duration: 0.3 }}
                                    className="block w-7 h-[2px] bg-white origin-center"
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
                        {/* Backdrop with blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
                        />

                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
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

                        {/* Gradient Orbs for visual effect */}
                        <div className="absolute top-20 -left-32 w-64 h-64 bg-electric-blue/20 rounded-full blur-[100px]" />
                        <div className="absolute bottom-40 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />

                        {/* Menu Content */}
                        <div className="relative h-full flex flex-col justify-center items-center px-8">
                            <nav className="flex flex-col items-center gap-2">
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
                                            className="group relative block py-4 px-6"
                                        >
                                            <span className="text-4xl font-bold text-white/90 group-hover:text-electric-blue transition-colors duration-300">
                                                {link.label}
                                            </span>
                                            <motion.span
                                                className="absolute bottom-2 left-6 right-6 h-[2px] bg-gradient-to-r from-electric-blue to-purple-500 origin-left"
                                                initial={{ scaleX: 0 }}
                                                whileHover={{ scaleX: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
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
                                className="mt-12"
                            >
                                <Button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="relative overflow-hidden bg-gradient-to-r from-electric-blue to-purple-500 text-white border-0 px-10 py-6 text-lg font-bold rounded-full group"
                                >
                                    <span className="relative z-10">GET IN TOUCH</span>
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </Button>
                            </motion.div>

                            {/* Social Links or Additional Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                className="absolute bottom-12 left-0 right-0 flex justify-center gap-8 text-white/40 text-sm"
                            >
                                <span>hello@twinarcmotion.com</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
