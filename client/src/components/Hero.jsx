import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import cafeInterior from '../assets/images/cafe-interior.jpg.avif';
import latteArt from '../assets/images/latte-art.jpg.avif';
import coffeeBeans from '../assets/images/coffee-beans.jpg.avif';
import barista from '../assets/images/barista.jpg.avif';

const images = [cafeInterior, latteArt, coffeeBeans, barista];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="hero-section"
      style={{
        position: 'relative',
        height: '90vh',
        overflow: 'hidden',
        color: '#FFF5E1',
      }}
    >
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text readability
        }}
      />
      <motion.div
        className="hero-content"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          padding: '0 2rem',
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: 700,
            marginBottom: '1rem',
          }}
        >
          EveCafe
        </motion.h1>
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1rem, 4vw, 1.5rem)',
            marginBottom: '2rem',
            maxWidth: '600px',
          }}
        >
          Where every cup tells a story. Experience artistry in every sip.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link to="/reservations" className="btn btn-outline-light btn-lg">
            Book a Table
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

