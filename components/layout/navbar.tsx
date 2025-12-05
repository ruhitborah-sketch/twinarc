"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="relative h-20 w-64 transition-opacity hover:opacity-80">
                    {/* Logo Image */}
                    <img
                        src="/logo-final.png"
                        alt="TwinArc Motion"
                        className="h-full w-full object-contain object-left"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/projects" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        PROJECTS
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        ABOUT
                    </Link>
                    <Link href="/services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        SERVICES
                    </Link>
                    <Link href="/careers" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        CAREERS
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="outline" className="hidden md:inline-flex border-electric-blue text-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue">
                        GET IN TOUCH
                    </Button>
                </div>
            </div>
        </nav>
    );
}
