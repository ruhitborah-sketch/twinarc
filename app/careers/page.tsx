"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white relative overflow-hidden">
            <Navbar />

            {/* BACKGROUND NOISE & SCANLINES */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.3]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20" />
            </div>

            <div className="pt-32 md:pt-48 pb-20 container mx-auto px-6 relative z-10">
                {/* HERO SECTION */}
                <div className="max-w-7xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-[12vw] md:text-[9vw] font-heading font-bold text-white leading-[0.85] uppercase tracking-tighter mix-blend-difference overflow-hidden">
                            {"Join The".split('').map((char, index) => (
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
                            <span className="text-electric-blue inline-block">
                                {"New Wave.".split('').map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
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
                </div>

                {/* MANIFESTO & ROLES */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 max-w-7xl mx-auto">
                    {/* LEFT - MANIFESTO */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h2 className="text-sm font-conthrax text-white/50 tracking-widest uppercase border-b border-white/10 pb-4 inline-block">The Manifesto</h2>
                        <p className="text-2xl md:text-4xl leading-tight font-medium text-white/90">
                            We don't care about degrees.<br />
                            We don't care about corporate ladders.<br />
                            <span className="text-white/40">We care about vision.</span>
                        </p>
                        <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                            TwinArc Motion is building the future of cinema in the North East. We are looking for the rebels, the auteurs, and the technical wizards who want to push boundaries. If you have a fire in your belly and a reel to prove it, we want to talk.
                        </p>
                    </motion.div>

                    {/* RIGHT - OPEN ROLES */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <h2 className="text-sm font-conthrax text-electric-blue tracking-widest uppercase border-b border-electric-blue/30 pb-4 inline-block">Who We Need</h2>

                        <div className="space-y-6">
                            {[
                                "Cinematographers / DoPs",
                                "Video Editors (Premiere/DaVinci)",
                                "VFX Artists (Blender/AE/Nuke)",
                                "Line Producers",
                                "Sound Designers"
                            ].map((role, i) => (
                                <div key={i} className="group flex items-center justify-between border-b border-white/5 pb-4">
                                    <span className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-electric-blue transition-colors duration-300 cursor-default">{role}</span>
                                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-electric-blue transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" />
                                </div>
                            ))}
                        </div>

                        <div className="pt-12">
                            <div className="p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                                <h3 className="text-xl font-bold uppercase mb-4">No Forms. Just Proof.</h3>
                                <p className="text-white/60 mb-6">Send your portfolio or showreel directly to our team.</p>
                                <a
                                    href="mailto:careers@twinarcmotion.com"
                                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-electric-blue hover:text-black transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <Mail className="w-5 h-5" />
                                    Email Your Reel
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
