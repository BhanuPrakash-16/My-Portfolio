import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    // Black overlay variants - fades in when transitioning out, fades out to reveal new page
    const overlayVariants = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {
                duration: 0.6,
                delay: 0.3,
                ease: [0.65, 0, 0.35, 1], // Custom easing for smooth fade
            },
        },
        exit: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.65, 0, 0.35, 1],
            },
        },
    };

    // Page content variants - fades in after overlay begins fading out
    const pageVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 0.4,
                ease: [0.65, 0, 0.35, 1],
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1],
            },
        },
    };

    return (
        <>
            {/* Black Overlay - Fades in on exit, fades out on enter */}
            <motion.div
                className="fixed inset-0 z-[100] bg-black pointer-events-none"
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            />

            {/* Page Content - Fades in smoothly */}
            <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;
