import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsSection: React.FC = () => {
  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    {
      date: "Summer 2025",
      type: "WORK",
      title: "Research Internship at CLAN Labs, Purdue University",
      description: "I'll be interning at CLAN Labs, Purdue University for summer of 2025 where I'll be developing dynamic obstacle avoidance techniques using uncertainty-based adaptive planning with diffusion models under the supervision of Dr. Vaneet Aggarwal.",
      icon: "🧑🏻‍💻"
    },
    {
      date: "Oct 2024",
      type: "PUBLISHED",
      title: "IEEE Transactions Publication",
      description: "Excited to share that our paper, 'The Last Mile: A Novel, HotSpot-Based Distributed Path-Sharing Network for Food Deliveries', has been accepted for publication in the prestigious IEEE Transactions on Intelligent Transportation Systems (Q1, I.F: 9.95).",
      icon: "📖"
    },
    {
      date: "Summer 2024",
      type: "COMPLETED",
      title: "Digital India Bhashini Internship",
      description: "Completed my Research Internship at Digital India Bhashini during summer 2024, where I contributed to the National Language Translation Mission through work on Inverse Text Normalization using WFSTs and Transformer-based models.",
      icon: "🎓"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [newsItems.length]);

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
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            News & <span className="text-gradient-ocean">Highlights</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with my latest achievements, research, and professional milestones
          </p>
        </motion.div>

        {/* News Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNews}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <div className="glass rounded-3xl p-8 h-full flex items-center">
                  <div className="grid lg:grid-cols-5 gap-8 items-center w-full">
                    <div className="lg:col-span-1 text-center">
                      <div className="text-6xl mb-4">{newsItems[currentNews].icon}</div>
                      <div className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full mb-2">
                        {newsItems[currentNews].type}
                      </div>
                      <p className="text-gray-400 text-sm">{newsItems[currentNews].date}</p>
                    </div>
                    
                    <div className="lg:col-span-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {newsItems[currentNews].title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {newsItems[currentNews].description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {newsItems.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentNews(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentNews 
                    ? 'bg-primary-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional news items preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {newsItems.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 cursor-pointer"
              onClick={() => setCurrentNews(index)}
            >
              <div className="flex items-start space-x-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-accent-500 text-white text-xs rounded-full">
                      {item.type}
                    </span>
                    <span className="text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;