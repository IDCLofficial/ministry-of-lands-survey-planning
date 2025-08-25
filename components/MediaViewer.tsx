"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaX, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface MediaItem {
    id: string;
    type: 'image' | 'video';
    src: string;
    alt: string;
    title: string;
}

interface MediaViewerProps {
    mediaItems: MediaItem[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export default function MediaViewer({
    mediaItems,
    currentIndex,
    isOpen,
    onClose,
    onNavigate,
}: MediaViewerProps) {
    const currentItem = mediaItems[currentIndex];

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    if (currentIndex > 0) {
                        onNavigate(currentIndex - 1);
                    }
                    break;
                case 'ArrowRight':
                    if (currentIndex < mediaItems.length - 1) {
                        onNavigate(currentIndex + 1);
                    }
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex, mediaItems.length, onClose, onNavigate]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            onNavigate(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < mediaItems.length - 1) {
            onNavigate(currentIndex + 1);
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const overlayVariants: Variants = {
        hidden: {
            opacity: 0,
            backdropFilter: "blur(0px)"
        },
        visible: {
            opacity: 1,
            backdropFilter: "blur(8px)",
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0,
            backdropFilter: "blur(0px)",
            transition: {
                duration: 0.25,
                ease: [0.4, 0, 1, 1]
            }
        }
    };

    const contentVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: -30,
            transition: {
                duration: 0.25,
                ease: [0.4, 0, 1, 1]
            }
        }
    };

    const mediaVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        })
    };

    const controlsVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 1, 1]
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            {isOpen && currentItem && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={handleOverlayClick}
                >
                    {/* Close Button */}
                    <motion.button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                        aria-label="Close media viewer"
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            transition: {
                                duration: 0.4,
                                delay: 0.3,
                                ease: [0.68, -0.55, 0.265, 1.55]
                            }
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0,
                            rotate: 180,
                            transition: {
                                duration: 0.2,
                                ease: [0.4, 0, 1, 1]
                            }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaX className="text-white" size={20} />
                    </motion.button>

                    {/* Navigation Buttons */}
                    {mediaItems.length > 1 && (
                        <>
                            <motion.button
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-200"
                                aria-label="Previous media"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: currentIndex === 0 ? 0.3 : 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.25
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -20,
                                    transition: {
                                        duration: 0.2
                                    }
                                }}
                                whileHover={currentIndex > 0 ? { scale: 1.1, x: -2 } : {}}
                                whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
                            >
                                <FaChevronLeft className="text-white" size={20} />
                            </motion.button>

                            <motion.button
                                onClick={handleNext}
                                disabled={currentIndex === mediaItems.length - 1}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-200"
                                aria-label="Next media"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{
                                    opacity: currentIndex === mediaItems.length - 1 ? 0.3 : 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.25
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    x: 20,
                                    transition: {
                                        duration: 0.2
                                    }
                                }}
                                whileHover={currentIndex < mediaItems.length - 1 ? { scale: 1.1, x: 2 } : {}}
                                whileTap={currentIndex < mediaItems.length - 1 ? { scale: 0.95 } : {}}
                            >
                                <FaChevronRight className="text-white" size={20} />
                            </motion.button>
                        </>
                    )}

                    {/* Media Content */}
                    <motion.div
                        className="max-w-7xl max-h-full w-full flex flex-col items-center"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="relative flex-1 flex items-center justify-center mb-4 overflow-hidden">
                            <AnimatePresence mode="wait" custom={1}>
                                <motion.div
                                    key={currentItem.id}
                                    custom={1}
                                    variants={mediaVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="flex items-center justify-center"
                                >
                                    {currentItem.type === 'image' ? (
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src={currentItem.src}
                                                alt={currentItem.alt}
                                                width={1200}
                                                height={800}
                                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                                                priority
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.video
                                            src={currentItem.src}
                                            controls
                                            className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                                            autoPlay
                                            whileHover={{ scale: 1.01 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            Your browser does not support the video tag.
                                        </motion.video>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Media Info */}
                        <motion.div
                            className="text-center text-white"
                            variants={controlsVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.h3
                                className="text-xl font-semibold mb-2"
                                key={`title-${currentItem.id}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.4
                                    }
                                }}
                            >
                                {currentItem.title}
                            </motion.h3>
                            {mediaItems.length > 1 && (
                                <motion.p
                                    className="text-white/70"
                                    key={`counter-${currentIndex}`}
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: {
                                            duration: 0.2,
                                            delay: 0.5
                                        }
                                    }}
                                >
                                    {currentIndex + 1} of {mediaItems.length}
                                </motion.p>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Thumbnail Navigation */}
                    {mediaItems.length > 1 && (
                        <motion.div
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4"
                            variants={controlsVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {mediaItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => onNavigate(index)}
                                    className={`relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 ${index === currentIndex ? 'ring-2 ring-white' : ''
                                        }`}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{
                                        opacity: index === currentIndex ? 1 : 0.6,
                                        y: 0,
                                        scale: index === currentIndex ? 1 : 0.9,
                                        transition: {
                                            duration: 0.3,
                                            delay: 0.3 + (index * 0.05)
                                        }
                                    }}
                                    whileHover={{
                                        opacity: 1,
                                        scale: 1,
                                        y: -2,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                    {item.type === 'video' && (
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                            <Image
                                                src="/assets/gridicons_play.svg"
                                                alt="Play"
                                                width={16}
                                                height={16}
                                                className="opacity-80"
                                            />
                                        </div>
                                    )}

                                    {/* Active indicator */}
                                    {index === currentIndex && (
                                        <motion.div
                                            className="absolute inset-0 border-2 border-white rounded-md"
                                            layoutId="activeThumbnail"
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}