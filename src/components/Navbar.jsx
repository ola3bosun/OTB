import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import DecryptedText from './NavDecryptAnim';

// Variants for the nav links container
const navLinksVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Variants for each individual link
const linkVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
};

// Create a motion-enhanced Link component
const MotionLink = motion(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <div className='navContainer'>
      <div className="studioName">
      studio OTB
      </div>

       {/* Hamburger Button Always Visible */}
       <motion.div
        className={`${styles.menuBtn} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={`${styles.line} ${styles.line1}`}
          animate={isOpen ? { rotate: 45, translateY: 8 } : { rotate: 0, translateY: 0 }}
          transition={{ duration: 0.7, ease: [0.9, 0, 0.33, 1] }}
        />
        
        <motion.div
          className={`${styles.line} ${styles.line3}`}
          animate={isOpen ? { rotate: -45, translateY: -4 } : { rotate: 0, translateY: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.9, 0, 0.33, 1] }}
        />
      </motion.div>
     </div>

      {/* Sliding Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={styles.nav}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.div
              className={styles.navLinks}
              variants={navLinksVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <MotionLink
                to="/"
                className={styles.link}
                variants={linkVariants}
                onClick={() => setIsOpen(false)}
              >
                <DecryptedText text="Home" />
              </MotionLink>
              <MotionLink
                to="/services"
                className={styles.link}
                variants={linkVariants}
                onClick={() => setIsOpen(false)}
              >
                <DecryptedText text="Services" />
              </MotionLink>
              <MotionLink
                to="/Portfolio"
                className={styles.link}
                variants={linkVariants}
                onClick={() => setIsOpen(false)}
              >
                <DecryptedText text="Portfolio" />
              </MotionLink>
              <MotionLink
                to="/get-a-quote"
                className={styles.link}
                variants={linkVariants}
                onClick={() => setIsOpen(false)}
              >
                <DecryptedText text="Get A Quote" />
              </MotionLink>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
