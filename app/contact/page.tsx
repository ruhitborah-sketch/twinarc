"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
            <Navbar />

            <div className="pt-32 md:pt-48 pb-20 container mx-auto px-6 relative z-10">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 md:mb-32"
                >
                    <p className="text-electric-blue font-conthrax tracking-[0.3em] text-xs md:text-sm uppercase mb-4">
                        Contact Us
                    </p>
                    <h1 className="text-[12vw] md:text-[8vw] font-heading font-bold text-white leading-[0.85] uppercase tracking-tighter mix-blend-difference overflow-hidden">
                        {"Let's Talk".split('').map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 + (index * 0.03),
                                    ease: [0.33, 1, 0.68, 1]
                                }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 inline-block">
                            {"Creation.".split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.6 + (index * 0.03),
                                        ease: "easeOut"
                                    }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* LEFT COLUMN - DIGITAL */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-16"
                    >
                        {/* Email */}
                        <div className="group">
                            <h3 className="text-sm font-conthrax text-white/50 tracking-widest uppercase mb-4">Email Us</h3>
                            <a href="mailto:hello@twinarcmotion.com" className="block relative overflow-hidden">
                                <span className="text-2xl md:text-5xl font-heading font-bold text-white group-hover:text-electric-blue transition-colors duration-300 break-words">
                                    hello@twinarcmotion.com
                                </span>
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="group">
                            <h3 className="text-sm font-conthrax text-white/50 tracking-widest uppercase mb-4">Quick Chat</h3>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-8 py-5 bg-white/5 rounded-full border border-white/10 hover:border-electric-blue hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.02]"
                            >
                                <Phone className="w-6 h-6 text-electric-blue" />
                                <span className="text-xl font-bold uppercase tracking-wider">WhatsApp Direct</span>
                                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                            </a>
                        </div>

                        {/* Socials */}
                        <div>
                            <h3 className="text-sm font-conthrax text-white/50 tracking-widest uppercase mb-6">Socials</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: Instagram, label: "Instagram" },
                                    { icon: Facebook, label: "Facebook" },
                                    { icon: Youtube, label: "YouTube" },
                                    { icon: Linkedin, label: "LinkedIn" }
                                ].map((item, i) => (
                                    <Link
                                        key={item.label}
                                        href="#"
                                        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-electric-blue hover:border-electric-blue transition-all duration-300"
                                    >
                                        <item.icon className="w-6 h-6" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN - OFFICE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="p-8 md:p-12 border border-white/10 bg-neutral-900/50 backdrop-blur-sm rounded-lg relative overflow-hidden">
                            {/* Decorative Map BG */}
                            <div className="absolute inset-0 opacity-[0.1] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center grayscale invert" />

                            <h3 className="text-sm font-conthrax text-electric-blue tracking-widest uppercase mb-8 relative z-10">Registered Office</h3>

                            <div className="space-y-2 relative z-10">
                                <h4 className="text-3xl font-heading font-bold text-white">Dibrugarh</h4>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    H.No 12, Bylane 3,<br />
                                    Khaliamari, Dibrugarh,<br />
                                    Assam - 786001,<br />
                                    India
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-3 text-white/40 text-sm relative z-10">
                                <MapPin className="w-4 h-4" />
                                <span>Gateway to the North East</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* BG NOISE */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.2]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4]" />
            </div>

            <Footer />
        </main>
    );
}
