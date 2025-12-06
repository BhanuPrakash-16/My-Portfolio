import React, { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { pageTransition, fadeIn } from "../utils/animations";
import { useNavigate } from "react-router-dom";

const Projects = ({ darkMode }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth follow for floating image
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);
    const x = useTransform(springX, (val) => val - 150);
    const y = useTransform(springY, (val) => val - 200);

    // Detect mobile viewport
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.title = "Projects | Bhanu Alluri Portfolio";
    }, []);

    // --- Projects Data ---
    const projects = [
        {
            number: "01",
            title: "AI-Driven Public Grievance Analysis",
            tags: "ai • nlp • flask • react • bert",
            image: "/projects/ai-driven-grievance-image.png",
            github: "https://github.com/BhanuPrakash-16/sentimental-analysis",
        },
        {
            number: "02",
            title: "ShowTime – Full Stack Movie Booking System",
            tags: "react • spring boot • mysql • full-stack",
            image: "/projects/ShowTime-website.png",
            live: "https://online-ticket-booking-s6w7.vercel.app/",
            github: "https://github.com/BhanuPrakash-16/OnlineTicketBooking",
        },
        {
            number: "03",
            title: "ShowTime – UI/UX Experience Design",
            tags: "figma • ui/ux • design system • prototyping",
            image: "/projects/ShowTime-UIUX.png",
            figma:
                "https://www.figma.com/community/file/1504804160522105562/online-ticket-booking",
        },
        {
            number: "04",
            title: "Portfolio Website (2025)",
            tags: "react • framer-motion • design • 3d effects",
            image: "/projects/project4.jpg",
            github: "https://github.com/BhanuPrakash-16/My-Portfolio",
        },
        {
            number: "05",
            title: "Virtual Try-On App (AI Project)(Comming Soon)",
            tags: "ai • computer vision • ui/ux • fashion tech",
            image: "/projects/project5.jpg",
            github: "https://github.com/BhanuPrakash-16",
        },
    ];

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <motion.div
            onMouseMove={!isMobile ? handleMouseMove : undefined}
            className={`min-h-screen transition-colors duration-700 relative overflow-hidden ${darkMode
                ? "bg-black text-white"
                : "bg-[var(--color-cream)] text-[var(--color-dark)]"
                }`}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* --- Header --- */}
            <div className="px-8 md:px-16 lg:px-24 pt-32 pb-16">
                <motion.h1
                    className={`font-sfpro text-xs tracking-[0.3em] mb-2 ${darkMode
                        ? "text-white/60"
                        : "text-[var(--color-dark)]/60"
                        }`}
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                >
                    PROJECTS
                </motion.h1>

                <motion.h2
                    className="text-4xl md:text-6xl font-light tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Selected Works
                </motion.h2>
            </div>

            {/* --- Projects List --- */}
            <div className="px-8 md:px-16 lg:px-24 pb-32 border-t border-white/10 relative z-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col md:flex-row items-start md:items-center gap-8 border-b border-white/10 py-10 md:py-14 cursor-pointer relative group"
                        onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                        onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                        {/* Project Number */}
                        <span
                            className={`font-sfpro text-4xl md:text-6xl font-light ${darkMode ? "text-white/50" : "text-[var(--color-dark)]/50"
                                }`}
                        >
                            {project.number}
                        </span>

                        {/* Title + Links Section */}
                        <div className="flex-1 relative w-full">
                            <h2
                                className={`font-sfpro text-3xl md:text-6xl font-light tracking-tight leading-none transition-all duration-300 ${darkMode ? "text-white" : "text-[var(--color-dark)]"
                                    }`}
                            >
                                {project.title}
                            </h2>

                            {/* Separation Line */}
                            <motion.div
                                className={`h-[1px] mt-3 md:mt-4 origin-left ${darkMode ? "bg-white/40" : "bg-[var(--color-dark)]/40"
                                    }`}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            />

                            {/* Always Visible Links */}
                            <div className="flex flex-wrap gap-5 mt-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-general text-sm tracking-[0.1em] uppercase hover:opacity-70 transition"
                                    >
                                        GitHub ↗
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-general text-sm tracking-[0.1em] uppercase hover:opacity-70 transition"
                                    >
                                        Live ↗
                                    </a>
                                )}
                                {project.figma && (
                                    <a
                                        href={project.figma}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-general text-sm tracking-[0.1em] uppercase hover:opacity-70 transition"
                                    >
                                        Figma ↗
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Tags (Visible on all screens) */}
                        <p
                            className={`font-general text-xs uppercase tracking-[0.2em] ${darkMode ? "text-white/50" : "text-[var(--color-dark)]/50"
                                }`}
                        >
                            {project.tags}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* --- Floating Hover Image (Desktop only) --- */}
            {!isMobile && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-[1] overflow-hidden rounded-lg"
                    style={{ x, y }}
                >
                    <AnimatePresence mode="wait">
                        {hoveredIndex !== null && (
                            <motion.div
                                key={hoveredIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]"
                            >
                                <img
                                    src={projects[hoveredIndex].image}
                                    alt={projects[hoveredIndex].title}
                                    className="w-full h-full object-cover shadow-2xl rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* --- Cinematic Dual Footer --- */}
            <div
                className={`w-full border-t ${darkMode ? "border-white/20" : "border-black/20"
                    } flex flex-col md:flex-row items-center justify-center px-10 md:px-24 py-20 gap-16 text-center`}
            >
                {/* Left Section: About */}
                <div
                    onClick={() => navigate("/about")}
                    className="cursor-pointer group"
                >
                    <h4 className="text-sm md:text-base tracking-[0.3em] uppercase mb-2 opacity-70">
                        TO KNOW MORE
                    </h4>
                    <motion.h1
                        whileHover={{ scale: 1.05, opacity: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-7xl font-light uppercase group-hover:opacity-80 transition"
                    >
                        ABOUT ME
                    </motion.h1>
                </div>

                {/* Divider Line Between */}
                <div
                    className={`hidden md:block w-[2px] h-20 ${darkMode ? "bg-white/30" : "bg-black/30"
                        }`}
                ></div>

                {/* Right Section: Contact */}
                <div
                    onClick={() => navigate("/contact")}
                    className="cursor-pointer group"
                >
                    <h4 className="text-sm md:text-base tracking-[0.3em] uppercase mb-2 opacity-70">
                        GET IN TOUCH
                    </h4>
                    <motion.h1
                        whileHover={{ scale: 1.05, opacity: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-7xl font-light uppercase group-hover:opacity-80 transition"
                    >
                        CONTACT
                    </motion.h1>
                </div>
            </div>

        </motion.div>
    );
};

export default Projects;
