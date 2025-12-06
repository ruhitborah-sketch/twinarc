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
            {/* OUTER RING - Follows with delay for trailing effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.8,
                }}
            >
                <motion.div
                    className="w-10 h-10 rounded-full border border-white/30"
                    animate={{
                        scale: isHovering ? 1.8 : 1,
                        borderColor: isHovering ? "rgba(0, 123, 255, 0.6)" : "rgba(255, 255, 255, 0.3)",
                        borderWidth: isHovering ? "2px" : "1px",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                />
            </motion.div>

            {/* INNER DOT - Follows mouse precisely */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.3,
                }}
            >
                <motion.div
                    className="w-2 h-2 rounded-full bg-white"
                    animate={{
                        scale: isHovering ? 0.5 : 1,
                        backgroundColor: isHovering ? "#007BFF" : "#ffffff",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                    }}
                />
            </motion.div>

            {/* GLOW EFFECT - Atmospheric trail */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997] mix-blend-screen"
                animate={{
                    x: mousePosition.x - 40,
                    y: mousePosition.y - 40,
                }}
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    mass: 1.2,
                }}
            >
                <motion.div
                    className="w-20 h-20 rounded-full bg-electric-blue/20 blur-2xl"
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                        opacity: isHovering ? 0.5 : 0.25,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                    }}
                />
            </motion.div>

            {/* HOVER TEXT INDICATOR (Optional: Shows on link hover) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center"
                animate={{
                    x: mousePosition.x - 30,
                    y: mousePosition.y - 30,
                    opacity: isHovering ? 1 : 0,
                    scale: isHovering ? 1 : 0.5,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                }}
            >
                <div className="w-[60px] h-[60px] rounded-full border border-electric-blue/50 flex items-center justify-center">
                    <span className="text-[8px] font-bold tracking-widest text-electric-blue uppercase">VIEW</span>
                </div>
            </motion.div>
        </>
    );
}
