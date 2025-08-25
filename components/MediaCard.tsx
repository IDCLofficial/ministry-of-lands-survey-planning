"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";

interface MediaItem {
    id: string;
    type: 'image' | 'video';
    src: string;
    alt: string;
    title: string;
}

interface MediaCardProps {
    item: MediaItem;
    index: number;
    onClick: () => void;
}

export default function MediaCard({ item, index, onClick }: MediaCardProps) {
    const cardContent = (
        <motion.div
            className="group cursor-pointer"
            onClick={onClick}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
            <motion.div
                className="relative mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
                <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.type === 'video' && (
                    <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors"
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2, ease: [0.68, -0.55, 0.265, 1.55] }}
                        >
                            <Image
                                src="/assets/gridicons_play.svg"
                                alt="Play"
                                width={50}
                                height={50}
                                className="cursor-pointer"
                            />
                        </motion.div>
                    </motion.div>
                )}

                {/* Hover overlay */}
                <motion.div
                    className="absolute inset-0 bg-black/0 flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="opacity-0 group-hover:opacity-100 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
                        }}
                    >
                        <span className="text-sm font-medium text-gray-900">View</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.h3
                className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
            >
                {item.title}
            </motion.h3>
        </motion.div>
    );

    return (
        <AnimatedEntrance
            {...ANIMATION_PRESETS.CARD_FADE_UP}
            delay={STAGGER_DELAYS.FAST[index % STAGGER_DELAYS.FAST.length]}
        >
            {cardContent}
        </AnimatedEntrance>
    );
}