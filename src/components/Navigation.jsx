import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = () => {
        setIsMenuOpen(false);
    };

    const menuItemsList = [
    {
        name: 'HOME',
        route: '/',
        number: '01',
        description:
            'WELCOME TO MY WORLD OF TECHNOLOGY AND CREATIVITY — WHERE ENGINEERING, DESIGN, AND AI COME TOGETHER TO BUILD THE FUTURE.',
    },
    {
        name: 'PROJECTS',
        route: '/projects',
        number: '02',
        description:
            'EXPLORE MY PROJECTS THAT BLEND CODE, AI, AND INNOVATION — EACH ONE DESIGNED TO PUSH BOUNDARIES AND CREATE SOMETHING MEANINGFUL.',
    },
    {
        name: 'ABOUT',
        route: '/about',
        number: '03',
        description:
            'LEARN ABOUT MY JOURNEY AS A STUDENT AND AI ENGINEER — MY PASSION FOR BUILDING TECHNOLOGY THAT FEELS HUMAN AND PURPOSEFUL.',
    },
    {
        name: 'CONTACT',
        route: '/contact',
        number: '04',
        description:
            'LET’S CONNECT! WHETHER IT’S COLLABORATION, IDEAS, OR JUST A CONVERSATION ABOUT TECHNOLOGY AND CREATIVITY.',
    },
    ];


    const currentIndex = menuItemsList.findIndex(item => item.route === location.pathname);

    return (
        <>
            <motion.nav
                className={`
    fixed top-0 left-0 right-0 z-50
    flex items-center justify-between
    px-8 md:px-16 py-5
    backdrop-blur-xl
    transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
  `}
                style={{
                    backgroundColor: darkMode
                        ? "rgba(10, 10, 10, 0.35)"
                        : "rgba(255, 255, 255, 0.25)",
                    borderBottom: darkMode
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(0,0,0,0.05)",
                    color: darkMode ? "#ffffff" : "#1a1a1a",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                }}
            >
                {/* Left: Logo */}
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-sfpro text-2xl md:text-3xl font-light tracking-tight hover:opacity-70 cursor-pointer select-none"
                        style={{
                            color: darkMode ? "#ffffff" : "#1a1a1a",
                            transition: "color 0.8s cubic-bezier(0.4,0,0.2,1)",
                        }}
                    >
                        ABP.
                    </motion.div>
                </Link>

                {/* Right: Mode Toggle + Menu */}
                <div className="flex items-center gap-8 md:gap-10">
                    {/* Dark/Light Toggle */}
                    <motion.button
                        onClick={toggleDarkMode}
                        className="text-xs md:text-sm uppercase tracking-[0.25em] font-general hover:opacity-70 transition-all duration-500"
                        style={{
                            color: darkMode ? "#ffffff" : "#1a1a1a",
                        }}
                    >
                        {darkMode ? "LIGHT" : "DARK"}
                    </motion.button>

                    {/* Menu Button */}
                    <motion.button
                        onClick={toggleMenu}
                        className="w-11 h-11 rounded-full border flex items-center justify-center hover:opacity-70 cursor-pointer"
                        style={{
                            borderColor: darkMode ? "#ffffff" : "#1a1a1a",
                            transition: "border-color 0.8s cubic-bezier(0.4,0,0.2,1)",
                        }}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    d="M2 2 L16 16 M16 2 L2 16"
                                    stroke={darkMode ? "#ffffff" : "#1a1a1a"}
                                    strokeWidth="1.2"
                                />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <line x1="2" y1="4" x2="16" y2="4" stroke={darkMode ? "#ffffff" : "#1a1a1a"} strokeWidth="1.2" />
                                <line x1="2" y1="9" x2="16" y2="9" stroke={darkMode ? "#ffffff" : "#1a1a1a"} strokeWidth="1.2" />
                                <line x1="2" y1="14" x2="16" y2="14" stroke={darkMode ? "#ffffff" : "#1a1a1a"} strokeWidth="1.2" />
                            </svg>
                        )}
                    </motion.button>
                </div>
            </motion.nav>


            {/* Full-Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed inset-0 z-[55]"
                        style={{
                            backgroundColor: darkMode ? '#000000' : '#f9f6ee',
                            transition: 'background-color 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        {/* Close Button - Top Right */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            onClick={toggleMenu}
                            className="absolute top-6 right-8 md:top-5 md:right-16 w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-60 cursor-pointer z-[70]"
                            style={{
                                borderColor: darkMode ? '#ffffff' : '#1a1a1a',
                                transition:
                                    'border-color 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                            }}
                            aria-label="Close Menu"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    d="M2 2 L16 16 M16 2 L2 16"
                                    stroke={darkMode ? '#ffffff' : '#1a1a1a'}
                                    strokeWidth="1"
                                    style={{
                                        transition: 'stroke 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                />
                            </svg>
                        </motion.button>

                        {/* Top Left - Brand Text (moved from bottom) */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute top-10 left-6 md:left-12"
                        >
                            <p
                                className="font-general text-xs tracking-[0.25em]"
                                style={{
                                    color: darkMode ? '#ffffff' : '#1a1a1a',
                                    transition:
                                        'color 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                                }}
                            >
                                ABP PORTFOLIO
                            </p>
                        </motion.div>

                        {/* Menu Items - Left Side */}
                        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                            {menuItemsList.map((item, index) => (
                                <Link key={item.route} to={item.route} onClick={handleNavigation}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -40 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                            ease: [0.4, 0, 0.2, 1],
                                        }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className="text-left font-sfpro text-5xl md:text-7xl lg:text-8xl font-light tracking-tight hover:opacity-60 cursor-pointer flex items-center gap-4"
                                        style={{
                                            color: darkMode ? '#ffffff' : '#1a1a1a',
                                            transition:
                                                'color 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                                            opacity: location.pathname === item.route ? 1 : 0.6,
                                        }}
                                    >
                                        {location.pathname === item.route && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className="text-4xl md:text-6xl"
                                            >
                                                →
                                            </motion.span>
                                        )}
                                        {item.name}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        {/* Description Text - Top Right */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="absolute top-24 right-6 md:right-12 max-w-xs"
                        >
                            <p
                                className="font-general text-[10px] md:text-xs tracking-[0.15em] leading-relaxed"
                                style={{
                                    color: darkMode ? '#ffffff' : '#1a1a1a',
                                    transition: 'color 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                {menuItemsList[hoveredIndex !== null ? hoveredIndex : currentIndex]
                                    ?.description}
                            </p>
                        </motion.div>

                        {/* Page Number - Right Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute right-6 md:right-12 bottom-32 md:bottom-24"
                        >
                            <span
                                className="font-sfpro text-[120px] md:text-[180px] lg:text-[220px] font-light leading-none"
                                style={{
                                    color: darkMode ? '#ffffff' : '#1a1a1a',
                                    transition: 'color 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                {menuItemsList[currentIndex]?.number}
                            </span>
                        </motion.div>

                        {/* Bottom Center - Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8"
                        >
                            <a
                                href="https://www.linkedin.com/in/bhanu-prakash-alluri-527188328"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-general text-xs tracking-widest hover:opacity-60 hover:underline"
                                style={{
                                    color: darkMode ? '#ffffff' : '#1a1a1a',
                                    transition:
                                        'color 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                                }}
                            >
                                LINKEDIN
                            </a>
                            <a
                                href="https://github.com/BhanuPrakash-16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-general text-xs tracking-widest hover:opacity-60 hover:underline"
                                style={{
                                    color: darkMode ? '#ffffff' : '#1a1a1a',
                                    transition:
                                        'color 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                                }}
                            >
                                GITHUB
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default Navigation;
