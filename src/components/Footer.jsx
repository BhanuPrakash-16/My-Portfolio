import React from "react";

const Footer = ({ darkMode }) => {
    return (
        <footer
            className="transition-colors duration-700 relative"
        >
            <div
                className="mx-auto my-0"
                style={{
                    width: "92%", // gives nice left-right breathing space
                    height: "1.5px",
                    backgroundColor: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
                    borderRadius: "2px",
                    transition: "background-color 0.6s ease",
                }}
            ></div>


            {/* ===== Footer Content ===== */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-24 place-items-start">
                    {/* Left - Name Section */}
                    <div className="space-y-4">
                        <h2 className="font-sfpro text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                            Alluri<br />
                            Bhanu<br />
                            Prakash
                        </h2>
                    </div>

                    {/* Middle - Navigation Links */}
                    <div className="flex flex-col gap-6 items-start">
                        <a
                            href="/about"
                            className="font-general text-lg hover:opacity-60 transition-opacity"
                        >
                            About
                        </a>
                        <a
                            href="/projects"
                            className="font-general text-lg hover:opacity-60 transition-opacity"
                        >
                            Projects
                        </a>
                        <a
                            href="/contact"
                            className="font-general text-lg hover:opacity-60 transition-opacity"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Right - Legal Links */}
                    <div className="flex flex-col gap-6 items-start">
                        <a
                            href="#privacy"
                            className="font-general text-lg hover:opacity-60 transition-opacity"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#terms"
                            className="font-general text-lg hover:opacity-60 transition-opacity"
                        >
                            Terms & Conditions
                        </a>
                        <p className="font-general text-base opacity-70 pt-6">
                            © Alluri Bhanu Prakash 2025
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
