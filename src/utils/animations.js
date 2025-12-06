// Framer Motion Animation Variants

// Page Transitions
export const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.6, ease: "easeIn" } },
};

// Fade In Animation
export const fadeIn = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
};

// Slide Up Animation
export const slideUp = {
    initial: { opacity: 0, y: 60 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

// Stagger Children Animation
export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

// Scale on Hover
export const scaleOnHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

// Menu Overlay Animation
export const menuOverlay = {
    initial: {
        clipPath: "circle(0% at 100% 0%)",
        opacity: 0
    },
    animate: {
        clipPath: "circle(150% at 100% 0%)",
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
        }
    },
    exit: {
        clipPath: "circle(0% at 100% 0%)",
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

// Menu Items Animation
export const menuItems = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Image Reveal Animation
export const imageReveal = {
    initial: {
        scale: 1.2,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

// Preloader Animation
export const preloaderText = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4
        }
    }
};

export const preloaderContainer = {
    exit: {
        y: "-100%",
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.5
        }
    }
};
