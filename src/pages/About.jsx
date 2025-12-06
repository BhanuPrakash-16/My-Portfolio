import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
};

export default function About({ darkMode }) {
    const navigate = useNavigate();
    const controls = useAnimation();

    useEffect(() => {
        document.title = "About | Bhanu Alluri Portfolio";
    }, []);

    // cinematic scroll-to-top motion
    const scrollToTop = () => {
        const totalScroll = window.scrollY;
        let current = 0;
        const duration = 1200; // smooth cinematic scroll
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const step = () => {
            current += 16;
            const progress = Math.min(current / duration, 1);
            const eased = easeOutCubic(progress);
            window.scrollTo(0, totalScroll * (1 - eased));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    const skills = {
        Programming: ["C++", "Python", "JavaScript", "Java (Basic)"],
        Frontend: ["HTML", "CSS", "TailwindCSS", "React.js"],
        Backend: ["Spring Boot", "FastAPI", "MySQL", "MongoDB", "PostgreSQL"],
        AI: ["Machine Learning", "Generative AI", "NLP", "GAN"],
        Tools: ["Git & GitHub", "Docker", "Linux", "Postman", "Figma", "AWS"],
    };

    const lineColor = darkMode ? "border-white/30" : "border-black/30";

    return (
        <section
            className={`min-h-screen font-[General_Sans] transition-colors duration-700 ${darkMode
                    ? "bg-black text-white"
                    : "bg-[var(--color-cream)] text-[var(--color-dark)]"
                }`}
        >
            {/* ===== Hero ===== */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-24 text-center">
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="text-5xl md:text-7xl font-light leading-tight"
                >
                    About <span className="font-semibold">Me</span>
                </motion.h1>

                <motion.p
                    custom={0.3}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="mt-8 text-base md:text-lg opacity-80 leading-relaxed max-w-3xl mx-auto"
                >
                    I’m <strong>Alluri Bhanu Prakash</strong> — a developer, thinker, and dreamer
                    who believes technology should feel alive, intuitive, and meaningful.
                    I look beyond machines to see the art in logic and the creativity in code.
                </motion.p>
            </div>

            {/* ===== Content Sections ===== */}
            {[
                {
                    title: "My Philosophy",
                    text1: "AI isn’t just a tool — it’s the next language of creativity.",
                    text2:
                        "True innovation begins when we teach machines to understand our imagination, not just our instructions. I want to shape a future where AI becomes an invisible co-creator — a system that feels emotion, learns intention, and evolves with us.",
                    align: "left",
                },
                {
                    title: "My Craft",
                    text1: "Where engineering precision meets artistic clarity.",
                    text2:
                        "I build systems that merge engineering precision with artistic clarity — blending algorithms, design, and intuition into functional elegance.",
                    align: "right",
                },
                {
                    title: "My Vision",
                    text1:
                        "Building a tech ecosystem that redefines how we live, create, and think.",
                    text2:
                        "I envision a world where humans and machines work in harmony — where technology fades into the background and intelligence feels natural.",
                    align: "left",
                },
                {
                    title: "My Mission",
                    text1:
                        "To build innovations that feel human. To engineer systems that think like creators. To inspire the next generation of builders to dream beyond code.",
                    text2: "",
                    align: "right",
                },
            ].map((section) => (
                <div
                    key={section.title}
                    className={`max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 border-t ${lineColor} ${section.align === "right" ? "text-right" : "text-left"
                        }`}
                >
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        className="text-lg font-semibold tracking-wide"
                    >
                        {section.title}
                    </motion.h2>
                    <motion.p
                        custom={0.2}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        className="text-2xl md:text-3xl italic mt-3 leading-snug font-medium"
                    >
                        {section.text1}
                    </motion.p>
                    {section.text2 && (
                        <motion.p
                            custom={0.4}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            className={`mt-5 leading-relaxed max-w-3xl ${section.align === "right" ? "ml-auto" : ""
                                } ${darkMode ? "text-white/70" : "text-[var(--color-dark)]/70"}`}
                        >
                            {section.text2}
                        </motion.p>
                    )}
                </div>
            ))}

            {/* ===== Skills ===== */}
            <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 border-t ${lineColor}`}>
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="text-center text-lg font-semibold tracking-wide mb-12"
                >
                    My Skill Stack
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {Object.entries(skills).map(([category, list]) => (
                        <motion.div
                            key={category}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            className={`border ${darkMode ? "border-white/20" : "border-black/20"
                                } rounded-xl p-8 hover:border-[var(--color-accent)]/60 transition-all duration-300`}
                        >
                            <h3 className="text-base uppercase tracking-widest mb-4 border-b pb-2 font-semibold">
                                {category}
                            </h3>
                            <ul
                                className={`space-y-2 text-sm md:text-base ${darkMode ? "text-white/80" : "text-[var(--color-dark)]/80"
                                    }`}
                            >
                                {list.map((skill) => (
                                    <li key={skill} className="transition hover:translate-x-1 duration-300">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ===== Quote ===== */}
            <div className={`max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-24 text-center border-t ${lineColor}`}>
                <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="text-lg font-semibold tracking-wide pb-3 mb-10 border-b inline-block"
                >
                    A Thought I Live By
                </motion.h3>
                <motion.p
                    custom={0.3}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="text-2xl md:text-3xl italic leading-relaxed opacity-90 max-w-3xl mx-auto"
                >
                    “The future doesn’t belong to those who predict it — it belongs to those who build it.”
                </motion.p>
            </div>

            {/* ===== Cinematic Footer ===== */}
            <div
                className={`w-full py-24 md:py-32 flex flex-col items-center justify-center text-center border-t ${lineColor}`}
            >
                <motion.h4
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-base tracking-[0.3em] uppercase mb-3 opacity-70"
                >
                    WANT TO SEE
                </motion.h4>

                {/* Clickable Projects Link */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    onClick={() => navigate("/projects")}
                    className="text-[4rem] md:text-[8rem] font-light uppercase leading-none cursor-pointer hover:opacity-80 transition duration-500"
                >
                    PROJECTS
                </motion.h1>

                <button
                    onClick={scrollToTop}
                    className="mt-8 text-sm uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition duration-500"
                >
                    (Back to Top)
                </button>
            </div>
        </section>
    );
}
