import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for smooth movement - Balanced for responsiveness and smoothness
    const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            // Subtract half the size of the cursor (16px) to center it
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        // Track when hovering over clickable elements
        const handleMouseOver = (e) => {
            // Check for clickable elements
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('.hover-target') ||
                e.target.closest('button') ||
                e.target.closest('a')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                translateX: cursorX,
                translateY: cursorY,
                // THE MAGIC: Difference mode inverts colors (white on black, black on white)
                mixBlendMode: "difference",
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
            }}
            className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        >
            {/* Optional text inside cursor when hovering */}
            {isHovered && (
                <span className="text-[4px] text-black font-bold">VIEW</span>
            )}
        </motion.div>
    );
};

export default CustomCursor;
