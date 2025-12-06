"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface ServiceItemProps {
    id: string;
    title: string;
    description: string;
    features: string[];
    index: number;
}

export function ServiceItem({ id, title, description, features, index }: ServiceItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-b border-white/10"
        >
            <div
                className="py-10 cursor-pointer group flex items-start justify-between gap-6"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-baseline gap-6 md:gap-12 flex-1 relative">
                    <span className="text-electric-blue/50 font-conthrax text-sm md:text-base tracking-widest">{id}</span>
                    <div className="flex-1">
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-white group-hover:text-electric-blue transition-colors duration-300 uppercase leading-none">
                            {title}
                        </h3>
                        <p className="mt-4 text-white/50 max-w-xl text-lg hidden md:block group-hover:text-white/70 transition-colors">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-electric-blue transition-colors"
                    >
                        <Plus className="text-white w-6 h-6" />
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
            >
                <div className="pb-10 pl-0 md:pl-[6rem]">
                    <p className="text-white/70 mb-8 md:hidden">{description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-electric-blue rounded-full" />
                                <span className="text-white/80 font-light">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
