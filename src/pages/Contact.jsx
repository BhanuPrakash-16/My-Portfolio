import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../utils/animations";

const Contact = ({ darkMode }) => {
    useEffect(() => {
        document.title = "Contact | Bhanu Alluri Portfolio";
    }, []);

    return (
        <motion.div
            // FIX: Added 'pt-28 md:pt-0'. 
            // On mobile, this adds padding to top so image doesn't touch navbar.
            // On desktop, it resets to 0 for the split-screen look.
            className={`relative min-h-screen transition-colors duration-700 pt-28 md:pt-0 ${darkMode ? "bg-black text-white" : "bg-[var(--color-cream)] text-[var(--color-dark)]"
                }`}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Absolute Contact Info (Email/Location) */}
            <motion.div
                className="absolute top-28 right-8 md:top-32 md:right-16 text-right z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="space-y-2 font-general text-sm md:text-lg tracking-wide leading-relaxed">
                    <a
                        href="mailto:bhanualluri2006@gmail.com"
                        className={`block hover:underline underline-offset-4 transition-all duration-300 ${darkMode
                            ? "text-white hover:decoration-white/70"
                            : "text-[var(--color-dark)] hover:decoration-[var(--color-dark)]/50"
                            }`}
                    >
                        bhanualluri2006@gmail.com
                    </a>
                    <p className={`cursor-default ${darkMode ? "text-white/80" : "text-[var(--color-dark)]/80"}`}>
                        Vijayawada, Andhra Pradesh
                    </p>
                    <p className={`cursor-default ${darkMode ? "text-white/80" : "text-[var(--color-dark)]/80"}`}>
                        India
                    </p>
                </div>
            </motion.div>

            {/* Main Content Grid */}
            {/* FIX: grid-cols-1 for mobile (stacking), md:grid-cols-2 for desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-7rem)] md:min-h-screen">

                {/* Left Side - Adaptive Gradient (The "Image") */}
                {/* FIX: Removed 'hidden'. Added h-[40vh] for mobile visibility. */}
                <motion.div
                    className="relative w-full h-[40vh] md:h-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div
                        className={`absolute inset-0 transition-all duration-700 ${darkMode
                            ? "bg-gradient-to-br from-[#0b0f1b] via-[#10131a] to-[#1a1f2b]"
                            : "bg-gradient-to-br from-[#f9f6ee] via-[#f5f0e8] to-[#ede7dd]"
                            }`}
                    />
                </motion.div>

                {/* Right Side - GET IN TOUCH */}
                <motion.div
                    className={`relative w-full h-[50vh] md:h-auto flex items-center justify-center transition-colors duration-700 ${darkMode ? "bg-black" : "bg-[var(--color-cream)]"
                        }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <h1
                        className={`font-sfpro text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none text-center ${darkMode ? "text-white" : "text-[var(--color-dark)]"
                            }`}
                    >
                        GET IN
                        <br />
                        TOUCH
                    </h1>

                    {/* LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/in/bhanu-prakash-alluri-527188328/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`absolute bottom-8 md:bottom-12 left-10 md:left-20 font-general text-xs md:text-base tracking-widest hover:underline underline-offset-8 transition-all duration-300 ${darkMode
                            ? "hover:decoration-white/70"
                            : "hover:decoration-[var(--color-dark)]/60"
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        LINKEDIN
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                        href="https://github.com/BhanuPrakash-16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`absolute bottom-8 md:bottom-12 right-10 md:right-20 font-general text-xs md:text-base tracking-widest hover:underline underline-offset-8 transition-all duration-300 ${darkMode
                            ? "hover:decoration-white/70"
                            : "hover:decoration-[var(--color-dark)]/60"
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        GITHUB
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;