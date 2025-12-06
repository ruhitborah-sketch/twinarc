"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-neutral-950 pt-32 pb-8 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-electric-blue/5 blur-[150px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* TOP SECTION: CTA & LINKS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24 md:mb-32">

                    {/* CTA Column */}
                    <div className="md:col-span-6 space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-[0.9]">
                            HAVE AN IDEA?
                            <br />
                            <span className="text-white/40">LET'S BUILD IT.</span>
                        </h2>

                        <Link href="/contact" className="inline-block group">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden px-8 py-5 bg-white text-black rounded-full font-bold tracking-wider text-sm flex items-center gap-3"
                            >
                                <span className="relative z-10">START A PROJECT</span>
                                <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                <div className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                        </Link>
                    </div>

                    {/* SITEMAP */}
                    <div className="md:col-span-2 text-center md:text-left">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">Menu</h3>
                        <ul className="space-y-4 flex flex-col items-center md:items-start">
                            {["Projects", "About", "Services", "Careers"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-white/70 hover:text-electric-blue transition-colors text-sm font-medium tracking-wide block relative group w-fit">
                                        <span className="relative z-10">{item}</span>
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="md:col-span-2 text-center md:text-left">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">Contact</h3>
                        <ul className="space-y-4 flex flex-col items-center md:items-start">
                            <li>
                                <a href="mailto:hello@twinarcmotion.com" className="text-white/70 hover:text-electric-blue transition-colors text-sm font-medium tracking-wide">
                                    hello@twinarcmotion.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="text-white/70 hover:text-electric-blue transition-colors text-sm font-medium tracking-wide">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="text-white/40 text-sm leading-relaxed pt-2">
                                Dibrugarh, Assam<br />India, 786001
                            </li>
                        </ul>
                    </div>

                    {/* SOCIALS */}
                    <div className="md:col-span-2 text-center md:text-left">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">Follow</h3>
                        <ul className="space-y-4 flex flex-col items-center md:items-start">
                            {[
                                { name: "Instagram", icon: Instagram },
                                { name: "Facebook", icon: Facebook },
                                { name: "YouTube", icon: Youtube }
                            ].map((social) => (
                                <li key={social.name}>
                                    <Link href="#" className="flex items-center gap-3 text-white/70 hover:text-electric-blue transition-colors group">
                                        <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                                        <span className="text-sm font-medium tracking-wide">{social.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BRANDING */}
                <div className="border-t border-white/10 pt-16 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <h1 className="text-[12vw] md:text-[13.5vw] font-conthrax font-bold text-center leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/50 to-transparent tracking-tighter opacity-20 hover:opacity-40 transition-opacity duration-700 select-none">
                            TWINARC
                        </h1>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[12vw] md:text-[13.5vw] font-conthrax font-bold text-center leading-[0.8] text-transparent stroke-text opacity-10 pointer-events-none">
                            TWINARC
                        </div>
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-white/5">
                        <p className="text-[10px] md:text-xs text-white/30 font-mono tracking-widest uppercase">
                            © {new Date().getFullYear()} TWINARC MOTION.
                        </p>
                        <p className="text-[10px] md:text-xs text-white/30 font-mono tracking-widest uppercase flex items-center gap-1">
                            Cinematic Intelligence <span className="w-1 h-1 rounded-full bg-electric-blue" /> <a href="https://dekarusys.dev/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-electric-blue transition-colors font-bold">Designed by Dekarusys</a>
                        </p>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </footer>
    );
}
