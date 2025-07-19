import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import AnimatedAvatar from '../3d/AnimatedAvatar';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-6xl lg:text-8xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-gradient-ocean">Divyanshu</span>
              <br />
              <span className="text-white">Singh</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Engineer • Researcher • AI Enthusiast
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="mailto:f20221129@goa.bits-pilani.ac.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-3 rounded-full text-white font-medium hover:bg-white/20 transition-all"
              >
                Get in Touch
              </motion.a>
              
              <motion.a
                href="https://scholar.google.com/citations?user=fbleo8UAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 px-8 py-3 rounded-full text-white font-medium hover:bg-white/10 transition-all"
              >
                Google Scholar
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Avatar/Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-96 lg:h-[500px]"
          >
            {/* Photo Placeholder with 3D Frame */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 animate-spin-slow rounded-3xl p-1">
                <div className="w-full h-full bg-slate-800/50 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">DS</span>
                    </div>
                    <p className="text-gray-300 text-lg">Photo Coming Soon</p>
                    <p className="text-gray-500 text-sm mt-2">Interactive 3D Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Scene for future avatar */}
            <div className="absolute -inset-4 opacity-20">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <Suspense fallback={null}>
                  <AnimatedAvatar />
                </Suspense>
              </Canvas>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 bg-accent-400 rounded-full opacity-60"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-20 w-6 h-6 bg-primary-400 rounded-full opacity-40"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default HeroSection;