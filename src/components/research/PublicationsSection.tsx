import React from 'react';
import { motion } from 'framer-motion';

const PublicationsSection: React.FC = () => {
  const publications = [
    {
      title: "The Last Mile: A Novel, HotSpot Based Distributed Path-Sharing Network for Food Deliveries",
      journal: "IEEE Transactions on Intelligent Transport Systems",
      doi: "10.1109/TITS.2024.3465217",
      authors: "Ashman Mehra, Divyanshu Singh, Vaskar Raychoudhury, Archana Mathur, Snehanshu Saha",
      year: "2024",
      impact: "Q1, I.F: 9.95",
      links: {
        ieee: "https://ieeexplore.ieee.org/document/10432527",
        scholar: "https://scholar.google.com/citations?user=fbleo8UAAAAJ&hl=en"
      },
      description: "A reinforcement learning-based approach to optimize food delivery networks through distributed path-sharing algorithms."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            <span className="text-gradient-ocean">Publications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Peer-reviewed research contributions to the scientific community
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 mb-8 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {pub.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-primary-400 font-semibold">{pub.journal}</span>
                    <span className="px-3 py-1 bg-accent-500 text-white text-sm rounded-full">
                      {pub.impact}
                    </span>
                    <span className="text-gray-400">{pub.year}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{pub.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-1">Authors:</p>
                    <p className="text-gray-300">{pub.authors}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-1">DOI:</p>
                    <p className="text-gray-300 font-mono text-sm">{pub.doi}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={pub.links.ieee}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all"
                >
                  IEEE Xplore
                </motion.a>
                <motion.a
                  href={pub.links.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
                >
                  Google Scholar
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;