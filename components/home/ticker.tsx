"use client";

import { motion } from "framer-motion";

export function Ticker() {
    return (
        <div className="w-full bg-electric-blue py-4 overflow-hidden flex items-center">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
                {/* Repeat the text multiple times for seamless looping */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 mx-4">
                        <span className="text-black font-heading font-bold text-xl md:text-2xl uppercase tracking-widest">
                            LATEST UPDATE: 'MILONG' ENTERING POST-PRODUCTION
                        </span>
                        <span className="text-black/50 text-xl">•</span>
                        <span className="text-black font-heading font-bold text-xl md:text-2xl uppercase tracking-widest">
                            CASTING CALL OPEN FOR NEXT FEATURE
                        </span>
                        <span className="text-black/50 text-xl">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
