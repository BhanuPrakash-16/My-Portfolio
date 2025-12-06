import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Start exit animation
                    setTimeout(() => {
                        setIsExiting(true);
                        // Call onComplete after grid reveal animation
                        setTimeout(() => onComplete(), 1500);
                    }, 500);
                    return 100;
                }
                // More realistic loading increment, clamped to 100
                return Math.min(prev + Math.random() * 12, 100);
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    // Calculate circle stroke offset for progress animation
    const circumference = 2 * Math.PI * 80; // radius = 80
    const strokeOffset = circumference - (progress / 100) * circumference;

    // Create grid items for reveal animation
    const gridItems = Array.from({ length: 48 }, (_, i) => i); // 8x6 grid

    return (
        <>
            {/* Preloader Container */}
            <AnimatePresence>
                {!isExiting && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.5, delay: 1.2 }
                        }}
                    >
                        {/* Main Content Container - Centered */}
                        <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
                            {/* Loading Circle with Text */}
                            <div className="relative">
                                {/* SVG Circle Loader */}
                                <svg width="180" height="180" className="transform -rotate-90">
                                    {/* Background circle */}
                                    <circle
                                        cx="90"
                                        cy="90"
                                        r="80"
                                        stroke="rgba(255, 255, 255, 0.1)"
                                        strokeWidth="1"
                                        fill="none"
                                    />
                                    {/* Progress circle */}
                                    <motion.circle
                                        cx="90"
                                        cy="90"
                                        r="80"
                                        stroke="white"
                                        strokeWidth="1"
                                        fill="none"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={strokeOffset}
                                        strokeLinecap="round"
                                        style={{
                                            transition: 'stroke-dashoffset 0.3s ease'
                                        }}
                                    />
                                </svg>

                                {/* Loading Text in Center */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.span
                                        className="font-general text-xs tracking-[0.3em] text-white"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        LOADING...
                                    </motion.span>
                                </div>
                            </div>

                            {/* Percentage - Below Circle */}
                            <motion.div
                                className="font-sfpro text-6xl md:text-7xl font-light text-white"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {Math.floor(progress)}%
                            </motion.div>
                        </div>


                    </motion.div>
                )}
            </AnimatePresence>

            {/* Grid Reveal Animation */}
            <AnimatePresence>
                {isExiting && (
                    <div className="fixed inset-0 z-[99] pointer-events-none grid grid-cols-8 grid-rows-6">
                        {gridItems.map((item) => (
                            <motion.div
                                key={item}
                                className="bg-black"
                                initial={{ scaleY: 1 }}
                                animate={{ scaleY: 0 }}
                                exit={{ scaleY: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: item * 0.02,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                style={{
                                    transformOrigin: 'top'
                                }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Preloader;
