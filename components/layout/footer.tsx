"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-4">
                        {/* Logo + TwinArc Motion on same line */}
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 shrink-0">
                                <Image
                                    src="/logo-final.png"
                                    alt="TwinArc Motion Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span
                                    className="text-lg font-conthrax font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 tracking-wider"
                                    style={{ filter: "drop-shadow(0 0 6px rgba(255, 0, 150, 0.4))" }}
                                >
                                    TwinArc
                                </span>
                                <span
                                    className="text-lg font-conthrax font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-700 tracking-wider"
                                    style={{ filter: "drop-shadow(0 0 6px rgba(0, 150, 255, 0.4))" }}
                                >
                                    Motion
                                </span>
                            </div>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Creating cinematic universes from the heart of Northeast India.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold tracking-widest text-white uppercase">Menu</h3>
                        <ul className="space-y-4">
                            <li><Link href="/projects" className="text-white/60 hover:text-electric-blue transition-colors text-sm">Projects</Link></li>
                            <li><Link href="/about" className="text-white/60 hover:text-electric-blue transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/services" className="text-white/60 hover:text-electric-blue transition-colors text-sm">Services</Link></li>
                            <li><Link href="/careers" className="text-white/60 hover:text-electric-blue transition-colors text-sm">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold tracking-widest text-white uppercase">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin className="w-5 h-5 text-electric-blue shrink-0" />
                                <span>Dibrugarh, Assam<br />India, 786001</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <Mail className="w-5 h-5 text-electric-blue shrink-0" />
                                <span>hello@twinarcmotion.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <Phone className="w-5 h-5 text-electric-blue shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold tracking-widest text-white uppercase">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue hover:text-white transition-all duration-300 text-white/60">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue hover:text-white transition-all duration-300 text-white/60">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue hover:text-white transition-all duration-300 text-white/60">
                                <Youtube className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/30">
                        © {new Date().getFullYear()} TwinArc Motion. All rights reserved.
                    </p>
                    <p className="text-xs text-white/30">
                        Designed with <span className="text-electric-blue">♥</span> in Assam.
                    </p>
                </div>
            </div>
        </footer>
    );
}
