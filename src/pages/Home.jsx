import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, pageTransition } from "../utils/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// --- 1. Custom Typewriter Logic ---
const useTypewriter = (phrases, typeSpeed = 90, deleteSpeed = 40, pauseTime = 2000) => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases, typeSpeed, deleteSpeed, pauseTime]);

    return text;
};

// --- 2. Typewriter Display Component ---
const TypewriterDisplay = ({ text, darkMode }) => {
    // Logic to separate <tag>, middle text, and the Role
    const tagMatch = text.match(/^<[^>]*>?/);
    const tag = tagMatch ? tagMatch[0] : "";
    const rest = text.slice(tag.length);
    const words = rest.split(" ");
    const lastWord = words.length > 1 ? words[words.length - 1] : "";
    const middleText = rest.slice(0, rest.lastIndexOf(lastWord));

    return (
        <span className="font-sfpro text-2xl md:text-5xl leading-snug tracking-wide">
            {/* The Tag (e.g. <build>) */}
            <span className={`italic font-light font-mono opacity-50 ${darkMode ? "text-white" : "text-black"}`}>
                {tag}
            </span>

            {/* Middle Text */}
            <span className={`font-light opacity-80 ${darkMode ? "text-white" : "text-black"}`}>
                {words.length > 1 ? middleText : rest}
            </span>

            {/* The Role (Bolded) */}
            {words.length > 1 && (
                <span className={`font-semibold ${darkMode ? "text-white" : "text-black"}`}>
                    {lastWord}
                </span>
            )}

            {/* Blinking Cursor */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                className={`inline-block w-[2px] md:w-[3px] h-[1em] ml-1 align-middle translate-y-[-2px] ${darkMode ? "bg-white" : "bg-black"}`}
            />
        </span>
    );
};

// --- 3. Main Home Component ---
const Home = ({ darkMode }) => {
    const heroRef = useRef(null);
    const visionRef = useRef(null);
    const craftRef = useRef(null);
    const navigate = useNavigate();

    // The phrases
    const typedText = useTypewriter([
        "<build> like an Engineer.",
        "<code> like a Creator.",
        "<design> like an Architect."
    ], 100, 50, 2500);

    useEffect(() => {
        document.title = "Home | Bhanu Alluri Portfolio";

        const sections = [heroRef.current, visionRef.current, craftRef.current];
        sections.forEach((section) => {
            gsap.fromTo(section,
                { opacity: 0, y: 80 },
                {
                    opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: section, start: "top 85%" }
                }
            );
        });
    }, []);

    return (
        <motion.div
            className={`min-h-screen transition-colors duration-700 ${darkMode ? "bg-black text-white" : "bg-[var(--color-cream)] text-[var(--color-dark)]"}`}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* ================= HERO SECTION ================= */}
            {/* pt-28 ensures content isn't hidden behind the fixed header */}
            <section
                ref={heroRef}
                className="min-h-screen pt-28 flex flex-col justify-center items-center text-center px-6 md:px-16"
            >
                {/* 1. The Greeting */}
                <motion.span
                    className="font-general text-2xl md:text-2xl tracking-widest uppercase opacity-60 mb-4"
                    variants={fadeIn}
                >
                    Hi, I'm
                </motion.span>

                {/* 2. The Name */}
                <motion.h1
                    className="font-sfpro text-5xl md:text-8xl font-semibold leading-[1.1] tracking-tight"
                    variants={fadeIn}
                    transition={{ delay: 0.1 }}
                >
                    Alluri Bhanu Prakash
                </motion.h1>

                {/* 3. The Static Role */}
                <motion.h2
                    className="mt-6 text-sm md:text-lg font-general tracking-[0.2em] uppercase opacity-70"
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                >
                    Student • AI Engineer • Creator
                </motion.h2>

                {/* 4. The Typewriter Hook (Action) */}
                {/* Fixed height container to prevent layout jumping */}
                <div className="mt-10 h-[50px] md:h-[70px] flex items-center justify-center">
                    <motion.div variants={fadeIn} transition={{ delay: 0.3 }}>
                        <TypewriterDisplay text={typedText} darkMode={darkMode} />
                    </motion.div>
                </div>

                {/* 5. The Mission Statement (Description) */}
                <motion.p
                    className="mt-8 max-w-2xl font-general text-lg md:text-xl opacity-80 leading-relaxed"
                    variants={fadeIn}
                    transition={{ delay: 0.4 }}
                >
                    I create intelligent experiences that merge engineering precision with design clarity —
                    where every idea, line of code, and system feels beautifully alive.
                </motion.p>

                {/* 6. CTA Buttons */}
                <motion.div
                    className="flex flex-col md:flex-row gap-6 mt-12"
                    variants={fadeIn}
                    transition={{ delay: 0.5 }}
                >
                    <button
                        onClick={() => navigate("/projects")}
                        className={`inline-block border px-8 py-3 rounded-full font-general text-sm tracking-widest transition-all duration-500 hover:scale-105 ${darkMode ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white"}`}
                    >
                        VIEW PROJECTS
                    </button>
                    <button
                        onClick={() => navigate("/about")}
                        className={`inline-block border px-8 py-3 rounded-full font-general text-sm tracking-widest transition-all duration-500 hover:scale-105 ${darkMode ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white"}`}
                    >
                        MORE ABOUT ME
                    </button>
                </motion.div>
            </section>


            {/* ================= VISION SECTION ================= */}
            <section
                ref={visionRef}
                className={`min-h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-16 transition-colors duration-700 ${darkMode ? "bg-[var(--color-cream)] text-[var(--color-dark)]" : "bg-black text-white"}`}
            >
                <motion.h2
                    className="font-sfpro text-4xl md:text-6xl font-light leading-[1.1] tracking-tight"
                    variants={fadeIn}
                >
                    A Vision Beyond Technology
                </motion.h2>

                <motion.p
                    className="mt-6 max-w-3xl font-general text-lg md:text-xl opacity-80 leading-relaxed"
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                >
                    I see AI not as a tool, but as a <strong>creative language</strong> —
                    a medium through which machines can learn empathy, emotion, and art.
                    My mission is to make technology <em>disappear into experience</em>,
                    blending logic and imagination into something timeless.
                </motion.p>
            </section>

            {/* ================= MY CRAFT SECTION ================= */}
            <section
                ref={craftRef}
                className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-16"
            >
                <motion.h2
                    className="font-sfpro text-4xl md:text-6xl font-light leading-[1.1] tracking-tight"
                    variants={fadeIn}
                >
                    Where Engineering Meets Art
                </motion.h2>

                <motion.p
                    className="mt-6 max-w-3xl font-general text-lg md:text-xl opacity-80 leading-relaxed"
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                >
                    My work merges <strong>engineering precision</strong> with <strong>artistic clarity</strong> —
                    building AI systems, operating platforms, and experiences that
                    speak in the language of design, data, and emotion.
                </motion.p>
            </section>

            {/* ================= CTA SECTION ================= */}
            <section
                className={`w-full py-28 flex flex-col items-center justify-center text-center border-t ${darkMode ? "border-white/20 bg-black text-white" : "border-black/20 bg-[var(--color-cream)] text-[var(--color-dark)]"}`}
            >
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-sfpro text-3xl md:text-5xl font-light tracking-tight leading-[1.2]"
                >
                    Let’s Build Something That <span className="font-semibold">Feels Alive.</span>
                </motion.h3>

                <motion.button
                    onClick={() => navigate("/contact")}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    className={`mt-12 px-10 py-4 rounded-full font-general text-sm tracking-[0.25em] uppercase transition-all duration-500 border ${darkMode ? "border-white/50 text-white hover:border-white hover:bg-white hover:text-black" : "border-black/50 text-[var(--color-dark)] hover:border-black hover:bg-black hover:text-white"}`}
                >
                    Contact Me
                </motion.button>
            </section>
        </motion.div>
    );
};

export default Home;