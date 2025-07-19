import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import NewsSection from '../components/home/NewsSection';
import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <ContactSection />
    </motion.div>
  );
};

export default Home;