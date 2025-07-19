import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className="text-gradient-ocean">Me</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Hi!</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a curious mind navigating the vast universe of computer science. From crafting intelligent algorithms to unraveling the mysteries of machine learning, I'm on a journey to push the boundaries of what's possible in tech.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary-400 mb-3">Education & Research</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm currently pursuing a Bachelor of Computer Science at Birla Institute of Technology and Science, Pilani, where I also work as an undergraduate researcher at Anuradha and Prashanth Palakurthi Centre for Artificial Intelligence Research (APPCAIR).
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-accent-400 mb-3">Current Work</h3>
                <p className="text-gray-300 leading-relaxed">
                  Currently, I'm working as a Research Intern at CLAN Labs, Purdue University under the supervision of Dr. Vaneet Aggarwal. My work primarily focuses on AI and machine learning, particularly in reinforcement learning and traffic optimization models.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Beyond Tech</h3>
                <p className="text-gray-300 leading-relaxed">
                  Beyond my work in technology, I'm also an avid football fan, a passion I've followed for years. I believe in maintaining a balance between technical pursuits and personal interests.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Research Interests</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                'Reinforcement Learning',
                'Generative AI', 
                'Deep Learning',
                'Natural Language Processing',
                'Computer Vision',
                'Optimization',
                'Traffic Systems',
                'Multi-Agent Systems'
              ].map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-sm font-medium cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;