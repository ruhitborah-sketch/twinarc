"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true); // Default to true to prevent flash

    useEffect(() => {
        // Detect touch device - only show cursor for mouse/touchpad users
        const checkTouchDevice = () => {
            const hasMouse = window.matchMedia('(pointer: fine)').matches;
            const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            // Show cursor only if device has fine pointer (mouse/touchpad) and screen is larger than mobile
            setIsTouchDevice(!hasMouse || window.innerWidth < 768);
        };

        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Track hovering over interactive elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.hasAttribute("data-cursor-hover")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener('resize', checkTouchDevice);
        };
    }, []);

    // Don't render on touch devices or mobile
    if (isTouchDevice || !isVisible) return null;

    return (
        <>
            {/* Film Frame Cursor - Outer Frame */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 12,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.5,
                }}
            >
                {/* Film strip frame */}
                <motion.div
                    className="relative"
                    animate={{
                        scale: isHovering ? 1.3 : 1,
                        rotate: isHovering ? 5 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                >
                    {/* Left perforations */}
                    <div className="absolute -left-1 top-0 flex flex-col gap-1">
                        <div className="w-1.5 h-1.5 rounded-sm bg-white/60" />
                        <div className="w-1.5 h-1.5 rounded-sm bg-white/60" />
                        <div className="w-1.5 h-1.5 rounded-sm bg-white/60" />
                    </div>

                    {/* Right perforations */}
                    <div className="absolute -right-1 top-0 flex flex-col gap-1">
                        <div className="w-1.5 h-1.5 rounded-sm bg-white/60" />
                        <div className="w-1.5 h-1.5 rounded-sm bg-white/60" />
                        <div className="w-1.5 h-1.5 rounded-sm bg-white/60" />
                    </div>

                    {/* Main frame */}
                    <div className="w-8 h-6 border-2 border-white/70 rounded-sm flex items-center justify-center bg-transparent">
                        {/* Center crosshair */}
                        <motion.div
                            className="w-1.5 h-1.5 bg-electric-blue rounded-full"
                            animate={{
                                scale: isHovering ? [1, 1.5, 1] : 1,
                                opacity: isHovering ? 1 : 0.8,
                            }}
                            transition={{
                                duration: 0.3,
                                repeat: isHovering ? Infinity : 0,
                                repeatType: "reverse",
                            }}
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Glow effect behind cursor */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 bg-electric-blue/15 rounded-full pointer-events-none z-[9998] blur-xl"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.4 : 0.2,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                }}
            />
        </>
    );
}
