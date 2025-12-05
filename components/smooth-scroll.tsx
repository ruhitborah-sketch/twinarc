"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);

    if (isTouch) {
        return <>{children}</>;
    }

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.05,           // Smooth interpolation (0.1 = snappier, 0.05 = smoother)
                duration: 1.2,         // Animation duration
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
                smoothWheel: true,     // Enable smooth scrolling for mouse wheel
            }}
        >
            {children}
        </ReactLenis>
    );
}
