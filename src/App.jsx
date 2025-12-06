import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Default to dark mode if no preference is saved
    return savedTheme === "light" ? false : true;
  });

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#000" : "#faf9f7";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${darkMode
        ? "bg-black text-white"
        : "bg-[var(--color-cream)] text-[var(--color-dark)]"
        }`}
    >
      <div className="hidden md:block pointer-events-none">
        <CustomCursor />
      </div>

      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollToTop />
          <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/about" element={<About darkMode={darkMode} />} />
                <Route path="/projects" element={<Projects darkMode={darkMode} />} />
                <Route path="/contact" element={<Contact darkMode={darkMode} />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer darkMode={darkMode} />

        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
