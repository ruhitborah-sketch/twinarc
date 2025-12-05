"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceItem } from "@/components/services/service-item";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SERVICES = [
    {
        id: "01",
        title: "Line Production",
        description: "Comprehensive on-ground execution for feature films, commercials, and series. We handle the chaos so you can focus on the art.",
        features: [
            "Budgeting & Scheduling",
            "Crew Hiring & Management",
            "Equipment Rental (Arri/Red)",
            "Logistics & Transport",
            "Accommodation & Catering",
            "Post-Production Support"
        ]
    },
    {
        id: "02",
        title: "Location Scouting",
        description: "Access to the most breathtaking, untouched landscapes in the North East. From Himalayan peaks to dense tropical jungles.",
        features: [
            "Exclusive Location Database",
            "Recce Management",
            "Permit Acquisition",
            "Local Liaising",
            "Risk Assessment",
            "Weather Monitoring"
        ]
    },
    {
        id: "03",
        title: "Government Permissions",
        description: "Navigating the bureaucracy of 8 states. We have direct lines to local administration and tribal councils.",
        features: [
            "Single Window Clearance",
            "Tribal Council Pilots",
            "Police Protection",
            "Drone Permissions",
            "Subsidy Consultation",
            "Legal Compliance"
        ]
    }
];

export default function ServicesPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2]" />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none"
                    />
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <p className="text-electric-blue font-conthrax tracking-[0.3em] text-xs md:text-sm uppercase mb-4">
                            TwinArc Motion Services
                        </p>
                        <h1 className="text-[12vw] md:text-[9vw] font-heading font-bold text-white leading-[0.8] uppercase tracking-tighter mix-blend-difference overflow-hidden">
                            {"THE GATEWAY".split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5 + (index * 0.05),
                                        ease: [0.33, 1, 0.68, 1]
                                    }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-4xl text-white/80 font-heading font-bold max-w-4xl mx-auto leading-tight">
                            Filming in the North East? <br />
                            <span className="text-white/40 font-normal">We are your boots on the ground.</span>
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* THE PITCH */}
            <section className="py-20 md:py-32 bg-neutral-950/50 border-y border-white/5 relative z-10 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                        <div className="w-full md:w-1/2">
                            <div>
                                <motion.h3
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="text-4xl md:text-6xl font-heading font-bold text-white mb-2 leading-none"
                                >
                                    YOU HANDLE
                                </motion.h3>
                            </div>
                            <div>
                                <motion.h3
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                    className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-electric-blue leading-none"
                                >
                                    THE ART.
                                </motion.h3>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col items-end text-right">
                            <div>
                                <motion.h3
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    className="text-4xl md:text-6xl font-heading font-bold text-white/30 mb-2 leading-none"
                                >
                                    WE HANDLE
                                </motion.h3>
                            </div>
                            <div className="mb-6">
                                <motion.h3
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                    className="text-4xl md:text-6xl font-heading font-bold text-white leading-none"
                                >
                                    THE CHAOS.
                                </motion.h3>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl"
                            >
                                Since we are growing beyond the region, we are the experts for outside production houses wanting to shoot in Assam and Arunachal. We handle the logistics so you can focus on your vision.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="py-32 bg-black relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-sm font-conthrax text-electric-blue tracking-widest uppercase mb-4">Our Capabilities</h2>
                    </motion.div>

                    <div className="w-full">
                        {SERVICES.map((service, index) => (
                            <ServiceItem
                                key={service.id}
                                {...service}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="h-[60vh] flex flex-col items-center justify-center bg-electric-blue text-black relative overflow-hidden group">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-center px-6"
                >
                    <h2 className="text-5xl md:text-8xl font-heading font-bold mb-8 uppercase leading-none">
                        Ready to <br />Shoot?
                    </h2>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-110">
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
