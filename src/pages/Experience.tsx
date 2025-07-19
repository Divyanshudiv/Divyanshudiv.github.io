import React from 'react';
import { motion } from 'framer-motion';
import WorkExperienceSection from '../components/experience/WorkExperienceSection';
import EducationSection from '../components/experience/EducationSection';
import AchievementsSection from '../components/experience/AchievementsSection';

const Experience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24"
    >
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My <span className="text-gradient-ocean">Experience</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A journey through academic achievements, professional experiences, and research contributions in the field of computer science and AI.
          </motion.p>
        </div>
      </section>

      <WorkExperienceSection />
      <EducationSection />
      <AchievementsSection />
    </motion.div>
  );
};

export default Experience;