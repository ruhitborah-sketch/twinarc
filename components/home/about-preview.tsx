"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutPreview() {
    return (
        <section className="py-32 bg-neutral-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight"
                        >
                            BRIDGING <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">REGIONAL STORIES</span> WITH GLOBAL AESTHETICS.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-white/60 font-light leading-relaxed"
                        >
                            TwinArc Motion is a film production house based in Dibrugarh, Assam. We are dedicated to bringing the untold stories of the Mising tribe and Northeast India to the world stage, wrapped in premium cinematic experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 hover:bg-white text-white hover:text-black transition-all duration-300">
                                OUR STORY
                            </Button>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative aspect-[3/4] mt-12"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
                                    alt="Filmmaking in Assam"
                                    fill
                                    className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="relative aspect-[3/4]"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
                                    alt="Cinematic Lighting"
                                    fill
                                    className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
